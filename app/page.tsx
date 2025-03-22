import { BookCategories } from "@/components/book-categories";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSelector } from "@/components/language-selector";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <div className="flex flex-col justify-start item-start w-full mb-8 bg-[url('/assets/Pattern.svg')] bg-no-repeat bg-cover">
          <div className="flex flex-row justify-between w-full px-4 py-4">
            <h1 className="text-gutenberg-primary text-h1">
              Gutenberg Project
            </h1>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
          <h2 className="mb-6 text-h2 px-4">
            A social cataloging website that allows you to freely search its
            database of books, annotations, and reviews.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8 pt-4">
          <BookCategories />
        </div>
      </div>
    </div>
  );
}
