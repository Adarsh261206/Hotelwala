export function generateMeta({ title, description, path, image }) {
  const siteName = 'Hotelwala'
  const url = `https://hotelwala.net${path}`
  const ogImage = image || 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&h=630&fit=crop'

  return {
    title: title ? `${title} | ${siteName}` : `${siteName} — India's Premium Hotel Network`,
    description,
    url,
    ogImage,
  }
}
