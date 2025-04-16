import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { RoyalSignature } from "@/components/royal-signature"

export default function LegacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Legacy"
        description="The enduring impact of Chhatrapati Shivaji Maharaj"
        backgroundImage="/images/legacy-header.jpg"
      />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <RoyalSignature legendary size="lg" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Enduring Legacy</h2>
              <p className="text-lg text-gray-700 mb-4">
                Few historical figures have left as profound an impact on Indian history and culture as Chhatrapati
                Shivaji Maharaj. His legacy extends far beyond his military conquests and administrative reforms,
                shaping the national consciousness and inspiring generations of Indians.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                More than 340 years after his death, Shivaji remains a powerful symbol of courage, good governance, and
                resistance against oppression.
              </p>

              <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">
                  Shivaji Jayanti: Celebrating the Warrior King
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <p className="text-gray-700 mb-4">
                    Shivaji Jayanti, the birth anniversary of Chhatrapati Shivaji Maharaj, is celebrated with great
                    enthusiasm throughout Maharashtra and other parts of India on February 19th. The day is marked by
                    processions, cultural programs, and speeches highlighting the achievements and values of the great
                    Maratha warrior.
                  </p>
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://i.ibb.co/Jk1Lm1L/shivaji-jayanti.jpg"
                      alt="Shivaji Jayanti Celebrations"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  The celebrations feature the prominent display of the saffron flag (Bhagwa Dhwaj) and reenactments of
                  key events from Chhatrapati Shivaji Maharaj's life. Schools, colleges, and government offices in
                  Maharashtra often organize special events to commemorate the occasion.
                </p>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/shivaji-legacy-wide.jpg"
                  alt="Shivaji Maharaj's enduring legacy"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">The Maratha Empire After Shivaji</h2>
              <p className="text-lg text-gray-700 mb-4">
                The empire that Shivaji founded would go on to become the dominant power in 18th century India:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  After Shivaji's death in 1680, his son Sambhaji continued his father's policies until his capture and
                  execution by the Mughals in 1689.
                </li>
                <li>
                  Under later rulers, particularly during the Peshwa period (1713-1818), the Maratha Empire expanded to
                  control much of the Indian subcontinent.
                </li>
                <li>
                  At its peak, the Maratha Empire extended from Tamil Nadu in the south to Peshawar (modern-day
                  Pakistan) in the north.
                </li>
                <li>
                  The Marathas effectively ended Mughal dominance in India and established themselves as the paramount
                  power until the rise of the British East India Company.
                </li>
              </ul>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/maratha-empire-map.jpg"
                  alt="Map of the Maratha Empire at its peak"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Inspiration During the Freedom Struggle</h2>
              <p className="text-lg text-gray-700 mb-4">
                During India's struggle for independence from British colonial rule, Shivaji emerged as a powerful
                symbol of indigenous resistance against foreign domination:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  Freedom fighters like Bal Gangadhar Tilak popularized Shivaji as a national hero who had successfully
                  challenged foreign rule.
                </li>
                <li>
                  Tilak started the public celebration of Shivaji Jayanti (Shivaji's birth anniversary) to inspire
                  patriotic sentiment.
                </li>
                <li>
                  Vinayak Damodar Savarkar wrote "Shivaji va Uska Yug" (Shivaji and His Era), highlighting Shivaji's
                  achievements.
                </li>
                <li>Mahatma Gandhi praised Shivaji's administrative acumen and his respect for all religions.</li>
                <li>Subhas Chandra Bose named an Indian National Army regiment after Shivaji.</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/tilak-shivaji.jpg"
                    alt="Bal Gangadhar Tilak celebrating Shivaji Jayanti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/freedom-struggle.jpg"
                    alt="Shivaji's inspiration during freedom struggle"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Cultural Impact</h2>
              <p className="text-lg text-gray-700 mb-4">
                Shivaji's influence on Indian culture, particularly in Maharashtra, has been immense:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Literature:</strong> Countless books, poems, plays, and songs have been written about Shivaji
                  in multiple languages.
                </li>
                <li>
                  <strong>Cinema:</strong> Numerous films and television series have portrayed his life and
                  achievements.
                </li>
                <li>
                  <strong>Art:</strong> His image appears in paintings, sculptures, and other art forms throughout
                  India.
                </li>
                <li>
                  <strong>Festivals:</strong> Shivaji Jayanti is celebrated with great enthusiasm, especially in
                  Maharashtra.
                </li>
                <li>
                  <strong>Place Names:</strong> Many institutions, places, and landmarks are named after him, including
                  Mumbai's Chhatrapati Shivaji Maharaj International Airport and Chhatrapati Shivaji Terminus railway
                  station.
                </li>
              </ul>

              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/shivaji-cultural-impact.jpg"
                  alt="Cultural celebrations of Shivaji Maharaj"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Monuments and Memorials</h2>
              <p className="text-lg text-gray-700 mb-4">Numerous monuments and memorials honor Shivaji's legacy:</p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Shivaji Statue at Raigad:</strong> A grand statue at his capital fort.
                </li>
                <li>
                  <strong>Gateway of India Statue:</strong> An equestrian statue in Mumbai.
                </li>
                <li>
                  <strong>Shiv Smarak:</strong> A massive statue being constructed in the Arabian Sea off Mumbai's
                  coast, set to be one of the world's tallest statues.
                </li>
                <li>
                  <strong>Fort Preservation:</strong> Many of the forts associated with Shivaji are preserved as
                  historical monuments.
                </li>
              </ul>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/shivaji-statue-gateway.jpg"
                    alt="Shivaji statue near Gateway of India"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/shiv-smarak.jpg"
                    alt="Proposed Shiv Smarak in Arabian Sea"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Political Legacy</h2>
              <p className="text-lg text-gray-700 mb-4">
                Shivaji's political legacy continues to influence modern Indian politics:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>Political parties, particularly in Maharashtra, often invoke Shivaji's name and ideals.</li>
                <li>
                  His governance principles, including his council of ministers, influenced the structure of modern
                  Indian government.
                </li>
                <li>
                  His emphasis on self-rule (Swarajya) resonated with India's independence movement and continues to
                  inspire regional autonomy movements.
                </li>
                <li>
                  His inclusive approach to governance serves as a model for secular administration in a diverse
                  society.
                </li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Military Legacy</h2>
              <p className="text-lg text-gray-700 mb-4">Shivaji's military innovations have had a lasting impact:</p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>His guerrilla warfare tactics influenced later resistance movements worldwide.</li>
                <li>The Indian Navy considers him the father of Indian naval power.</li>
                <li>Military academies study his strategies and leadership qualities.</li>
                <li>Several Indian military units and vessels are named after him or his associates.</li>
              </ul>

              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/indian-navy-shivaji.jpg"
                  alt="Indian Navy honoring Shivaji's naval legacy"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Relevance Today</h2>
              <p className="text-lg text-gray-700 mb-4">
                Shivaji's principles and leadership qualities continue to be relevant in contemporary times:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Inclusive Leadership:</strong> His respect for all religions offers a model for leadership in
                  diverse societies.
                </li>
                <li>
                  <strong>Women's Dignity:</strong> His strict policies protecting women's honor resonate with modern
                  gender equality movements.
                </li>
                <li>
                  <strong>Adaptive Strategy:</strong> His ability to innovate and adapt to changing circumstances
                  provides lessons for modern leadership.
                </li>
                <li>
                  <strong>People-Centric Governance:</strong> His focus on the welfare of common citizens offers
                  insights for contemporary governance.
                </li>
                <li>
                  <strong>Environmental Consciousness:</strong> His water conservation efforts through lakes and wells
                  in forts demonstrate early environmental awareness.
                </li>
              </ul>

              <blockquote className="border-l-4 border-orange-600 pl-4 italic text-xl text-gray-700 mb-8">
                "Shivaji was not merely a warrior or a king; he was a visionary who laid the foundation for a just and
                inclusive society. His legacy transcends time and continues to inspire us to build a better world."
                <footer className="text-right text-gray-600 mt-2">— Modern historian</footer>
              </blockquote>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Link href="/gallery">View Gallery</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/">Return Home</Link>
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
