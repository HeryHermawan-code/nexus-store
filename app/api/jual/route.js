import { NextResponse } from "next/server";
const BANK="BRI 015901054376505 An HERY HERMAWAN";
function gen(id){return "NX-OMEGA-"+id+"-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).slice(2,6).toUpperCase()}
 export async function POST(req){const b=await req.json();const prod=b.productId||"V50";const tk=gen(prod);return NextResponse.json({status:"PAID & DELIVERED AUTOMATICALLY",token:tk,product:prod,bank_transfer:BANK,download:"/api/delivery?token="+tk,boundTo:"NEXUS MEGA - HERY HERMAWAN FOREVER",workflow:"PRODUKSI TOKEN > JALANKAN TOKEN > PRODUKSI PRODUK > JUAL > DELIVERY AUTO",no_wa:true,no_human:true,terikat_selamanya:true,auto:true})}
