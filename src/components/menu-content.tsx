import Link from 'next/link'

import { NavigationLink } from '@/components/navigation-link'

import {
  GithubIcon,
  MessageCircleMore,
  SparklesIcon,
  PencilLineIcon,
  NavigationIcon,
  Wand2Icon,
  BookmarkIcon,
  Boxes,
  Images
} from 'lucide-react'

const PROFILES = {
  github: {
    title: 'GitHub',
    url: 'https://github.com/raydenm',
    icon: <GithubIcon size={16} />
  },
  WeChat: {
    title: '微信',
    url: 'https://isharrlrlvkdieveofmw.supabase.co/storage/v1/object/public/images/raydenm-wechat.jpg',
    icon: <MessageCircleMore size={16} />
  },
  juejin: {
    title: '稀土掘金',
    url: 'https://juejin.cn/collection/6845242851597484040',
    icon: (
      <svg
        className="size-4"
        viewBox="0 0 1316 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
      >
        <path
          d="M643.181714 247.698286l154.916572-123.172572L643.181714 0.256 643.072 0l-154.660571 124.269714 154.660571 123.245715 0.109714 0.182857z m0 388.461714h0.109715l399.579428-315.245714-108.361143-87.04-291.218285 229.888h-0.146286l-0.109714 0.146285L351.817143 234.093714l-108.251429 87.04 399.433143 315.136 0.146286-0.146285z m-0.146285 215.552l0.146285-0.146286 534.893715-422.034285 108.397714 87.04-243.309714 192L643.145143 1024 10.422857 525.056 0 516.754286l108.251429-86.893715L643.035429 851.748571z"
          fill="currentColor"
        ></path>
      </svg>
    )
  },
  twitter: {
    title: '推特',
    url: 'https://x.com/Raydenm928',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    )
  }
}

const LINKS = [
  {
    href: '/',
    label: '主页',
    icon: <SparklesIcon size={16} />
  },
  {
    href: '/writing',
    label: '文章',
    icon: <PencilLineIcon size={16} />
  },
  {
    href: '/journey',
    label: '时光记录',
    icon: <NavigationIcon size={16} />
  },
  {
    href: '/stack',
    label: '技术找',
    icon: <Wand2Icon size={16} />
  },
  {
    href: '/project',
    label: '项目集',
    icon: <Boxes size={16} />
  },
  {
    href: '/bookmarks',
    label: '书签',
    icon: <BookmarkIcon size={16} />
  },
  {
    href: '/photo',
    label: '相册',
    icon: <Images size={16} />
  }
]

export const MenuContent = () => (
  <div className="flex w-full flex-col text-sm">
    <div className="flex flex-col gap-4">
      <Link href="/" className="link-card inline-flex items-center gap-2 p-2">
        <img
          src="/assets/raydenm-small.png"
          alt="Raydenm"
          width={40}
          height={40}
          loading="lazy"
          className="rounded-full border shadow-sm"
        />
        <div className="flex flex-col">
          <span className="font-semibold tracking-tight">Raydenm</span>
          <span className="text-gray-600">软件开发工程师</span>
        </div>
      </Link>
      <div className="flex flex-col gap-1">
        {LINKS.map((link, linkIndex) => (
          <NavigationLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
            shortcutNumber={linkIndex + 1}
          />
        ))}
      </div>
    </div>
    <hr />
    <div className="flex flex-col gap-2 text-sm">
      {/* <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">Online</span> */}
      <div className="flex flex-col gap-1">
        {Object.values(PROFILES).map((profile) => (
          <NavigationLink key={profile.url} href={profile.url} label={profile.title} icon={profile.icon} />
        ))}
      </div>
    </div>
  </div>
)
