import { NextResponse } from "next/server";
export async function GET(req:Request){const t=new URL(req.url).searchParams.get("token")||"DEMO";return NextResponse.json({delivered:true,token:t,files:[`${t}.zip`,`${t}-license.json`],boundTo:"HERY HERMAWAN FOREVER",auto:true})}
