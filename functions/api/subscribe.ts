interface Env {
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
}

const EMAIL_HTML = (email: string) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>You're on the Vera early access list</title>
</head>
<body style="margin:0;padding:0;background:#0a0118;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0118;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <img src="https://localboostnetworking.com/vera-logo-email.png"
                   alt="Vera Agency OS"
                   width="160"
                   style="display:block;height:auto;" />
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:rgba(139,92,246,.06);border:1px solid rgba(139,92,246,.2);border-radius:20px;padding:44px 40px;">

              <!-- Avatar + greeting -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:28px;">
                    <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#8b5cf6,#6366f1);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;">
                      <img src="https://localboostnetworking.com/favicon-vera.svg"
                           alt="V"
                           width="36"
                           height="36"
                           style="display:block;" />
                    </div>
                    <p style="margin:0;font-size:0.68rem;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:rgba(196,181,253,.5);">
                      Early Access Confirmed
                    </p>
                  </td>
                </tr>
              </table>

              <h1 style="margin:0 0 16px;font-size:1.8rem;font-weight:800;letter-spacing:-0.03em;color:#f0f0f5;text-align:center;line-height:1.15;">
                You're first in line.
              </h1>

              <p style="margin:0 0 24px;font-size:0.95rem;color:rgba(196,181,253,.6);line-height:1.75;text-align:center;">
                Hey${email ? ' ' + email.split('@')[0] : ''}, you're now on the Vera early access list.
                When we open the doors, you'll be among the very first to get in.
              </p>

              <hr style="border:none;border-top:1px solid rgba(139,92,246,.15);margin:28px 0;" />

              <p style="margin:0 0 8px;font-size:0.8rem;font-weight:600;color:rgba(196,181,253,.7);text-align:center;">
                What is Vera?
              </p>
              <p style="margin:0 0 32px;font-size:0.88rem;color:rgba(196,181,253,.45);line-height:1.7;text-align:center;">
                Vera is an AI front desk built for home service businesses.
                It books appointments, follows up with leads, and runs your pipeline
                while you're on the job. More booked jobs, less missed calls.
              </p>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://calendly.com/amanuel-localboostnetworking/marketing"
                       style="display:inline-block;padding:13px 32px;border-radius:10px;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;font-size:0.88rem;font-weight:600;text-decoration:none;letter-spacing:0.01em;">
                      Book a Quick Call
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:28px;">
              <p style="margin:0;font-size:0.68rem;color:rgba(255,255,255,.2);line-height:1.7;">
                You're receiving this because you signed up at localboostnetworking.com/vera.<br />
                © 2026 Local Boost Networking LLC
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  try {
    const { email } = await request.json() as { email: string };

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Valid email required' }), { status: 400, headers });
    }

    // Add to audience (ignore duplicate)
    const contactRes = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        audience_id: env.RESEND_AUDIENCE_ID,
        unsubscribed: false,
      }),
    });

    const contactData = await contactRes.json() as { name?: string };
    const alreadyExists = contactData.name === 'contact_already_exists';

    if (!contactRes.ok && !alreadyExists) {
      return new Response(JSON.stringify({ error: 'Failed to subscribe' }), { status: 500, headers });
    }

    // Send confirmation email
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Vera by LBN <vera@localboostnetworking.com>',
        to: [email],
        subject: "You're on the Vera early access list",
        html: EMAIL_HTML(email),
      }),
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch {
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500, headers });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
