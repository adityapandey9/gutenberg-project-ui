"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { BookCard } from "@/components/book-card";
import { fetchBooks } from "@/lib/api";
import type { Book } from "@/lib/types";
import { useTranslation } from "@/hooks/use-translation";

interface BookListProps {
  category: string;
  searchQuery: string;
}

export function BookList({ category, searchQuery }: BookListProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const { t } = useTranslation();

  const lastBookElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreBooks();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const loadBooks = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchBooks({
        topic: category,
        search: searchQuery,
        mime_type: "image/",
      });

      setBooks(response.results);
      setNextPage(response.next);
      setHasMore(!!response.next);
    } catch (err) {
      console.error("Error loading books:", err);
      setError("Failed to load books. Please try again later.");
      setBooks([]);
      setNextPage(null);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreBooks = async () => {
    if (!nextPage || loading) return;

    setLoading(true);

    try {
      // Extract the query parameters from the nextPage URL
      let nextPageWithHost = window?.location?.origin + nextPage;
      const url = new URL(nextPageWithHost);
      const queryParams = url.searchParams.toString();

      // Use our proxy API with the extracted query parameters
      const response = await fetch(`/api/books?${queryParams}`);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      setBooks((prev) => [...prev, ...data.results]);
      setNextPage(data.next);
      setHasMore(!!data.next);
    } catch (err) {
      setError("Failed to load more books");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, [category, searchQuery]);

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <div>
      {books.length === 0 && !loading ? (
        <div className="text-center py-8">{t("no_books_found")}</div>
      ) : (
        <div className="flex flex-row flex-wrap gap-6 w-full justify-center">
          {books.map((book, index) => {
            const key = `${book.id}-${index}`;
            if (books.length === index + 1) {
              return (
                <div ref={lastBookElementRef} key={key}>
                  <BookCard book={book} />
                </div>
              );
            } else {
              return <BookCard key={key} book={book} />;
            }
          })}
        </div>
      )}

      {loading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}
