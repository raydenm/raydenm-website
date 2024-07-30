import dynamic from 'next/dynamic'
import { MapPin } from 'lucide-react'
const MarkdownRenderer = dynamic(() => import('@/components/markdown-renderer').then((mod) => mod.MarkdownRenderer))

export const JourneyCard = ({ title, description, image, index, location }) => (
  <div className="word-break-word flex flex-col">
    <span className="font-semibold tracking-tight">{title}</span>
    {description && <MarkdownRenderer className="mt-1 text-sm">{description}</MarkdownRenderer>}
    {image?.url && (
      <div className="mt-2.5 overflow-hidden rounded-xl bg-white">
        <img
          src={image.url}
          alt={image.title || image.description}
          width={image.width}
          height={image.height}
          loading={index < 1 ? 'eager' : 'lazy'}
          className="animate-reveal"
          // eslint-disable-next-line react/no-unknown-property
          nopin="nopin"
        />
      </div>
    )}
    {location && (
      <div className="mt-2 flex items-center gap-1 text-xs text-zinc-600">
        <MapPin className="size-4 text-zinc-400" />
        <span>{location}</span>
      </div>
    )}
  </div>
)
