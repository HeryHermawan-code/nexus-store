import { NextResponse } from "next/server";
export async function GET(req){const url=new URL(req.url);const token=url.searchParams.get("token")||"DEMO";return NextResponse.json({delivered:true,token:token,files:[token+".zip",token+"-license.json"],boundTo:"HERY HERMAWAN FOREVER",auto:true,no_wa:true});}
