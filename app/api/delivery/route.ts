import { NextResponse } from 'next/server'
export async function GET(req:Request){
  const t=new URL(req.url).searchParams.get('token')||'NX-DEMO'
  return NextResponse.json({delivered:true,token:t,files:[`/delivery/${t}.zip`,`/license/${t}.json`],instruction:"Download langsung - terikat selamanya ke pembeli - tanpa WA",boundTo:"HERY HERMAWAN - NEXUS MEGA",auto:true})
}
