export const prerender = false;
import { Resend } from "resend";

export const POST = async ({ request }) => {
  // 1. Check if the API key even exists in the environment
  const apiKey = import.meta.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("❌ CRITICAL: RESEND_API_KEY is missing from .env");
    return new Response(
      JSON.stringify({ message: "Server configuration error" }),
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const data = await request.formData();
    console.log(data);
    const name = data.get("identification"); // Matches name="identification"
    const email = data.get("return_address"); // Matches name="return_address"
    const message = data.get("briefing"); // Matches name="briefing"

    console.log(`📩 Attempting to send email from: ${name} (${email})`);

    const { data: resendData, error } = await resend.emails.send({
      from: "System Inquiry <onboarding@resend.dev>", // Update this after domain verification
      to: "luis.aptx@gmail.com",
      reply_to: email,
      subject: `[Portfolio Inquiry] - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 24px; color: white;">
            <h2 style="margin: 0; font-size: 20px; letter-spacing: 0.1em; text-transform: uppercase;">System Transmission</h2>
            <p style="margin: 4px 0 0 0; opacity: 0.6; font-size: 12px;">REF: CONTACT_v2.0</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff;">
            <div style="margin-bottom: 24px;">
              <p style="text-transform: uppercase; font-size: 10px; font-weight: 900; color: #64748b; margin-bottom: 4px;">Identification</p>
              <p style="font-size: 16px; font-weight: bold; margin: 0;">${name}</p>
            </div>

            <div style="margin-bottom: 24px;">
              <p style="text-transform: uppercase; font-size: 10px; font-weight: 900; color: #64748b; margin-bottom: 4px;">Return Address</p>
              <p style="font-size: 16px; font-weight: bold; margin: 0; color: #2563eb;">${email}</p>
            </div>

            <div style="margin-bottom: 24px;">
              <p style="text-transform: uppercase; font-size: 10px; font-weight: 900; color: #64748b; margin-bottom: 4px;">Briefing</p>
              <div style="font-size: 15px; line-height: 1.6; color: #334155; background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #0f172a;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>

          <div style="padding: 16px 24px; background-color: #f1f5f9; border-top: 1px solid #e2e8f0;">
            <p style="text-transform: uppercase; font-size: 9px; font-weight: 900; color: #94a3b8; margin: 0;">System Metadata</p>
            <p style="font-size: 11px; color: #64748b; margin: 4px 0 0 0;">
              Timestamp: ${new Date().toLocaleString("en-US", {
                timeZone: "America/New_York",
              })} EST<br>
              Source: Portfolio 2026 / Vercel Edge Runtime
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend Error:", error);
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    console.log("✅ Email sent successfully!", resendData);
    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
    });
  } catch (err) {
    console.error("❌ Server Crash:", err);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
