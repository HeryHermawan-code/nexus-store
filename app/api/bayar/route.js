export async function POST(req){
  const {product, price} = await req.json()
  // TANPA PERANTARA: Direct ke rekening kamu
  // Ini bukan API rahasia - ini sistem direct transfer yang dipakai internasional
  return Response.json({
    method: "DIRECT_TRANSFER",
    bank: "BCA/BRI/MANDIRI - Rekening Kamu",
    account: "ISI_NO_REK_KAMU_DISINI",
    amount: price,
    product: product,
    instruction: `Transfer ${price} langsung ke rekening di atas, upload bukti, admin cek, barang dikirim - tanpa potongan Tripay 2%, tanpa makelar`,
    qris_direct: `https://api.qrserver.com/v1/create-qr-code/?data=TRANSFER-${price}-TO-YOUR-ACCOUNT`
  })
}
