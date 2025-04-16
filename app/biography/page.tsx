import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { RoyalSignature } from "@/components/royal-signature"

export default function BiographyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Biography"
        description="The life and journey of Chhatrapati Shivaji Maharaj"
        backgroundImage="/images/biography-header.jpg"
      />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-12">
                <RoyalSignature legendary size="lg" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Early Life</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-700 mb-4">
                    Chhatrapati Shivaji Maharaj was born on February 19, 1630, in the hill-fort of Shivneri near Pune.
                    He was named after the local deity Shivai. His father, Shahaji Bhonsale, was a military general who
                    served the Deccan Sultanates, while his mother, Jijabai, was a deeply religious woman who had a
                    profound influence on Chhatrapati Shivaji Maharaj's upbringing.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Jijabai instilled in young Chhatrapati Shivaji Maharaj a strong sense of religious and cultural
                    values, often telling him stories from Hindu epics like the Ramayana and Mahabharata. These tales of
                    righteous kings and brave warriors would shape Chhatrapati Shivaji Maharaj's character and vision
                    for the future.
                  </p>
                  <p className="text-lg text-gray-700">
                    Chhatrapati Shivaji Maharaj's education was overseen by his guardian, Dadoji Konddeo, who trained
                    him in martial arts, horse riding, and military tactics. He also learned statecraft, which would
                    later prove invaluable in his administrative reforms.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shivaji_British_Museum.jpg-l4GEH799GvKBDe9rhYgRCjiZVeHSMA.jpeg"
                    alt="Young Chhatrapati Shivaji Maharaj"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Rise to Power</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg md:order-1 order-2">
                  <Image
                    src="/images/shivaji-young-leader.jpg"
                    alt="Young Chhatrapati Shivaji Maharaj as a leader"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 md:order-2 order-1">
                  <p className="text-lg text-gray-700 mb-4">
                    At the young age of 16, Chhatrapati Shivaji Maharaj captured his first fort, Torna, in 1646, marking
                    the beginning of his lifelong mission to establish Swarajya (self-rule). This was followed by the
                    capture of the Raigad Fort, which would later become his capital.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    By 1655, Chhatrapati Shivaji Maharaj had control over several strategic forts in the Sahyadri
                    mountain range. His growing power soon brought him into conflict with the Adilshahi Sultanate of
                    Bijapur, which sent the general Afzal Khan to subdue him in 1659.
                  </p>
                  <p className="text-lg text-gray-700">
                    In a legendary encounter at Pratapgad, Chhatrapati Shivaji Maharaj outmaneuvered and killed Afzal
                    Khan, who had come with treacherous intentions. This victory significantly enhanced Chhatrapati
                    Shivaji Maharaj's reputation and strengthened his position in the region.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Conflict with the Mughals</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-2">
                  <p className="text-lg text-gray-700 mb-4">
                    Chhatrapati Shivaji Maharaj's growing power soon attracted the attention of the Mughal Emperor
                    Aurangzeb, who sent his maternal uncle Shaista Khan to suppress the Maratha leader in 1660. Shaista
                    Khan occupied Pune and established his residence in Chhatrapati Shivaji Maharaj's palace, Lal Mahal.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    In a daring night raid in April 1663, Chhatrapati Shivaji Maharaj infiltrated the heavily guarded
                    palace with a small band of men and attacked Shaista Khan, who barely escaped with his life but lost
                    his fingers in the process. This audacious act further enhanced Chhatrapati Shivaji Maharaj's
                    reputation for courage and tactical brilliance.
                  </p>
                  <p className="text-lg text-gray-700">
                    In 1664, Chhatrapati Shivaji Maharaj led a raid on the wealthy port city of Surat, a key Mughal
                    trading center. This prompted Emperor Aurangzeb to send his most capable general, Mirza Raja Jai
                    Singh, against Chhatrapati Shivaji Maharaj. After a series of battles, Chhatrapati Shivaji Maharaj
                    was forced to sign the Treaty of Purandar in 1665, surrendering many of his forts to the Mughals.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/shivaji-aurangzeb.jpg"
                    alt="Chhatrapati Shivaji Maharaj and Aurangzeb conflict"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Agra Visit and Escape</h2>
              <p className="text-lg text-gray-700 mb-4">
                As part of the treaty, Chhatrapati Shivaji Maharaj was invited to Agra by Emperor Aurangzeb in 1666.
                However, when he felt disrespected at the Mughal court and feared for his life, Chhatrapati Shivaji
                Maharaj made a daring escape from Agra, reportedly hiding in large fruit baskets. This escape is
                celebrated as another example of his resourcefulness and courage.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                After returning to his territory, Chhatrapati Shivaji Maharaj resumed his campaign against the Mughals
                and gradually recaptured many of the forts he had surrendered. His military successes continued, and by
                1670, he had recovered most of his lost territories.
              </p>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/shivaji-escape-agra.jpg"
                  alt="Chhatrapati Shivaji Maharaj's escape from Agra"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Coronation and Later Years</h2>
              <p className="text-lg text-gray-700 mb-4">
                On June 6, 1674, Chhatrapati Shivaji Maharaj was crowned Chhatrapati (Sovereign) of the Maratha Kingdom
                in an elaborate coronation ceremony at Raigad Fort. This event marked the establishment of a sovereign
                Hindu state after centuries of Muslim rule in the region.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                After his coronation, Chhatrapati Shivaji Maharaj continued to expand his kingdom through military
                campaigns in the south. He captured several territories in present-day Karnataka and Tamil Nadu,
                extending Maratha influence deep into southern India.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Chhatrapati Shivaji Maharaj passed away on April 3, 1680, at the age of 50, at Raigad Fort. His son
                Sambhaji succeeded him as the ruler of the Maratha Kingdom. Though his life was relatively short,
                Chhatrapati Shivaji Maharaj's legacy would endure for centuries, inspiring generations of Indians in
                their struggle for freedom and self-rule.
              </p>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/shivaji-coronation.jpg"
                  alt="Chhatrapati Shivaji Maharaj's coronation ceremony"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Link href="/military">Military Achievements</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/governance">Governance & Administration</Link>
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
