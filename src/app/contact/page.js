import { Suspense } from 'react'
import { ScrollArea } from '@/components/scroll-area'
import { GradientBg4 } from '@/components/gradient-bg'
import { FloatingHeader } from '@/components/floating-header'
import { PageTitle } from '@/components/page-title'
import { ScreenLoadingSpinner } from '@/components/screen-loading-spinner'
import { SubmitContcatForm } from '@/components/contcat/form'
import { Toaster } from '@/components/ui/sonner'

export default async function Contact() {
  return (
    <>
      <ScrollArea useScrollAreaId>
        <GradientBg4 />
        <FloatingHeader scrollTitle="联系我" />
        <div className="content-wrapper">
          <div className="content">
            <PageTitle title="联系我" />
            <Suspense fallback={<ScreenLoadingSpinner />}>
              <div className="m-auto max-w-[550px]">
                <SubmitContcatForm />
              </div>
            </Suspense>
          </div>
        </div>
      </ScrollArea>
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
