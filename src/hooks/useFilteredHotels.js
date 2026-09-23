import { useState, useMemo } from 'react'

export default function useFilteredHotels(hotels, initialFilters = {}) {
  const [filters, setFilters] = useState({
    search: initialFilters.search || '',
    state: initialFilters.state || '',
    type: initialFilters.type || '',
    cities: initialFilters.cities || '',
  })

  const filtered = useMemo(() => {
    return hotels
      .filter(hotel => {
        if (filters.search) {
          const q = filters.search.toLowerCase()
          if (!hotel.name.toLowerCase().includes(q) &&
              !hotel.city.toLowerCase().includes(q) &&
              !hotel.description.toLowerCase().includes(q)) {
            return false
          }
        }
        if (filters.state && hotel.stateId !== filters.state) return false
        if (filters.type && hotel.type !== filters.type) return false
        if (filters.cities && !filters.cities.split('|').includes(hotel.city)) return false
        return true
      })
      .sort((a, b) => {
        const aHas = a.images && a.images.length > 0 ? 1 : 0
        const bHas = b.images && b.images.length > 0 ? 1 : 0
        if (bHas !== aHas) return bHas - aHas
        return b.rating - a.rating
      })
  }, [hotels, filters])

  function updateFilter(key, value) {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  function resetFilters() {
    setFilters({ search: '', state: '', type: '', cities: '' })
  }

  return { filters, filtered, updateFilter, resetFilters }
}
