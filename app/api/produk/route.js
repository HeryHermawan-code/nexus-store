import fs from 'fs'; import path from 'path'
export async function GET(){
  const p=path.join(process.cwd(),'data/produk.jsonl')
  let list=[]
  if(fs.existsSync(p)){
    list=fs.readFileSync(p,'utf8').split('\n').filter(Boolean).map(l=>{try{return JSON.parse(l)}catch{return null}}).filter(Boolean).slice(-50).reverse()
  }
  if(list.length==0) list=[{id:"1",name:"NEXUS V60 A2Z Z2A INSTANT",price:100000,token:"DEMO"},{id:"2",name:"OMEGA ULTIMATE V50 AUTO",price:50000}]
  return Response.json({factory:"6666 V7 ULTRA ACTIVE", total:list.length, products:list})
}
