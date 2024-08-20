import { NextResponse } from "next/server"

export async function GET(request: Request) {

    try {
        const res = await fetch('http://192.168.:8088/', {
            headers: {
                'Content-Type': 'application/json',
            }, cache: "no-store"
        })
        const data = await res.text()
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
