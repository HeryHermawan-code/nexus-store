export async function POST(req){
  try{
    const {product, price} = await req.json()
    return Response.json({
      method: "DIRECT_TRANSFER_NO_MIDDLEMAN",
      bank: process.env.BANK_NAME || "BRI",
      account: process.env.BANK_NO ? process.env.BANK_NO.substring(0,4)+"****"+process.env.BANK_NO.slice(-4) : "0159****6505",
      name: process.env.BANK_AN || "HERY HERMAWAN",
      product, price,
      instruction: `Transfer Rp ${price} untuk ${product} langsung ke rekening diatas, lalu upload bukti via WA`,
      wa: `https://wa.me/6281287064123?text=Halo%20saya%20sudah%20transfer%20${price}%20untuk%20${product}`,
      timestamp: new Date().toISOString()
    })
  }catch(e){
    return Response.json({error:e.message},{status:500})
  }
}
export async function GET(){ return Response.json({status:"API Bayar Active - POST untuk beli"}) }
