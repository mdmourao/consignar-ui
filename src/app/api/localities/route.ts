import { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const limit = searchParams.get('limit')
  const search = searchParams.get('search')
  const res = await fetch(`https://irs-api-clrebjajka-ez.a.run.app/localities?limit=${limit}&search=${search}`)
  const data = await res.json()

  return Response.json({ data })
}