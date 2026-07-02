import { Link } from 'react-router-dom'
import { IoChevronForward } from 'react-icons/io5'

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={item.path || index} className="flex items-center gap-2">
            {index > 0 && <IoChevronForward className="w-3 h-3" />}
            {isLast ? (
              <span className="text-text font-medium">{item.label}</span>
            ) : (
              <Link to={item.path} className="hover:text-primary transition-colors">{item.label}</Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}
