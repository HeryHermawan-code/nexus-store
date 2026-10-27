
import { NextResponse } from 'next/server'
export async function GET(req:Request){
const token=new URL(req.url).searchParams.get('token')||'DEMO'
return NextResponse.json({delivered:true,token,files:[`${token}.zip`,`${token}-license.json`],boundTo:"HERY HERMAWAN FOREVER",auto:true,no_wa:true})
}
