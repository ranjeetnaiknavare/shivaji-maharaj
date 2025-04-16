import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import RoyalSignature from "@/components/royal-signature"

// This is a placeholder. In a real application, you would fetch data based on the slug
export default function FortDetailPage({ params }: { params: { slug: string } }) {
  // Mock data for demonstration
  const fortData = {
    raigad: {
      name: "Raigad Fort",
      description: "The capital fort of Chhatrapati Shivaji Maharaj where he was crowned in 1674.",
      history:
        "Raigad was captured by Shivaji in 1656 from the Nizam of Ahmednagar. It was then known as Rairi. Shivaji renovated and expanded the fort, making it his capital in 1674 when he was crowned as Chhatrapati. The fort is located at an elevation of about 2,700 feet and covers an area of approximately 1,300 acres.",
      significance:
        "Raigad served as the capital of the Maratha Empire during Shivaji's reign. It was here that he was crowned as Chhatrapati (sovereign) in an elaborate ceremony on June 6, 1674. The fort also houses Shivaji's samadhi (tomb), which was discovered by Mahatma Jyotirao Phule in 1869 after years of neglect during British rule.",
      architecture:
        "The fort features impressive defensive structures, including multiple layers of fortification walls, numerous bastions, and strategically placed cannons. It also contains several notable structures such as the Hirakani Buruj (tower), the Mena Darwaza (main entrance), the royal court, and various temples.",
      fate: "After Shivaji's death in 1680, the fort remained the capital during Sambhaji's rule. It was captured by the Mughals in 1689 and later passed through various hands. During the Peshwa period, the capital shifted to Pune, and Raigad lost its political importance. The British captured it in 1818 and deliberately neglected its historical significance.",
      restoration:
        "After independence, the Archaeological Survey of India took over the preservation of the fort. Major restoration work was undertaken in the 1970s and continues today. A ropeway was installed in 1996 to make the fort more accessible to visitors.",
      location: "Located in Raigad district of Maharashtra, approximately 180 km from Mumbai.",
      howToReach:
        "The nearest railway station is Mangaon (45 km). From there, take a local bus or taxi to the base of the fort. A ropeway is available to reach the top, or you can climb approximately 1,700 steps.",
      bestTimeToVisit:
        "October to March, when the weather is pleasant. Avoid the monsoon season (June to September) as the steps can become slippery.",
      nearbyAttractions: "Lingana Fort, Torana Fort, Pratapgad Fort, Mahad town.",
      mapUrl: "https://goo.gl/maps/8ZJXqYQZLZJfNvSS6",
      images: ["/images/raigad-fort.jpg", "/images/raigad-aerial.jpg", "/images/raigad-entrance.jpg"],
    },
    pratapgad: {
      name: "Pratapgad Fort",
      description: "Famous for the Battle of Pratapgad (1659) where Chhatrapati Shivaji Maharaj defeated Afzal Khan.",
      // Add other details similar to Raigad
      mapUrl: "https://goo.gl/maps/5QZJXqYQZLZJfNvSS6",
      images: ["/images/pratapgad.jpg", "/images/pratapgad-battle.jpg"],
    },
    sindhudurg: {
      name: "Sindhudurg Fort",
      description:
        "A sea fort built on an island in the Arabian Sea, demonstrating Chhatrapati Shivaji Maharaj's naval vision.",
      // Add other details similar to Raigad
      mapUrl: "https://goo.gl/maps/3ZJXqYQZLZJfNvSS6",
      images: ["/images/sindhudurg.jpg", "/images/sindhudurg-complete.jpg"],
    },
  }

  const fort = fortData[params.slug as keyof typeof fortData] || {
    name: "Fort Not Found",
    description: "Information about this fort is not available.",
    history: "",
    significance: "",
    architecture: "",
    fate: "",
    restoration: "",
    location: "",
    howToReach: "",
    bestTimeToVisit: "",
    nearbyAttractions: "",
    mapUrl: "",
    images: [],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title={fort.name}
        description={fort.description}
        backgroundImage={fort.images[0] || "/images/forts-header.jpg"}
      />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <RoyalSignature size="lg" />
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {fort.images.map((image, index) => (
                  <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${fort.name} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Google Maps Embed */}
              {fort.mapUrl && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Location</h2>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d73.4!3d18.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDEyJzAwLjAiTiA3M8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin`}
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Historical Information */}
              {fort.history && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Historical Background</h2>
                  <p className="text-lg text-gray-700">{fort.history}</p>
                </div>
              )}

              {/* Significance */}
              {fort.significance && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Historical Significance</h2>
                  <p className="text-lg text-gray-700">{fort.significance}</p>
                </div>
              )}

              {/* Architecture */}
              {fort.architecture && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Architecture and Features</h2>
                  <p className="text-lg text-gray-700">{fort.architecture}</p>
                </div>
              )}

              {/* Fate After Shivaji */}
              {fort.fate && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Fate After Chhatrapati Shivaji Maharaj</h2>
                  <p className="text-lg text-gray-700">{fort.fate}</p>
                </div>
              )}

              {/* Restoration Efforts */}
              {fort.restoration && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Restoration and Preservation</h2>
                  <p className="text-lg text-gray-700">{fort.restoration}</p>
                </div>
              )}

              {/* Visitor Information */}
              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 text-orange-800">Visitor Information</h2>

                {fort.location && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Location</h3>
                    <p className="text-gray-700">{fort.location}</p>
                  </div>
                )}

                {fort.howToReach && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">How to Reach</h3>
                    <p className="text-gray-700">{fort.howToReach}</p>
                  </div>
                )}

                {fort.bestTimeToVisit && (
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Best Time to Visit</h3>
                    <p className="text-gray-700">{fort.bestTimeToVisit}</p>
                  </div>
                )}

                {fort.nearbyAttractions && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Nearby Attractions</h3>
                    <p className="text-gray-700">{fort.nearbyAttractions}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Link href="/forts">Back to All Forts</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <a href={fort.mapUrl} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </a>
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
