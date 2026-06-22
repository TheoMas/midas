import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/db'
import { contactSubmissions } from '@/app/db/schema'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, message } = body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
  }

  if (!emailRe.test(email)) {
    return NextResponse.json({ error: 'Adresse e-mail invalide.' }, { status: 400 })
  }

  await db.insert(contactSubmissions).values({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim(),
  })

  return NextResponse.json({ success: true })
}
