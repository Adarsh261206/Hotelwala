import { useState } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

export default function ImageGallery({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  function next() {
    setActiveIndex(prev => (prev + 1) % images.length)
  }

  function prev() {
    setActiveIndex(prev => (prev - 1 + images.length) % images.length)
  }

  if (!images.length) return null

  return (
    <div className="relative rounded-xl overflow-hidden bg-[#F5EFE7]">
      <div className="aspect-[16/9] md:aspect-[21/9] relative">
        <img
          src={images[activeIndex]}
          alt={`Hotel image ${activeIndex + 1}`}
          className="w-full h-full object-cover"
          onError={e => { e.target.style.display = 'none' }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-lg"
              aria-label="Previous image"
            >
              <IoChevronBack className="w-5 h-5 text-text" />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all shadow-lg"
              aria-label="Next image"
            >
              <IoChevronForward className="w-5 h-5 text-text" />
            </button>
          </>
        )}
      </div>

      <div className="flex gap-2 p-3 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              i === activeIndex ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
              onError={e => { e.target.style.display = 'none' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
