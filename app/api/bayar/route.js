export async function POST(req){
  const {product, price} = await req.json()
  return Response.json({
    method: "DIRECT_TRANSFER_NO_MIDDLEMAN",
    bank: "BANK RAKYAT INDONESIA (BRININJA) 015901054376505 ATAS NAMA HERY HERMAWAN",
    account: "015901054376505",
    name: "HERY HERMAWAN",
    amount: price,
    product: product,
    instruction: "Transfer langsung ke BANK RAKYAT INDONESIA (BRININJA) 015901054376505 ATAS NAMA HERY HERMAWAN 015901054376505 a/n HERY HERMAWAN - Upload bukti WA, tanpa potongan Tripay/Midtrans, tanpa makelar",
    qr: "https://api.qrserver.com/v1/create-qr-code/?data=BANK-BANK RAKYAT INDONESIA (BRININJA) 015901054376505 ATAS NAMA HERY HERMAWAN-NO-015901054376505-AMOUNT-"+price
  })
}
