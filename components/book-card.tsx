"use client";

import { useState } from "react";
import Image from "next/image";
import type { Book } from "@/lib/types";
import { getCoverImage, getViewableBookLink } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import { toast } from "sonner";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const [imageError, setImageError] = useState(false);
  const { t } = useTranslation();

  const handleBookClick = () => {
    const bookLink = getViewableBookLink(book);

    if (bookLink) {
      window.open(bookLink, "_blank");
    } else {
      toast(t("no_viewable_version"));
    }
  };

  const coverImage = getCoverImage(book);

  return (
    <div
      className="bg-card cursor-pointer h-[282px] w-[160px] mb-12"
      onClick={handleBookClick}
    >
      <div className="relative h-[80%] w-full">
        <Image
          src={imageError ? "/placeholder.svg" : coverImage}
          alt={book.title}
          fill
          className="object-cover rounded-md shadow-bookCard"
          onError={() => setImageError(true)}
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-bookName line-clamp-2 uppercase">
          {book.title}
        </h3>
        <p className="font-[600] mt-1 text-bookAuthor text-grey-light line-clamp-2">
          {book.authors.map((author) => author).join(", ")}
        </p>
      </div>
    </div>
  );
}
