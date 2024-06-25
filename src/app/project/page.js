import { Suspense } from 'react'
import { ScrollArea } from '@/components/scroll-area'
import { GradientBg } from '@/components/gradient-bg'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'

export default async function Project() {
  return (
    <ScrollArea useScrollAreaId>
      <GradientBg />
      <FloatingHeader scrollTitle="项目集" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="项目集" />
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
            <div>待补充...</div>
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}
