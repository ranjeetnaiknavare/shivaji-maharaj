import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import RoyalSignature from "@/components/royal-signature"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function GovernancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Remove the <Navbar /> component from here */}
      <PageHeader
        title="Governance & Administration"
        description="The progressive administrative system established by Chhatrapati Shivaji Maharaj"
        backgroundImage="/images/governance-header.jpg"
      />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <RoyalSignature legendary size="lg" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Visionary Administration</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj was not only a brilliant military strategist but also a visionary
                administrator who established a well-structured and progressive governance system. His administrative
                framework was remarkably advanced for its time and focused on the welfare of all subjects regardless of
                religion or caste.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Many of his administrative innovations laid the foundation for modern governance principles in India,
                emphasizing accountability, efficiency, and public welfare.
              </p>

              <div className="bg-orange-50 p-8 rounded-lg mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="https://i.ibb.co/Lk3QLSJ/rajmudra.jpg"
                      alt="Rajmudra - Royal Seal of Chhatrapati Shivaji Maharaj"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-800">Rajmudra: The Royal Seal</h3>
                    <p className="text-gray-700 mb-4">
                      The Rajmudra (royal seal) of Chhatrapati Shivaji Maharaj was inscribed in Sanskrit and reflected
                      his vision of governance. It read "This is the royal seal of Chhatrapati Shivaji, son of Shahaji.
                      This seal brings happiness to the people as the new moon brings joy to the sea."
                    </p>
                    <p className="text-gray-700">
                      The seal symbolized his commitment to people's welfare and was used on all official documents and
                      proclamations of the Maratha Empire.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/shivaji-durbar.jpg"
                  alt="Chhatrapati Shivaji Maharaj's court"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ashtapradhan: The Council of Eight Ministers</h2>
              <p className="text-lg text-gray-700 mb-4">
                At the heart of Chhatrapati Shivaji Maharaj's administrative system was the Ashtapradhan (Council of
                Eight Ministers), a cabinet of eight ministers who assisted the king in state affairs. Each minister had
                specific responsibilities:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Peshwa (Prime Minister):</strong> Overall administration and representative of the king.
                </li>
                <li>
                  <strong>Amatya (Finance Minister):</strong> Responsible for revenue collection and financial matters.
                </li>
                <li>
                  <strong>Sachiv (Secretary):</strong> Oversaw correspondence and checked all royal letters and
                  documents.
                </li>
                <li>
                  <strong>Mantri (Interior Minister):</strong> In charge of intelligence, internal security, and the
                  king's personal safety.
                </li>
                <li>
                  <strong>Senapati (Commander-in-Chief):</strong> Led the military forces and planned military
                  campaigns.
                </li>
                <li>
                  <strong>Sumant (Foreign Minister):</strong> Handled foreign affairs and advised on relations with
                  other states.
                </li>
                <li>
                  <strong>Nyayadhish (Chief Justice):</strong> Administered justice and resolved civil and criminal
                  disputes.
                </li>
                <li>
                  <strong>Panditrao (Chief Religious Advisor):</strong> Oversaw religious matters and advised on
                  spiritual affairs.
                </li>
              </ul>

              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/ashtapradhan.jpg"
                  alt="Illustration of the Ashtapradhan council"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Revenue System</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj implemented a fair and efficient revenue system that reduced the burden on
                farmers while ensuring adequate resources for the state:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Land Revenue:</strong> The primary tax was collected directly from cultivators, eliminating
                  intermediaries who often exploited farmers.
                </li>
                <li>
                  <strong>Chauth and Sardeshmukhi:</strong> These were taxes (typically 25% and 10% of revenue
                  respectively) collected from territories outside the Maratha kingdom, often in exchange for
                  protection.
                </li>
                <li>
                  <strong>Regular Assessment:</strong> Land was regularly surveyed and assessed to ensure fair taxation
                  based on actual productivity.
                </li>
                <li>
                  <strong>Tax Relief:</strong> During droughts or crop failures, taxes were reduced or waived to protect
                  farmers from hardship.
                </li>
              </ul>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/revenue-collection.jpg"
                    alt="Revenue collection under Chhatrapati Shivaji Maharaj's administration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/farming-maratha.jpg"
                    alt="Farming during the Maratha period"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Judicial System</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj established a hierarchical judicial system that provided justice to all
                citizens:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Village Level:</strong> Local disputes were resolved by village councils (Panchayats).
                </li>
                <li>
                  <strong>District Level:</strong> More complex cases were handled by district officials.
                </li>
                <li>
                  <strong>Royal Court:</strong> The Nyayadhish (Chief Justice) presided over the highest court, with the
                  king as the final authority.
                </li>
                <li>
                  <strong>Equal Justice:</strong> The system was designed to provide fair treatment regardless of social
                  status or religion.
                </li>
              </ul>

              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/justice-system.jpg"
                  alt="Representation of Chhatrapati Shivaji Maharaj's justice system"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Religious Tolerance</h2>
              <p className="text-lg text-gray-700 mb-4">
                Despite establishing a Hindu kingdom, Chhatrapati Shivaji Maharaj was known for his religious tolerance
                and respect for all faiths:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>He employed Muslims in high positions in his administration and military.</li>
                <li>Islamic places of worship were protected during military campaigns.</li>
                <li>He respected the Quran and other religious texts of different faiths.</li>
                <li>Women of all religions were treated with respect during military operations.</li>
              </ul>

              <blockquote className="border-l-4 border-orange-600 pl-4 italic text-xl text-gray-700 mb-8">
                "Every man's religion is a personal matter between him and his God. The state has no business to
                interfere in it."
                <footer className="text-right text-gray-600 mt-2">— Attributed to Chhatrapati Shivaji Maharaj</footer>
              </blockquote>

              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/religious-harmony.jpg"
                  alt="Representation of religious harmony under Chhatrapati Shivaji Maharaj's rule"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Women's Respect and Safety</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj was far ahead of his time in his attitude toward women's safety and dignity:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>He issued strict orders that women were not to be harmed during military campaigns.</li>
                <li>Female captives were treated with respect and safely returned to their families.</li>
                <li>
                  There are numerous accounts of Chhatrapati Shivaji Maharaj returning captured Muslim women with honor
                  and escorts.
                </li>
                <li>Women's property rights were protected under his administration.</li>
              </ul>

              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/women-respect.jpg"
                  alt="Illustration of Chhatrapati Shivaji Maharaj's respect for women"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Cultural Renaissance</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj's rule saw a cultural renaissance in the Maratha region:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>He patronized Sanskrit and Marathi literature, art, and music.</li>
                <li>He encouraged the use of Marathi in administrative affairs, elevating its status.</li>
                <li>Traditional arts and crafts flourished under his patronage.</li>
                <li>He restored and built temples, promoting cultural heritage.</li>
              </ul>

              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/cultural-renaissance.jpg"
                  alt="Cultural activities during Chhatrapati Shivaji Maharaj's reign"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Economic Policies</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj implemented forward-thinking economic policies that promoted trade and
                prosperity:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Trade Promotion:</strong> He established ports and encouraged maritime trade, understanding
                  its importance for economic growth.
                </li>
                <li>
                  <strong>Currency System:</strong> He introduced a standardized currency system with gold (hon), silver
                  (rupee), and copper (paisa) coins.
                </li>
                <li>
                  <strong>Market Regulation:</strong> Fair market practices were enforced to prevent exploitation of
                  consumers and producers.
                </li>
                <li>
                  <strong>Infrastructure Development:</strong> Roads, bridges, and water management systems were built
                  to facilitate trade and agriculture.
                </li>
                <li>
                  <strong>Artisan Protection:</strong> Skilled craftsmen were encouraged and protected, leading to the
                  development of local industries.
                </li>
              </ul>

              <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl mb-12">
                <Image
                  src="/images/maratha-coins.jpg"
                  alt="Currency coins from Shivaji's era"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Administrative Divisions</h2>
              <p className="text-lg text-gray-700 mb-4">
                Chhatrapati Shivaji Maharaj organized his kingdom into well-defined administrative units:
              </p>
              <ul className="list-disc pl-6 mb-8 text-lg text-gray-700 space-y-2">
                <li>
                  <strong>Prant (Province):</strong> The largest administrative division, governed by a Subhedar.
                </li>
                <li>
                  <strong>Paragana (District):</strong> Subdivision of a province, administered by a Deshmukh.
                </li>
                <li>
                  <strong>Mauja (Village):</strong> The smallest unit, managed by a Patil with the assistance of village
                  councils.
                </li>
                <li>
                  <strong>Forts:</strong> Had their own administrative structure with a triumvirate of officers -
                  Havaldar, Sabnis, and Sarnobat.
                </li>
              </ul>

              <div className="bg-orange-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold mb-3 text-orange-800">Legacy of Governance</h3>
                <p className="text-gray-700 mb-4">
                  Chhatrapati Shivaji Maharaj's administrative innovations were far ahead of their time and continue to
                  influence modern governance principles:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>His cabinet system prefigured modern ministerial governments</li>
                  <li>
                    His emphasis on meritocracy over hereditary appointments influenced later administrative reforms
                  </li>
                  <li>His religious tolerance set a precedent for secular governance in a diverse society</li>
                  <li>His direct tax collection system reduced corruption and increased state revenue</li>
                  <li>His judicial reforms emphasized fairness and accessibility for all citizens</li>
                </ul>
                <p className="text-gray-700">
                  Many historians consider Chhatrapati Shivaji Maharaj's administrative system to be one of his most
                  enduring legacies, demonstrating that he was not just a military genius but also a visionary statesman
                  who understood the importance of good governance for the welfare of his people.
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Link href="/military">Military Achievements</Link>
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
