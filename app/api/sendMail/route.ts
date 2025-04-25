import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
})

export async function POST(req: Request) {
  const body = await req.json()
  const { name, phone, message } = body

  if (!name || !phone || !message) {
    return NextResponse.json({ error: 'Faltan datos' }, { status: 400 })
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
      <h2 style="color: #333;">📩 Nuevo mensaje desde formulario</h2>
      <hr style="border: none; border-top: 1px solid #ddd;" />
      <p><strong>👤 Nombre:</strong> ${name}</p>
      <p><strong>📧 Telefono:</strong> ${phone}</p>
      <p><strong>📝 Mensaje:</strong></p>
      <p style="background-color: #fff; padding: 15px; border-left: 4px solid #007BFF; color: #444; border-radius: 4px;">${message}</p>
      <hr style="border: none; border-top: 1px solid #ddd;" />
      <p style="font-size: 12px; color: #999;">Este mensaje fue enviado automáticamente desde tu sitio web.</p>
    </div>
  `

  try {
    const info = await transporter.sendMail({
      from: `"Formulario Web" <${process.env.GMAIL_USER}>`,
      to: "info@waichatt.com",
      subject: 'Nuevo mensaje de contacto',
      html: htmlContent,
    })


    return NextResponse.json({ message: 'Correo enviado correctamente 🚀' },{status:200})
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return NextResponse.json({ error: 'No se pudo mandar el correo 😢' }, { status: 500 })
  }
}
