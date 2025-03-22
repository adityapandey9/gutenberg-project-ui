import type { BookResponse } from "./types"

// Use relative URL to our API route instead of direct API call
const API_BASE_URL = "/api/books"

interface FetchBooksParams {
  ids?: string
  languages?: string
  mime_type?: string
  search?: string
  topic?: string
  page?: number
}

export async function fetchBooks(params: FetchBooksParams): Promise<BookResponse> {
  const queryParams = new URLSearchParams()

  if (params.ids) queryParams.append("ids", params.ids)
  if (params.languages) queryParams.append("languages", params.languages)
  if (params.mime_type) queryParams.append("mime_type", params.mime_type)
  if (params.search) queryParams.append("search", params.search)
  if (params.topic) queryParams.append("topic", params.topic)

  const url = `${API_BASE_URL}?${queryParams.toString()}`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error("Error fetching books:", error)
    throw new Error("Failed to fetch books")
  }
}

