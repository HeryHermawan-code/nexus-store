import { NextResponse } from 'next/server'
const SECRET="NEXUS-6666-V7-ULTRA-RAHASIA-2026"
const BANK=process.env.NEXT_PUBLIC_BANK_ACCOUNT||"BRI 015901054376505 An HERY HERMAWAN"
function gen(id:string){return `NX-${id}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`}
export async function GET(req:Request){
  const {searchParams}=new URL(req.url)
  if(searchParams.get('key')!==SECRET) return NextResponse.json({error:"UNAUTHORIZED 6666 BLOCK"},{status:401})
  const action=searchParams.get('action')||'status'
  if(action==='status') return NextResponse.json({agent:"6666 ACTIVE",mode:"A2Z-Z2A AUTOMATION",bank_masked:BANK.replace(/\d{10,}/,m=>"****"+m.slice(-4)),token_factory:"ON",product_factory:"ON",sales_machine:"ON",delivery:"AUTO TANPA WA",self_heal:"ON",github:"AUTO",vercel:"AUTO",goal:"UANG LANGSUNG BRI TANPA MAKELAR"})
  if(action==='mint'){const p=searchParams.get('product')||"V50";const tk=gen(p);return NextResponse.json({success:true,token:tk,product:p,download:`/api/delivery?token=${tk}`,boundTo:"HERY HERMAWAN FOREVER"})}
  return NextResponse.json({error:"unknown"})
}
export async function POST(req:Request){
  const b=await req.json()
  if(b.key!==SECRET) return NextResponse.json({error:"BLOCK"},{status:401})
  const tk=gen(b.productId||"V50")
  return NextResponse.json({status:"DELIVERED AUTOMATICALLY",auto:true,no_wa:true,no_human:true,token:tk,product:b.productId,bank:BANK,files:[`/delivery/${tk}/product.zip`],boundTo:"NEXUS MEGA - HERY HERMAWAN FOREVER"})
}
