import {
  GithubIcon,
  // LinkedinIcon,
  // InstagramIcon,
  // YoutubeIcon,
  SparklesIcon,
  PencilLineIcon,
  NavigationIcon,
  Wand2Icon,
  BookmarkIcon,
  // ArmchairIcon,
  Boxes,
  Images
} from 'lucide-react'

import ReactIcon from '@/assets/stack/reactjs.svg'
import VueIcon from '@/assets/stack/vuejs.svg'
import TauriIcon from '@/assets/stack/tauri.svg'
import ExpoIcon from '@/assets/stack/expo.svg'

// export const TWEETS_COLLECTION_ID = 15896982

export const PROFILES = {
  // twitter: {
  //   title: 'X (Twitter)',
  //   username: 'onurschu',
  //   url: 'https://twitter.com/intent/user?screen_name=onurschu',
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       className="size-4"
  //       width="44"
  //       height="44"
  //       viewBox="0 0 24 24"
  //       strokeWidth="1.5"
  //       stroke="#000000"
  //       fill="none"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //       <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
  //       <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  //     </svg>
  //   )
  // },
  github: {
    title: 'GitHub',
    url: 'https://github.com/raydenm',
    icon: <GithubIcon size={16} />
  }
  // linkedin: {
  //   title: 'LinkedIn',
  //   url: 'https://www.linkedin.com/in/suyalcinkaya',
  //   icon: <LinkedinIcon size={16} />
  // },
  // medium: {
  //   title: 'Medium',
  //   url: 'https://suyalcinkaya.medium.com'
  // },
  // instagram: {
  //   title: 'Instagram',
  //   url: 'https://www.instagram.com/jgrmn',
  //   icon: <InstagramIcon size={16} />
  // },
  // soundcloud: {
  //   title: 'Soundcloud',
  //   url: 'https://soundcloud.com/jagerman'
  // },
  // youtube: {
  //   title: 'YouTube',
  //   url: 'https://www.youtube.com/c/jagermanmusic',
  //   icon: <YoutubeIcon size={16} />
  // },
  // bluesky: {
  //   title: 'Bluesky',
  //   url: 'https://staging.bsky.app/profile/onur.dev'
  // },
  // readcv: {
  //   title: 'Read.cv',
  //   url: 'https://read.cv/onur'
  // },
  // pinterest: {
  //   title: 'Pinterest',
  //   url: 'https://nl.pinterest.com/onurschu'
  // }
}

export const LINKS = [
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
  // {
  //   href: '/workspace',
  //   label: 'Workspace',
  //   icon: <ArmchairIcon size={16} />
  // },
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

export const WORKSPACE_ITEMS = [
  {
    title: 'Richard Lampert Eiermann 2 Desk',
    url: 'https://www.richard-lampert.de/en/furniture/eiermann-2-desk-en/',
    specs: 'White, 80x160cm'
  },
  {
    title: 'Herman Miller Aeron Remastered',
    url: 'https://store.hermanmiller.com/office-chairs-aeron/aeron-chair/2195348.html',
    specs: 'Graphite, Size C'
  },
  {
    title: 'Apple Studio Display',
    url: 'https://www.apple.com/nl/studio-display/',
    specs: 'Tilt- and height-adjustable stand'
  },
  {
    title: '14" MacBook Pro',
    url: 'https://www.apple.com/nl/macbook-pro/',
    specs: 'Space Gray, M2, 16GB RAM, 256GB SSD'
  },
  {
    title: 'TE Computer-1 Mini-IPX PC',
    url: '/writing/mini-itx-teenage-engineering-computer-1',
    specs: 'Orange, AMD Ryzen 5 7600, 32GB RAM, 2TB SSD'
  },
  {
    title: 'Apple Magic Trackpad',
    url: 'https://www.apple.com/nl/shop/product/MK2D3Z/A/magic-trackpad-wit-multi%E2%80%91touch-oppervlak',
    specs: 'White'
  },
  {
    title: 'Apple Magic Keyboard',
    url: 'https://www.apple.com/nl/shop/product/MK293N/A/magic-keyboard-met-touch-id-voor-mac-modellen-met-apple-silicon-nederlands',
    specs: 'White, Touch ID'
  },
  {
    title: 'Logitech MX Master 3S',
    url: 'https://www.logitech.com/nl-nl/products/mice/mx-master-3s.910-006560.html',
    specs: 'Pale Gray'
  },
  {
    title: 'Dyson Solarcycle Morph',
    url: 'https://www.dyson.nl/verlichting/bureaulamp/solarcycle-morph-cd06/wit-zilver',
    specs: 'White/Silver'
  },
  {
    title: 'Oakywood MagSafe iPhone Stand',
    url: 'https://oakywood.shop/products/magsafe-iphone-stand',
    specs: 'Oak'
  },
  {
    title: 'Apple Airpods Max',
    url: 'https://www.apple.com/nl/airpods-max/',
    specs: 'Space Gray'
  },
  {
    title: 'Apple Airpods Pro',
    url: 'https://www.apple.com/nl/airpods-pro/',
    specs: '2nd generation'
  },
  {
    title: 'Braun Analogue Wall Clock',
    url: 'https://braun-clocks.com/collections/wall-clocks/products/bc17-classic-large-analogue-wall-clock-white',
    specs: 'White, BC17 Classic Large'
  },
  {
    title: 'IKEA Alex Drawer Unit',
    url: 'https://www.ikea.com/nl/en/p/alex-drawer-unit-white-00473546/',
    specs: 'White, 36x70cm'
  },
  {
    title: 'IKEA Övning Footrest',
    url: 'https://www.ikea.com/nl/en/p/oevning-multifunctional-ergonomic-footrest-00552020/',
    specs: 'Gray/Blue'
  }
]

export const STACK_LIST = [
  {
    title: 'React',
    url: 'https://react.dev',
    icon: ReactIcon
  },
  {
    title: 'Vue',
    url: 'https://vuejs.org',
    icon: VueIcon
  },
  {
    title: 'Tauri',
    url: 'https://tauri.app',
    icon: TauriIcon
  },
  {
    title: 'Expo',
    url: 'https://expo.dev',
    icon: ExpoIcon
  }
  // {
  //   title: 'Next.js',
  //   url: '',
  //   icon: ''
  // },
  // {
  //   title: 'React Native',
  //   url: '',
  //   icon: ''
  // },
  // {
  //   title: 'Electron',
  //   url: '',
  //   icon: ''
  // },
  // {
  //   title: 'Nuxt.js',
  //   url: '',
  //   icon: ''
  // }
]

export const SCROLL_AREA_ID = 'scroll-area'
export const MOBILE_SCROLL_THRESHOLD = 20
export const SUPABASE_TABLE_NAME = 'pages'

export const SUBMIT_BOOKMARK_FORM_TITLE = '提交网站'
export const SUBMIT_BOOKMARK_FORM_DESCRIPTION = '提交一个网站, 如果是一个非常棒的网站, 我会加入到我的书签, 分享给大家。'
export const MAX_BOOKMARK_SUBMISSIONS_PER_DAY = 10
export const BOOKMARK_SUBMISSION_COUNT_COOKIE_NAME = 'formSubmissionCount'

export const SUBMIT_CONTCAT_FORM_TITLE = '联系我'
export const SUBMIT_CONTCAT_FORM_DESCRIPTION =
  '感谢您访问我的网站！如果您有任何问题、建议或合作意向，欢迎随时与我联系。'

export const CONTENT_TYPES = {
  PAGE: 'page',
  POST: 'post',
  LOGBOOK: 'logbook'
}

export const BOOKMARK_MAP = {
  design: '设计',
  tools: '工具',
  frontend: '前端',
  'VS Code': 'VS Code 插件',
  AI: '人工智能'
}
