import { NextResponse } from 'next/server'

const knowledge = [
  { keywords: ['yellow', 'leaf', 'leaves'], answer: 'Yellow leaves can have several causes. The cause is unknown without observing the plant, soil moisture, drainage, and a local crop record. Check the underside of leaves and soil moisture, then contact your local agriculture office if symptoms continue.', source: 'KB-CROP-001 · Field observation protocol' },
  { keywords: ['week', 'today', 'now'], answer: 'This week, observe soil colour and drainage, record the crop and date, and arrange a measured soil test if one is available. Do not apply a chemical or dose without evidence and local expert confirmation.', source: 'KB-SOIL-001 · Assessment prerequisites' },
  { keywords: ['soil', 'ph', 'salty', 'salinity'], answer: 'Soil condition is unknown without measured evidence. You can record colour, texture by feel, and whether water drains, but these field checks do not replace a laboratory measurement.', source: 'KB-SOIL-001 · Assessment prerequisites' },
]

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const query = typeof body?.query === 'string' ? body.query.trim().toLowerCase() : ''
    const match = knowledge.find((item) => item.keywords.some((keyword) => query.includes(keyword)))
    return NextResponse.json(match ?? { answer: 'I do not have a verified answer for that in the local knowledge base. Please contact your local agriculture office rather than guessing.', source: 'KB-UNKNOWN · Escalation rule', unknown: true })
  } catch {
    return NextResponse.json({ answer: 'I could not read that question. Please try again or contact your local agriculture office.', source: 'KB-UNKNOWN · Escalation rule', unknown: true }, { status: 400 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ready', mode: 'local-knowledge-base-only' })
}
