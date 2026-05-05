import { GALLERY_CATEGORIES } from '@/constants/gallery'

export default function GalleryFilter({ active, onSelect }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
      {GALLERY_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200
            ${active === cat.id
              ? 'bg-green text-white border-green shadow-md'
              : 'bg-white text-gray-600 border-gray-200 hover:border-green hover:text-green'
            }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
