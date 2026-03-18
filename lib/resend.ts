import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, phone, company, subject, message } = data;

  // Email to admin
  const adminEmail = await resend.emails.send({
    from: 'Tanova Contact <onboarding@resend.dev>',
    to: 'info@tanova.com.bd',
    subject: `New Contact Inquiry: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f7fafc; padding: 30px; border: 1px solid #e2e8f0; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #4a5568; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value { margin-top: 5px; padding: 12px; background: white; border-radius: 6px; border: 1px solid #e2e8f0; }
            .message-box { background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #c9a227; }
            .footer { text-align: center; padding: 20px; color: #718096; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              ${phone ? `
              <div class="field">
                <div class="label">Phone</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              ${company ? `
              <div class="field">
                <div class="label">Company</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              This email was sent from Tanova website contact form.
            </div>
          </div>
        </body>
      </html>
    `,
  });

  // Confirmation email to user
  const userEmail = await resend.emails.send({
    from: 'Tanova <onboarding@resend.dev>',
    to: email,
    subject: 'Thank you for contacting Tanova',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a365d 0%, #2d3748 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0 0 10px 0; font-size: 28px; }
            .header p { margin: 0; opacity: 0.9; }
            .content { background: #f7fafc; padding: 30px; border: 1px solid #e2e8f0; }
            .highlight { background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #c9a227; margin: 20px 0; }
            .footer { text-align: center; padding: 30px; color: #718096; font-size: 12px; border-top: 1px solid #e2e8f0; }
            .btn { display: inline-block; background: #c9a227; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
              <p>We have received your inquiry</p>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for reaching out to Tanova. We have received your message regarding:</p>
              <div class="highlight">
                <strong>${subject}</strong>
              </div>
              <p>Our team will review your inquiry and get back to you within 24-48 business hours.</p>
              <p>In the meantime, feel free to explore our premium leather collection on our website.</p>
              <p style="margin-top: 30px;">
                Best regards,<br>
                <strong>The Tanova Team</strong>
              </p>
            </div>
            <div class="footer">
              <p>Tanova - Premium Leather Sourcing</p>
              <p>This is an automated response. Please do not reply directly to this email.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  });

  return { adminEmail, userEmail };
}
