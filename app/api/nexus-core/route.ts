import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const SECRET = process.env.NEXUS_SECRET_KEY || "NEXUS-6666-V7-ULTRA-RAHASIA-2026"
const BANK = process.env.NEXT_PUBLIC_BANK_ACCOUNT || "BRI 015901054376505 HERY HERMAWAN"

function genToken(productId: string){
  return `NX-${productId}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`
}

export async function GET(req: Request){
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key')
  const action = searchParams.get('action') || 'status'
  
  // SECURITY GATE
  if(key !== SECRET) return NextResponse.json({error:"UNAUTHORIZED - 6666 AGENT BLOCK"}, {status:401})

  if(action === 'status'){
    return NextResponse.json({
      agent: "6666 ACTIVE",
      mode: "A2Z-Z2A AUTOMATION",
      bank_masked: BANK.replace(/\d{10,}/, m=> "****"+m.slice(-4)),
      features: ["TOKEN FACTORY","PRODUCT FACTORY","AUTO DELIVERY","SELF HEAL","GITHUB AUTO","VERCEL AUTO"],
      time: new Date().toISOString(),
      goal: "PRODUKSI-JUAL-DELIVERY OTOMATIS TANPA MANUSIA"
    })
  }

  if(action === 'mint'){
    const productId = searchParams.get('product') || "V50"
    const token = genToken(productId)
    const delivery = {
      token,
      productId,
      downloadUrl: `/api/delivery?token=${token}`,
      license: `LICENSE-${token}.json`,
      buyerBound: true,
      validForever: true
    }
    // AUTO SIMPAN
    const dir = "/tmp/nexus-tokens"
    if(!fs.existsSync(dir)) fs.mkdirSync(dir,{recursive:true})
    fs.writeFileSync(path.join(dir, `${token}.json`), JSON.stringify(delivery,null,2))
    return NextResponse.json({success:true, ...delivery})
  }

  return NextResponse.json({error:"unknown action"})
}

export async function POST(req: Request){
  const body = await req.json()
  if(body.key !== SECRET) return NextResponse.json({error:"UNAUTHORIZED"}, {status:401})

  // INI YANG JALAN KETIKA PEMBELI KLIK BAYAR
  const { productId, buyerEmail } = body
  const token = genToken(productId)
  
  const productPayload = {
    token,
    productId,
    buyerEmail,
    bank: BANK, // HANYA KELUAR DISINI, SETELAH BAYAR
    files: [
      `/delivery/${token}/product.zip`,
      `/delivery/${token}/license.json`,
      `/delivery/${token}/tutorial.txt`
    ],
    message: "Produk sudah terkirim otomatis - terikat selamanya ke pembeli tanpa WA",
    deliveredAt: new Date().toISOString(),
    boundTo: "NEXUS MEGA AUTO - HERY HERMAWAN FOREVER"
  }

  return NextResponse.json({ 
    status: "DELIVERED AUTOMATICALLY",
    auto: true,
    no_wa: true,
    no_human: true,
    ...productPayload
  })
}

