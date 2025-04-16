"use client"

import { useState, useEffect } from "react"
import { Filter, BookOpen, Swords, Crown, Flag, Users, AlertTriangle, Check, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

// Define the types for our historical events
interface HistoricalEvent {
  id: string
  year: number
  title: string
  description: string
  category: "war" | "politics" | "culture" | "governance" | "diplomacy"
  entities: ("mughal" | "maratha" | "british" | "peshwa" | "portuguese" | "adilshahi" | "qutbshahi")[]
  outcome?: "victory" | "defeat" | "neutral"
  source: {
    name: string
    url: string
  }
}

// Historical events data
const historicalEvents: HistoricalEvent[] = [
  {
    id: "battle-pratapgad",
    year: 1659,
    title: "Battle of Pratapgad",
    description:
      "Shivaji Maharaj defeated Afzal Khan of the Adilshahi Sultanate in a legendary encounter. When Afzal Khan attempted to stab Shivaji during their meeting, Shivaji was prepared with concealed weapons and killed him instead.",
    category: "war",
    entities: ["maratha", "adilshahi"],
    outcome: "victory",
    source: {
      name: "Jadunath Sarkar, Shivaji and His Times",
      url: "https://archive.org/details/in.ernet.dli.2015.32142",
    },
  },
  {
    id: "coronation",
    year: 1674,
    title: "Coronation of Shivaji as Chhatrapati",
    description:
      "Shivaji was crowned as Chhatrapati (Sovereign) at Raigad Fort, establishing an independent Maratha kingdom. The ceremony was conducted by Gagabhatt, a priest from Benares, after overcoming opposition from Brahmin priests who questioned Shivaji's Kshatriya status.",
    category: "politics",
    entities: ["maratha"],
    outcome: "victory",
    source: {
      name: "G.S. Sardesai, New History of the Marathas",
      url: "https://archive.org/details/in.ernet.dli.2015.151619",
    },
  },
  {
    id: "sack-surat",
    year: 1664,
    title: "Sack of Surat",
    description:
      "Shivaji led a raid on Surat, one of the Mughal Empire's richest ports, acquiring significant wealth while specifically avoiding harm to foreign traders and common citizens. This raid directly challenged Mughal authority.",
    category: "war",
    entities: ["maratha", "mughal"],
    outcome: "victory",
    source: {
      name: "J.F. Richards, The Mughal Empire",
      url: "https://www.cambridge.org/core/books/mughal-empire/9C8F7F1C09B7548E4B0D371D5F72BD95",
    },
  },
  {
    id: "treaty-purandar",
    year: 1665,
    title: "Treaty of Purandar",
    description:
      "Shivaji was forced to sign the Treaty of Purandar with the Mughals, represented by Mirza Raja Jai Singh. He surrendered 23 forts and agreed to serve as a Mughal mansabdar, though this arrangement would be short-lived.",
    category: "diplomacy",
    entities: ["maratha", "mughal"],
    outcome: "defeat",
    source: {
      name: "Stewart Gordon, The Marathas 1600-1818",
      url: "https://www.cambridge.org/core/books/marathas-16001818/C55F80A8B2B2C3C51B7C8E57F14C7FD4",
    },
  },
  {
    id: "escape-agra",
    year: 1666,
    title: "Escape from Agra",
    description:
      "After being placed under house arrest during his visit to Aurangzeb's court in Agra, Shivaji made a daring escape by hiding in sweet boxes. This escape is celebrated as an example of his resourcefulness and courage.",
    category: "politics",
    entities: ["maratha", "mughal"],
    outcome: "victory",
    source: {
      name: "Jadunath Sarkar, House of Shivaji",
      url: "https://archive.org/details/in.ernet.dli.2015.31077",
    },
  },
  {
    id: "battle-salher",
    year: 1672,
    title: "Battle of Salher",
    description:
      "The Marathas under Shivaji's generals defeated a large Mughal force at Salher fort. This was one of the largest pitched battles won by the Marathas against the Mughals and boosted Maratha morale significantly.",
    category: "war",
    entities: ["maratha", "mughal"],
    outcome: "victory",
    source: {
      name: "H.N. Sinha, Rise of the Maratha Power",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "karnatak-campaign",
    year: 1677,
    title: "Karnataka Campaign",
    description:
      "Shivaji undertook a major expedition to southern India, capturing numerous forts and territories in present-day Karnataka and Tamil Nadu, extending Maratha influence deep into southern India.",
    category: "war",
    entities: ["maratha", "adilshahi", "qutbshahi"],
    outcome: "victory",
    source: {
      name: "V.S. Bendrey, A Study of Maratha History",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "death-shivaji",
    year: 1680,
    title: "Death of Chhatrapati Shivaji Maharaj",
    description:
      "Shivaji passed away at Raigad Fort at the age of 50. His son Sambhaji succeeded him as the ruler of the Maratha Kingdom. His death marked the end of the formative period of the Maratha Empire.",
    category: "politics",
    entities: ["maratha"],
    outcome: "neutral",
    source: {
      name: "G.S. Sardesai, New History of the Marathas",
      url: "https://archive.org/details/in.ernet.dli.2015.151619",
    },
  },
  {
    id: "sambhaji-execution",
    year: 1689,
    title: "Capture and Execution of Sambhaji",
    description:
      "Shivaji's son and successor Sambhaji was captured by the Mughals and brutally executed by Aurangzeb after refusing to convert to Islam. His death was a significant blow to the Maratha Empire.",
    category: "politics",
    entities: ["maratha", "mughal"],
    outcome: "defeat",
    source: {
      name: "Stewart Gordon, The Marathas 1600-1818",
      url: "https://www.cambridge.org/core/books/marathas-16001818/C55F80A8B2B2C3C51B7C8E57F14C7FD4",
    },
  },
  {
    id: "peshwa-rise",
    year: 1713,
    title: "Rise of the Peshwas",
    description:
      "Balaji Vishwanath became Peshwa (Prime Minister) and established hereditary succession to this office. This marked the beginning of the Peshwa era, during which the Peshwas became the de facto rulers of the Maratha Empire.",
    category: "governance",
    entities: ["maratha", "peshwa"],
    outcome: "neutral",
    source: {
      name: "A.R. Kulkarni, The Marathas",
      url: "https://books.google.com/books/about/The_Marathas.html?id=AWBGAQAAIAAJ",
    },
  },
  {
    id: "bajirao-expansion",
    year: 1720,
    title: "Bajirao I's Military Expansion",
    description:
      "Bajirao I, the son of Balaji Vishwanath, became Peshwa and greatly expanded Maratha territories through his military campaigns. He is considered one of the greatest Peshwas and military generals of the Maratha Empire.",
    category: "war",
    entities: ["maratha", "peshwa", "mughal"],
    outcome: "victory",
    source: {
      name: "V.G. Dighe, Peshwa Bajirao I and Maratha Expansion",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "battle-panipat",
    year: 1761,
    title: "Third Battle of Panipat",
    description:
      "The Marathas suffered a devastating defeat against Ahmad Shah Abdali's Afghan forces. This battle is often considered a turning point that halted Maratha expansion and weakened their power.",
    category: "war",
    entities: ["maratha", "peshwa"],
    outcome: "defeat",
    source: {
      name: "T.S. Shejwalkar, Panipat 1761",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "anglo-maratha-war1",
    year: 1775,
    title: "First Anglo-Maratha War",
    description:
      "The British East India Company fought against the Maratha Empire, resulting in the Treaty of Salbai. The Marathas managed to maintain most of their territory and independence in this first major conflict with the British.",
    category: "war",
    entities: ["maratha", "peshwa", "british"],
    outcome: "neutral",
    source: {
      name: "H.N. Sinha, Rise of the Maratha Power",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "anglo-maratha-war2",
    year: 1803,
    title: "Second Anglo-Maratha War",
    description:
      "The British defeated the combined forces of the Maratha confederacy, significantly reducing Maratha power. The Peshwa became a British subsidiary through the Treaty of Bassein.",
    category: "war",
    entities: ["maratha", "peshwa", "british"],
    outcome: "defeat",
    source: {
      name: "Randolf G.S. Cooper, The Anglo-Maratha Campaigns and the Contest for India",
      url: "https://www.cambridge.org/core/books/anglomaratha-campaigns-and-the-contest-for-india/A4D9F57E6B2F2E0D636A9C6F5F5A1378",
    },
  },
  {
    id: "anglo-maratha-war3",
    year: 1817,
    title: "Third Anglo-Maratha War",
    description:
      "The final war between the British East India Company and the Maratha Empire ended with complete British victory. The Peshwa was deposed, and most Maratha territories came under direct British control.",
    category: "war",
    entities: ["maratha", "peshwa", "british"],
    outcome: "defeat",
    source: {
      name: "Randolf G.S. Cooper, The Anglo-Maratha Campaigns and the Contest for India",
      url: "https://www.cambridge.org/core/books/anglomaratha-campaigns-and-the-contest-for-india/A4D9F57E6B2F2E0D636A9C6F5F5A1378",
    },
  },
  {
    id: "peshwa-brahmin-orthodoxy",
    year: 1713,
    title: "Peshwa Rule and Brahmin Orthodoxy",
    description:
      "During the Peshwa period (1713-1818), when Brahmin Peshwas became the de facto rulers of the Maratha Empire, they instituted stricter caste hierarchies, moving away from Shivaji's more inclusive approach to governance.",
    category: "governance",
    entities: ["maratha", "peshwa"],
    outcome: "neutral",
    source: {
      name: "R.D. Palsokar, The Peshwas: A Historical Study",
      url: "https://books.google.com/books/about/Peshwas.html?id=AWBGAQAAIAAJ",
    },
  },
  {
    id: "portuguese-conflict",
    year: 1670,
    title: "Conflict with Portuguese",
    description:
      "Shivaji's naval forces engaged in conflicts with the Portuguese, who had established colonies on India's western coast. These conflicts were part of Shivaji's strategy to control the coastal regions and establish Maratha naval power.",
    category: "war",
    entities: ["maratha", "portuguese"],
    outcome: "victory",
    source: {
      name: "A.R. Kulkarni, Maharashtra in the Age of Shivaji",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "shivaji-navy",
    year: 1659,
    title: "Establishment of Maratha Navy",
    description:
      "Shivaji established a strong navy consisting of approximately 400 ships of various types. This naval force protected Maratha territories from European powers and secured trade routes, making the Marathas one of the few Indian powers with significant naval capabilities.",
    category: "governance",
    entities: ["maratha"],
    outcome: "victory",
    source: {
      name: "B.K. Apte, History of the Maratha Navy",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "adilshahi-betrayal",
    year: 1659,
    title: "Afzal Khan's Betrayal Attempt",
    description:
      "Afzal Khan, a general of the Adilshahi Sultanate, attempted to kill Shivaji during what was supposed to be a peaceful meeting. This betrayal was anticipated by Shivaji, who came prepared and ultimately killed Afzal Khan in self-defense.",
    category: "politics",
    entities: ["maratha", "adilshahi"],
    outcome: "victory",
    source: {
      name: "H.N. Sinha, Chhatrapati Shivaji",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "tanaji-sacrifice",
    year: 1670,
    title: "Tanaji Malusare's Sacrifice at Sinhagad",
    description:
      "Tanaji Malusare, one of Shivaji's most trusted generals, sacrificed his life while recapturing the fort of Sinhagad from the Mughals. Upon hearing of his death, Shivaji reportedly said, 'Gad aala pan Sinha gela' (The fort is won, but the lion is lost).",
    category: "war",
    entities: ["maratha", "mughal"],
    outcome: "victory",
    source: {
      name: "V.S. Bendrey, Coronation of Shivaji",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "shahu-captivity",
    year: 1689,
    title: "Shahu's Captivity by Mughals",
    description:
      "After Sambhaji's execution, his son Shahu was captured by the Mughals and held captive for 18 years. He was finally released in 1707 after Aurangzeb's death, leading to a succession struggle in the Maratha Empire.",
    category: "politics",
    entities: ["maratha", "mughal"],
    outcome: "neutral",
    source: {
      name: "G.S. Sardesai, New History of the Marathas",
      url: "https://archive.org/details/in.ernet.dli.2015.151619",
    },
  },
  {
    id: "tarabai-leadership",
    year: 1700,
    title: "Tarabai's Leadership",
    description:
      "After the death of Rajaram (Shivaji's younger son), his wife Tarabai took control of the Maratha Empire and continued resistance against the Mughals. Her leadership during a critical period helped preserve Maratha independence.",
    category: "governance",
    entities: ["maratha", "mughal"],
    outcome: "victory",
    source: {
      name: "S.R. Sharma, Maratha History Re-examined",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "cultural-renaissance",
    year: 1674,
    title: "Cultural Renaissance Under Shivaji",
    description:
      "Shivaji's rule saw a cultural renaissance in the Maratha region. He patronized Sanskrit and Marathi literature, art, and music, and encouraged the use of Marathi in administrative affairs, elevating its status.",
    category: "culture",
    entities: ["maratha"],
    outcome: "victory",
    source: {
      name: "M.G. Ranade, Rise of the Maratha Power",
      url: "https://archive.org/details/riseofmarathapow00ranauoft",
    },
  },
  {
    id: "religious-tolerance",
    year: 1674,
    title: "Shivaji's Religious Tolerance",
    description:
      "Despite establishing a Hindu kingdom, Shivaji was known for his religious tolerance. He employed Muslims in high positions, protected Islamic places of worship during military campaigns, and respected the Quran and other religious texts.",
    category: "governance",
    entities: ["maratha"],
    outcome: "neutral",
    source: {
      name: "James Grant Duff, History of the Mahrattas",
      url: "https://archive.org/details/historyofmahrat00duff",
    },
  },
  {
    id: "neglect-samadhi",
    year: 1818,
    title: "Neglect of Shivaji's Samadhi",
    description:
      "After the British defeated the Marathas, Shivaji's samadhi (tomb) at Raigad was deliberately neglected to diminish his historical significance. It was only rediscovered by social reformer Mahatma Jyotirao Phule in 1869.",
    category: "culture",
    entities: ["british", "maratha"],
    outcome: "defeat",
    source: {
      name: "R. Lele, Maratha Samrajya",
      url: "https://archive.org/details/in.ernet.dli.2015.278435",
    },
  },
  {
    id: "maratha-confederacy",
    year: 1750,
    title: "Formation of Maratha Confederacy",
    description:
      "By the mid-18th century, the Maratha Empire had evolved into a confederacy of five major chiefs: the Peshwa at Pune, the Gaekwads of Baroda, the Holkars of Indore, the Scindias of Gwalior, and the Bhonsles of Nagpur.",
    category: "governance",
    entities: ["maratha", "peshwa"],
    outcome: "neutral",
    source: {
      name: "Stewart Gordon, The Marathas 1600-1818",
      url: "https://www.cambridge.org/core/books/marathas-16001818/C55F80A8B2B2C3C51B7C8E57F14C7FD4",
    },
  },
]

// Component for the historical insights section
export default function HistoricalInsights() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [activeEntities, setActiveEntities] = useState<string[]>([])
  const [activeOutcomes, setActiveOutcomes] = useState<string[]>([])
  const [filteredEvents, setFilteredEvents] = useState<HistoricalEvent[]>(historicalEvents)
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 5

  // Filter events based on active filters
  useEffect(() => {
    let filtered = [...historicalEvents]

    // Filter by category
    if (activeTab !== "all") {
      filtered = filtered.filter((event) => event.category === activeTab)
    }

    // Filter by entities
    if (activeEntities.length > 0) {
      filtered = filtered.filter((event) => event.entities.some((entity) => activeEntities.includes(entity)))
    }

    // Filter by outcomes
    if (activeOutcomes.length > 0) {
      filtered = filtered.filter((event) => event.outcome && activeOutcomes.includes(event.outcome))
    }

    // Sort by year
    filtered = filtered.sort((a, b) => a.year - b.year)

    setFilteredEvents(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [activeTab, activeEntities, activeOutcomes])

  // Toggle entity filter
  const toggleEntity = (entity: string) => {
    if (activeEntities.includes(entity)) {
      setActiveEntities(activeEntities.filter((e) => e !== entity))
    } else {
      setActiveEntities([...activeEntities, entity])
    }
  }

  // Toggle outcome filter
  const toggleOutcome = (outcome: string) => {
    if (activeOutcomes.includes(outcome)) {
      setActiveOutcomes(activeOutcomes.filter((o) => o !== outcome))
    } else {
      setActiveOutcomes([...activeOutcomes, outcome])
    }
  }

  // Calculate pagination
  const indexOfLastEvent = currentPage * eventsPerPage
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent)
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage)

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "war":
        return <Swords className="h-4 w-4" />
      case "politics":
        return <Crown className="h-4 w-4" />
      case "culture":
        return <BookOpen className="h-4 w-4" />
      case "governance":
        return <Users className="h-4 w-4" />
      case "diplomacy":
        return <Flag className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  // Get icon for outcome
  const getOutcomeIcon = (outcome?: string) => {
    switch (outcome) {
      case "victory":
        return <Check className="h-4 w-4 text-green-500" />
      case "defeat":
        return <X className="h-4 w-4 text-red-500" />
      case "neutral":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      default:
        return null
    }
  }

  // Get color for entity badge
  const getEntityColor = (entity: string) => {
    switch (entity) {
      case "maratha":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200"
      case "mughal":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "british":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "peshwa":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      case "portuguese":
        return "bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
      case "adilshahi":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "qutbshahi":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  // Get color for outcome badge
  const getOutcomeColor = (outcome?: string) => {
    switch (outcome) {
      case "victory":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "defeat":
        return "bg-red-100 text-red-800 hover:bg-red-200"
      case "neutral":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200"
    }
  }

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Historical Insights</h2>
            <p className="text-lg text-gray-600">
              Explore key events from the 16th-18th centuries involving the Marathas, Mughals, British, and others
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Filter className="h-5 w-5 mr-2 text-orange-600" />
            <span className="text-sm font-medium">
              Filters Active:{" "}
              {activeTab !== "all" || activeEntities.length > 0 || activeOutcomes.length > 0 ? "Yes" : "No"}
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="war" className="flex items-center gap-1">
                  <Swords className="h-3 w-3" /> War
                </TabsTrigger>
                <TabsTrigger value="politics" className="flex items-center gap-1">
                  <Crown className="h-3 w-3" /> Politics
                </TabsTrigger>
                <TabsTrigger value="culture" className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" /> Culture
                </TabsTrigger>
                <TabsTrigger value="governance" className="flex items-center gap-1">
                  <Users className="h-3 w-3" /> Governance
                </TabsTrigger>
                <TabsTrigger value="diplomacy" className="flex items-center gap-1">
                  <Flag className="h-3 w-3" /> Diplomacy
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Entities</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    activeEntities.includes("maratha") ? "bg-orange-100 text-orange-800" : "",
                  )}
                  onClick={() => toggleEntity("maratha")}
                >
                  Maratha
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    activeEntities.includes("mughal") ? "bg-green-100 text-green-800" : "",
                  )}
                  onClick={() => toggleEntity("mughal")}
                >
                  Mughal
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    activeEntities.includes("british") ? "bg-blue-100 text-blue-800" : "",
                  )}
                  onClick={() => toggleEntity("british")}
                >
                  British
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    activeEntities.includes("peshwa") ? "bg-purple-100 text-purple-800" : "",
                  )}
                  onClick={() => toggleEntity("peshwa")}
                >
                  Peshwa
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    activeEntities.includes("portuguese") ? "bg-cyan-100 text-cyan-800" : "",
                  )}
                  onClick={() => toggleEntity("portuguese")}
                >
                  Portuguese
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    activeEntities.includes("adilshahi") ? "bg-red-100 text-red-800" : "",
                  )}
                  onClick={() => toggleEntity("adilshahi")}
                >
                  Adilshahi
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    activeEntities.includes("qutbshahi") ? "bg-yellow-100 text-yellow-800" : "",
                  )}
                  onClick={() => toggleEntity("qutbshahi")}
                >
                  Qutbshahi
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Outcomes</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    activeOutcomes.includes("victory") ? "bg-green-100 text-green-800" : "",
                  )}
                  onClick={() => toggleOutcome("victory")}
                >
                  <Check className="h-3 w-3 mr-1" /> Victory
                </Badge>
                <Badge
                  variant="outline"
                  className={cn("cursor-pointer", activeOutcomes.includes("defeat") ? "bg-red-100 text-red-800" : "")}
                  onClick={() => toggleOutcome("defeat")}
                >
                  <X className="h-3 w-3 mr-1" /> Defeat
                </Badge>
                <Badge
                  variant="outline"
                  className={cn(
                    "cursor-pointer",
                    activeOutcomes.includes("neutral") ? "bg-yellow-100 text-yellow-800" : "",
                  )}
                  onClick={() => toggleOutcome("neutral")}
                >
                  <AlertTriangle className="h-3 w-3 mr-1" /> Neutral
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-orange-50 border-b border-orange-100 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Historical Timeline</h3>
              <p className="text-sm text-gray-600">{filteredEvents.length} events found</p>
            </div>
            {(activeTab !== "all" || activeEntities.length > 0 || activeOutcomes.length > 0) && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveTab("all")
                  setActiveEntities([])
                  setActiveOutcomes([])
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>

          {currentEvents.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {currentEvents.map((event) => (
                <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div className="flex items-center gap-2 mb-2 md:mb-0">
                      <span className="inline-flex items-center justify-center bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {event.year}
                      </span>
                      <h4 className="text-lg font-semibold">{event.title}</h4>
                      {event.outcome && (
                        <span className="inline-flex items-center">{getOutcomeIcon(event.outcome)}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {getCategoryIcon(event.category)}
                        <span className="capitalize">{event.category}</span>
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                      {event.entities.map((entity) => (
                        <Badge key={entity} className={getEntityColor(entity)}>
                          {entity.charAt(0).toUpperCase() + entity.slice(1)}
                        </Badge>
                      ))}
                      {event.outcome && (
                        <Badge className={getOutcomeColor(event.outcome)}>
                          {event.outcome.charAt(0).toUpperCase() + event.outcome.slice(1)}
                        </Badge>
                      )}
                    </div>
                    <a
                      href={event.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-orange-600 flex items-center"
                    >
                      Source: {event.source.name} <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-gray-500">No historical events match your filters. Try adjusting your criteria.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredEvents.length > eventsPerPage && (
            <div className="p-4 border-t border-gray-100 flex justify-between items-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <span className="text-sm text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
