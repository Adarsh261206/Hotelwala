import { useState, useEffect, useRef } from 'react'
import states from '../../data/states'
import StateTooltip from './StateTooltip'

const svgIdToState = {}
states.forEach(s => {
  if (!svgIdToState[s.mapId]) {
    svgIdToState[s.mapId] = s
  }
})

export default function IndiaMap({ selectedState, onStateSelect }) {
  const [hoveredState, setHoveredState] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })
  const [svgLoaded, setSvgLoaded] = useState(false)
  const [paths, setPaths] = useState([])
  const containerRef = useRef(null)
  const svgRef = useRef(null)

  useEffect(() => {
    fetch('/images/india-map.svg')
      .then(res => res.text())
      .then(svgText => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(svgText, 'image/svg+xml')
        const svgEl = doc.querySelector('svg')
        if (!svgEl) return

        const viewBox = svgEl.getAttribute('viewBox') || '0 0 612 696'
        const pathElements = svgEl.querySelectorAll('path[id]')
        const pathData = []

        pathElements.forEach(path => {
          const id = path.getAttribute('id')
          const d = path.getAttribute('d')
          if (id && d && svgIdToState[id]) {
            pathData.push({ id, d, state: svgIdToState[id] })
          }
        })

        setPaths(pathData)
        setSvgLoaded(true)
      })
      .catch(err => console.error('Failed to load India map SVG:', err))
  }, [])

  function handleMouseMove(e, state) {
    setTooltipPos({ x: e.clientX, y: e.clientY })
  }

  function handleClick(state) {
    onStateSelect(state)
  }

  return (
    <div ref={containerRef} className="relative w-full max-w-[650px] mx-auto">
      {!svgLoaded && (
        <div className="aspect-[612/696] flex items-center justify-center bg-[#F5EFE7] rounded-xl">
          <p className="text-muted animate-pulse">Loading map...</p>
        </div>
      )}

      <svg
        ref={svgRef}
        viewBox="0 0 612 696"
        className={`w-full h-auto transition-opacity duration-500 ${svgLoaded ? 'opacity-100' : 'opacity-0 absolute'}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Interactive map of India showing all states"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.06))' }}
      >
        {paths.map(({ id, d, state }) => {
          const isSelected = selectedState?.id === state.id
          const isHovered = hoveredState?.id === state.id

          return (
            <path
              key={id}
              id={id}
              d={d}
              fill={isSelected ? '#B88E5A' : isHovered ? '#D4C5A9' : '#E7E2DA'}
              stroke={isSelected ? '#B88E5A' : isHovered ? '#B88E5A' : '#FAF8F5'}
              strokeWidth={isSelected ? 2.5 : isHovered ? 2.5 : 1}
              strokeLinejoin="round"
              className="transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredState(state)}
              onMouseMove={e => handleMouseMove(e, state)}
              onMouseLeave={() => setHoveredState(null)}
              onClick={() => handleClick(state)}
              role="button"
              aria-label={`${state.name}: ${state.hotelCount} hotels`}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleClick(state) }}
            />
          )
        })}
      </svg>

      <StateTooltip state={hoveredState} visible={!!hoveredState} position={tooltipPos} />
    </div>
  )
}
