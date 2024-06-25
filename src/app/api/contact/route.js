import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const payload = await request.json()
    const { name, email, phone, message } = payload

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'zhuguanghao0928@gmail.com',
      subject: `raydenm-website-contact-${name}`,
      html: `<div>
        <p>姓名: ${name}</p>
        <p>邮箱: ${email}</p>
        <p>联系方式: ${phone}</p>
        <p>留言: ${message}</p>
      </div>`
    })

    if (error) {
      console.log(error)
      return NextResponse.json({ error }, { status: 500 })
    }
    return NextResponse.json({ data }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
