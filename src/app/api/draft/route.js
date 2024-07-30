import { NextResponse } from 'next/server'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('secret')

  // http://localhost:3000/api/draft?secret=nMLod-8aC9fEhQkZ-4XMokIlLJD_96t3G41lzaIaMKM
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }

  const slug = searchParams.get('slug')
  draftMode().enable()
  redirect(slug ?? '/')
}
