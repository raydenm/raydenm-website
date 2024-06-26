import { Suspense } from 'react'
import { notFound } from 'next/navigation'

import { ScrollArea } from '@/components/scroll-area'
import { PageTitle } from '@/components/page-title'
import { FloatingHeader } from '@/components/floating-header'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { BookmarkList } from '@/components/bookmark-list.jsx'
import { getBookmarkItems, getBookmarks } from '@/lib/raindrop'
import { sortByProperty } from '@/lib/utils'

export async function generateStaticParams() {
  const bookmarks = await getBookmarks()
  return bookmarks.map((bookmark) => ({ slug: bookmark.slug }))
}

async function fetchData(slug) {
  const bookmarks = await getBookmarks()
  const currentBookmark = bookmarks.find((bookmark) => bookmark.slug === slug)
  if (!currentBookmark) notFound()

  const sortedBookmarks = sortByProperty(bookmarks, 'title')
  const bookmarkItems = await getBookmarkItems(currentBookmark._id)

  return {
    bookmarks: sortedBookmarks,
    currentBookmark,
    bookmarkItems
  }
}

export default async function CollectionPage({ params }) {
  const { slug } = params
  const { bookmarks, currentBookmark, bookmarkItems } = await fetchData(slug)

  return (
    <ScrollArea className="bg-grid" useScrollAreaId>
      <FloatingHeader
        scrollTitle={currentBookmark.title}
        goBackLink="/bookmarks"
        bookmarks={bookmarks}
        currentBookmark={currentBookmark}
      />
      <div className="content-wrapper">
        <div className="content @container">
          <PageTitle title={currentBookmark.title} />
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <BookmarkList id={currentBookmark._id} initialData={bookmarkItems} />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
