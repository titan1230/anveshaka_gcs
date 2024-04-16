import { NextResponse } from "next/server"

export async function GET(request: Request) {

    try {
        const res = await fetch('http://localhost:4561/ping', {
            headers: {
                'Content-Type': 'application/json',
            }, cache: "no-store"
        })
        const data = await res.text()
        return new NextResponse(data, { status: 200 });
    } catch (error) { 
        return new NextResponse("Error", { status: 500 });
    }
}
