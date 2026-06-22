import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/app/db'
import { newsletterSubscribers } from '@/app/db/schema'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { email } = body

  if (!email?.trim() || !emailRe.test(email)) {
    return NextResponse.json({ error: 'Adresse e-mail invalide.' }, { status: 400 })
  }

  try {
    await db.insert(newsletterSubscribers).values({
      email: email.trim().toLowerCase(),
    })
  } catch (err: unknown) {
    const pgError = err as { code?: string }
    if (pgError?.code === '23505') {
      return NextResponse.json({ success: true })
    }
    throw err
  }

  return NextResponse.json({ success: true })
}
