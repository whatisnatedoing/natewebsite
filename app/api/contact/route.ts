import { NextRequest, NextResponse } from 'next/server'

/**
 * Contact form API route
 *
 * TO ACTIVATE EMAIL SENDING:
 * 1. Run:  npm install resend
 * 2. Add RESEND_API_KEY to your .env.local
 * 3. Uncomment the Resend block below and delete the mock response
 *
 * Get a free Resend account at https://resend.com
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, service, budget, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ── OPTION 1: Resend (recommended) ──────────────────────────────
    // npm install resend  →  then uncomment below:
    //
    // const { Resend } = await import('resend')
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from:    'noreply@yourdomain.com',
    //   to:      'hello@natedanbury.com',
    //   subject: `New enquiry: ${subject || 'Contact Form'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Service:</strong> ${service || 'Not specified'}</p>
    //     <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong><br/>${message.replace(/\n/g,'<br/>')}</p>
    //   `,
    // })

    // ── OPTION 2: Nodemailer (SMTP / Gmail) ─────────────────────────
    // npm install nodemailer @types/nodemailer  →  then uncomment below:
    //
    // const nodemailer = await import('nodemailer')
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    // })
    // await transporter.sendMail({
    //   from: process.env.GMAIL_USER,
    //   to:   'hello@natedanbury.com',
    //   subject: `New enquiry: ${subject}`,
    //   html: `<p><b>${name}</b> (${email})<br/>${message}</p>`,
    // })

    // ── Placeholder: log to console until email is configured ────────
    console.log('📧 Contact form submission:', { name, email, subject, service, budget, message })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
