import { IoTimeOutline, IoCloseCircleOutline } from 'react-icons/io5'

export default function PoliciesList({ policies = {} }) {
  if (!Object.keys(policies).length) return null

  return (
    <div>
      <h3 className="text-xl font-heading text-text mb-4">Hotel Policies</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <IoTimeOutline className="w-4 h-4 text-primary shrink-0" />
          <span className="text-muted">Check-in: <span className="text-text font-medium">{policies.checkIn}</span></span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <IoTimeOutline className="w-4 h-4 text-primary shrink-0" />
          <span className="text-muted">Check-out: <span className="text-text font-medium">{policies.checkOut}</span></span>
        </div>
        <div className="flex items-start gap-3 text-sm">
          <IoCloseCircleOutline className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span className="text-muted">{policies.cancellation}</span>
        </div>
      </div>
    </div>
  )
}
