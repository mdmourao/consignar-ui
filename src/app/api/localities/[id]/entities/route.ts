
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

  const searchParams = req.nextUrl.searchParams
  const limit = searchParams.get('limit')
  const offset = searchParams.get('offset')
  const res = await fetch(`https://irs-api-clrebjajka-ez.a.run.app/localities/${params.id}/entities?limit=${limit}&offset=${offset}`)
  const data = await res.json()

  return Response.json({ data })


}