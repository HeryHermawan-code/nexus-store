export async function POST(req){
  const {product, price} = await req.json()
  // DIRECT - tanpa Tripay/Midtrans potongan
  return Response.json({
    method:"DIRECT_TRANSFER_NO_MIDDLEMAN",
    bank: process.env.BANK_NAME||"BRI",
    account_masked: process.env.BANK_NO ? process.env.BANK_NO.slice(0,4)+"****"+process.env.BANK_NO.slice(-4) : "0159****6505",
    name: process.env.BANK_AN||"HERY HERMAWAN",
    product, price,
    instruction:`Transfer ${price} untuk ${product} - upload bukti WA, auto kirim file`,
    wa:`https://wa.me/${process.env.WA_NUMBER||'6281287064123'}?text=Sudah%20transfer%20${price}%20${product}`,
    note:"Tanpa makelar, tanpa potongan 2% - langsung ke rekening kamu"
  })
}
