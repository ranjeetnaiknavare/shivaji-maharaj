import Image from "next/image"

interface FortCardProps {
  name: string
  image: string
  description: string
}

export default function FortCard({ name, image, description }: FortCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg?height=400&width=600&query=ancient fort in Maharashtra mountains"}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  )
}
