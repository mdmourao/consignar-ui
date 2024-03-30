
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const res = await fetch(`https://irs-api-clrebjajka-ez.a.run.app/localities/${params.id}`)
    const data = await res.json()
    return Response.json({ data })
}