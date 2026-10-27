"use client"
import {useEffect,useState} from 'react'
export default function Home(){
  const [products,setProducts]=useState<any[]>([])
  const [sales,setSales]=useState<any>(null)
  useEffect(()=>{
    fetch('/api/produk').then(r=>r.json()).then(d=>setProducts(d.products))
    fetch('/api/jual').then(r=>r.json()).then(d=>setSales(d))
  },[])
  async function beli(p:any){
    const wa=prompt("Masukkan WA kamu untuk kirim file otomatis:")
    if(!wa) return
    const bayar=await fetch('/api/bayar',{method:'POST', body:JSON.stringify({product:p.name, price:p.price})}).then(r=>r.json())
    await fetch('/api/jual',{method:'POST', body:JSON.stringify({product:p.name, price:p.price, wa})}).then(r=>r.json())
    const kirim=await fetch('/api/kirim',{method:'POST', body:JSON.stringify({product:p.name, buyer_wa:wa})}).then(r=>r.json())
    alert(`✅ ORDER TERIKAT KE KITA\nBank: ${bayar.bank} ${bayar.account_masked}\nProduk: ${p.name}\nLicense: ${kirim.license}\n\n${bayar.instruction}\nWA: ${bayar.wa}`)
    window.open(bayar.wa,'_blank')
  }
  return(
    <div style={{padding:20, background:'#000', color:'#0f0', minHeight:'100vh', fontFamily:'monospace'}}>
      <h1>🚀 NEXUS 6666 V5 SALES MACHINE</h1>
      <p>Factory tiap jam | Sales terikat ke kita | Omzet: Rp {sales?.total_omzet?.toLocaleString()||0} | {sales?.total_sales||0} order</p>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:15, marginTop:20}}>
        {products.map((p,i)=><div key={i} style={{border:'1px solid #0f0', padding:15, borderRadius:12}}>
          <h3 style={{margin:0}}>{p.name}</h3><p>Rp {p.price?.toLocaleString()}</p>
          <small>{p.created||''}</small>
          <button onClick={()=>beli(p)} style={{background:'#0f0', color:'#000', padding:'10px', width:'100%', fontWeight:'bold', marginTop:10, cursor:'pointer'}}>BELI + AUTO KIRIM</button>
        </div>)}
      </div>
      <div style={{marginTop:30}}><a href="/api/jual" target="_blank" style={{color:'#0f0'}}>📊 LIHAT PENJUALAN TERIKAT /api/jual</a></div>
    </div>
  )
}
