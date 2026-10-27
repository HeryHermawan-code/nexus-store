import fs from 'fs'
import path from 'path'
export async function GET(){
  try{
    const p=path.join(process.cwd(),'data/produk.jsonl')
    let products=[]
    if(fs.existsSync(p)){
      const lines=fs.readFileSync(p,'utf8').split('\n').filter(Boolean)
      products=lines.slice(-50).map(l=>{try{return JSON.parse(l)}catch{return null}}).filter(Boolean).reverse()
    }
    // fallback kalau file belum ada
    if(products.length==0){
      products=[
        {id:"1", name:"NEXUS V60 A2Z Z2A SELF-HEAL", price:100000},
        {id:"2", name:"OMEGA ULTIMATE V50", price:50000},
        {id:"3", name:"ULTRA SHIELD V35", price:35000},
        {id:"4", name:"QUANTUM ENCRYPT V70", price:750000}
      ]
    }
    return Response.json({total:products.length, products, factory:"6666 AGENT ACTIVE 24H"})
  }catch(e){ return Response.json({error:e.message},{status:500}) }
}
