export function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}


export function getHotelsByState(hotels, stateId) {
  return hotels.filter(hotel => hotel.stateId === stateId)
}

export function getHotelsByDestination(hotels, destinationSlug) {
  return hotels.filter(hotel => hotel.destinationSlugs?.includes(destinationSlug))
}

export function getHotelsByCollection(hotels, hotelIds) {
  return hotels.filter(hotel => hotelIds.includes(hotel.id))
}

export function getRelatedHotels(hotels, currentHotel, count = 3) {
  return hotels
    .filter(h => h.id !== currentHotel.id && (h.stateId === currentHotel.stateId || h.type === currentHotel.type))
    .slice(0, count)
}

export function generateStarRating(rating) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5 ? 1 : 0
  const empty = 5 - full - half
  return { full, half, empty }
}
