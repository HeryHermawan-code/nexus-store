
import { NextResponse } from 'next/server'
const BANK=process.env.NEXT_PUBLIC_BANK_ACCOUNT||"BRI 015901054376505 An HERY HERMAWAN"
function gen(id:string){return `NX-${id}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,6).toUpperCase()}`}
export async function POST(req:Request){
const b=await req.json()
const prod=b.productId||"V50"
const tk=gen(prod)
return NextResponse.json({status:"PAID & DELIVERED",token:tk,product:prod,bank_transfer:BANK,download:`/api/delivery?token=${tk}`,boundTo:"NEXUS MEGA - HERY HERMAWAN FOREVER",no_wa:true,no_human:true})
}
