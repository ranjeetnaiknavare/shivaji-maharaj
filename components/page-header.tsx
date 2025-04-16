import Image from "next/image"

interface PageHeaderProps {
  title: string
  description: string
  backgroundImage: string
}

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={
            backgroundImage ||
            "/placeholder.svg?height=600&width=1200&query=historical scene with Chhatrapati Shivaji Maharaj"
          }
          alt={title}
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 to-orange-600/20"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-white/90 max-w-3xl">{description}</p>
      </div>
    </section>
  )
}
