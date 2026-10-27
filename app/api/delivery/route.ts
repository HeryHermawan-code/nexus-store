import { NextResponse } from 'next/server'
export async function GET(req: Request){
  const token = new URL(req.url).searchParams.get('token') || ''
  if(!token.startsWith('NX-OMEGA-')) return NextResponse.json({error:"TOKEN INVALID - GUNAKAN TOKEN NX-OMEGA-..."}, {status:401})
  const product = token.split('-')[2] || 'V50'
  return NextResponse.json({
    delivered:true,
    token,
    product,
    files:[`/download/${product}-package.zip`, `/download/${product}-bonus.pdf`, `/download/${product}-license.key`],
    instruction:"Download otomatis - tanpa WA - sudah terikat ke BRI 015901054376505",
    agent:"6666 OMEGA DELIVERY ACTIVE"
  })
}
