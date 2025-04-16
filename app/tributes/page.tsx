import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import RoyalSignature from "@/components/royal-signature"

export default function TributesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Tributes to Chhatrapati Shivaji Maharaj"
        description="How great leaders and thinkers have viewed the legacy of the Maratha warrior king"
        backgroundImage="/images/tributes-header.jpg"
      />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <RoyalSignature legendary size="lg" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Tributes from Great Leaders</h2>
              <p className="text-lg text-gray-700 mb-8">
                Throughout history, many prominent leaders, social reformers, and freedom fighters have drawn
                inspiration from Chhatrapati Shivaji Maharaj's life and achievements. Their words reflect the enduring
                impact of Shivaji's legacy on Indian thought and national consciousness.
              </p>

              {/* Dr. B.R. Ambedkar */}
              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Dr. B.R. Ambedkar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Dr. B.R. Ambedkar</h3>
                    <blockquote className="italic text-gray-700 mb-4 border-l-4 border-orange-300 pl-4">
                      "Shivaji was not merely a Hindu king, he represented the forces of nationalism which included all
                      those who loved the land and opposed foreign domination. If Shivaji had been born in a lower
                      caste, the Brahmins would never have allowed him to perform the coronation ceremony."
                    </blockquote>
                    <p className="text-gray-700">
                      Dr. Ambedkar admired Shivaji Maharaj for his progressive social outlook and his challenge to
                      Brahminical orthodoxy. He pointed out how Shivaji had to face opposition from Brahmins for his
                      coronation despite his achievements, highlighting the caste prejudices of the time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mahatma Jyotirao Phule */}
              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Mahatma Jyotirao Phule"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Mahatma Jyotirao Phule</h3>
                    <blockquote className="italic text-gray-700 mb-4 border-l-4 border-orange-300 pl-4">
                      "Shivaji was the raja of the ryots (common people). He protected the honor of women, the religion
                      of all sects, and the safety of their temples. He saved the country from the clutches of the
                      Mughals and established Swarajya."
                    </blockquote>
                    <p className="text-gray-700 mb-4">
                      Mahatma Phule was one of the earliest social reformers to recognize Shivaji's significance as a
                      symbol of indigenous resistance against both foreign rule and Brahminical domination. In 1869, he
                      wrote a powerful ballad on Shivaji that portrayed him as a king of the common people rather than
                      just a Hindu king.
                    </p>
                    <p className="text-gray-700">
                      Phule's discovery of Shivaji's neglected samadhi at Raigad Fort in 1869 was a pivotal moment that
                      sparked renewed interest in Shivaji's legacy. He used Shivaji's example to inspire the lower
                      castes to fight against social oppression.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mahatma Gandhi */}
              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Mahatma Gandhi"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Mahatma Gandhi</h3>
                    <blockquote className="italic text-gray-700 mb-4 border-l-4 border-orange-300 pl-4">
                      "Shivaji was a hero of heroes. He possessed all the qualities that a ruler should have. His rule
                      was based on dharma. He treated his subjects as his children. He was a deeply religious man, but
                      his religion did not teach him to hate those who professed a different faith from his own."
                    </blockquote>
                    <p className="text-gray-700">
                      Mahatma Gandhi admired Shivaji's religious tolerance and his people-centric governance. He often
                      cited Shivaji's respect for all religions as an example of true Hinduism and used it to promote
                      Hindu-Muslim unity during the freedom struggle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lokmanya Bal Gangadhar Tilak */}
              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Lokmanya Bal Gangadhar Tilak"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Lokmanya Bal Gangadhar Tilak</h3>
                    <blockquote className="italic text-gray-700 mb-4 border-l-4 border-orange-300 pl-4">
                      "Shivaji is not merely a person; he is an institution. His life is a message to the world. He has
                      shown how a united nation can be built despite differences of caste and creed."
                    </blockquote>
                    <p className="text-gray-700">
                      Tilak was instrumental in popularizing Shivaji as a national hero during the Indian independence
                      movement. He started the public celebration of Shivaji Jayanti (Shivaji's birth anniversary) in
                      1895 to awaken nationalist sentiment among the masses and used Shivaji's legacy to inspire
                      resistance against British colonial rule.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rabindranath Tagore */}
              <div className="bg-orange-50 rounded-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative h-32 w-32 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Rabindranath Tagore"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Rabindranath Tagore</h3>
                    <blockquote className="italic text-gray-700 mb-4 border-l-4 border-orange-300 pl-4">
                      "Shivaji knew that the mere political freedom without spiritual strength at its back would be like
                      a corpse without life. He knew that it was his mission to build up a nation and not merely a
                      kingdom."
                    </blockquote>
                    <p className="text-gray-700">
                      Tagore admired Shivaji's vision that went beyond mere territorial conquest to nation-building. He
                      appreciated how Shivaji combined political acumen with spiritual and cultural values to create a
                      sense of national identity among his people.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Shivaji Maharaj and the Brahmin Orthodoxy</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj's relationship with the Brahmin orthodoxy was complex and often contentious:
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">During His Lifetime</h3>
              <p className="text-lg text-gray-700 mb-4">
                When Shivaji decided to hold his coronation ceremony in 1674, he faced significant opposition from
                Brahmin priests who refused to perform the ritual for several reasons:
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>
                  They questioned his Kshatriya (warrior caste) status, claiming he was from the Shudra (lower) caste
                </li>
                <li>They objected to his family's history as military servicemen rather than hereditary royalty</li>
                <li>Some were aligned with Mughal or Adilshahi interests and opposed Shivaji politically</li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Shivaji had to bring the renowned scholar Gagabhatt from Benares (Varanasi), who established his
                Kshatriya lineage from the Sisodia Rajputs and performed the coronation ceremony. Even then, Shivaji had
                to pay enormous sums of money and perform elaborate penance rituals to satisfy the orthodox Brahmins.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">After His Death</h3>
              <p className="text-lg text-gray-700 mb-4">
                After Chhatrapati Shivaji Maharaj's death in 1680, the Brahmin orthodoxy's relationship with his legacy
                evolved:
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-700 space-y-2">
                <li>
                  During the Peshwa period (1713-1818), when Brahmin Peshwas became the de facto rulers of the Maratha
                  Empire, they appropriated Shivaji's legacy while simultaneously instituting stricter caste hierarchies
                </li>
                <li>Many historical records were altered to downplay Shivaji's progressive social policies</li>
                <li>His samadhi at Raigad was neglected until Mahatma Jyotirao Phule rediscovered it in 1869</li>
                <li>
                  Some Brahmin historians portrayed Shivaji primarily as a defender of Hinduism rather than as a secular
                  ruler who respected all religions
                </li>
              </ul>
              <p className="text-lg text-gray-700 mb-6">
                Dr. B.R. Ambedkar later pointed out this historical irony: the same Brahmin orthodoxy that had initially
                resisted Shivaji's coronation later claimed his legacy when it became politically expedient to do so.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold mb-3 text-orange-800">The Transition to Peshwa Rule</h3>
                <p className="text-gray-700 mb-4">
                  After Chhatrapati Shivaji Maharaj's death in 1680, the Maratha Empire faced significant challenges:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>His son Sambhaji ruled from 1680 to 1689 but was captured and executed by the Mughals</li>
                  <li>Sambhaji's son Shahu was taken captive by the Mughals and released only in 1707</li>
                  <li>During this period of turmoil, the position of Peshwa (Prime Minister) grew in importance</li>
                  <li>In 1713, Balaji Vishwanath became Peshwa and established hereditary succession to this office</li>
                  <li>
                    His son, Bajirao I (1720-1740), was a brilliant military commander who greatly expanded Maratha
                    territories
                  </li>
                  <li>
                    By the time of Bajirao I, the Peshwas had become the de facto rulers, with the descendants of
                    Shivaji serving as titular kings
                  </li>
                </ul>
                <p className="text-gray-700">
                  While the Peshwas expanded the Maratha Empire to its greatest extent, they also altered many of
                  Shivaji's original policies. They instituted a more orthodox Brahminical system, strengthened caste
                  hierarchies, and moved away from Shivaji's more inclusive approach to governance.
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Link href="/legacy">Return to Legacy</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/">Home</Link>
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
