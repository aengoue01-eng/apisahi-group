import { useState } from 'react'

export function useGalleryFilter(items) {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all' ? items : items.filter((item) => item.category === active)

  return { active, setActive, filtered }
}
