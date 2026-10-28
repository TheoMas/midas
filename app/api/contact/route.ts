import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/db'
import { contactSubmissions } from '@/app/db/schema'
import { sendContactMail } from '@/app/lib/mail'

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

  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return NextResponse.json({ error: 'Message trop long.' }, { status: 400 })
  }

  const entry = { name: name.trim(), email: email.trim().toLowerCase(), message: message.trim() }
  await db.insert(contactSubmissions).values(entry)

  // Le message est déjà enregistré en base : un échec SMTP est journalisé sans bloquer le visiteur.
  try {
    await sendContactMail(entry)
  } catch (err) {
    console.error('[contact] envoi du mail échoué :', err)
  }

  return NextResponse.json({ success: true })
}
