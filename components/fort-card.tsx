import Image from "next/image"

interface FortCardProps {
  name: string
  image: string
  description: string
}

export default function FortCard({ name, image, description }: FortCardProps) {
  // Map of fort names to real images
  const fortImages: Record<string, string> = {
    "Raigad Fort":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Raigad_Fort_Aerial_view.jpg/1280px-Raigad_Fort_Aerial_view.jpg",
    "Pratapgad Fort":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pratapgad_fort.jpg/1280px-Pratapgad_fort.jpg",
    "Sindhudurg Fort":
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sindhudurg_Fort.JPG/1280px-Sindhudurg_Fort.JPG",
    "Rajgad Fort": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Rajgad_Fort.jpg/1280px-Rajgad_Fort.jpg",
  }

  // Use the mapped image if available, otherwise use the provided image or a default
  const imageUrl =
    fortImages[name] || image || "/placeholder.svg?height=400&width=600&query=ancient fort in Maharashtra mountains"

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  )
}
