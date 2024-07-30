import { STACK_LIST } from '@/lib/constants'

export const StackList = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {STACK_LIST.map(({ title, icon, url }, key) => (
        <a key={key} href={`${url}?ref=raydenm.zeabur.app`} target="_blank" rel="noopener noreferrer">
          <div className="cursor-pointer rounded-lg px-8 py-4 shadow-md transition duration-500 hover:-translate-y-1 hover:bg-sky-100">
            <img src={icon.src} alt={title} className="aspect-square size-10 border-none object-cover" />
            <div className="mt-2 text-center text-sm">{title}</div>
          </div>
        </a>
      ))}
    </div>
  )
}
