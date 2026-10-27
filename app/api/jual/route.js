import { NextResponse } from "next/server";
const BANK="BRI 015901054376505 An HERY HERMAWAN";
export async function POST(req){const body=await req.json();const prod=body.productId||"V50";const token="NX-"+prod+"-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).slice(2,6).toUpperCase();return NextResponse.json({status:"PAID & DELIVERED",token:token,product:prod,bank_transfer:BANK,download:"/api/delivery?token="+token,boundTo:"NEXUS MEGA - HERY HERMAWAN FOREVER",no_wa:true,no_human:true,auto:true});}
