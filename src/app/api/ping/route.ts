import { NextResponse } from "next/server"

export async function GET(request: Request) {

    try {
        const res = await fetch('http://192.168.254.167:8088', {
            headers: {
                'Content-Type': 'application/json',
            }, cache: "no-store"
        })
        return new NextResponse( "" ,{ status: 200 });
    } catch (error) { 
        console.log(error);
        return new NextResponse("error", { status: 500 });
    }
}
