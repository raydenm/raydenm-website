import { Suspense } from 'react'

import { SideMenu } from '@/components/side-menu'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { ListItem } from '@/components/list-item'
import { Toaster } from '@/components/ui/sonner'
import { getBookmarks } from '@/lib/raindrop'
import { sortByProperty } from '@/lib/utils'

// Revalidate all routes every 2 days
export const revalidate = 60 * 60 * 24 * 2 // 2 days

async function fetchData() {
  const bookmarks = await getBookmarks()
  const sortedBookmarks = sortByProperty(bookmarks, 'title')
  return { bookmarks: sortedBookmarks }
}

export default async function BookmarksLayout({ children }) {
  const { bookmarks } = await fetchData()
  console.log(bookmarks)

  return (
    <>
      <div className="flex w-full">
        <SideMenu title="Bookmarks" bookmarks={bookmarks} isInner>
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <div className="flex flex-col gap-1 text-sm">
              {bookmarks?.map((bookmark) => {
                return (
                  <ListItem
                    key={bookmark._id}
                    path={`/bookmarks/${bookmark.slug}`}
                    title={bookmark.title}
                    description={`${bookmark.count} bookmarks`}
                  />
                )
              })}
            </div>
          </Suspense>
        </SideMenu>
        <div className="lg:bg-grid flex-1">{children}</div>
      </div>
      <Toaster
        closeButton
        richColors
        toastOptions={{
          duration: 5000
        }}
      />
    </>
  )
}

export const viewport = {
  //  To fix the zoom issue on mobile for the bookmark submit form
  maximumScale: 1
}
