'use client'

import { useEffect } from 'react'
import Head from 'next/head'

const Commento = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.commento.io/js/commento.js'
    script.async = true
    document.body.appendChild(script)

    const config = document.createElement('script')
    config.type = 'text/javascript'
    config.innerHTML = `
      window.commentoConfig = {
        lang: 'zh-CN' // 设置语言为中文
      };
    `
    document.head.appendChild(config)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Head>
        <script src="https://cdn.commento.io/js/commento.js" async></script>
      </Head>
      <div id="commento"></div>
    </>
  )
}

export default Commento
