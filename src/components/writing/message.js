'use client'

import { useEffect, useRef } from 'react'

export function Message({ slug }) {
  const ref = useRef()
  const scriptAdded = useRef(false)

  useEffect(() => {
    if (!scriptAdded.current) {
      const scriptElement = document.createElement('script')
      scriptElement.async = true
      scriptElement.crossOrigin = 'anonymous'
      scriptElement.src = 'https://utteranc.es/client.js'

      scriptElement.setAttribute('issue-term', slug)
      scriptElement.setAttribute('label', 'comment')
      scriptElement.setAttribute('repo', 'raydenm/raydenm-website')
      scriptElement.setAttribute('theme', 'preferred-color-scheme')

      ref.current?.appendChild(scriptElement)
      scriptAdded.current = true
    }
  }, [slug])

  return <div ref={ref} />
}
