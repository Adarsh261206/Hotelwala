import { IoLocationOutline } from 'react-icons/io5'

export default function NearbyAttractions({ nearby = [] }) {
  if (!nearby.length) return null

  return (
    <div>
      <h3 className="text-xl font-heading text-text mb-4">Nearby Attractions</h3>
      <ul className="space-y-2">
        {nearby.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-muted">
            <IoLocationOutline className="w-4 h-4 text-primary shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
