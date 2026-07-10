import { useState, useEffect } from 'react'
import states from '../../data/states'

const stateMap = {}
states.forEach(s => {
  if (!stateMap[s.id]) {
    stateMap[s.id] = s
  }
})

export default function MiniStateMap({ stateId, className = '' }) {
  const [paths, setPaths] = useState([])
  const [viewBox, setViewBox] = useState('0 0 612 696')

  useEffect(() => {
    fetch('/images/india-map.svg')
      .then(res => res.text())
      .then(svgText => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(svgText, 'image/svg+xml')
        const svgEl = doc.querySelector('svg')
        if (!svgEl) return

        const vb = svgEl.getAttribute('viewBox') || '0 0 612 696'
        const pathElements = svgEl.querySelectorAll('path[id]')
        const stateMapId = stateMap[stateId]?.mapId
        const targetPaths = []

        pathElements.forEach(path => {
          const id = path.getAttribute('id')
          const d = path.getAttribute('d')
          if (id && d) {
            targetPaths.push({
              id,
              d,
              isTarget: id === stateMapId,
            })
          }
        })

        setPaths(targetPaths)
        setViewBox(vb)
      })
      .catch(err => console.error('Failed to load India map:', err))
  }, [stateId])

  if (!paths.length) {
    return <div className={`aspect-[612/696] max-h-[200px] bg-[#F5EFE7] rounded-xl animate-pulse ${className}`} />
  }

  return (
    <svg
      viewBox={viewBox}
      className={`w-full h-auto max-h-[220px] ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map(p => (
        <path
          key={p.id}
          d={p.d}
          fill={p.isTarget ? '#B88E5A' : '#E7E2DA'}
          stroke={p.isTarget ? '#B88E5A' : '#D4C5A9'}
          strokeWidth={p.isTarget ? 1.5 : 0.5}
          strokeLinejoin="round"
          className="transition-all duration-300"
        />
      ))}
    </svg>
  )
}
