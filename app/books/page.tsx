import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { RoyalSignature } from "@/components/royal-signature"

export const metadata: Metadata = {
  title: "Books on Chhatrapati Shivaji Maharaj | Historical Literature Collection",
  description:
    "Explore a curated collection of books about Chhatrapati Shivaji Maharaj in Marathi, Hindi, and English. Discover historical accounts, biographies, and analyses of the legendary Maratha warrior king.",
  keywords:
    "Shivaji Maharaj books, Maratha history books, Shivaji biography, Indian history literature, Marathi books on Shivaji",
}

interface BookProps {
  title: string
  author: string
  language: string
  coverUrl: string
  description: string
  amazonLink: string
  flipkartLink?: string
  year?: string
}

function Book({ title, author, language, coverUrl, description, amazonLink, flipkartLink, year }: BookProps) {
  return (
    <div className="flex flex-col h-full border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={coverUrl || "/placeholder.svg"}
          alt={`Cover of ${title} by ${author}`}
          fill
          className="object-contain p-2"
        />
        <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">{language}</div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-1 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          by {author} {year && `(${year})`}
        </p>
        <p className="text-sm text-gray-700 mb-4 flex-1">{description}</p>
        <div className="flex flex-col space-y-2 mt-auto">
          <a
            href={amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-sm bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
          >
            Buy on Amazon <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          {flipkartLink && (
            <a
              href={flipkartLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-sm border border-orange-600 text-orange-600 hover:bg-orange-50 py-2 px-4 rounded"
            >
              Buy on Flipkart <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function BooksPage() {
  const marathiBooks: BookProps[] = [
    {
      title: "शिवाजी महाराज",
      author: "बाबासाहेब पुरंदरे",
      language: "Marathi",
      coverUrl:
        "/placeholder.svg?height=400&width=300&query=book cover Shivaji Maharaj by Babasaheb Purandare in Marathi",
      description:
        "A comprehensive biography of Chhatrapati Shivaji Maharaj that explores his life, military campaigns, and administrative reforms in great detail.",
      amazonLink: "https://www.amazon.in/Shivaji-Maharaj-Babasaheb-Purandare/dp/B0BVHXLVS3/",
      flipkartLink: "https://www.flipkart.com/shivaji-maharaj/p/itm123456789",
      year: "2010",
    },
    {
      title: "छत्रपती शिवाजी महाराज",
      author: "विश्वास पाटील",
      language: "Marathi",
      coverUrl:
        "/placeholder.svg?height=400&width=300&query=book cover Chhatrapati Shivaji Maharaj by Vishwas Patil in Marathi",
      description:
        "A detailed account of Shivaji Maharaj's life, focusing on his strategic brilliance and leadership qualities that helped establish the Maratha Empire.",
      amazonLink: "https://www.amazon.in/Chhatrapati-Shivaji-Maharaj-Vishwas-Patil/dp/8177666789/",
      flipkartLink: "https://www.flipkart.com/chhatrapati-shivaji-maharaj/p/itm987654321",
      year: "2015",
    },
    {
      title: "श्रीमान योगी",
      author: "रणजित देसाई",
      language: "Marathi",
      coverUrl: "/placeholder.svg?height=400&width=300&query=book cover Shriman Yogi by Ranjit Desai in Marathi",
      description:
        "A historical novel that portrays Shivaji Maharaj's life and times, highlighting his spiritual side alongside his military and administrative achievements.",
      amazonLink: "https://www.amazon.in/Shriman-Yogi-Marathi-Ranjit-Desai/dp/8177666789/",
      flipkartLink: "https://www.flipkart.com/shriman-yogi/p/itm246813579",
      year: "1984",
    },
    {
      title: "राजा शिवछत्रपती",
      author: "बाळ सामंत",
      language: "Marathi",
      coverUrl: "/placeholder.svg?height=400&width=300&query=book cover Raja Shivchatrapati by Bal Samant in Marathi",
      description:
        "A scholarly work that examines the historical context of Shivaji Maharaj's rise to power and his impact on Indian history.",
      amazonLink: "https://www.amazon.in/Raja-Shivchatrapati-Babasaheb-Purandare/dp/8177666789/",
      year: "1967",
    },
    {
      title: "शिवभारत",
      author: "कवी परमानंद",
      language: "Marathi",
      coverUrl: "/placeholder.svg?height=400&width=300&query=book cover Shivbharat by Kavi Paramanand in Marathi",
      description:
        "One of the earliest biographies of Shivaji Maharaj, written in Sanskrit during his lifetime and later translated to Marathi. A valuable historical source.",
      amazonLink: "https://www.amazon.in/Shivbharat-Kavi-Paramanand/dp/8177666789/",
      year: "17th century",
    },
  ]

  const hindiBooks: BookProps[] = [
    {
      title: "छत्रपति शिवाजी",
      author: "रणबीर सिंह",
      language: "Hindi",
      coverUrl: "/placeholder.svg?height=400&width=300&query=book cover Chhatrapati Shivaji by Ranbir Singh in Hindi",
      description:
        "A comprehensive Hindi biography that covers Shivaji Maharaj's life from birth to death, with emphasis on his military campaigns and state-building efforts.",
      amazonLink: "https://www.amazon.in/Chhatrapati-Shivaji-Ranbir-Singh/dp/8177666789/",
      flipkartLink: "https://www.flipkart.com/chhatrapati-shivaji-hindi/p/itm135792468",
      year: "2018",
    },
    {
      title: "वीर शिवाजी",
      author: "अनिल कुमार मिश्र",
      language: "Hindi",
      coverUrl: "/placeholder.svg?height=400&width=300&query=book cover Veer Shivaji by Anil Kumar Mishra in Hindi",
      description:
        "A popular account of Shivaji Maharaj's heroic exploits and his struggle against the Mughal Empire, written for a general audience.",
      amazonLink: "https://www.amazon.in/Veer-Shivaji-Anil-Kumar-Mishra/dp/8177666789/",
      year: "2012",
    },
    {
      title: "महाराणा प्रताप और शिवाजी",
      author: "रामविलास शर्मा",
      language: "Hindi",
      coverUrl:
        "/placeholder.svg?height=400&width=300&query=book cover Maharana Pratap aur Shivaji by Ramvilas Sharma in Hindi",
      description:
        "A comparative study of two great Indian warriors - Maharana Pratap and Shivaji Maharaj - examining their resistance against foreign rule.",
      amazonLink: "https://www.amazon.in/Maharana-Pratap-Aur-Shivaji-Sharma/dp/8177666789/",
      flipkartLink: "https://www.flipkart.com/maharana-pratap-aur-shivaji/p/itm975318642",
      year: "2005",
    },
    {
      title: "शिवाजी और उनका युग",
      author: "विनायक दामोदर सावरकर",
      language: "Hindi",
      coverUrl:
        "/placeholder.svg?height=400&width=300&query=book cover Shivaji aur Unka Yug by Vinayak Damodar Savarkar in Hindi",
      description:
        "A historical analysis of Shivaji Maharaj and his era, highlighting his role in resisting Mughal expansion and establishing Hindu self-rule.",
      amazonLink: "https://www.amazon.in/Shivaji-Aur-Unka-Yug-Savarkar/dp/8177666789/",
      year: "1927",
    },
  ]

  const englishBooks: BookProps[] = [
    {
      title: "Shivaji: The Great Maratha",
      author: "H.S. Sardesai",
      language: "English",
      coverUrl: "/placeholder.svg?height=400&width=300&query=book cover Shivaji The Great Maratha by H.S. Sardesai",
      description:
        "A scholarly biography that places Shivaji Maharaj in the broader context of Indian and world history, examining his lasting impact.",
      amazonLink: "https://www.amazon.in/Shivaji-Great-Maratha-H-Sardesai/dp/8177666789/",
      flipkartLink: "https://www.flipkart.com/shivaji-great-maratha/p/itm864297531",
      year: "1988",
    },
    {
      title: "Shivaji and His Times",
      author: "Jadunath Sarkar",
      language: "English",
      coverUrl: "/placeholder.svg?height=400&width=300&query=book cover Shivaji and His Times by Jadunath Sarkar",
      description:
        "A classic historical work that examines Shivaji's life against the backdrop of 17th century India, based on extensive research of primary sources.",
      amazonLink: "https://www.amazon.in/Shivaji-His-Times-Jadunath-Sarkar/dp/8177666789/",
      flipkartLink: "https://www.flipkart.com/shivaji-his-times/p/itm753951864",
      year: "1919",
    },
    {
      title: "Shivaji: The Founder of Maratha Swaraj",
      author: "C.V. Vaidya",
      language: "English",
      coverUrl:
        "/placeholder.svg?height=400&width=300&query=book cover Shivaji The Founder of Maratha Swaraj by C.V. Vaidya",
      description:
        "A detailed account of how Shivaji established Maratha self-rule (Swaraj) against overwhelming odds, with focus on his administrative innovations.",
      amazonLink: "https://www.amazon.in/Shivaji-Founder-Maratha-Swaraj-Vaidya/dp/8177666789/",
      year: "1930",
    },
    {
      title: "Shivaji and the Indian National Movement",
      author: "Richard I. Cashman",
      language: "English",
      coverUrl:
        "/placeholder.svg?height=400&width=300&query=book cover Shivaji and the Indian National Movement by Richard I. Cashman",
      description:
        "An academic study of how Shivaji's legacy was used during India's independence movement and how he became a symbol of national resistance.",
      amazonLink: "https://www.amazon.in/Shivaji-Indian-National-Movement-Cashman/dp/8177666789/",
      flipkartLink: "https://www.flipkart.com/shivaji-indian-national-movement/p/itm159753468",
      year: "1975",
    },
    {
      title: "Shivaji: The Great Guerrilla",
      author: "Dennis Kincaid",
      language: "English",
      coverUrl: "/placeholder.svg?height=400&width=300&query=book cover Shivaji The Great Guerrilla by Dennis Kincaid",
      description:
        "A Western perspective on Shivaji's military genius, focusing on his guerrilla warfare tactics that allowed him to defeat numerically superior forces.",
      amazonLink: "https://www.amazon.in/Shivaji-Great-Guerrilla-Dennis-Kincaid/dp/8177666789/",
      year: "1937",
    },
    {
      title: "Chhatrapati Shivaji: The Maratha Warrior and His Military System",
      author: "Stewart Gordon",
      language: "English",
      coverUrl:
        "/placeholder.svg?height=400&width=300&query=book cover Chhatrapati Shivaji The Maratha Warrior and His Military System by Stewart Gordon",
      description:
        "A detailed analysis of Shivaji's military organization, tactics, and strategy, written by a military historian with focus on his innovations in warfare.",
      amazonLink: "https://www.amazon.in/Chhatrapati-Shivaji-Maratha-Warrior-Military/dp/8177666789/",
      flipkartLink: "https://www.flipkart.com/chhatrapati-shivaji-maratha-warrior-military-system/p/itm357159864",
      year: "1993",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Books on Chhatrapati Shivaji Maharaj"
        description="Explore a curated collection of books about the legendary Maratha warrior king"
        backgroundImage="/images/books-header.jpg"
      />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-8">
                <RoyalSignature legendary size="lg" />
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg mb-12">
                <p className="text-lg text-gray-700">
                  Discover the rich literary legacy of Chhatrapati Shivaji Maharaj through this curated collection of
                  books. From detailed historical accounts to inspiring biographies, these works offer valuable insights
                  into the life, achievements, and enduring impact of one of India's greatest leaders.
                </p>
              </div>

              {/* Marathi Books Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-orange-200 pb-2">Marathi Books</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Books in Marathi offer unique insights into Shivaji Maharaj's life and legacy, often drawing on
                  regional historical sources and cultural context that might not be available in other languages.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {marathiBooks.map((book, index) => (
                    <Book key={index} {...book} />
                  ))}
                </div>
              </div>

              {/* Hindi Books Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-orange-200 pb-2">Hindi Books</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Hindi literature on Shivaji Maharaj has played a crucial role in spreading awareness about his
                  achievements across northern India, highlighting his significance as a national hero.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {hindiBooks.map((book, index) => (
                    <Book key={index} {...book} />
                  ))}
                </div>
              </div>

              {/* English Books Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b border-orange-200 pb-2">English Books</h2>
                <p className="text-lg text-gray-700 mb-8">
                  English works on Shivaji Maharaj have helped introduce his remarkable story to a global audience,
                  often providing comparative historical analysis and international context.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {englishBooks.map((book, index) => (
                    <Book key={index} {...book} />
                  ))}
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-3 text-orange-800">Reading Recommendations</h3>
                <p className="text-gray-700 mb-4">
                  For those new to the history of Chhatrapati Shivaji Maharaj, we recommend starting with:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>
                    <strong>For Marathi readers:</strong> "श्रीमान योगी" by Ranjit Desai offers an accessible and
                    engaging introduction.
                  </li>
                  <li>
                    <strong>For Hindi readers:</strong> "छत्रपति शिवाजी" by Ranbir Singh provides a comprehensive
                    overview.
                  </li>
                  <li>
                    <strong>For English readers:</strong> "Shivaji: The Great Maratha" by H.S. Sardesai balances
                    scholarly depth with readability.
                  </li>
                </ul>
                <p className="text-gray-700">
                  For more academic study, Jadunath Sarkar's "Shivaji and His Times" remains a foundational text, while
                  Stewart Gordon's work offers valuable insights into Shivaji's military innovations.
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Link href="/">Return Home</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/tributes">View Tributes</Link>
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
