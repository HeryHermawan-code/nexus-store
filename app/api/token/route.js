import fs from 'fs'; import path from 'path'
export async function POST(req){
  const {product}=await req.json()
  const token=`NEXUS-${Date.now()}-${Math.random().toString(36).slice(2,8).toUpperCase()}-${product?.slice(0,3).toUpperCase()}`
  const file=path.join(process.cwd(),'data/token.jsonl')
  try{ fs.mkdirSync(path.dirname(file),{recursive:true}); fs.appendFileSync(file, JSON.stringify({token, product, time:new Date().toISOString(), valid:true})+"\n") }catch{}
  return Response.json({token, product, valid:true, message:"Token produksi otomatis"})
}
export async function GET(){
  const file=path.join(process.cwd(),'data/token.jsonl')
  if(!fs.existsSync(file)) return Response.json({tokens:[]})
  const tokens=fs.readFileSync(file,'utf8').split('\n').filter(Boolean).slice(-20).map(l=>{try{return JSON.parse(l)}catch{return null}}).filter(Boolean)
  return Response.json({total:tokens.length, tokens})
}
