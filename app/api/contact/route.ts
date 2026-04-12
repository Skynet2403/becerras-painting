import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { firstName, lastName, email, phone, service, message, company } = body

    if (company) {
      return Response.json({ success: true })
    }

    const emailOwner = await resend.emails.send({
    from: "Becerra's Painting <info@becerraspainting.com>",
    to: "info@becerraspainting.com",
    subject: `New Quote Request from ${firstName} ${lastName}`,
    html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #ccc; border-radius:8px; background-color:#f8f8f8;">
        <h2 style="color:#2c3e50; text-align:center; margin-bottom:20px;">New Quote Request</h2>

        <div style="padding:15px; margin-bottom:15px; border:1px solid #ddd; border-radius:6px; background-color:#fff;">
            <p style="margin:5px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin:5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin:5px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin:5px 0;"><strong>Service:</strong> ${service}</p>
        </div>

        <div style="padding:15px; border:1px solid #ddd; border-radius:6px; background-color:#fff;">
            <p style="margin:0;"><strong>Message:</strong></p>
            <p style="margin-top:10px;">${message}</p>
        </div>

        <div style="margin-top:20px; text-align:center; font-size:12px; color:#555;">
            <p>This message was sent from your website contact form.</p>
        </div>
        </div>
    `,
    });

    if (!emailOwner) {
      return Response.json({ success: false }, { status: 500 })
    }

    await resend.emails.send({
    from: "Becerra's Painting <info@becerraspainting.com>",
    to: email,
    subject: "We received your request",
    html: `
        <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto; padding:20px; border:1px solid #ccc; border-radius:8px; background-color:#f8f8f8; text-align:center;">
        <h2 style="color:#2c3e50; margin-bottom:20px;">Thank you for your request</h2>

        <div style="padding:15px; margin-bottom:15px; border:1px solid #ddd; border-radius:6px; background-color:#fff;">
            <p style="margin:0; font-size:16px;">Hi ${firstName},</p>
            <p style="margin-top:10px; font-size:16px;">We received your request and our team will contact you soon.</p>
        </div>

        <div style="margin-top:20px; font-size:14px; color:#555;">
            <p>– Becerra's Painting & Remodel</p>
            <p>If you did not submit this request, please ignore this email.</p>
        </div>
        </div>
    `,
    });

    return Response.json({ success: true })

  } catch (error) {
    console.error(error)
    return Response.json({ success: false }, { status: 500 })
  }
}