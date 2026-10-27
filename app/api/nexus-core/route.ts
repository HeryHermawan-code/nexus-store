
import { NextResponse } from 'next/server'
const SECRET="NEXUS-6666-V7-ULTRA-RAHASIA-2026"
const BANK=process.env.NEXT_PUBLIC_BANK_ACCOUNT||"BRI 015901054376505 An HERY HERMAWAN"
function gen(id:string){return `NX-${id}-${Date.now().toString(36).toUpperCase()}`}
export async function GET(req:Request){
const {searchParams}=new URL(req.url)
if(searchParams.get('key')!==SECRET) return NextResponse.json({error:"BLOCK 6666"},{status:401})
const act=searchParams.get('action')||'status'
if(act==='status') return NextResponse.json({agent:"6666 ACTIVE",mode:"A2Z-Z2A AUTOMATION",bank_masked:BANK.replace(/\d{10,}/,m=>"****"+m.slice(-4)),token_factory:"ON",delivery:"AUTO TANPA WA",self_heal:"ON"})
if(act==='mint'){const p=searchParams.get('product')||"V50";return NextResponse.json({success:true,token:gen(p),product:p,download:`/api/delivery?token=${gen(p)}`})}
return NextResponse.json({error:"unknown"})
}
export async function POST(req:Request){
const b=await req.json()
if(b.key!==SECRET) return NextResponse.json({error:"BLOCK"},{status:401})
return NextResponse.json({status:"DELIVERED AUTOMATICALLY",token:gen(b.productId||"V50"),bank:process.env.NEXT_PUBLIC_BANK_ACCOUNT,boundTo:"NEXUS MEGA - HERY HERMAWAN FOREVER",auto:true,no_wa:true})
}
