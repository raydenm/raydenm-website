import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { ScrollArea } from '@/components/scroll-area'
import { RichText } from '@/components/contentful/rich-text'
import { PageTitle } from '@/components/page-title'
import { FloatingHeader } from '@/components/floating-header'
import { WritingViews } from '@/components/writing-views'
import { getPost, getAllPostSlugs } from '@/lib/contentful'
import { getDateTimeFormat, isDevelopment } from '@/lib/utils'

export async function generateStaticParams() {
  const allPosts = await getAllPostSlugs()
  return allPosts.map((post) => ({ slug: post.slug }))
}

async function fetchData(slug) {
  const { isEnabled } = draftMode()
  const data = await getPost(slug, isDevelopment ? true : isEnabled)
  if (!data) notFound()

  return {
    data
  }
}

export default async function WritingSlug({ params }) {
  const { slug } = params
  const { data } = await fetchData(slug)

  const {
    title,
    date,
    content,
    sys: { firstPublishedAt }
  } = data

  const postDate = date || firstPublishedAt
  const dateString = getDateTimeFormat(postDate)

  return (
    <>
      <ScrollArea className="bg-white" useScrollAreaId>
        <FloatingHeader scrollTitle={title} goBackLink="/writing">
          <WritingViews slug={slug} />
        </FloatingHeader>
        <div className="content-wrapper @container/writing">
          <article className="content">
            <PageTitle
              title={title}
              subtitle={
                <time dateTime={postDate} className="text-gray-400">
                  {dateString}
                </time>
              }
              className="mb-6 flex flex-col gap-3"
            />
            <RichText content={content} />
          </article>
        </div>
      </ScrollArea>
    </>
  )
}
