import Image from "next/image"

export default function HeroPortrait() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-orange-100 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="relative w-[280px] h-[350px] md:w-[400px] md:h-[500px] mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-200 to-orange-100 shadow-xl"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-orange-200">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Shivaji_British_Museum.jpg-eFm8GVhbb7R78j6T9biZ4EhIkErV5p.jpeg"
                alt="Historical portrait of Chhatrapati Shivaji Maharaj"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Historical Portrait</h2>
            <p className="text-lg text-gray-700 mb-4">
              This authentic historical portrait of Chhatrapati Shivaji Maharaj is preserved in the British Museum
              collection. It depicts the great Maratha warrior king in his royal attire, symbolizing his status as the
              founder of the Maratha Empire.
            </p>
            <div className="relative h-16 w-64 mx-auto mt-6">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Shivaji_I_signature.svg/1200px-Shivaji_I_signature.svg.png"
                alt="Signature of Chhatrapati Shivaji Maharaj"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-500 italic mt-2">The royal signature of Chhatrapati Shivaji Maharaj</p>
          </div>
        </div>
      </div>
    </div>
  )
}
