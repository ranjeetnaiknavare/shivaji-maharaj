"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-800 bg-gray-900 text-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-12 w-12 overflow-hidden">
            <Image
              src="https://i.ibb.co/Jk1Lm1L/shivaji-logo.png"
              alt="Chhatrapati Shivaji Maharaj Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <span className="block text-xl font-bold tracking-wider text-white font-serif">
              Chhatrapati Shivaji Maharaj
            </span>
            <span className="text-xs text-orange-400 tracking-widest uppercase">The Great Maratha Warrior King</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
          >
            Home
          </Link>
          <Link
            href="/biography"
            className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
          >
            Life
          </Link>
          <Link
            href="/military"
            className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
          >
            Military
          </Link>
          <Link
            href="/governance"
            className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
          >
            Governance
          </Link>
          <Link
            href="/forts"
            className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
          >
            Forts
          </Link>
          <Link
            href="/legacy"
            className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
          >
            Legacy
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
          >
            Gallery
          </Link>
        </nav>

        <div className="flex md:hidden">
          <button
            className="text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">👋</span>
              <span className="font-medium text-orange-400">Namaste!</span>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/biography"
                className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Life
              </Link>
              <Link
                href="/military"
                className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Military
              </Link>
              <Link
                href="/governance"
                className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Governance
              </Link>
              <Link
                href="/forts"
                className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Forts
              </Link>
              <Link
                href="/legacy"
                className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Legacy
              </Link>
              <Link
                href="/gallery"
                className="text-sm font-medium text-gray-200 hover:text-orange-400 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
