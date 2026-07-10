import SEO from '../components/ui/SEO'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import FilterBar from '../components/filters/FilterBar'
import HotelCard from '../components/cards/HotelCard'
import useFilteredHotels from '../hooks/useFilteredHotels'
import hotels from '../data/hotels'
import destinations from '../data/destinations'
import collections from '../data/collections'

export default function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { filters, filtered, updateFilter, resetFilters } = useFilteredHotels(hotels)

  useEffect(() => {
    const dest = searchParams.get('destination')
    const col = searchParams.get('collection')
    const search = searchParams.get('search')

    if (dest) {
      const destination = destinations.find(d => d.slug === dest)
      if (destination) updateFilter('search', destination.name)
    }
    if (col) {
      const collection = collections.find(c => c.slug === col)
      if (collection) updateFilter('search', collection.name)
    }
    if (search) {
      updateFilter('search', search)
    }
  }, [])

  function handleFilterChange(key, value) {
    updateFilter(key, value)
  }

  function handleReset() {
    resetFilters()
    setSearchParams({})
  }

  return (
    <div className="py-10 md:py-16">
      <SEO title="Premium Hotels" description="Browse our curated collection of India's finest luxury hotels. Filter by state and property type." />
      <Container>
        <SectionHeading
          title="Discover Premium Hotels"
          subtitle="Browse our curated collection of India's finest hotels across all states."
          align="left"
          className="mb-8"
        />

        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
          totalCount={filtered.length}
        />

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filtered.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted mb-2">No hotels found</p>
            <p className="text-sm text-muted">Try adjusting your filters</p>
          </div>
        )}
      </Container>
    </div>
  )
}
