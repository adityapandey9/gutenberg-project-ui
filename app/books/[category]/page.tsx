"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BookList } from "@/components/book-list";
import { SearchBar } from "@/components/search-bar";
import { useTranslation } from "@/hooks/use-translation";
import { useDebounce } from "@/hooks/use-debounce";

export default function BookListPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const category = params.category as string;

  const debounchedSearch = useDebounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col justify-between items-start gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button
              onClick={handleBack}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={t("back")}
            >
              <img
                src="/assets/Back.svg"
                className="h-[24px] w-[24px]"
                alt="back-btn"
              />
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-primary capitalize">
              {decodeURIComponent(category)}
            </h1>
          </div>
          <SearchBar onSearch={debounchedSearch} />
        </header>

        <main>
          <BookList category={category} searchQuery={searchQuery} />
        </main>
      </div>
    </div>
  );
}
