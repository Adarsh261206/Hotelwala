import { IoSearch, IoClose } from 'react-icons/io5'
import states from '../../data/states'
import { BUDGET_RANGES, PROPERTY_TYPES } from '../../utils/constants'

export default function FilterBar({ filters, onFilterChange, onReset, totalCount }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] space-y-4">
      <div className="relative">
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
        <input
          type="text"
          placeholder="Search hotels..."
          value={filters.search}
          onChange={e => onFilterChange('search', e.target.value)}
          className="w-full bg-[#FAF8F5] border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          aria-label="Search hotels"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <select
          value={filters.state}
          onChange={e => onFilterChange('state', e.target.value)}
          className="bg-[#FAF8F5] border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          aria-label="Filter by state"
        >
          <option value="">All States</option>
          {states.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        <select
          value={filters.budget}
          onChange={e => onFilterChange('budget', e.target.value)}
          className="bg-[#FAF8F5] border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          aria-label="Filter by budget"
        >
          <option value="">All Budgets</option>
          {BUDGET_RANGES.map((b, i) => (
            <option key={i} value={`${b.min}-${b.max}`}>{b.label}</option>
          ))}
        </select>

        <select
          value={filters.type}
          onChange={e => onFilterChange('type', e.target.value)}
          className="bg-[#FAF8F5] border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          aria-label="Filter by property type"
        >
          <option value="">All Types</option>
          {PROPERTY_TYPES.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted">
          <span className="font-numbers text-text font-medium">{totalCount}</span> hotels found
        </span>
        {(filters.search || filters.state || filters.budget || filters.type) && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors"
          >
            <IoClose className="w-4 h-4" /> Clear filters
          </button>
        )}
      </div>
    </div>
  )
}
