import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'

export default function SearchBar({ onSearch, placeholder = 'Search hotels, destinations, or states...', className = '', large = false }) {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (onSearch) onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-white border border-border rounded-xl pl-12 pr-4 text-text placeholder:text-muted outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 ${large ? 'py-4 text-lg' : 'py-3 text-base'}`}
        aria-label="Search"
      />
    </form>
  )
}
