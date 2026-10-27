export async function POST(req){
  const body=await req.json()
  const product=body.product||"NEXUS"
  const price=body.price||100000
  const token=`NEXUS-PAY-${Date.now()}-${Math.random().toString(36).slice(2,6).toUpperCase()}`
  return Response.json({
    method:"DIRECT_BANK_INSTANT",
    bank:process.env.BANK_NAME||"BRI",
    account_masked:process.env.BANK_NO?process.env.BANK_NO.slice(0,4)+"****"+process.env.BANK_NO.slice(-4):"0159****6505",
    name:process.env.BANK_AN||"HERY HERMAWAN",
    product, price,
    token,
    next_step:"/api/delivery",
    instruction:`Klik Bayar Direct - Token ${token} aktif - Produk langsung terkirim tanpa WA`,
    auto_delivery:true
  })
}
