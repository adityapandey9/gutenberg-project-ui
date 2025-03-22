"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "es" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Check for saved language preference or browser language
    const savedLanguage = localStorage.getItem("language") as Language | null
    const browserLanguage = navigator.language.split("-")[0] as Language

    if (savedLanguage) {
      setLanguage(savedLanguage)
    } else if (["en", "es", "fr"].includes(browserLanguage)) {
      setLanguage(browserLanguage as Language)
    }
  }, [])

  useEffect(() => {
    // Save language preference
    localStorage.setItem("language", language)
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}

