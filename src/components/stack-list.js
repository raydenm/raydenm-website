import { STACK_LIST } from '@/lib/constants'

export const StackList = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {STACK_LIST.map(({ title, icon, url }, key) => (
        <a key={key} href={`${url}?ref=${process.env.WEBSITE_URL}`} target="_blank" rel="noopener noreferrer">
          <div className="group flex size-[108px] cursor-pointer flex-col items-center justify-center rounded-lg shadow-md transition duration-300 hover:-translate-y-1 hover:bg-sky-100 hover:shadow-lg">
            <img src={icon.src} alt={title} className="aspect-square size-10 rounded border-none" />
            <div className="mt-3 text-sm text-gray-700 group-hover:text-gray-950">{title}</div>
          </div>
        </a>
      ))}
    </div>
  )
}
