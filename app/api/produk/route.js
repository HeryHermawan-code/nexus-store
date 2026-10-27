import fs from 'fs'; import path from 'path'
export async function GET(){
  const p=path.join(process.cwd(),'data/produk.jsonl')
  let list=[]
  if(fs.existsSync(p)){
    const lines=fs.readFileSync(p,'utf8').split('\n').filter(Boolean)
    list=lines.map(l=>{try{return JSON.parse(l)}catch{return null}}).filter(Boolean).slice(-50).reverse()
  }
  if(list.length==0) list=[{id:"1",name:"NEXUS V60 A2Z Z2A INSTANT",price:100000,token:"DEMO"}]
  return Response.json({factory:"6666 V6", total:list.length, products:list})
}
