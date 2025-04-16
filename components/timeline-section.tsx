import type React from "react"
import { Sword, Crown, Shield, Scroll, Ship, Mountain, Castle, Heart } from "lucide-react"
import Image from "next/image"
import RoyalSignature from "@/components/royal-signature"

export default function TimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
          Timeline of Chhatrapati Shivaji Maharaj
        </h2>

        <div className="flex justify-center mb-8">
          <RoyalSignature legendary size="lg" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            <TimelineItem
              year="1630"
              title="Birth of Chhatrapati Shivaji Maharaj"
              description="Born to Shahaji Bhonsale and Jijabai at Shivneri Fort. His mother Jijabai was a deeply religious woman who instilled in him strong values and a sense of purpose."
              icon={<Crown className="w-6 h-6" />}
              color="bg-orange-100 text-orange-600 border-orange-300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Shivneri_Fort_Entrance.jpg/1280px-Shivneri_Fort_Entrance.jpg"
              imageAlt="Shivneri Fort - Birthplace of Shivaji Maharaj"
            />
            <TimelineItem
              year="1646"
              title="First Military Success"
              description="At the age of 16, captured his first fort, Torna, from the Bijapur Sultanate. This marked the beginning of his lifelong mission to establish Swarajya (self-rule)."
              icon={<Castle className="w-6 h-6" />}
              color="bg-blue-100 text-blue-600 border-blue-300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Torna_Fort.jpg/1280px-Torna_Fort.jpg"
              imageAlt="Torna Fort - First conquest of Shivaji Maharaj"
              reverse
            />
            <TimelineItem
              year="1656"
              title="Captured Raigad Fort"
              description="Took control of Raigad, which would later become his capital. The fort's strategic location made it an ideal administrative center for the growing Maratha kingdom."
              icon={<Mountain className="w-6 h-6" />}
              color="bg-green-100 text-green-600 border-green-300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Raigad_Fort_Aerial_view.jpg/1280px-Raigad_Fort_Aerial_view.jpg"
              imageAlt="Raigad Fort - Capital of Shivaji's kingdom"
            />
            <TimelineItem
              year="1659"
              title="Battle of Pratapgad"
              description="Defeated and killed Afzal Khan, a general of the Adilshahi Sultanate, in a legendary encounter that significantly enhanced his reputation and strengthened his position."
              icon={<Sword className="w-6 h-6" />}
              color="bg-red-100 text-red-600 border-red-300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pratapgad_fort.jpg/1280px-Pratapgad_fort.jpg"
              imageAlt="Battle of Pratapgad - Victory over Afzal Khan"
              reverse
            />
            <TimelineItem
              year="1664"
              title="Sack of Surat"
              description="Led a raid on Surat, one of the Mughal Empire's richest ports. This bold move directly challenged Mughal authority and provided resources for his campaigns."
              icon={<Ship className="w-6 h-6" />}
              color="bg-purple-100 text-purple-600 border-purple-300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Surat_Castle.jpg/1280px-Surat_Castle.jpg"
              imageAlt="Sack of Surat - Challenging the Mughal Empire"
            />
            <TimelineItem
              year="1666"
              title="Agra Visit and Escape"
              description="Visited Emperor Aurangzeb's court in Agra and made a daring escape when he felt threatened. This escape is celebrated as another example of his resourcefulness and courage."
              icon={<Shield className="w-6 h-6" />}
              color="bg-amber-100 text-amber-600 border-amber-300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Agra_Fort_-_Diwan-i-Am.jpg/1280px-Agra_Fort_-_Diwan-i-Am.jpg"
              imageAlt="Shivaji's escape from Agra"
              reverse
            />
            <TimelineItem
              year="1674"
              title="Coronation as Chhatrapati"
              description="Crowned as Chhatrapati (Sovereign) at Raigad Fort, establishing an independent Maratha kingdom. This historic event marked the establishment of a sovereign Hindu state after centuries of Muslim rule."
              icon={<Crown className="w-6 h-6" />}
              color="bg-orange-100 text-orange-600 border-orange-300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Statue_of_Shivaji_Maharaj_at_Raigad_Fort.jpg/800px-Statue_of_Shivaji_Maharaj_at_Raigad_Fort.jpg"
              imageAlt="Coronation ceremony of Shivaji Maharaj"
            />
            <TimelineItem
              year="1670-1680"
              title="Administrative Reforms"
              description="Implemented progressive governance systems including the Ashtapradhan (Council of Eight Ministers), fair taxation, and a judicial system that provided justice to all citizens regardless of religion or caste."
              icon={<Scroll className="w-6 h-6" />}
              color="bg-teal-100 text-teal-600 border-teal-300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Darbar_Hall_at_Raigad_Fort.jpg/1280px-Darbar_Hall_at_Raigad_Fort.jpg"
              imageAlt="Shivaji's administrative council"
              reverse
            />
            <TimelineItem
              year="1680"
              title="Death and Legacy"
              description="Passed away at Raigad Fort at the age of 50, leaving behind a legacy that would shape Indian history. His vision of Swarajya and his principles of governance continue to inspire millions."
              icon={<Heart className="w-6 h-6" />}
              color="bg-gray-100 text-gray-600 border-gray-300"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Samadhi_of_Chhatrapati_Shivaji_Maharaj.jpg/1280px-Samadhi_of_Chhatrapati_Shivaji_Maharaj.jpg"
              imageAlt="Legacy of Shivaji Maharaj"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  image: string
  imageAlt: string
  reverse?: boolean
}

function TimelineItem({ year, title, description, icon, color, image, imageAlt, reverse = false }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent"></div>

      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-start gap-6`}>
        {/* Icon and year */}
        <div className="flex flex-col items-center z-10 mr-4">
          <div className={`flex items-center justify-center w-16 h-16 rounded-full ${color} border-2 shadow-lg`}>
            {icon}
          </div>
          <div className="mt-2 px-3 py-1 bg-orange-600 text-white rounded-full font-bold text-sm shadow-md">{year}</div>
        </div>

        {/* Content */}
        <div className={`flex-1 ${reverse ? "md:pr-8" : "md:pl-8"}`}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-100 hover:shadow-xl transition-shadow">
            <div className="relative h-48 md:h-64">
              <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-4 left-4 right-4 text-xl md:text-2xl font-bold text-white">{title}</h3>
            </div>
            <div className="p-4 md:p-6">
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
