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

import ReactIcon from '@/assets/stack/reactjs.svg'
import VueIcon from '@/assets/stack/vuejs.svg'
import TauriIcon from '@/assets/stack/tauri.svg'
import ExpoIcon from '@/assets/stack/expo.svg'
import NextjsIcon from '@/assets/stack/nextjs.svg'
import ReactnativeIcon from '@/assets/stack/reactnative.svg'
import ElectronIcon from '@/assets/stack/electron.svg'
import NuxtjsIcon from '@/assets/stack/nuxtjs.svg'
import ShadcnuiIcon from '@/assets/stack/shadcnui.svg'
import TailwindcssIcon from '@/assets/stack/tailwindcss.svg'
import ReactqueryIcon from '@/assets/stack/react-query.svg'
import PiniaIcon from '@/assets/stack/pinia.svg'
import VitejsIcon from '@/assets/stack/vitejs.svg'
import DockerIcon from '@/assets/stack/docker.svg'
import ElementuiIcon from '@/assets/stack/elementui.svg'
import LessIcon from '@/assets/stack/less.svg'
import MantineIcon from '@/assets/stack/mantine.svg'
import MysqlIcon from '@/assets/stack/mysql.svg'
import PostgresqlIcon from '@/assets/stack/postgresql.svg'
import ReactrouterIcon from '@/assets/stack/reactrouter.svg'
import StorybookIcon from '@/assets/stack/storybook.svg'
import TypescriptIcon from '@/assets/stack/typescript.svg'
// import JavascriptIcon from '@/assets/stack/javascript.svg'
// import Css3Icon from '@/assets/stack/css3.svg'
// import Html5Icon from '@/assets/stack/html5.svg'
import RadixuiIcon from '@/assets/stack/radixui.svg'
import BashIcon from '@/assets/stack/bash.svg'
import ResendIcon from '@/assets/stack/resend.svg'
import MarkdownIcon from '@/assets/stack/markdown.svg'
import ChromeIcon from '@/assets/stack/chrome.svg'
import ArcIcon from '@/assets/stack/arc.svg'
import GitIcon from '@/assets/stack/git.svg'
import ZodIcon from '@/assets/stack/zod.svg'
import WebpackIcon from '@/assets/stack/webpack.svg'
import StylelintIcon from '@/assets/stack/stylelint.svg'
import PrettierIcon from '@/assets/stack/prettier.svg'
import NpmIcon from '@/assets/stack/npm.svg'
import EsbuildIcon from '@/assets/stack/esbuild.svg'
import EslintIcon from '@/assets/stack/eslint.svg'
import ThreejsIcon from '@/assets/stack/threejs.svg'
import SupabaseIcon from '@/assets/stack/supabase.svg'
import NodejsIcon from '@/assets/stack/nodejs.svg'
import PwaIcon from '@/assets/stack/pwa.svg'
import SassIcon from '@/assets/stack/sass.svg'
import ReduxIcon from '@/assets/stack/redux.svg'

export const PROFILES = {
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
  },
  {
    title: 'Next.js',
    url: 'https://nextjs.org/',
    icon: NextjsIcon
  },
  {
    title: 'React Native',
    url: 'https://reactnative.dev/',
    icon: ReactnativeIcon
  },
  {
    title: 'Electron',
    url: 'https://www.electronjs.org/',
    icon: ElectronIcon
  },
  {
    title: 'Nuxt.js',
    url: 'https://www.nuxtjs.cn/',
    icon: NuxtjsIcon
  },
  {
    title: 'Shadcn UI',
    url: 'https://ui.shadcn.com/',
    icon: ShadcnuiIcon
  },
  {
    title: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    icon: TailwindcssIcon
  },
  {
    title: 'React Query',
    url: 'https://tanstack.com/query/latest/docs/framework/react/overview',
    icon: ReactqueryIcon
  },
  {
    title: 'Pinia',
    url: 'https://pinia.vuejs.org/',
    icon: PiniaIcon
  },
  {
    title: 'Vite.js',
    url: 'https://vitejs.dev/',
    icon: VitejsIcon
  },
  {
    title: 'Docker',
    url: 'https://www.docker.com/',
    icon: DockerIcon
  },
  {
    title: 'Element UI',
    url: 'https://element-plus.org/',
    icon: ElementuiIcon
  },
  {
    title: 'Less',
    url: 'https://lesscss.org/',
    icon: LessIcon
  },
  {
    title: 'Mantine',
    url: 'https://mantine.dev/',
    icon: MantineIcon
  },
  {
    title: 'MySQL',
    url: 'https://www.mysql.com/',
    icon: MysqlIcon
  },
  {
    title: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    icon: PostgresqlIcon
  },
  {
    title: 'React Router',
    url: 'https://reactrouter.com/en/main',
    icon: ReactrouterIcon
  },
  {
    title: 'Storybook',
    url: 'https://storybook.js.org/',
    icon: StorybookIcon
  },
  {
    title: 'Typescript',
    url: 'https://www.typescriptlang.org/',
    icon: TypescriptIcon
  },
  // {
  //   title: 'Javascript',
  //   url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
  //   icon: JavascriptIcon
  // },
  // {
  //   title: 'CSS3',
  //   url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
  //   icon: Css3Icon
  // },
  // {
  //   title: 'HTML5',
  //   url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
  //   icon: Html5Icon
  // },
  {
    title: 'Radix UI',
    url: 'https://www.radix-ui.com/',
    icon: RadixuiIcon
  },
  {
    title: 'Bash',
    url: 'https://www.gnu.org/software/bash/',
    icon: BashIcon
  },
  {
    title: 'Resend',
    url: 'https://resend.com/',
    icon: ResendIcon
  },
  {
    title: 'Markdown',
    url: 'https://www.markdownguide.org/',
    icon: MarkdownIcon
  },
  {
    title: 'Chrome',
    url: 'https://www.google.com/chrome/',
    icon: ChromeIcon
  },
  {
    title: 'Arc',
    url: 'https://arc.net/',
    icon: ArcIcon
  },
  {
    title: 'Git',
    url: 'https://git-scm.com/',
    icon: GitIcon
  },
  {
    title: 'Zod',
    url: 'https://zod.dev/',
    icon: ZodIcon
  },
  {
    title: 'Webpack',
    url: 'https://webpack.js.org/',
    icon: WebpackIcon
  },
  {
    title: 'Stylelint',
    url: 'https://stylelint.io/',
    icon: StylelintIcon
  },
  {
    title: 'Prettier',
    url: 'https://prettier.io/',
    icon: PrettierIcon
  },
  {
    title: 'Npm',
    url: 'https://www.npmjs.com/',
    icon: NpmIcon
  },
  {
    title: 'Esbuild',
    url: 'https://esbuild.github.io/',
    icon: EsbuildIcon
  },
  {
    title: 'Eslint',
    url: 'https://eslint.org/',
    icon: EslintIcon
  },
  {
    title: 'Threejs',
    url: 'https://threejs.org/',
    icon: ThreejsIcon
  },
  {
    title: 'Supabase',
    url: 'https://supabase.com/',
    icon: SupabaseIcon
  },
  {
    title: 'Nodejs',
    url: 'https://nodejs.org/en',
    icon: NodejsIcon
  },
  {
    title: 'Pwa',
    url: 'https://web.dev/progressive-web-apps/',
    icon: PwaIcon
  },
  {
    title: 'Sass',
    url: 'https://sass-lang.com/',
    icon: SassIcon
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    icon: ReduxIcon
  }
]

export const BOOKMARK_MAP = {
  design: '设计',
  tools: '工具',
  frontend: '前端',
  'VS Code': 'VS Code 插件',
  AI: '人工智能'
}

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
