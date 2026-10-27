"use client"
import { useState, useEffect } from 'react'
export default function Home(){
  const [products,setProducts]=useState<any[]>([])
  const [loading,setLoading]=useState(false)
  useEffect(()=>{ fetch('/api/produk').then(r=>r.json()).then(d=>setProducts(d.products||[])) },[])
  async function beli(p:any){
    setLoading(true)
    const bayar=await fetch('/api/bayar',{method:'POST', body:JSON.stringify({product:p.name, price:p.price})}).then(r=>r.json())
    const jual=await fetch('/api/jual',{method:'POST', body:JSON.stringify({product:p.name, price:p.price, buyer:'web'})}).then(r=>r.json())
    alert(`${bayar.method}\nBank: ${bayar.bank} ${bayar.account_masked}\nA/n: ${bayar.name}\nProduk: ${p.name}\n${bayar.instruction}`)
    window.open(bayar.wa,'_blank')
    setLoading(false)
  }
  return (
    <div style={{padding:20, background:'#000', color:'#0f0', minHeight:'100vh', fontFamily:'monospace'}}>
      <h1>🚀 NEXUS 6666 PRODUCT FACTORY - LIVE</h1>
      <p>Agent produksi tiap jam | Direct Bank Tanpa Makelar | {products.length} Produk Active</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:15, marginTop:20}}>
        {products.map((p,i)=><div key={i} style={{border:'1px solid #0f0', padding:15, borderRadius:10}}>
          <h3 style={{margin:'0 0 10px 0'}}>{p.name}</h3>
          <p>Rp {p.price?.toLocaleString()}</p>
          <button onClick={()=>beli(p)} disabled={loading} style={{background:'#0f0', color:'#000', padding:'10px', width:'100%', fontWeight:'bold', cursor:'pointer'}}>
            BELI DIRECT BANK
          </button>
        </div>)}
      </div>
      <div style={{marginTop:30, fontSize:12}}>
        <a href="/api/produk" target="_blank" style={{color:'#0f0'}}>📦 /api/produk</a> | 
        <a href="/api/jual" target="_blank" style={{color:'#0f0'}}> 💰 /api/jual</a> | 
        <a href="/api/bayar" target="_blank" style={{color:'#0f0'}}> 💳 /api/bayar</a> | 
        <a href="/api/trend" target="_blank" style={{color:'#0f0'}}> 🔥 /api/trend</a>
      </div>
    </div>
  )
}
