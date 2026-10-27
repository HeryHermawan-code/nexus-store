export async function POST(req){
  const {product, price} = await req.json()
  // DIRECT BANK - tanpa makelar, tanpa potongan 2%
  // No rekening diambil dari ENV Vercel (aman), bukan hardcode
  return Response.json({
    method: "DIRECT_TRANSFER",
    bank: process.env.BANK_NAME || "BRI",
    account: process.env.BANK_NO || "01590****6505",
    name: process.env.BANK_AN || "HERY HERMAWAN",
    product, price,
    instruction: `Transfer ${price} langsung, upload bukti ke WA, tanpa perantara`,
    wa: `https://wa.me/628xxxx?text=Saya%20sudah%20transfer%20${price}%20untuk%20${product}`
  })
}
