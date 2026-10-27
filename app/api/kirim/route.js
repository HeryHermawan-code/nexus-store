export async function POST(req){
  const {product, buyer_wa} = await req.json()
  // Ini API rahasia limited edition kamu: auto generate license/file
  const license=`NEXUS-${product?.replace(/\s/g,'-')}-${Date.now()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`
  return Response.json({
    delivered:true,
    product,
    license,
    download:`https://nexus-store-iota-ebon.vercel.app/api/produk`,
    message:`File untuk ${product} terkirim ke WA ${buyer_wa} - License: ${license}`,
    direct_bank:true
  })
}
