import { NextResponse } from 'next/server'
const BANK=process.env.NEXT_PUBLIC_BANK_ACCOUNT
const SECRET="NEXUS-6666-V7-ULTRA-RAHASIA-2026"
function token(id:string){return `NX-${id}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`}
export async function POST(req:Request){
  const b=await req.json()
  const prod=b.productId||"V50"
  const tk=token(prod)
  return NextResponse.json({status:"PAID & DELIVERED",token:tk,product:prod,bank_transfer:BANK,download:`/api/delivery?token=${tk}`,license:`LICENSE-${tk}.json`,bound:true,no_wa:true,no_human:true,message:"Produk terkirim otomatis - uang masuk BRI langsung tanpa makelar",timestamp:new Date().toISOString()})
}
