import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { title, firstName, lastName, email, subject, message } =
      await request.json();

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('ERROR: Missing GMAIL_USER or GMAIL_PASS in .env file');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
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
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { 
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                    line-height: 1.6; 
                    color: #1f2937; 
                    margin: 0; 
                    padding: 0; 
                    background-color: #f3f4f6; 
                }
                .wrapper {
                    padding: 40px 20px;
                }
                .container { 
                    max-width: 600px; 
                    margin: 0 auto; 
                    background: #ffffff; 
                    border-radius: 24px; 
                    overflow: hidden; 
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
                    border: 1px solid #e5e7eb;
                }
                .header { 
                    background: linear-gradient(135deg, #22c55e 0%, #10b981 100%); 
                    padding: 50px 40px; 
                    text-align: center; 
                    color: white; 
                }
                .header .logo-text {
                    font-size: 32px;
                    font-weight: 900;
                    letter-spacing: -1px;
                    margin-bottom: 8px;
                    display: block;
                }
                .header .tagline {
                    font-size: 14px;
                    font-weight: 500;
                    opacity: 0.9;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }
                .content { padding: 40px; }
                .section-title {
                    font-size: 12px;
                    font-weight: 800;
                    color: #10b981;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 12px;
                    border-bottom: 1px solid #f3f4f6;
                    padding-bottom: 8px;
                }
                .sender-info {
                    margin-bottom: 30px;
                    background: #f9fafb;
                    padding: 20px;
                    border-radius: 16px;
                }
                .field { margin-bottom: 15px; }
                .field:last-child { margin-bottom: 0; }
                .label { 
                    font-size: 11px; 
                    font-weight: 600; 
                    color: #6b7280; 
                    margin-bottom: 4px;
                }
                .value { 
                    font-size: 15px; 
                    color: #111827; 
                    font-weight: 600; 
                }
                .message-box { 
                    background: #ffffff; 
                    padding: 24px; 
                    border-radius: 16px; 
                    border: 1px solid #e5e7eb;
                    margin-top: 10px;
                    color: #374151;
                    font-size: 16px;
                    line-height: 1.7;
                }
                .footer { 
                    padding: 30px 40px; 
                    text-align: center; 
                    font-size: 13px; 
                    color: #6b7280; 
                    background: #f9fafb;
                    border-top: 1px solid #f3f4f6;
                }
                .btn {
                    display: inline-block;
                    padding: 14px 30px;
                    background-color: #10b981;
                    color: #ffffff !important;
                    text-decoration: none;
                    border-radius: 12px;
                    font-weight: 700;
                    margin-top: 30px;
                    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
                }
            </style>
        </head>
        <body>
            <div class="wrapper">
                <div class="container">
                    <div class="header">
                        <span class="logo-text">GradeLoop</span>
                        <span class="tagline">Research Portfolio</span>
                    </div>
                    <div class="content">
                        <div class="section-title">Inquiry Details</div>
                        <div class="sender-info">
                            <div class="field">
                                <div class="label">From</div>
                                <div class="value">${title} ${firstName} ${lastName}</div>
                            </div>
                            <div class="field">
                                <div class="label">Email</div>
                                <div class="value">${email}</div>
                            </div>
                            <div class="field">
                                <div class="label">Subject</div>
                                <div class="value">${subject}</div>
                            </div>
                        </div>

                        <div class="section-title">Message Content</div>
                        <div class="message-box">
                            ${message.replace(/\n/g, '<br>')}
                        </div>

                        <div style="text-align: center;">
                            <a href="mailto:${email}" class="btn">Reply to Sender</a>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This inquiry was sent from your research portfolio contact form.</p>
                        <p style="margin-top: 10px;">© 2026 GradeLoop Research Team — SLIIT</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
