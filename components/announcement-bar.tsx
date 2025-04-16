import Image from "next/image"

export default function AnnouncementBar() {
  return (
    <div className="bg-orange-600 text-white py-2 px-4 text-center sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center">
        <div className="relative h-5 w-5 mr-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bhagwa_Jhanda.jpg/800px-Bhagwa_Jhanda.jpg"
            alt="Bhagwa Dhwaj"
            fill
            className="object-cover rounded"
          />
        </div>
        <span className="font-semibold animate-pulse">जय शिवाजी, जय भवानी | Jay Shivaji, Jay Bhavani</span>
        <div className="relative h-5 w-5 ml-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bhagwa_Jhanda.jpg/800px-Bhagwa_Jhanda.jpg"
            alt="Bhagwa Dhwaj"
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
    </div>
  )
}
