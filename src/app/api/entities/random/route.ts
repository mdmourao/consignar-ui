
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const res = await fetch(`https://irs-api-clrebjajka-ez.a.run.app/entities/random`)
    const data = await res.json()
    return Response.json({ data })
}