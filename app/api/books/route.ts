import { NextResponse } from "next/server";

const API_BASE_URL = "https://book-backend-ig.fly.dev";

export async function GET(request: Request) {
  try {
    // Get the URL search params from the request
    const { searchParams } = new URL(request.url);

    // Forward the search params to the Gutendex API
    const url = `${API_BASE_URL}/books?${searchParams.toString()}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching books:", error);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}
