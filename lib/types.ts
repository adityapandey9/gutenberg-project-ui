export interface Author {
  name: string;
  birth_year: number | null;
  death_year: number | null;
}

interface FormatType {
  mimeType: string;
  url: string;
}

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean | null;
  media_type: string;
  formats: Record<string, FormatType>;
  download_count: number;
}

export interface BookResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Book[];
}
