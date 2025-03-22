"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-muted transition-colors flex items-center gap-1"
        aria-label="Select language"
      >
        <Globe className="h-5 w-5" />
        <span className="text-sm uppercase">{language}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-card shadow-lg rounded-md overflow-hidden z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="w-full text-left px-4 py-2 hover:bg-muted transition-colors"
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

