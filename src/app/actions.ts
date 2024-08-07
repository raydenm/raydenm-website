'use server'

import { getBookmarkItems } from '@/lib/raindrop'

export async function getBookmarkItemsByPageIndex(id: string, pageIndex: number) {
  return await getBookmarkItems(id, pageIndex)
}
