import { NextResponse } from "next/server";
const SECRET="NEXUS-6666-V7-ULTRA-RAHASIA-2026";
const BANK=process.env.NEXT_PUBLIC_BANK_ACCOUNT||"BRI 015901054376505 An HERY HERMAWAN";
function gen(id:string){return `NX-${id}-${Date.now().toString(36).toUpperCase()}`}
 export async function GET(req:Request){const u=new URL(req.url);if(u.searchParams.get("key")!==SECRET)return NextResponse.json({error:"BLOCK"},{status:401});const a=u.searchParams.get("action")||"status";if(a==="status")return NextResponse.json({agent:"6666 ACTIVE",mode:"A2Z-Z2A",bank:BANK.replace(/\d{10,}/,m=>"****"+m.slice(-4)),token_factory:"ON",delivery:"AUTO TANPA WA",self_heal:"ON"});if(a==="mint"){const p=u.searchParams.get("product")||"V50";const t=gen(p);return NextResponse.json({success:true,token:t,product:p,download:`/api/delivery?token=${t}`})}return NextResponse.json({error:"unknown"})}
