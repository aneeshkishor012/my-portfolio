export const dynamic = "force-static";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASS,
        //     },
        // });
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `New message from ${name}`,
            html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.log("Email send failed:", error);
        return NextResponse.json(
            { error: "Failed to send email", details: error.message || error },
            { status: 500 }
        );
    }

}
