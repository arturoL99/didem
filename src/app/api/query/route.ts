import { NextResponse } from "next/server";

// ✅ Correct API handler for Next.js App Router
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the JSON body
    const query = body.query;

    // Make a request to the FastAPI backend
    const response = await fetch("https://rag-libri-2.onrender.com/query-all", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ query }).toString(),
    });

    const data = await response.json();

    return NextResponse.json(data); // ✅ Correct Next.js response format
  } catch (error) {
    console.error("Error calling FastAPI:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
