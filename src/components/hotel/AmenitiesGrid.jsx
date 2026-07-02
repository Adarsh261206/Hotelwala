import { IoCheckmarkCircle } from 'react-icons/io5'

export default function AmenitiesGrid({ amenities = [] }) {
  if (!amenities.length) return null

  return (
    <div>
      <h3 className="text-xl font-heading text-text mb-4">Amenities</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {amenities.map(a => (
          <div key={a} className="flex items-center gap-2 text-sm text-text">
            <IoCheckmarkCircle className="w-4 h-4 text-primary shrink-0" />
            <span>{a}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
