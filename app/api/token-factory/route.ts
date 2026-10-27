import { NextResponse } from 'next/server'
export async function GET(req: Request){
  const prod = new URL(req.url).searchParams.get('product') || 'V50'
  const token = `NX-OMEGA-${prod}-${Math.random().toString(36).substring(2,8).toUpperCase()}-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substring(2,6).toUpperCase()}`
  return NextResponse.json({token, product:prod, created: new Date().toISOString(), factory:"6666 OMEGA ACTIVE 24/7", bank:"BRI 015901054376505 An HERY HERMAWAN", status:"READY TO SELL"})
}
