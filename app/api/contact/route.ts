import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Contact from '@/models/Contact'
import { sendContactEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    await dbConnect()
    const { name, email, message } = await request.json()

    // Save to MongoDB
    const newContact = new Contact({
      name,
      email,
      message,
    })
    await newContact.save()

    // Send email
    await sendContactEmail(name, email, message)

    return NextResponse.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Error processing contact form submission:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}