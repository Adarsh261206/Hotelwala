import { useState, useMemo } from 'react'

export default function useFilteredHotels(hotels) {
  const [filters, setFilters] = useState({
    search: '',
    state: '',


    type: '',
  })

  const filtered = useMemo(() => {
    return hotels.filter(hotel => {
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

      return true
    })
  }, [hotels, filters])

  function updateFilter(key, value) {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  function resetFilters() {
    setFilters({ search: '', state: '', type: '' })
  }

  return { filters, filtered, updateFilter, resetFilters }
}
