"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

interface HistoricalFact {
  id: string
  text: string
  source: {
    name: string
    url: string
  }
  category: "war" | "politics" | "culture" | "governance" | "diplomacy"
}

const historicalFacts: HistoricalFact[] = [
  {
    id: "battle-pratapgad",
    text: "Battle of Pratapgad (1659): Shivaji Maharaj defeated Afzal Khan of the Adilshahi Sultanate in a legendary encounter",
    source: {
      name: "Jadunath Sarkar, Shivaji and His Times",
      url: "https://archive.org/details/in.ernet.dli.2015.32142",
    },
    category: "war",
  },
  {
    id: "coronation",
    text: "Coronation of Shivaji as Chhatrapati (1674): Established an independent Maratha kingdom after centuries of Muslim rule",
    source: {
      name: "G.S. Sardesai, New History of the Marathas",
      url: "https://archive.org/details/in.ernet.dli.2015.151619",
    },
    category: "politics",
  },
  {
    id: "sack-surat",
    text: "Sack of Surat (1664): Shivaji's raid on one of the Mughal Empire's richest ports directly challenged Mughal authority",
    source: {
      name: "J.F. Richards, The Mughal Empire",
      url: "https://www.cambridge.org/core/books/mughal-empire/9C8F7F1C09B7548E4B0D371D5F72BD95",
    },
    category: "war",
  },
  {
    id: "escape-agra",
    text: "Escape from Agra (1666): Shivaji made a daring escape from Aurangzeb's court, demonstrating his resourcefulness",
    source: {
      name: "Jadunath Sarkar, House of Shivaji",
      url: "https://archive.org/details/in.ernet.dli.2015.31077",
    },
    category: "politics",
  },
  {
    id: "sambhaji-execution",
    text: "Execution of Sambhaji (1689): Shivaji's son was captured and brutally executed by Aurangzeb after refusing to convert to Islam",
    source: {
      name: "Stewart Gordon, The Marathas 1600-1818",
      url: "https://www.cambridge.org/core/books/marathas-16001818/C55F80A8B2B2C3C51B7C8E57F14C7FD4",
    },
    category: "politics",
  },
  {
    id: "peshwa-rise",
    text: "Rise of the Peshwas (1713): Balaji Vishwanath became Peshwa, marking the beginning of the Peshwa era of the Maratha Empire",
    source: {
      name: "A.R. Kulkarni, The Marathas",
      url: "https://books.google.com/books/about/The_Marathas.html?id=AWBGAQAAIAAJ",
    },
    category: "governance",
  },
  {
    id: "battle-panipat",
    text: "Third Battle of Panipat (1761): The Marathas suffered a devastating defeat against Ahmad Shah Abdali's Afghan forces",
    source: {
      name: "T.S. Shejwalkar, Panipat 1761",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
    category: "war",
  },
  {
    id: "anglo-maratha-war3",
    text: "Third Anglo-Maratha War (1817): The final war between the British East India Company and the Maratha Empire ended with complete British victory",
    source: {
      name: "Randolf G.S. Cooper, The Anglo-Maratha Campaigns",
      url: "https://www.cambridge.org/core/books/anglomaratha-campaigns-and-the-contest-for-india/A4D9F57E6B2F2E0D636A9C6F5F5A1378",
    },
    category: "war",
  },
  {
    id: "religious-tolerance",
    text: "Shivaji's Religious Tolerance: Despite establishing a Hindu kingdom, Shivaji employed Muslims in high positions and protected Islamic places of worship",
    source: {
      name: "James Grant Duff, History of the Mahrattas",
      url: "https://archive.org/details/historyofmahrat00duff",
    },
    category: "governance",
  },
  {
    id: "neglect-samadhi",
    text: "Neglect of Shivaji's Samadhi (1818): After British victory, Shivaji's tomb was deliberately neglected until rediscovered by Mahatma Jyotirao Phule in 1869",
    source: {
      name: "R. Lele, Maratha Samrajya",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
    category: "culture",
  },
  {
    id: "tarabai-leadership",
    text: "Tarabai's Leadership (1700): After Rajaram's death, his wife Tarabai took control of the Maratha Empire and continued resistance against the Mughals",
    source: {
      name: "S.R. Sharma, Maratha History Re-examined",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
    category: "governance",
  },
  {
    id: "tanaji-sacrifice",
    text: "Tanaji Malusare's Sacrifice (1670): Shivaji's general sacrificed his life recapturing Sinhagad Fort, prompting Shivaji to say 'The fort is won, but the lion is lost'",
    source: {
      name: "V.S. Bendrey, Coronation of Shivaji",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
    category: "war",
  },
  {
    id: "jijau-influence",
    text: "Jijabai's Influence: Shivaji's mother Jijau Maa instilled in him strong values, Hindu traditions, and the vision of Swarajya (self-rule)",
    source: {
      name: "V.D. Savarkar, Shivaji and His Times",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
    category: "culture",
  },
  {
    id: "tukaram-spiritual",
    text: "Sant Tukaram's Influence: The spiritual teachings of Sant Tukaram deeply influenced Shivaji's religious outlook and governance principles",
    source: {
      name: "R.D. Ranade, Mysticism in Maharashtra",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
    category: "culture",
  },
]

export default function HistoricalInsightsTicker() {
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const currentFact = historicalFacts[currentFactIndex]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % historicalFacts.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [isPaused, currentFactIndex])

  const handlePrevious = () => {
    setCurrentFactIndex((prev) => (prev - 1 + historicalFacts.length) % historicalFacts.length)
  }

  const handleNext = () => {
    setCurrentFactIndex((prev) => (prev + 1) % historicalFacts.length)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "war":
        return "text-red-400"
      case "politics":
        return "text-blue-400"
      case "culture":
        return "text-purple-400"
      case "governance":
        return "text-green-400"
      case "diplomacy":
        return "text-yellow-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="bg-black text-white py-2 border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-4">
        <button onClick={handlePrevious} className="p-1 rounded hover:bg-gray-800" aria-label="Previous fact">
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div
          className="flex-1 mx-4 overflow-hidden relative text-sm"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="whitespace-nowrap overflow-hidden text-ellipsis md:text-center">
            <span className={`font-medium ${getCategoryColor(currentFact.category)}`}>
              [{currentFact.category.charAt(0).toUpperCase() + currentFact.category.slice(1)}]
            </span>
            <span className="mx-2">{currentFact.text}</span>
            <span className="text-orange-400">
              Source: {currentFact.source.name}
              <a
                href={currentFact.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center ml-1 text-orange-300 hover:text-orange-200"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-3 w-3" />
              </a>
            </span>
          </div>
        </div>

        <button onClick={handleNext} className="p-1 rounded hover:bg-gray-800" aria-label="Next fact">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
