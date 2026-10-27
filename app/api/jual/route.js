import fs from 'fs'; import path from 'path'
export async function POST(req){
  const {product, price, buyer} = await req.json()
  const logPath=path.join(process.cwd(),'data/jual.jsonl')
  const entry={time:new Date().toISOString(), product, price, buyer:buyer||"anon", status:"DIRECT_BANK_WAITING", direct:true}
  try{ fs.appendFileSync(logPath, JSON.stringify(entry)+"\n") }catch{}
  return Response.json({
    success:true,
    message:`Pesanan ${product} Rp ${price} tercatat - suruh transfer direct ke ${process.env.BANK_NAME||'BRI'} tanpa makelar`,
    next:`WA bukti ke ${process.env.WA||'0812xxx'} - file akan dikirim otomatis setelah cek`,
    entry
  })
}
export async function GET(){
  const p=path.join(process.cwd(),'data/jual.jsonl')
  if(!fs.existsSync(p)) return Response.json({sales:[]})
  const lines=fs.readFileSync(p,'utf8').split('\n').filter(Boolean).slice(-20)
  return Response.json({total_sales:lines.length, sales:lines.map(l=>JSON.parse(l))})
}
