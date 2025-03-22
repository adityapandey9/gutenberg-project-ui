"use client";

import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";

const categories = [
  "Fiction",
  "Philosophy",
  "Drama",
  "History",
  "Humour",
  "Adventure",
  "Politics",
];

export function BookCategories() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/books/${category}`}
          className="flex flex-row justify-between items-center shadow-genreCard rounded-sm px-[14px] py-[8px] "
        >
          <div className="flex flex-row items-center justify-between gap-[9px]">
            <img
              src={`/assets/${category}.svg`}
              className="h-[22px] w-[22px]"
              alt={category}
            />
            {t(category)}
          </div>

          <img
            src="/assets/Next.svg"
            className="h-[20px] w-[20px]"
            alt={`${category}-next`}
          />
        </Link>
      ))}
    </div>
  );
}
