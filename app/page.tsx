"use client"
import { useState } from 'react'
export default function Home(){
  const [loading,setLoading]=useState(false)
  const products=[
    {name:"NEXUS V60 A2Z Z2A", price:100000},
    {name:"OMEGA ULTIMATE V50", price:50000},
    {name:"ULTRA SHIELD V35", price:35000}
  ]
  async function beliDirect(p:any){
    setLoading(true)
    const res=await fetch('/api/bayar',{method:'POST', body:JSON.stringify({product:p.name, price:p.price})})
    const d=await res.json()
    alert(`✅ DIRECT BANK NO MIDDLEMAN\nBank: ${d.bank}\nNo: ${d.account}\nA/n: ${d.name}\nProduk: ${d.product}\nHarga: ${d.price}\n\n${d.instruction}`)
    window.open(d.wa,'_blank')
    setLoading(false)
  }
  return (
    <div style={{padding:20, background:'#000', color:'#0f0', minHeight:'100vh'}}>
      <h1>🚀 NEXUS 6666 STORE - LIVE</h1>
      <p>Direct Bank - Tanpa Makelar - Tanpa Perantara</p>
      <div style={{display:'grid', gap:15, marginTop:20}}>
        {products.map((p,i)=><div key={i} style={{border:'1px solid #0f0', padding:15}}>
          <h3>{p.name}</h3>
          <p>Rp {p.price}</p>
          <button onClick={()=>beliDirect(p)} disabled={loading} style={{background:'#0f0', color:'#000', padding:'10px 20px', fontWeight:'bold'}}>
            {loading?'Processing...':'BELI DIRECT BANK'}
          </button>
        </div>)}
      </div>
      <div style={{marginTop:30}}>
        <a href="/api/trend" target="_blank" style={{color:'#0f0'}}>🔥 Lihat Trend Dunia /api/trend</a> | 
        <a href="/api/bayar" target="_blank" style={{color:'#0f0'}}> 💳 Test API Bayar</a>
      </div>
    </div>
  )
}
