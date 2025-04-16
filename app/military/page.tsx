import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import FortCard from "@/components/fort-card"
import { RoyalSignature } from "@/components/royal-signature"

export default function MilitaryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Military Achievements"
        description="The warfare tactics and conquests of Chhatrapati Shivaji Maharaj"
        backgroundImage="/images/military-header.jpg"
      />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <RoyalSignature legendary size="lg" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Military Genius</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj is renowned for his military genius and innovative warfare tactics. Despite
                commanding smaller forces than his adversaries, he consistently outmaneuvered and defeated larger armies
                through strategic brilliance, knowledge of terrain, and unconventional tactics.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                His military achievements include capturing over 300 forts, establishing a powerful navy, and
                successfully challenging the mighty Mughal Empire and other regional powers of his time.
              </p>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/shivaji-battle.jpg"
                  alt="Chhatrapati Shivaji Maharaj in battle"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Guerrilla Warfare: Ganimi Kava</h2>
              <p className="text-lg text-gray-700 mb-4">
                One of Chhatrapati Shivaji Maharaj's most significant contributions to military strategy was his
                perfection of guerrilla warfare, known as "Ganimi Kava" (enemy tactics). This approach allowed his
                smaller forces to effectively combat the numerically superior armies of the Mughals and other powers.
              </p>
              <p className="text-lg text-gray-700 mb-4">Key elements of Ganimi Kava included:</p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  Mobility and speed: Maratha forces could cover large distances quickly, allowing for surprise attacks.
                </li>
                <li>Knowledge of terrain: Utilizing the mountainous Sahyadri range to their advantage.</li>
                <li>
                  Intelligence network: Maintaining an extensive spy system that provided crucial information about
                  enemy movements.
                </li>
                <li>
                  Hit-and-run tactics: Attacking swiftly and retreating before the enemy could organize a counterattack.
                </li>
                <li>Night raids: Conducting operations under the cover of darkness to maximize surprise.</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/guerrilla-warfare.jpg"
                    alt="Illustration of guerrilla warfare tactics"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image src="/images/maratha-cavalry.jpg" alt="Maratha cavalry" fill className="object-cover" />
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-12">
                <h3 className="text-xl font-bold mb-3 text-orange-800">The Warrior King's Oath</h3>
                <p className="text-gray-700 italic">
                  "I swear in the name of God that I will protect my people and my land from all enemies. The saffron
                  flag shall fly high, and the Maratha Empire shall prosper under its shade."
                </p>
                <p className="text-right text-gray-600 mt-2">— Attributed to Chhatrapati Shivaji Maharaj</p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Notable Military Campaigns</h2>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Battle of Pratapgad (1659)</h3>
              <p className="text-lg text-gray-700 mb-4">
                One of Chhatrapati Shivaji Maharaj's most famous victories was against Afzal Khan, a general of the
                Adilshahi Sultanate of Bijapur. When Afzal Khan attempted to kill Chhatrapati Shivaji Maharaj during
                what was supposed to be a peaceful meeting, Chhatrapati Shivaji Maharaj was prepared with concealed
                weapons and killed the general instead. The Maratha forces then routed the Bijapur army in the ensuing
                battle.
              </p>
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-8">
                <Image src="/images/pratapgad-battle.jpg" alt="Battle of Pratapgad" fill className="object-cover" />
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Raid on Shaista Khan (1663)</h3>
              <p className="text-lg text-gray-700 mb-4">
                When Mughal general Shaista Khan occupied Pune and established his residence in Chhatrapati Shivaji
                Maharaj's palace, Lal Mahal, Chhatrapati Shivaji Maharaj executed a daring night raid. With a small band
                of men, he infiltrated the heavily guarded palace and attacked Shaista Khan, who barely escaped but lost
                his fingers in the process. This audacious act demonstrated Chhatrapati Shivaji Maharaj's courage and
                tactical brilliance.
              </p>
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-8">
                <Image src="/images/shaista-khan-raid.jpg" alt="Raid on Shaista Khan" fill className="object-cover" />
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sack of Surat (1664)</h3>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj led a raid on Surat, one of the Mughal Empire's richest ports, acquiring
                significant wealth while specifically avoiding harm to foreign traders and common citizens. This
                strategic raid not only provided resources for his campaigns but also directly challenged Mughal
                authority, prompting Emperor Aurangzeb to take personal interest in subduing Chhatrapati Shivaji
                Maharaj.
              </p>
              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-8">
                <Image src="/images/surat-raid.jpg" alt="Sack of Surat" fill className="object-cover" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Naval Power</h2>
              <p className="text-lg text-gray-700 mb-4">
                Recognizing the strategic importance of controlling the coastline, Chhatrapati Shivaji Maharaj built a
                strong navy that consisted of approximately 400 ships of various types. This naval force protected
                Maratha territories from European powers like the Portuguese, British, and Dutch, while also securing
                trade routes.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Chhatrapati Shivaji Maharaj constructed coastal forts like Sindhudurg, Vijaydurg, and Kulaba to protect
                his naval interests. His admiral, Kanhoji Angre, would later become legendary for his naval prowess and
                for keeping European powers at bay.
              </p>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image src="/images/maratha-navy.jpg" alt="Maratha Navy" fill className="object-cover" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Fort Architecture and Strategy</h2>
              <p className="text-lg text-gray-700 mb-6">
                Forts were central to Chhatrapati Shivaji Maharaj's military strategy. He captured, renovated, and built
                numerous forts across the Western Ghats, creating a network of strongholds that formed the backbone of
                the Maratha Empire. These forts were strategically located to control important trade routes and provide
                defensive advantages.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <FortCard
                  name="Raigad Fort"
                  image="/images/raigad-fort.jpg"
                  description="Served as Chhatrapati Shivaji Maharaj's capital and the site of his coronation. Its strategic location made it almost impregnable."
                />
                <FortCard
                  name="Pratapgad Fort"
                  image="/images/pratapgad.jpg"
                  description="Site of the famous battle against Afzal Khan. Built to guard the banks of the Koyna River."
                />
                <FortCard
                  name="Sindhudurg Fort"
                  image="/images/sindhudurg.jpg"
                  description="A sea fort built on an island in the Arabian Sea, demonstrating Chhatrapati Shivaji Maharaj's focus on naval power."
                />
                <FortCard
                  name="Rajgad Fort"
                  image="/images/rajgad.jpg"
                  description="One of Chhatrapati Shivaji Maharaj's earliest capitals, featuring three distinct fortified sections and extensive water storage."
                />
              </div>

              <p className="text-lg text-gray-700 mb-8">
                Chhatrapati Shivaji Maharaj's forts incorporated innovative defensive features, including multiple
                layers of walls, strategic gateways designed to confuse attackers, and water harvesting systems that
                allowed for long sieges.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Military Organization</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj organized his army into a structured force with clear hierarchies and
                specialized units:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Infantry (Mavle):</strong> Foot soldiers recruited primarily from the Maval region, known for
                  their ability to navigate difficult terrain.
                </li>
                <li>
                  <strong>Cavalry:</strong> Mobile horsemen divided into two types - Bargirs (soldiers provided with
                  horses by the state) and Shiledars (soldiers who brought their own horses).
                </li>
                <li>
                  <strong>Artillery:</strong> Cannon operators who provided firepower during sieges and battles.
                </li>
                <li>
                  <strong>Navy:</strong> Maritime force that protected coastal areas and engaged in sea battles.
                </li>
              </ul>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Link href="/governance">Governance & Administration</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/legacy">Legacy</Link>
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
