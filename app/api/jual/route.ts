import { NextResponse } from 'next/server'
export async function POST(req: Request){
  try{
    const {productId} = await req.json()
    const pid = productId || 'V50'
    const token = `NX-OMEGA-${pid}-${Math.random().toString(36).substring(2,7).toUpperCase()}${Date.now().toString().slice(-4)}-${Math.random().toString(36).substring(2,4).toUpperCase()}108U`
    return NextResponse.json({
      status:"PAID & DELIVERED AUTOMATICALLY",
      token,
      product:pid,
      bank_transfer:{bank:"BRI", no:"015901054376505", an:"HERY HERMAWAN", note:`Transfer sesuai harga ${pid}`},
      download:`/api/delivery?token=${token}`,
      delivery_auto:true,
      no_wa:true,
      terikat_selamanya:true,
      message:"Pembeli klik bayar langsung dapat produk - tanpa perintah darimu"
    })
  }catch(e){ return NextResponse.json({error:"GAGAL JUAL"}, {status:500}) }
}
