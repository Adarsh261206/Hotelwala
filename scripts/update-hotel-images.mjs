import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const HOTELS_PATH = path.join(__dirname, '../src/data/hotels.js')
const IMAGES_DIR = path.join(__dirname, '../public/images/hotels')

function main() {
  let content = fs.readFileSync(HOTELS_PATH, 'utf-8')
  const hotelFolders = fs.readdirSync(IMAGES_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())

  for (const folder of hotelFolders) {
    const hotelId = folder.name
    const imageFiles = fs.readdirSync(path.join(IMAGES_DIR, hotelId))
      .filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort()

    if (imageFiles.length === 0) continue

    const imagePaths = imageFiles.map(f => `/images/hotels/${hotelId}/${f}`)
    const imagesArrayStr = imagePaths.map(p => `'${p}'`).join(', ')

    const regex = new RegExp(`(id:\\s*'${hotelId}'[\\s\\S]*?images:\\s*)\\[[^\\]]+\\]`)
    if (regex.test(content)) {
      content = content.replace(regex, `$1[${imagesArrayStr}]`)
      console.log(`✅ Updated ${hotelId} with ${imageFiles.length} images`)
    } else {
      console.log(`⚠️  Could not find hotel entry for ${hotelId}`)
    }
  }

  fs.writeFileSync(HOTELS_PATH, content)
  console.log('\n✅ hotels.js updated!')
}

main()
