import { NextResponse } from 'next/server'
const PRODUCTS = {
  V10:{name:"V10 STARTER",price:1000000, items:1},
  V25:{name:"V25 PRO MAX",price:3999000, items:3},
  V50:{name:"V50 12 PRODUK MEGA",price:35000000, items:12},
  V100:{name:"V100 TOTAL EMPIRE",price:50000000, items:25},
  V1000:{name:"V1000 WORLD DOMINATION",price:150000000, items:100}
}
export async function GET(req: Request){
  const id = new URL(req.url).searchParams.get('id') || 'V50'
  // @ts-ignore
  const p = PRODUCTS[id] || PRODUCTS['V50']
  return NextResponse.json({productId:id, ...p, produced_at:new Date().toISOString(), engine:"A2Z-Z2A AUTO PRODUCE", ready:true, delivery_url:`/api/delivery?token=NX-OMEGA-${id}-AUTO`})
}
