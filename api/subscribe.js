export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY || RESEND_API_KEY === 'your_resend_api_key_here') {
    return res.status(500).json({ error: 'Resend API key not configured' });
  }

  try {
    // Add contact to Resend audience
    // Replace AUDIENCE_ID with your actual Resend audience ID
    const audienceId = process.env.RESEND_AUDIENCE_ID || 'your_audience_id_here';

    const contactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        unsubscribed: false,
      }),
    });

    if (!contactRes.ok) {
      const err = await contactRes.json();
      console.error('Resend error:', err);
      return res.status(500).json({ error: 'Failed to subscribe' });
    }

    // Send welcome email
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'AIOpsForge <onboarding@resend.dev>',
        to: email,
        subject: 'Welcome to AIOpsForge — your first blueprint is on the way',
        html: `
          <div style="font-family: monospace; background: #0a0a0a; color: #f0f0f0; padding: 40px; max-width: 600px;">
            <p style="color: #00FF41; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 16px;">welcome to the forge</p>
            <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px; font-family: sans-serif;">You're in.</h1>
            <p style="color: #999; font-size: 14px; line-height: 1.8; margin-bottom: 24px;">
              Every week you'll get a production-grade AI system build — architecture, error handling, token costs, and deployment instructions. No fluff.
            </p>
            <p style="color: #999; font-size: 14px; line-height: 1.8; margin-bottom: 24px;">
              Your first blueprint drops soon. In the meantime, check out the build roadmap:
            </p>
            <a href="https://aiopsforge-landing.vercel.app/tools.html" style="display: inline-block; background: #00FF41; color: #000; font-family: monospace; font-size: 13px; font-weight: 700; padding: 12px 24px; text-decoration: none;">View the 11 Systems Roadmap →</a>
            <p style="color: #666; font-size: 12px; margin-top: 32px; padding-top: 16px; border-top: 1px solid #2a2a2a;">
              AIOpsForge · built by an engineer who ships
            </p>
          </div>
        `,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}