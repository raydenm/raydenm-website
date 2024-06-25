import { Suspense } from 'react'
import Link from 'next/link'

import { ScrollArea } from '@/components/scroll-area'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { WritingList } from '@/components/writing-list'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button.jsx'
import { getAllPosts } from '@/lib/contentful'
import { getSortedPosts, getItemsByYear } from '@/lib/utils'

async function fetchData() {
  const allPosts = await getAllPosts()
  const sortedPosts = getSortedPosts(allPosts)
  const items = getItemsByYear(sortedPosts)
  return { items }
}

export default async function Home() {
  const { items } = await fetchData()

  return (
    <ScrollArea useScrollAreaId>
      <FloatingHeader scrollTitle="Raydenm" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="lg:hidden" />
          <p>Hi 👋 I'm Raydem.</p>
          <p>Frontend Developer.</p>
          <Button asChild variant="link" className="inline px-0">
            <Link href="/writing">
              <h2 className="mb-4 mt-8">Writing</h2>
            </Link>
          </Button>
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <WritingList items={items} header="Writing" />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
