import Image from "next/image"

interface GalleryImageProps {
  src: string
  alt: string
  caption: string
}

export default function GalleryImage({ src, alt, caption }: GalleryImageProps) {
  return (
    <div className="group">
      <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
        <Image
          src={src || "/placeholder.svg?height=400&width=600&query=historical image of Maratha Empire"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="mt-2 text-sm text-gray-600 text-center">{caption}</p>
    </div>
  )
}
