import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '../../utils/constants'

export default function SEO({ title, description = SITE_DESCRIPTION, image = 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&h=630&fit=crop', type = 'website' }) {
  const { pathname } = useLocation()
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — India's Premium Hotel Network`
  const url = `${SITE_URL}${pathname}`

  useEffect(() => {
    document.title = pageTitle

    const setMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', description)
    setMeta('og:title', pageTitle, true)
    setMeta('og:description', description, true)
    setMeta('og:url', url, true)
    setMeta('og:image', `${SITE_URL}${image}`, true)
    setMeta('og:type', type, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', pageTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', `${SITE_URL}${image}`, true)
    setMeta('canonical', url)

    let ld = document.getElementById('structured-data')
    if (!ld) {
      ld = document.createElement('script')
      ld.id = 'structured-data'
      ld.type = 'application/ld+json'
      document.head.appendChild(ld)
    }
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      description,
    })
  }, [pageTitle, description, url, image, type])

  return null
}
