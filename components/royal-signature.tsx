import Image from "next/image"
import { cn } from "@/lib/utils"

interface RoyalSignatureProps {
  className?: string
  inverted?: boolean
  size?: "sm" | "md" | "lg" | "xl"
  legendary?: boolean
}

export function RoyalSignature({
  className = "",
  inverted = false,
  size = "md",
  legendary = false,
}: RoyalSignatureProps) {
  const heights = {
    sm: "h-12",
    md: "h-16",
    lg: "h-24",
    xl: "h-32",
  }

  const widths = {
    sm: "w-24",
    md: "w-32",
    lg: "w-48",
    xl: "w-64",
  }

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      {legendary && <div className="absolute inset-0 bg-orange-300/20 rounded-full blur-xl animate-pulse -z-10"></div>}
      <div className={cn("relative", heights[size], widths[size], legendary && "animate-float")}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Shivaji_I_signature.svg/1200px-Shivaji_I_signature.svg.png"
          alt="Signature of Chhatrapati Shivaji Maharaj"
          fill
          className={cn(
            "object-contain",
            inverted ? "brightness-200 contrast-200 invert" : "",
            legendary && "drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]",
          )}
        />
      </div>
      {legendary && (
        <div className="mt-2 text-center">
          <p className="text-sm font-semibold text-orange-800">The Royal Signature of</p>
          <p className="text-xs text-orange-600">Chhatrapati Shivaji Maharaj</p>
        </div>
      )}
    </div>
  )
}

// For backward compatibility
export default RoyalSignature
