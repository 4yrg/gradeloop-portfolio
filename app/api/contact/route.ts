import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { title, firstName, lastName, email, subject, message } = await request.json();

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('ERROR: Missing GMAIL_USER or GMAIL_PASS in .env file');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${title} ${firstName} ${lastName}" <${process.env.GMAIL_USER}>`,
      to: 'contact.gradeloop@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject} from ${title} ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f9f9f9; }
                .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid #eee; }
                .header { background: #22c55e; padding: 40px 20px; text-align: center; color: white; }
                .header h1 { margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px; }
                .content { padding: 40px; }
                .field { margin-bottom: 25px; }
                .label { font-size: 11px; text-transform: uppercase; font-weight: 800; color: #22c55e; letter-spacing: 1px; margin-bottom: 8px; }
                .value { font-size: 16px; color: #1a1a1a; font-weight: 500; }
                .message-box { background: #f8fafc; padding: 25px; border-radius: 12px; border-left: 4px solid #22c55e; margin-top: 10px; }
                .footer { padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; background: #f1f5f9; }
                .logo { font-size: 24px; font-weight: 800; color: #22c55e; margin-bottom: 10px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Message from Portfolio</h1>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">Sender Details</div>
                        <div class="value">${title} ${firstName} ${lastName}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email Address</div>
                        <div class="value"><a href="mailto:${email}" style="color: #22c55e; text-decoration: none;">${email}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">Subject</div>
                        <div class="value">${subject}</div>
                    </div>
                    <div class="field">
                        <div class="label">Message</div>
                        <div class="message-box">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="logo">GradeLoop</div>
                    <p>© 2026 GradeLoop Research Project. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
