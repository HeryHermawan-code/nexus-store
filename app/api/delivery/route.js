export async function POST(req){
  const body=await req.json().catch(()=>({}))
  const token=body.token
  const product=body.product||"NEXUS"
  if(!token) return Response.json({error:"Token required"},{status:400})
  const license=`NEXUS-LIC-${Date.now()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`
  const file_content=`# ${product}\nLicense: ${license}\nToken: ${token}\nValid: Forever\nDirect Bank No Middleman\nThank you for buying directly.\nTERIKAT_KE_KITA_AUTO\n\nIsi Paket A2Z Z2A:\n- Termux Self-Healing V7\n- Token Factory Automation\n- Product Factory Worldwide\n- Instant Delivery System`
  return Response.json({
    delivered:true, instant:true, without_whatsapp:true, without_human:true,
    product, token, license,
    file_content,
    download_url:"data:text/plain;base64,"+Buffer.from(file_content).toString('base64'),
    message:"Produk terkirim otomatis tanpa WA - terikat selamanya"
  })
}
export async function GET(){ return Response.json({status:"POST token + product untuk instant delivery"}) }
