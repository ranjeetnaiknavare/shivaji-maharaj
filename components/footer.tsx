import Link from "next/link"
import Image from "next/image"
import { RoyalSignature } from "@/components/royal-signature"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 font-serif">Chhatrapati Shivaji Maharaj</h3>
            <div className="flex items-center mb-4">
              <RoyalSignature inverted legendary size="sm" className="mr-4" />
              <p className="text-sm text-gray-400 italic">The royal signature</p>
            </div>
            <p className="text-gray-400 mb-4">
              Celebrating the life and legacy of one of India's greatest warriors and visionary leaders.
            </p>
            <p className="text-gray-400">
              This website is dedicated to preserving and sharing the history of Chhatrapati Shivaji Maharaj and his
              contributions to Indian culture, governance, and military strategy.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/biography" className="text-gray-400 hover:text-white transition-colors">
                  Biography
                </Link>
              </li>
              <li>
                <Link href="/military" className="text-gray-400 hover:text-white transition-colors">
                  Military Achievements
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-gray-400 hover:text-white transition-colors">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/forts" className="text-gray-400 hover:text-white transition-colors">
                  Forts
                </Link>
              </li>
              <li>
                <Link href="/tributes" className="text-gray-400 hover:text-white transition-colors">
                  Tributes
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-gray-400 hover:text-white transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/legacy" className="text-gray-400 hover:text-white transition-colors">
                  Legacy
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Shivaji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Wikipedia
                </a>
              </li>
              <li>
                <a
                  href="https://www.maharashtra.gov.in/1125/Chhatrapati-Shivaji-Maharaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Maharashtra Tourism
                </a>
              </li>
              <li>
                <a
                  href="https://asi.nic.in/raigad-fort/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Archaeological Survey of India
                </a>
              </li>
              <li>
                <a
                  href="https://www.sahapedia.org/chhatrapati-shivaji-maharaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sahapedia
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <div className="flex justify-center mb-4">
            <div className="relative h-10 w-16">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bhagwa_Jhanda.jpg/800px-Bhagwa_Jhanda.jpg"
                alt="Bhagwa Dhwaj"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
          <p>Dedicated to sharing the legacy of Chhatrapati Shivaji Maharaj with a global audience.</p>
          <p className="mt-2 text-sm">
            This educational resource aims to bridge cultural and linguistic barriers, making the inspiring story of
            Shivaji Maharaj accessible to all.
          </p>
        </div>
      </div>
    </footer>
  )
}
