import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import TimelineSection from "@/components/timeline-section"
import HeroPortrait from "@/components/hero-portrait"
import { RoyalSignature } from "@/components/royal-signature"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pratapgad_fort.jpg/1280px-Pratapgad_fort.jpg"
              alt="Chhatrapati Shivaji Maharaj"
              fill
              className="object-cover brightness-[0.35]"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
              Chhatrapati Shivaji Maharaj
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
              The visionary founder of the Maratha Empire who challenged the mighty Mughal Empire and established a
              progressive Hindu kingdom in 17th century India
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Link href="/biography">Explore His Life</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/forts">Explore His Forts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Historical Portrait Section */}
        <HeroPortrait />

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-serif">The People's King</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Born on February 19, 1630, in the hill-fort of Shivneri, Shivaji Bhonsale, later known as Chhatrapati
                  Shivaji Maharaj, rose to become one of India's greatest warriors and a symbol of resistance against
                  foreign domination.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Against overwhelming odds, he established the Maratha Empire that would later challenge the mighty
                  Mughal Empire. His innovative military tactics, administrative reforms, and respect for all religions
                  made him a visionary leader far ahead of his time.
                </p>
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/biography" className="flex items-center">
                    Read Full Biography <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/chhatrapati-shivaji-maharaj.png"
                  alt="Historical Portrait of Chhatrapati Shivaji Maharaj"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Jijau Maa - Shivaji's Mother */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 font-serif">
              Jijau Maa: The Mother Who Shaped a King
            </h2>

            <div className="flex justify-center mb-8">
              <RoyalSignature legendary size="lg" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl md:order-1 order-2">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Rajmata_Jijabai.jpg/800px-Rajmata_Jijabai.jpg"
                  alt="Jijabai - Mother of Shivaji Maharaj"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:order-2 order-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">The Architect of Shivaji's Character</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Jijabai (1598-1674), affectionately known as Jijau Maa, was not merely the mother of Shivaji Maharaj
                  but the architect of his character and vision. Born into the noble Jadhav family, she was married to
                  Shahaji Bhonsale, a military general.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  When her husband was away serving various sultanates, Jijabai single-handedly raised Shivaji at Pune,
                  instilling in him deep religious values, administrative skills, and the dream of Hindavi Swarajya
                  (self-rule). She narrated stories from Hindu epics like Ramayana and Mahabharata, shaping his
                  understanding of righteous kingship.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Her strength during adversity, unwavering faith, and political acumen deeply influenced Shivaji's
                  governance principles. Historians widely acknowledge that without Jijabai's guidance, Shivaji might
                  never have become the visionary leader who changed the course of Indian history.
                </p>
                <blockquote className="border-l-4 border-orange-600 pl-4 italic text-lg text-gray-700 mb-4">
                  "Behind every great king stands a greater queen mother. Jijabai's contribution to the making of
                  Shivaji Maharaj and consequently to the Maratha Empire cannot be overstated."
                  <footer className="text-right text-gray-600 mt-2">— Modern Historian</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Why "The Great" */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 font-serif">
              Why Shivaji Maharaj is Called "The Great"
            </h2>

            <div className="flex justify-center mb-8">
              <RoyalSignature legendary size="lg" />
            </div>

            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-xl text-gray-700">
                Throughout history, only a select few leaders have earned the epithet "The Great." Chhatrapati Shivaji
                Maharaj stands among them for his extraordinary achievements and lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-orange-600">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Military Genius</h3>
                <p className="text-gray-700 mb-4">
                  With limited resources, Shivaji Maharaj defeated the mighty Mughal Empire and other regional powers
                  through innovative guerrilla warfare tactics. He captured over 300 forts and built a formidable navy
                  at a time when naval warfare was not common in the region.
                </p>
                <p className="text-gray-700">
                  His military strategies are still studied in military academies worldwide, placing him alongside other
                  great military leaders like Alexander and Napoleon.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-orange-600">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Visionary Leadership</h3>
                <p className="text-gray-700 mb-4">
                  Shivaji Maharaj established a progressive administrative system centuries ahead of its time. His
                  Ashtapradhan (Council of Eight Ministers) prefigured modern cabinet systems, while his policies on
                  religious tolerance, women's safety, and meritocracy were revolutionary for the 17th century.
                </p>
                <p className="text-gray-700">
                  He built a nation based on justice, equality, and good governance when most rulers were focused solely
                  on territorial expansion.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-orange-600">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Cultural Renaissance</h3>
                <p className="text-gray-700 mb-4">
                  Shivaji Maharaj sparked a cultural and spiritual renaissance by promoting the use of Marathi language,
                  reviving Hindu traditions while respecting all faiths, and patronizing arts and literature during his
                  reign.
                </p>
                <p className="text-gray-700">
                  His vision of Swarajya (self-rule) inspired generations of freedom fighters and continues to influence
                  Indian political thought to this day.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-orange-600">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "The true measure of greatness lies not just in conquests but in the lasting legacy one leaves behind.
                Shivaji Maharaj's greatness is evident in how his principles and achievements continue to inspire
                millions more than three centuries after his time."
              </blockquote>
              <p className="text-right text-gray-600">— Modern Historian</p>
            </div>
          </div>
        </section>

        {/* NEW SECTION: Sant Tukaram's Influence */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 font-serif">
              Sant Tukaram: The Spiritual Influence
            </h2>

            <div className="flex justify-center mb-8">
              <RoyalSignature legendary size="lg" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">The Saint Who Inspired a King</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Sant Tukaram (1608-1650) was one of the most influential saint-poets of the Bhakti movement in
                  Maharashtra during Shivaji Maharaj's formative years. His devotional poetry (abhangs) and spiritual
                  teachings had a profound impact on the religious and social fabric of the Maratha region.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Shivaji Maharaj deeply respected Tukaram and sought his blessings and guidance. The saint's emphasis
                  on equality of all humans before God, rejection of caste discrimination, and advocacy for social
                  justice resonated with Shivaji's own vision for his kingdom.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Tukaram's teachings influenced Shivaji's approach to governance, particularly his policies on
                  religious tolerance and social welfare. The saint's emphasis on moral integrity and ethical leadership
                  provided spiritual foundation for Shivaji's administrative reforms.
                </p>
                <blockquote className="border-l-4 border-orange-600 pl-4 italic text-lg text-gray-700 mb-4">
                  "The spiritual teachings of Sant Tukaram gave moral authority to Shivaji's political mission,
                  transforming it from mere conquest to righteous governance."
                  <footer className="text-right text-gray-600 mt-2">— R.D. Ranade, Mysticism in Maharashtra</footer>
                </blockquote>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sant_Tukaram.jpg/800px-Sant_Tukaram.jpg"
                  alt="Sant Tukaram"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 font-serif">
              Key Achievements
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/images/fort-icon.svg" alt="Fort Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Military Genius</h3>
                <p className="text-gray-700">
                  Captured over 300 forts and developed guerrilla warfare tactics known as "Ganimi Kava" that allowed
                  his smaller forces to defeat larger armies.
                </p>
                <Link
                  href="/military"
                  className="inline-flex items-center mt-4 text-orange-600 font-medium hover:text-orange-700"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/images/crown-icon.svg" alt="Crown Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Coronation</h3>
                <p className="text-gray-700">
                  Crowned as Chhatrapati (Sovereign) in 1674, establishing an independent Hindu kingdom after centuries
                  of Muslim rule in the region.
                </p>
                <Link
                  href="/biography"
                  className="inline-flex items-center mt-4 text-orange-600 font-medium hover:text-orange-700"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/images/scroll-icon.svg" alt="Scroll Icon" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Progressive Administration</h3>
                <p className="text-gray-700">
                  Established the Ashtapradhan (Council of Eight Ministers) and implemented fair taxation, religious
                  tolerance, and women's rights.
                </p>
                <Link
                  href="/governance"
                  className="inline-flex items-center mt-4 text-orange-600 font-medium hover:text-orange-700"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tributes Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 font-serif">
              Tributes from Great Leaders
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Throughout history, many prominent leaders and social reformers have drawn inspiration from Chhatrapati
              Shivaji Maharaj's life and achievements.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="italic text-gray-700 mb-4 border-l-4 border-orange-300 pl-4">
                  "Shivaji was the raja of the ryots (common people). He protected the honor of women, the religion of
                  all sects, and the safety of their temples."
                </blockquote>
                <p className="text-right text-gray-600">— Mahatma Jyotirao Phule</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="italic text-gray-700 mb-4 border-l-4 border-orange-300 pl-4">
                  "Shivaji was a hero of heroes. His rule was based on dharma. He treated his subjects as his children."
                </blockquote>
                <p className="text-right text-gray-600">— Mahatma Gandhi</p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/tributes" className="flex items-center">
                  Read More Tributes <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Saffron Flag Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bhagwa_Jhanda.jpg/800px-Bhagwa_Jhanda.jpg"
                  alt="Bhagwa Dhwaj - The Saffron Flag"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-serif">
                  Bhagwa Dhwaj: The Saffron Flag
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  The saffron flag, known as "Bhagwa Dhwaj," was the royal banner of Chhatrapati Shivaji Maharaj's
                  Maratha Empire. It symbolized courage, sacrifice, and the resurgence of Hindu pride and sovereignty.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  The flag's distinctive saffron color represents renunciation and sacrifice for the greater good. It
                  continues to be an important symbol in Maharashtra and across India, embodying the spirit of Hindavi
                  Swarajya (self-rule) that Chhatrapati Shivaji Maharaj championed.
                </p>
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/legacy" className="flex items-center">
                    Learn More About Symbols <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <TimelineSection />

        {/* Quote Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">In His Words</h2>
              <blockquote className="text-xl md:text-2xl italic mb-6">
                "Freedom is a boon, which everyone has the right to receive."
              </blockquote>
              <p className="text-lg">— Chhatrapati Shivaji Maharaj</p>
            </div>
          </div>
        </section>

        {/* Forts Preview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 font-serif">
              Magnificent Forts
            </h2>
            <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
              Explore the network of over 300 forts that formed the backbone of Chhatrapati Shivaji Maharaj's military
              strategy and the Maratha Empire.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Raigad_Fort_Aerial_view.jpg/1280px-Raigad_Fort_Aerial_view.jpg"
                  alt="Raigad Fort"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-medium">Raigad Fort</p>
                </div>
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pratapgad_fort.jpg/1280px-Pratapgad_fort.jpg"
                  alt="Pratapgad Fort"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-medium">Pratapgad Fort</p>
                </div>
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sindhudurg_Fort.JPG/1280px-Sindhudurg_Fort.JPG"
                  alt="Sindhudurg Fort"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-medium">Sindhudurg Fort</p>
                </div>
              </div>
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Rajgad_Fort.jpg/1280px-Rajgad_Fort.jpg"
                  alt="Rajgad Fort"
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <p className="text-white font-medium">Rajgad Fort</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link href="/forts">Explore All Forts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Enduring Legacy</h2>
                <p className="text-lg text-gray-300 mb-4">
                  Chhatrapati Shivaji Maharaj's legacy extends far beyond his military conquests. He is remembered as a
                  just ruler who championed the cause of Swarajya (self-rule) and established a government that worked
                  for the welfare of its people.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  His principles of religious tolerance, women's respect, and people-centric governance continue to
                  inspire millions. The Maratha Empire he founded would go on to become the dominant power in 18th
                  century India.
                </p>
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/legacy">Explore His Legacy</Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Statue_of_Shivaji_Maharaj_at_Raigad_Fort.jpg/800px-Statue_of_Shivaji_Maharaj_at_Raigad_Fort.jpg"
                  alt="Chhatrapati Shivaji Maharaj's Legacy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
