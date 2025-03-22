import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { Book } from "./types";

export function getViewableBookLink(book: Book): string | null {
  // Priority order: HTML, PDF, TXT
  const formats = book.formats;

  // Check for HTML format
  const htmlKeys = Object.keys(formats).filter(
    (key) =>
      formats[key].mimeType.includes("text/html") &&
      !formats[key].url.includes(".zip")
  );
  if (htmlKeys.length > 0) {
    return formats[htmlKeys[0]].url;
  }

  // Check for PDF format
  const pdfKeys = Object.keys(formats).filter(
    (key) =>
      formats[key].mimeType.includes("application/pdf") &&
      !formats[key].url.includes(".zip")
  );
  if (pdfKeys.length > 0) {
    return formats[pdfKeys[0]].url;
  }

  // Check for TXT format
  const txtKeys = Object.keys(formats).filter(
    (key) =>
      formats[key].mimeType.includes("text/plain") &&
      !formats[key].url.includes(".zip")
  );
  if (txtKeys.length > 0) {
    return formats[txtKeys[0]].url;
  }

  return null;
}

export function getCoverImage(book: Book): string {
  // Priority order: jpeg, jpg, png
  const formats = book.formats;

  // Check for Image format
  const imageKeys = Object.keys(formats).filter((key) =>
    formats[key].mimeType.includes("image/")
  );

  return formats[imageKeys[0]].url;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
