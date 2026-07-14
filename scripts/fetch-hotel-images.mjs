import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_DIR = path.join(__dirname, '../public/images/hotels')

const hotels = [
  { id: 'the-oberoi-rajvilas', name: 'The Oberoi Rajvilas' },
  { id: 'taj-lake-palace', name: 'Taj Lake Palace Udaipur' },
  { id: 'umaid-bhawan-palace', name: 'Umaid Bhawan Palace' },
  { id: 'the-taj-mahal-palace', name: 'Taj Mahal Palace Mumbai' },
  { id: 'kumarakom-lake-resort', name: 'Kumarakom Lake Resort' },
  { id: 'the-wildflower-hall', name: 'Wildflower Hall Shimla' },
  { id: 'taj-fishermans-cove', name: 'Taj Fishermens Cove Chennai' },
  { id: 'sujan-sherbagh', name: 'Sujan Sher Bagh Ranthambore' },
  { id: 'taj-kovalam', name: 'Taj Kovalam' },
  { id: 'spice-village-munnar', name: 'Spice Village Munnar' },
  { id: 'thekkady-wilderness-lodge', name: 'Thekkady Wilderness Lodge' },
  { id: 'della-resorts', name: 'Della Resorts Lonavala' },
  { id: 'orange-county-coorg', name: 'Orange County Coorg' },
  { id: 'sujan-rajmachi', name: 'Sujan Rajmachi' },
  { id: 'nadesar-palace', name: 'Nadesar Palace Varanasi' },
  { id: 'the-oberoi-bengaluru', name: 'The Oberoi Bangalore' },
  { id: 'ananda-in-the-himalayas', name: 'Ananda in the Himalayas' },
  { id: 'taj-rishikesh', name: 'Taj Rishikesh' },
  { id: 'savoy-ooty', name: 'Savoy Ooty' },
  { id: 'lalitha-mahal-palace', name: 'Lalitha Mahal Palace Mysore' },
  { id: 'w-goa', name: 'W Goa' },
  { id: 'the-cliff-edge-manali', name: 'The Cliff Edge Manali' },
  { id: 'khyber-himalayan-resort', name: 'Khyber Himalayan Resort Gulmarg' },
  { id: 'the-oberoi-grand', name: 'Oberoi Grand Kolkata' },
  { id: 'jehan-numa-palace', name: 'Jehan Numa Palace Bhopal' },
  { id: 'alila-diwa-goa', name: 'Alila Diwa Goa' },
  { id: 'ideal-beach-resort', name: 'Ideal Beach Resort Mahabalipuram' },
  { id: 'the-dolphin-hotel', name: 'Hotel Dolphin Shimla' },
  { id: 'itc-grand-bharat', name: 'ITC Grand Bharat' },
  { id: 'bandhavgarh-jungle-lodge', name: 'Bandhavgarh Jungle Lodge' },
  { id: 'rann-utsav-tent-city', name: 'Rann Utsav Tent City' },
  { id: 'glenburn-tea-estate', name: 'Glenburn Tea Estate Darjeeling' },
  { id: 'taj-amritsar', name: 'Taj Amritsar' },
  { id: 'maati-assam', name: 'Maati Assam' },
  { id: 'the-shamrock', name: 'Shamrock Hotel Kolkata' },
  { id: 'the-maurya', name: 'Hotel Maurya Patna' },
  { id: 'mayfair-gangtok', name: 'Mayfair Gangtok' },
  { id: 'mayfair-odisha', name: 'Mayfair Odisha' },
  { id: 'chandrabhaga-beach', name: 'Chandrabhaga Beach Resort Odisha' },
  { id: 'the-grand-lahaul', name: 'The Grand Lahaul' },
  { id: 'araku-valley-retreat', name: 'Araku Valley Retreat' },
  { id: 'jhirjhiri-resort', name: 'Jhirjhiri Resort' },
  { id: 'ujjayanta-palace', name: 'Ujjayanta Palace Hotel Agartala' },
  { id: 'chhattisgarh-wilderness', name: 'Chhattisgarh Wilderness Resort' },
  { id: 'brahmaputra-jungle-lodge', name: 'Brahmaputra Jungle Lodge' },
  { id: 'imphal-lake-resort', name: 'Imphal Lake Resort' },
  { id: 'aizawl-heights', name: 'Aizawl Heights' },
  { id: 'bababudan-lodge', name: 'Bababudan Lodge Chikmagalur' },
  { id: 'kohima-heritage', name: 'Kohima Heritage' },
  { id: 'shillong-hills', name: 'Shillong Hills Resort' },
  { id: 'arunachal-orchid', name: 'Arunachal Orchid Resort' },
  { id: 'the-oberoi-chandigarh', name: 'Oberoi Chandigarh' },
]

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms))
}

async function downloadImage(page, url, filePath) {
  try {
    const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 })
    const buf = await resp.buffer()
    if (!buf || buf.length < 1000) return false
    fs.writeFileSync(filePath, buf)
    return true
  } catch {
    return false
  }
}

async function scrapeHotel(page, hotel) {
  const folder = path.join(OUTPUT_DIR, hotel.id)
  fs.mkdirSync(folder, { recursive: true })

  const q = encodeURIComponent(hotel.name + ' hotel building exterior')
  await page.goto(`https://www.bing.com/images/search?q=${q}`, {
    waitUntil: 'networkidle2',
    timeout: 30000,
  })

  await page.evaluate(() => window.scrollTo(0, 800))
  await sleep(1500)

  const links = await page.evaluate(() => {
    const seen = new Set()
    const results = []
    document.querySelectorAll('a.iusc').forEach(el => {
      try {
        const data = JSON.parse(el.getAttribute('M') || '{}')
        let url = data.murl || data.turl || ''
        if (url && !seen.has(url) && url.startsWith('http')) {
          seen.add(url)
          results.push(url)
        }
      } catch {}
    })
    const imgs = document.querySelectorAll('img.mimg')
    imgs.forEach(img => {
      const src = img.getAttribute('src') || ''
      if (src && !seen.has(src) && src.startsWith('http') && !src.includes('bing')) {
        seen.add(src)
        results.push(src)
      }
    })
    return results.slice(0, 5)
  })

  if (links.length === 0) {
    return 0
  }

  let downloaded = 0
  for (let i = 0; i < links.length && downloaded < 2; i++) {
    const ext = path.extname(new URL(links[i]).pathname).split('?')[0] || '.jpg'
    const filePath = path.join(folder, `${downloaded + 1}${ext}`)
    const ok = await downloadImage(page, links[i], filePath)
    if (ok) downloaded++
  }

  return downloaded
}

async function main() {
  console.log(`\nFetching real images for ${hotels.length} hotels from Bing Images...\n`)

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  )

  let totalImages = 0
  let success = 0
  let failed = 0

  for (let i = 0; i < hotels.length; i++) {
    const hotel = hotels[i]
    process.stdout.write(`[${i + 1}/${hotels.length}] ${hotel.name}... `)

    try {
      const count = await scrapeHotel(page, hotel)
      if (count > 0) {
        console.log(`✅ ${count} images`)
        success++
        totalImages += count
      } else {
        console.log('No images found')
        failed++
      }
    } catch (err) {
      console.log(`Error: ${err.message}`)
      failed++
    }

    await sleep(2000)
  }

  await browser.close()

  console.log(`\n=== Summary ===`)
  console.log(`Hotels with images: ${success}`)
  console.log(`Failed/missing: ${failed}`)
  console.log(`Total images downloaded: ${totalImages}`)
  console.log(`\nNow run: node scripts/update-hotel-images.mjs`)
}

main()
