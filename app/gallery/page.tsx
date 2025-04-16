import Link from "next/link"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import GalleryImage from "@/components/gallery-image"
import { RoyalSignature } from "@/components/royal-signature"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader
        title="Gallery"
        description="Visual journey through the life and legacy of Chhatrapati Shivaji Maharaj"
        backgroundImage="/images/gallery-header.jpg"
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
                  Explore the visual legacy of Chhatrapati Shivaji Maharaj through this curated collection of images.
                  From historical portraits to majestic forts, these images capture the essence of the great Maratha
                  warrior king and his enduring impact on Indian history and culture.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-8 text-gray-900">Portraits & Paintings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <GalleryImage
                  src="/images/shivaji-portrait-1.jpg"
                  alt="Classic portrait of Shivaji Maharaj"
                  caption="Classic portrait of Shivaji Maharaj"
                />
                <GalleryImage
                  src="/images/shivaji-portrait-2.jpg"
                  alt="Shivaji Maharaj in royal attire"
                  caption="Shivaji Maharaj in royal attire"
                />
                <GalleryImage
                  src="/images/shivaji-portrait-3.jpg"
                  alt="Artistic depiction of Shivaji Maharaj"
                  caption="Artistic depiction of Shivaji Maharaj"
                />
                <GalleryImage
                  src="/images/shivaji-coronation-painting.jpg"
                  alt="Painting of Shivaji's coronation ceremony"
                  caption="Painting of Shivaji's coronation ceremony (1674)"
                />
                <GalleryImage
                  src="/images/shivaji-afzal-khan.jpg"
                  alt="Depiction of the encounter with Afzal Khan"
                  caption="The historic encounter with Afzal Khan (1659)"
                />
                <GalleryImage
                  src="/images/shivaji-durbar-painting.jpg"
                  alt="Painting of Shivaji's royal court"
                  caption="Shivaji Maharaj holding court with his ministers"
                />
              </div>

              <h2 className="text-3xl font-bold mb-8 text-gray-900">Forts & Architecture</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <GalleryImage
                  src="/images/raigad-aerial.jpg"
                  alt="Aerial view of Raigad Fort"
                  caption="Aerial view of Raigad Fort - Shivaji's capital"
                />
                <GalleryImage
                  src="/images/pratapgad-full.jpg"
                  alt="Pratapgad Fort"
                  caption="Pratapgad Fort - Site of the victory over Afzal Khan"
                />
                <GalleryImage
                  src="/images/sindhudurg-complete.jpg"
                  alt="Sindhudurg Fort"
                  caption="Sindhudurg Fort - Naval fortress built by Shivaji"
                />
                <GalleryImage
                  src="/images/rajgad-full.jpg"
                  alt="Rajgad Fort"
                  caption="Rajgad Fort - One of Shivaji's early capitals"
                />
                <GalleryImage
                  src="/images/torna-fort.jpg"
                  alt="Torna Fort"
                  caption="Torna Fort - The first fort captured by Shivaji at age 16"
                />
                <GalleryImage
                  src="/images/panhala-fort.jpg"
                  alt="Panhala Fort"
                  caption="Panhala Fort - Where Shivaji made his famous escape"
                />
              </div>

              <h2 className="text-3xl font-bold mb-8 text-gray-900">Statues & Monuments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <GalleryImage
                  src="/images/shivaji-statue-gateway-full.jpg"
                  alt="Equestrian statue near Gateway of India"
                  caption="Equestrian statue near Gateway of India, Mumbai"
                />
                <GalleryImage
                  src="/images/shivaji-statue-raigad.jpg"
                  alt="Shivaji statue at Raigad Fort"
                  caption="Statue at Raigad Fort"
                />
                <GalleryImage
                  src="/images/shivaji-statue-pune.jpg"
                  alt="Shivaji statue in Pune"
                  caption="Grand statue in Pune"
                />
                <GalleryImage
                  src="/images/shiv-smarak-model.jpg"
                  alt="Model of the upcoming Shiv Smarak"
                  caption="Model of the upcoming Shiv Smarak in Arabian Sea"
                />
                <GalleryImage
                  src="/images/shivaji-statue-satara.jpg"
                  alt="Shivaji statue in Satara"
                  caption="Statue in Satara - a key region in the Maratha Empire"
                />
                <GalleryImage
                  src="/images/shivaji-memorial.jpg"
                  alt="Shivaji Memorial"
                  caption="Memorial dedicated to Shivaji Maharaj"
                />
              </div>

              <h2 className="text-3xl font-bold mb-8 text-gray-900">Historical Artifacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <GalleryImage
                  src="/images/shivaji-sword.jpg"
                  alt="Bhavani Sword of Shivaji Maharaj"
                  caption="Bhavani Sword - Shivaji's famous sword"
                />
                <GalleryImage
                  src="/images/shivaji-armor.jpg"
                  alt="Armor worn by Shivaji Maharaj"
                  caption="Armor believed to have been worn by Shivaji"
                />
                <GalleryImage
                  src="/images/shivaji-seal.jpg"
                  alt="Royal seal of Shivaji Maharaj"
                  caption="Royal seal used during Shivaji's reign"
                />
                <GalleryImage
                  src="/images/maratha-coins.jpg"
                  alt="Coins from Shivaji's era"
                  caption="Currency coins from Shivaji's era"
                />
                <GalleryImage
                  src="/images/shivaji-letter.jpg"
                  alt="Historical letter with Shivaji's signature"
                  caption="Historical document bearing Shivaji's signature"
                />
                <GalleryImage
                  src="/images/maratha-flag.jpg"
                  alt="Bhagwa Dhwaj - The saffron flag of the Marathas"
                  caption="Bhagwa Dhwaj - The saffron flag of the Maratha Empire"
                />
              </div>

              <h2 className="text-3xl font-bold mb-8 text-gray-900">Legacy & Celebrations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <GalleryImage
                  src="/images/shivaji-jayanti-1.jpg"
                  alt="Shivaji Jayanti celebrations"
                  caption="Shivaji Jayanti celebrations in Maharashtra"
                />
                <GalleryImage
                  src="/images/shivaji-procession.jpg"
                  alt="Procession honoring Shivaji Maharaj"
                  caption="Traditional procession honoring Shivaji Maharaj"
                />
                <GalleryImage
                  src="/images/shivaji-play.jpg"
                  alt="Theatrical performance about Shivaji's life"
                  caption="Theatrical performance depicting Shivaji's life"
                />
                <GalleryImage
                  src="/images/shivaji-stamp.jpg"
                  alt="Commemorative stamp of Shivaji Maharaj"
                  caption="Commemorative postage stamp"
                />
                <GalleryImage
                  src="/images/shivaji-currency.jpg"
                  alt="Shivaji on Indian currency"
                  caption="Shivaji featured on Indian currency"
                />
                <GalleryImage
                  src="/images/shivaji-modern-art.jpg"
                  alt="Modern artistic interpretation of Shivaji"
                  caption="Modern artistic interpretation of Shivaji Maharaj"
                />
              </div>

              <div className="flex justify-center mt-8">
                <Button asChild className="bg-orange-600 hover:bg-orange-700 mr-4">
                  <Link href="/">Return Home</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link href="/biography">Read Biography</Link>
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
