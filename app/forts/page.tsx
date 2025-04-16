import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import RoyalSignature from "@/components/royal-signature"

export default function FortsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Forts of Chhatrapati Shivaji Maharaj"
        description="Explore the magnificent fortresses that formed the backbone of the Maratha Empire"
        backgroundImage="/images/forts-header.jpg"
      />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <RoyalSignature legendary size="lg" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Fortification Strategy</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj's military genius was exemplified in his strategic use of forts. He
                captured, renovated, and built over 300 forts across the Western Ghats, creating a formidable network of
                strongholds that formed the backbone of the Maratha Empire.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                These forts were not merely military installations but complete self-sufficient ecosystems with water
                harvesting systems, granaries, temples, and housing for soldiers and civilians. Their strategic
                locations on hills, mountains, and coastlines provided natural defensive advantages and control over
                important trade routes.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold mb-3 text-orange-800">Fort Classification</h3>
                <p className="text-gray-700 mb-4">
                  Chhatrapati Shivaji Maharaj classified his forts into three categories:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>
                    <strong>Janjira/Jaladurga:</strong> Sea forts built on islands or coastal areas
                  </li>
                  <li>
                    <strong>Giridurga:</strong> Hill forts situated on high elevations
                  </li>
                  <li>
                    <strong>Bhuikot:</strong> Land forts built on plains or lower elevations
                  </li>
                </ul>
                <p className="text-gray-700">
                  Each type of fort had specific defensive features suited to its environment and strategic purpose.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Major Forts and How to Reach Them</h2>

              {/* Raigad Fort */}
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-8 shadow-md">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[300px]">
                    <Image src="/images/raigad-fort.jpg" alt="Raigad Fort" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Raigad Fort</h3>
                    <p className="text-gray-700 mb-4">
                      The capital fort of Chhatrapati Shivaji Maharaj where he was crowned in 1674 and where he breathed
                      his last in 1680. This is also where Mahatma Jyotirao Phule discovered Shivaji's samadhi (tomb) in
                      1869, which had been neglected during British rule.
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900">Historical Significance:</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Capital of the Maratha Empire</li>
                        <li>Site of Shivaji's coronation ceremony</li>
                        <li>Contains Shivaji's samadhi</li>
                        <li>Features the famous Hirakani Buruj (tower)</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900">How to Reach:</h4>
                      <p className="text-sm text-gray-700">
                        Located in Raigad district, approximately 180 km from Mumbai. The nearest railway station is
                        Mangaon (45 km). From there, take a local bus or taxi to the base of the fort. A ropeway is
                        available to reach the top, or you can climb approximately 1,700 steps.
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <a href="https://goo.gl/maps/8ZJXqYQZLZJfNvSS6" target="_blank" rel="noopener noreferrer">
                          View on Google Maps
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50"
                      >
                        <Link href="/forts/raigad">Detailed History</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pratapgad Fort */}
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-8 shadow-md">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[300px]">
                    <Image src="/images/pratapgad.jpg" alt="Pratapgad Fort" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Pratapgad Fort</h3>
                    <p className="text-gray-700 mb-4">
                      Famous for the Battle of Pratapgad (1659) where Chhatrapati Shivaji Maharaj defeated Afzal Khan.
                      This victory was a turning point in establishing Maratha power.
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900">Historical Significance:</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>Site of the famous battle with Afzal Khan</li>
                        <li>Contains a temple of Goddess Bhavani</li>
                        <li>Features a bronze statue of Shivaji Maharaj</li>
                        <li>Strategically located to guard the Par pass</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900">How to Reach:</h4>
                      <p className="text-sm text-gray-700">
                        Located near Mahabaleshwar in Satara district, approximately 230 km from Mumbai. The nearest
                        railway station is Wathar (45 km). From there, take a bus or taxi to the fort. The fort is
                        accessible by road up to a certain point, followed by a short climb.
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <a href="https://goo.gl/maps/5QZJXqYQZLZJfNvSS6" target="_blank" rel="noopener noreferrer">
                          View on Google Maps
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50"
                      >
                        <Link href="/forts/pratapgad">Detailed History</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sindhudurg Fort */}
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-8 shadow-md">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[300px]">
                    <Image src="/images/sindhudurg.jpg" alt="Sindhudurg Fort" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Sindhudurg Fort</h3>
                    <p className="text-gray-700 mb-4">
                      A sea fort built on an island in the Arabian Sea, demonstrating Chhatrapati Shivaji Maharaj's
                      naval vision. It was built to counter foreign naval powers and protect the Maratha coastline.
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900">Historical Significance:</h4>
                      <ul className="list-disc pl-6 text-sm text-gray-700">
                        <li>One of the strongest naval forts in India</li>
                        <li>Contains the only known hand imprint of Shivaji Maharaj</li>
                        <li>Features a temple with Shivaji's idol</li>
                        <li>Built using innovative underwater construction techniques</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900">How to Reach:</h4>
                      <p className="text-sm text-gray-700">
                        Located near Malvan in Sindhudurg district, approximately 500 km from Mumbai. The nearest
                        railway station is Kudal (35 km). From Malvan, boat services are available to reach the fort,
                        which is situated on an island about 1 km from the shore.
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <a href="https://goo.gl/maps/3ZJXqYQZLZJfNvSS6" target="_blank" rel="noopener noreferrer">
                          View on Google Maps
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-600 text-orange-600 hover:bg-orange-50"
                      >
                        <Link href="/forts/sindhudurg">Detailed History</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mb-12">
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/forts/all">View All 300+ Forts</Link>
                </Button>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Fate of the Forts After Shivaji Maharaj</h2>
              <p className="text-lg text-gray-700 mb-4">
                After Chhatrapati Shivaji Maharaj's death in 1680, many of his forts faced various challenges:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Mughal Invasions:</strong> Emperor Aurangzeb launched a massive campaign against the Marathas,
                  capturing many forts during the 27-year war.
                </li>
                <li>
                  <strong>Peshwa Period:</strong> When the Peshwas became the de facto rulers of the Maratha Empire
                  (1713-1818), they recaptured and maintained many of Shivaji's forts, but some were neglected as the
                  administrative capital shifted to Pune.
                </li>
                <li>
                  <strong>British Colonial Period:</strong> The British deliberately destroyed or damaged many forts
                  after defeating the Marathas to prevent future rebellions. They also neglected the historical
                  significance of these structures.
                </li>
                <li>
                  <strong>Post-Independence:</strong> Many forts were in ruins by the time India gained independence.
                  Restoration efforts began in the late 20th century, with the Archaeological Survey of India taking
                  responsibility for preserving these historical monuments.
                </li>
              </ul>

              <div className="bg-orange-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold mb-3 text-orange-800">
                  Mahatma Phule's Discovery of Shivaji's Samadhi
                </h3>
                <p className="text-gray-700 mb-4">
                  In 1869, social reformer Mahatma Jyotirao Phule visited Raigad Fort and discovered the neglected
                  samadhi (tomb) of Chhatrapati Shivaji Maharaj. During British rule, the historical significance of
                  this site had been deliberately obscured.
                </p>
                <p className="text-gray-700 mb-4">
                  Phule was deeply moved by this discovery and wrote a powerful ballad titled "Powada: Chhatrapati
                  Shivaji Raje Bhosle Yancha" (Ballad of Chhatrapati Shivaji Maharaj) in 1869. This work not only
                  honored Shivaji's legacy but also used it to inspire people against the oppression of British
                  colonialism and the caste system.
                </p>
                <p className="text-gray-700">
                  Phule's efforts brought renewed attention to Shivaji's legacy and initiated the process of restoring
                  his historical importance in Indian consciousness. He saw Shivaji as a champion of the oppressed and
                  used his story to advocate for social justice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
