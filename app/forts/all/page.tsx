"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import RoyalSignature from "@/components/royal-signature"

export default function AllFortsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  // This would typically come from a database or API
  const forts = [
    // Konkan Region
    {
      id: "raigad",
      name: "Raigad Fort",
      region: "Konkan",
      type: "Hill Fort",
      image: "/images/raigad-fort.jpg",
      description: "Capital fort of Chhatrapati Shivaji Maharaj where he was crowned in 1674.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "sindhudurg",
      name: "Sindhudurg Fort",
      region: "Konkan",
      type: "Sea Fort",
      image: "/images/sindhudurg.jpg",
      description: "Naval fortress built on an island in the Arabian Sea.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "vijaydurg",
      name: "Vijaydurg Fort",
      region: "Konkan",
      type: "Sea Fort",
      image: "/images/vijaydurg.jpg",
      description: "One of the oldest sea forts on the Konkan coast, known as the 'Victory Fort'.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "jaigad",
      name: "Jaigad Fort",
      region: "Konkan",
      type: "Sea Fort",
      image: "/images/jaigad.jpg",
      description: "Strategic sea fort at the mouth of the Shastri river.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "suvarnadurg",
      name: "Suvarnadurg Fort",
      region: "Konkan",
      type: "Sea Fort",
      image: "/images/suvarnadurg.jpg",
      description: "Island fort that was a major naval base for the Marathas.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "kolaba",
      name: "Kolaba Fort",
      region: "Konkan",
      type: "Sea Fort",
      image: "/images/kolaba.jpg",
      description: "Sea fort near Alibag that can be accessed by foot during low tide.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "khanderi",
      name: "Khanderi Fort",
      region: "Konkan",
      type: "Sea Fort",
      image: "/images/khanderi.jpg",
      description: "Island fort that protected the shipping routes to Mumbai.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "underi",
      name: "Underi Fort",
      region: "Konkan",
      type: "Sea Fort",
      image: "/images/underi.jpg",
      description: "Sister fort to Khanderi, built to control the naval routes to Mumbai.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "revdanda",
      name: "Revdanda Fort",
      region: "Konkan",
      type: "Sea Fort",
      image: "/images/revdanda.jpg",
      description: "Coastal fort that guarded the Kundalika river estuary.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "padmadurg",
      name: "Padmadurg Fort",
      region: "Konkan",
      type: "Sea Fort",
      image: "/images/padmadurg.jpg",
      description: "Sea fort built by Shivaji Maharaj to counter Portuguese naval power.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },

    // Western Ghats Region
    {
      id: "pratapgad",
      name: "Pratapgad Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/pratapgad.jpg",
      description: "Site of the famous battle with Afzal Khan in 1659.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "rajgad",
      name: "Rajgad Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/rajgad.jpg",
      description: "One of Shivaji's earliest capitals with three distinct fortified sections.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "torna",
      name: "Torna Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/torna-fort.jpg",
      description: "The first fort captured by Shivaji at the age of 16 in 1646.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "panhala",
      name: "Panhala Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/panhala-fort.jpg",
      description: "Where Shivaji made his famous escape to Vishalgad.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "vishalgad",
      name: "Vishalgad Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/vishalgad.jpg",
      description: "Fort where Shivaji escaped after the siege of Panhala.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "sinhagad",
      name: "Sinhagad Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/sinhagad.jpg",
      description: "Originally called Kondhana, renamed after the battle led by Tanaji Malusare.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "purandar",
      name: "Purandar Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/purandar.jpg",
      description: "Where the Treaty of Purandar was signed between Shivaji and the Mughals.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "lohagad",
      name: "Lohagad Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/lohagad.jpg",
      description: "Iron fort connected to Visapur fort, used as a treasury by Shivaji.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "visapur",
      name: "Visapur Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/visapur.jpg",
      description: "Twin fort to Lohagad, situated at a higher elevation.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "tikona",
      name: "Tikona Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/tikona.jpg",
      description: "Triangular fort with steep climbs and strategic views of surrounding areas.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "korigad",
      name: "Korigad Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/korigad.jpg",
      description: "Fort with a nearly circular shape and well-preserved structures.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "rajmachi",
      name: "Rajmachi Fort",
      region: "Western Ghats",
      type: "Hill Fort",
      image: "/images/rajmachi.jpg",
      description: "Twin fortification consisting of Shrivardhan and Manaranjan forts.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },

    // Northern Maharashtra Region
    {
      id: "salher",
      name: "Salher Fort",
      region: "Northern Maharashtra",
      type: "Hill Fort",
      image: "/images/salher.jpg",
      description: "Highest fort in the Sahyadri range, site of a major Maratha victory.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "trimbakgad",
      name: "Trimbakgad Fort",
      region: "Northern Maharashtra",
      type: "Hill Fort",
      image: "/images/trimbakgad.jpg",
      description: "Fort near the holy town of Trimbak, source of the Godavari river.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "harihar",
      name: "Harihar Fort",
      region: "Northern Maharashtra",
      type: "Hill Fort",
      image: "/images/harihar.jpg",
      description: "Known for its unique rock-cut steps and challenging climb.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "aundha",
      name: "Aundha Fort",
      region: "Northern Maharashtra",
      type: "Hill Fort",
      image: "/images/aundha.jpg",
      description: "Fort known for its natural defenses and strategic location.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "mulher",
      name: "Mulher Fort",
      region: "Northern Maharashtra",
      type: "Hill Fort",
      image: "/images/mulher.jpg",
      description: "Important fort in the Baglan region, captured during Shivaji's northern campaign.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "salota",
      name: "Salota Fort",
      region: "Northern Maharashtra",
      type: "Hill Fort",
      image: "/images/salota.jpg",
      description: "Fort that guarded the trade routes in northern Maharashtra.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "ahivant",
      name: "Ahivant Fort",
      region: "Northern Maharashtra",
      type: "Land Fort",
      image: "/images/ahivant.jpg",
      description: "Fort that controlled the surrounding agricultural lands.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },

    // Deccan Plateau Region
    {
      id: "shivneri",
      name: "Shivneri Fort",
      region: "Deccan Plateau",
      type: "Hill Fort",
      image: "/images/shivneri.jpg",
      description: "Birthplace of Chhatrapati Shivaji Maharaj in 1630.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "torana",
      name: "Torana Fort",
      region: "Deccan Plateau",
      type: "Hill Fort",
      image: "/images/torana.jpg",
      description: "First fort captured by Shivaji at the age of 16, marking the beginning of Swarajya.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "chakan",
      name: "Chakan Fort",
      region: "Deccan Plateau",
      type: "Land Fort",
      image: "/images/chakan.jpg",
      description: "Fort known for its heroic defense by Firangoji Narsala against the Mughals.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "ahmednagar",
      name: "Ahmednagar Fort",
      region: "Deccan Plateau",
      type: "Land Fort",
      image: "/images/ahmednagar.jpg",
      description: "One of the strongest land forts captured by the Marathas.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "junnar",
      name: "Junnar Fort",
      region: "Deccan Plateau",
      type: "Hill Fort",
      image: "/images/junnar.jpg",
      description: "Ancient fort complex with multiple fortifications near Shivneri.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "harishchandragad",
      name: "Harishchandragad Fort",
      region: "Deccan Plateau",
      type: "Hill Fort",
      image: "/images/harishchandragad.jpg",
      description: "Ancient fort with the famous Konkan Kada cliff and Kedareshwar cave temple.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "chavand",
      name: "Chavand Fort",
      region: "Deccan Plateau",
      type: "Hill Fort",
      image: "/images/chavand.jpg",
      description: "Also known as Prasannagad, one of the last forts where Shivaji stayed.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },

    // Southern Maharashtra Region
    {
      id: "panhala",
      name: "Panhala Fort",
      region: "Southern Maharashtra",
      type: "Hill Fort",
      image: "/images/panhala-fort.jpg",
      description: "One of the largest forts in the Deccan, where Shivaji spent over 500 days.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "rangna",
      name: "Rangna Fort",
      region: "Southern Maharashtra",
      type: "Hill Fort",
      image: "/images/rangna.jpg",
      description: "Massive fort with three distinct sections in the Sahyadri range.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "bhudargad",
      name: "Bhudargad Fort",
      region: "Southern Maharashtra",
      type: "Hill Fort",
      image: "/images/bhudargad.jpg",
      description: "Fort that controlled an important trade route to the Konkan region.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "samangad",
      name: "Samangad Fort",
      region: "Southern Maharashtra",
      type: "Hill Fort",
      image: "/images/samangad.jpg",
      description: "Fort known for its double line of fortifications and natural defenses.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "vishalgad",
      name: "Vishalgad Fort",
      region: "Southern Maharashtra",
      type: "Hill Fort",
      image: "/images/vishalgad.jpg",
      description: "Fort where Shivaji escaped after breaking the siege of Panhala.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "gagangad",
      name: "Gagangad Fort",
      region: "Southern Maharashtra",
      type: "Hill Fort",
      image: "/images/gagangad.jpg",
      description: "High-altitude fort with panoramic views of the surrounding valleys.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "bavda",
      name: "Bavda Fort",
      region: "Southern Maharashtra",
      type: "Hill Fort",
      image: "/images/bavda.jpg",
      description: "Fort that served as a base for operations in southern Maharashtra.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },

    // Karnataka Region
    {
      id: "gajendragad",
      name: "Gajendragad Fort",
      region: "Karnataka",
      type: "Hill Fort",
      image: "/images/gajendragad.jpg",
      description: "Fort captured during Shivaji's southern campaign.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "koppal",
      name: "Koppal Fort",
      region: "Karnataka",
      type: "Hill Fort",
      image: "/images/koppal.jpg",
      description: "Ancient fort captured by Shivaji during his Karnataka expedition.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "parali",
      name: "Parali Fort",
      region: "Karnataka",
      type: "Hill Fort",
      image: "/images/parali.jpg",
      description: "Strategic fort in northern Karnataka captured by the Marathas.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "vellore",
      name: "Vellore Fort",
      region: "Karnataka",
      type: "Land Fort",
      image: "/images/vellore.jpg",
      description: "Massive fort with a moat that was briefly under Maratha control.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
    {
      id: "jinji",
      name: "Jinji Fort",
      region: "Karnataka",
      type: "Hill Fort",
      image: "/images/jinji.jpg",
      description: "Massive fort complex captured during Shivaji's southern expedition.",
      mapUrl: "https://goo.gl/maps/Ld1Ug8JHPvVQKsLu5",
    },
  ]

  // Filter forts based on active filter
  const filteredForts = activeFilter === "all" ? forts : forts.filter((fort) => fort.type === activeFilter)

  // Group forts by region
  const fortsByRegion = filteredForts.reduce(
    (acc, fort) => {
      if (!acc[fort.region]) {
        acc[fort.region] = []
      }
      acc[fort.region].push(fort)
      return acc
    },
    {} as Record<string, typeof forts>,
  )

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="All Forts of Chhatrapati Shivaji Maharaj"
        description="Explore the network of over 300 forts that formed the backbone of the Maratha Empire"
        backgroundImage="/images/forts-header.jpg"
      />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-8">
                <RoyalSignature legendary size="lg" />
              </div>

              <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
                Chhatrapati Shivaji Maharaj captured, renovated, and built over 300 forts across the Western Ghats and
                coastal regions. This extensive network of fortifications was crucial to the military strategy and
                administrative structure of the Maratha Empire.
              </p>

              <div className="mb-8">
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <Button
                    variant="outline"
                    className={
                      activeFilter === "all"
                        ? "border-orange-600 bg-orange-50 text-orange-600"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }
                    onClick={() => setActiveFilter("all")}
                  >
                    All Forts
                  </Button>
                  <Button
                    variant="outline"
                    className={
                      activeFilter === "Hill Fort"
                        ? "border-orange-600 bg-orange-50 text-orange-600"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }
                    onClick={() => setActiveFilter("Hill Fort")}
                  >
                    Hill Forts
                  </Button>
                  <Button
                    variant="outline"
                    className={
                      activeFilter === "Sea Fort"
                        ? "border-orange-600 bg-orange-50 text-orange-600"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }
                    onClick={() => setActiveFilter("Sea Fort")}
                  >
                    Sea Forts
                  </Button>
                  <Button
                    variant="outline"
                    className={
                      activeFilter === "Land Fort"
                        ? "border-orange-600 bg-orange-50 text-orange-600"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }
                    onClick={() => setActiveFilter("Land Fort")}
                  >
                    Land Forts
                  </Button>
                </div>
              </div>

              {Object.keys(fortsByRegion).length > 0 ? (
                Object.entries(fortsByRegion).map(([region, regionForts]) => (
                  <div key={region} className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-orange-200 pb-2">
                      {region} Region
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {regionForts.map((fort) => (
                        <Link key={fort.id} href={`/forts/${fort.id}`} className="block">
                          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                            <div className="relative h-48">
                              <Image
                                src={fort.image || "/placeholder.svg?height=400&width=600"}
                                alt={fort.name}
                                fill
                                className="object-cover"
                              />
                              <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                                {fort.type}
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-bold mb-1 text-gray-900">{fort.name}</h3>
                              <p className="text-sm text-gray-700 mb-2">{fort.description}</p>
                              <div className="flex justify-between items-center">
                                <span className="text-orange-600 text-sm font-medium">View details →</span>
                                <a
                                  href={fort.mapUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-xs text-gray-500 hover:text-orange-600 underline"
                                >
                                  Google Maps
                                </a>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-700">No forts found matching the selected filter.</p>
                  <Button
                    variant="outline"
                    className="mt-4 border-orange-600 text-orange-600 hover:bg-orange-50"
                    onClick={() => setActiveFilter("all")}
                  >
                    Show All Forts
                  </Button>
                </div>
              )}

              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-orange-800">Did You Know?</h3>
                <p className="text-gray-700">
                  Chhatrapati Shivaji Maharaj developed an innovative system of fort administration. Each fort had a
                  triumvirate of officers - the Havaldar (commander), the Sabnis (record keeper), and the Sarnobat
                  (military commander) - who reported directly to the king, creating a system of checks and balances to
                  prevent any single person from gaining too much power.
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-500 italic mb-4">
                  This is a partial list. Chhatrapati Shivaji Maharaj's network included over 300 forts across
                  Maharashtra and neighboring regions.
                </p>
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/forts">Back to Main Forts Page</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
