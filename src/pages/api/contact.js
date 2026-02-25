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

    // src/pages/api/contact.js
    const { data: resendData, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "luis.aptx@gmail.com", // Change this to your specific signup email
      reply_to: email, // This is where you'll reply to the lead
      subject: `System Inquiry: ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
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
