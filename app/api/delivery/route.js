import { NextResponse } from "next/server";
 export async function GET(req){const u=new URL(req.url);const t=u.searchParams.get("token")||"DEMO";return NextResponse.json({delivered:true,automation:"A2Z-Z2A",token:t,files:[t+".zip",t+"-license.json",t+"-12-produk.zip"],message:"Pembeli klik bayar langsung dapat produk tanpa WA",boundTo:"HERY HERMAWAN FOREVER",no_wa:true,auto:true})}
