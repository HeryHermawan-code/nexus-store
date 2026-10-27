"use client"
import {useEffect,useState} from 'react'
export default function Home(){
  const [products,setProducts]=useState<any[]>([])
  const [result,setResult]=useState<any>(null)
  useEffect(()=>{ fetch('/api/produk').then(r=>r.json()).then(d=>setProducts(d.products||[])) },[])
  async function beli(p:any){
    const bayar=await fetch('/api/bayar',{method:'POST', body:JSON.stringify({product:p.name, price:p.price})}).then(r=>r.json())
    const delivery=await fetch('/api/delivery',{method:'POST', body:JSON.stringify({token:bayar.token, product:p.name})}).then(r=>r.json())
    await fetch('/api/jual',{method:'POST', body:JSON.stringify({product:p.name, price:p.price, token:bayar.token})})
    setResult({bayar, delivery})
  }
  return(
    <div style={{padding:20, background:'#000', color:'#0F0', minHeight:'100vh', fontFamily:'monospace'}}>
      <h1>🚀 NEXUS 6666 V7 ULTRA - INSTANT DELIVERY</h1>
      <p>Factory tiap 30 menit | Klik Bayar = Langsung Dapat Produk | Tanpa WA | Tanpa Perintah Manusia | Terikat Auto</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:15, marginTop:20}}>
        {products.map((p,i)=><div key={i} style={{border:'1px solid #0F0', padding:15, borderRadius:12}}>
          <h3 style={{margin:0}}>{p.name}</h3><p>Rp {p.price?.toLocaleString()}</p>
          <button onClick={()=>beli(p)} style={{background:'#0F0', color:'#000', padding:'12px', width:'100%', fontWeight:'bold', cursor:'pointer'}}>BAYAR = LANGSUNG DAPAT PRODUK</button>
        </div>)}
      </div>
      {result && <div style={{marginTop:30, border:'2px solid #0F0', padding:20, background:'#001100', whiteSpace:'pre-wrap'}}>
        <h2>✅ DELIVERY INSTANT SUCCESS</h2>
        <p>Bank: {result.bayar.bank} {result.bayar.account_masked} a/n {result.bayar.name}</p>
        <p>Token: {result.bayar.token}</p>
        <p>License: {result.delivery.license}</p>
        <p>File:</p>
        <div>{result.delivery.file_content}</div>
        <p>Produk sudah terkirim otomatis tanpa WA - terikat ke kita selamanya</p>
      </div>}
      <div style={{marginTop:20, fontSize:12}}>
        <a href="/api/token" style={{color:'#0F0'}}>/api/token</a> | <a href="/api/produk" style={{color:'#0F0'}}>/api/produk</a> | <a href="/api/delivery" style={{color:'#0F0'}}>/api/delivery</a> | <a href="/api/jual" style={{color:'#0F0'}}>/api/jual</a>
      </div>
    </div>
  )
}
