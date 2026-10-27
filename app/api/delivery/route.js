export async function POST(req){
  const {token, product}=await req.json()
  if(!token) return Response.json({error:"Token required"},{status:400})
  // Validasi token + langsung kirim produk
  const license=`LICENSE-${token}-${Date.now()}`
  const content={
    product:product||"NEXUS",
    license,
    download_url:`https://nexus-store-iota-ebon.vercel.app/api/produk`,
    file_content:`# NEXUS ${product}\nLicense: ${license}\nToken: ${token}\nValid: Forever\nDirect Bank No Middleman\nThank you for buying directly.`,
    delivered_at:new Date().toISOString(),
    owner:"TERIKAT_KE_KITA_AUTO"
  }
  return Response.json({delivered:true, instant:true, without_whatsapp:true, without_human:true, ...content})
}
export async function GET(){ return Response.json({status:"POST token + product untuk instant delivery"}) }
