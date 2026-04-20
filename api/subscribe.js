export default async function handler(req, res) {
  // CORS headers for Vercel
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  const KIT_API_KEY = process.env.KIT_API_KEY;

  if (!KIT_API_KEY) {
    console.error('KIT_API_KEY not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  try {
    // Step 1: Create subscriber (upsert — safe to call if already exists)
    const createRes = await fetch('https://api.kit.com/v4/subscribers', {
      method: 'POST',
      headers: {
        'X-Kit-Api-Key': KIT_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        state: 'active',
      }),
    });

    if (!createRes.ok) {
      const err = await createRes.json().catch(() => ({}));
      console.error('Kit create subscriber error:', createRes.status, err);
      return res.status(500).json({ error: 'Failed to subscribe' });
    }

    // Step 2: Tag subscriber with "waitlist" tag (if tag ID is configured)
    const KIT_TAG_ID = process.env.KIT_TAG_ID;

    if (KIT_TAG_ID) {
      const tagRes = await fetch(`https://api.kit.com/v4/tags/${KIT_TAG_ID}/subscribers`, {
        method: 'POST',
        headers: {
          'X-Kit-Api-Key': KIT_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
        }),
      });

      if (!tagRes.ok) {
        // Non-fatal — subscriber was still created
        const tagErr = await tagRes.json().catch(() => ({}));
        console.error('Kit tag error:', tagRes.status, tagErr);
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
