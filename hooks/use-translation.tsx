"use client";

import { useLanguage } from "./use-language";
import translations from "@/lib/translations";

function isTranslationObject(value: unknown) {
  return typeof value === "object" && value !== null;
}

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string, params?: Record<string, string>): string => {
    // Making key to lowercase
    key = key.toLowerCase();

    // Get translation for current language or fallback to English
    const translation =
      isTranslationObject(translations[language]) &&
      typeof translations[language]?.[key] === "string"
        ? translations[language][key]
        : isTranslationObject(translations.en) &&
          typeof translations.en?.[key] === "string"
        ? translations.en[key]
        : key;

    // Replace parameters if provided
    if (params) {
      return Object.entries(params).reduce((acc, [key, value]) => {
        return (acc as string).replace(`{{${key}}}`, value);
      }, translation) as string;
    }

    return translation as string;
  };

  return { t };
}
