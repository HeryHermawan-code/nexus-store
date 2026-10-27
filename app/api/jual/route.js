import fs from 'fs'; import path from 'path'
export async function POST(req){
  const b=await req.json().catch(()=>({}))
  const entry={time:new Date().toISOString(), product:b.product, price:b.price, token:b.token||"", owner:"TERIKAT_KE_KITA"}
  const fp=path.join(process.cwd(),'data/jual.jsonl')
  try{ fs.mkdirSync(path.dirname(fp),{recursive:true}); fs.appendFileSync(fp, JSON.stringify(entry)+"\n") }catch{}
  return Response.json({success:true, entry})
}
export async function GET(){
  const p=path.join(process.cwd(),'data/jual.jsonl')
  if(!fs.existsSync(p)) return Response.json({total:0, sales:[]})
  const sales=fs.readFileSync(p,'utf8').split('\n').filter(Boolean).map(l=>{try{return JSON.parse(l)}catch{return null}}).filter(Boolean).slice(-30).reverse()
  const omzet=sales.reduce((a,b)=>a+(b.price||0),0)
  return Response.json({total:sales.length, omzet, sales})
}
