import fs from 'fs'; import path from 'path'
export async function POST(req){
  const {product, price, wa} = await req.json()
  const entry={time:new Date().toISOString(), product, price, wa:wa||"", status:"ORDERED_DIRECT_BANK", owner:"HERY_TERIKAT"}
  fs.mkdirSync(path.join(process.cwd(),'data'),{recursive:true})
  fs.appendFileSync(path.join(process.cwd(),'data/jual.jsonl'), JSON.stringify(entry)+"\n")
  return Response.json({success:true, entry, message:"Order tercatat, suruh transfer direct, cek /api/jual untuk list penjualan terikat ke kita"})
}
export async function GET(){
  const p=path.join(process.cwd(),'data/jual.jsonl')
  if(!fs.existsSync(p)) return Response.json({total:0,sales:[]})
  const sales=fs.readFileSync(p,'utf8').split('\n').filter(Boolean).map(l=>JSON.parse(l)).reverse().slice(0,50)
  const total = sales.reduce((a,b)=>a+(b.price||0),0)
  return Response.json({total_sales:sales.length, total_omzet:total, sales, owner:"TERIKAT_KE_KITA"})
}
