import { NextResponse } from "next/server"

export async function GET(request: Request) {

    try {
        const res = await fetch('http://localhost:4561', {
            headers: {
                'Content-Type': 'application/json',
            }, cache: "no-store"
        })
        const data = await res.json()
        return NextResponse.json({
            "data": data,
            "code": res.status
        })
    } catch (error) { 
        return NextResponse.json({
            "data": {
                "num": "error"
            },
            "code": 500
        })
    }
}
