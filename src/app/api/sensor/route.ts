import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const res = await fetch('http://localhost:4561', {
        headers: {
            'Content-Type': 'application/json',
        }, cache: "no-store"
    })
    const data = await res.text()

    return new Response(data)
}
