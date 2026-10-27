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
cd ~/nexus-store
git add app/page.tsx
git commit -m "WA use ENV - secure"
git push

"use client"
import { useState } from 'react'

const PRODUCTS = [
 { id:"V10", name:"V10 STARTER KIT", price:1000000, tier:"STARTER", desc:"Starter Basic License" },
 { id:"V15", name:"V15 LITE COMMERCE", price:1500000, tier:"STARTER", desc:"Lite + BRI Payment" },
 { id:"V20", name:"V20 PRO SELLER", price:2500000, tier:"PRO", desc:"Pro Dashboard + Auto v1" },
 { id:"V25", name:"V25 PRO MAX", price:3999000, tier:"PRO", desc:"Pro Max Multi Bahasa" },
 { id:"V30", name:"V30 ULTRA", price:6500000, tier:"ULTRA", desc:"Ultra + Auto Delivery" },
 { id:"V35", name:"V35 MEGA", price:10000000, tier:"MEGA", desc:"Mega 6 Produk" },
 { id:"V40", name:"V40 GIGA", price:15000000, tier:"GIGA", desc:"Giga 8 Produk" },
 { id:"V45", name:"V45 TERA", price:25000000, tier:"TERA", desc:"Tera 10 Produk" },
 { id:"V50", name:"V50 PETA", price:35000000, tier:"PETA", desc:"Peta 12 Produk Full" },
 { id:"V60", name:"V60 EXA", price:50000000, tier:"EXA", desc:"Exa Unlimited" },
 { id:"V80", name:"V80 ZETTA", price:75000000, tier:"ZETTA", desc:"Zetta Enterprise" },
 { id:"V100", name:"V100 YOTTA", price:100000000, tier:"YOTTA", desc:"Yotta Lifetime" },
]

export default function Page(){
 const [q,setQ]=useState("")
 const [showBank,setShowBank]=useState<any>(null)
 const BANK = process.env.NEXT_PUBLIC_BANK_ACCOUNT || "BRI 015901054376505 An HERY HERMAWAN"
 const maskedBank = BANK.replace(/\d{10,}/, (m)=> "****"+m.slice(-4))
 
 const filtered = PRODUCTS.filter(p=> p.name.toLowerCase().includes(q.toLowerCase()))

 return (
 <div style={{background:"#0f172a",minHeight:"100vh",color:"white",padding:"16px",fontFamily:"sans-serif"}}>
   <h1 style={{fontSize:"22px",fontWeight:"900"}}>NEXUS MEGA AUTO 12 PRODUK</h1>
   <div style={{background:"#1e293b",padding:"10px",borderRadius:"8px",margin:"10px 0",borderLeft:"4px solid #0ea5e9"}}>
     <div style={{fontFamily:"monospace"}}>{maskedBank}</div>
     <div style={{display:"flex",gap:"6px",marginTop:"6px",flexWrap:"wrap"}}>
       <span style={{background:"#22c55e",color:"black",padding:"2px 8px",borderRadius:"12px",fontSize:"12px"}}>12 PRODUK</span>
       <span style={{background:"#22c55e",color:"black",padding:"2px 8px",borderRadius:"12px",fontSize:"12px"}}>1JT-100JT</span>
       <span style={{background:"#22c55e",color:"black",padding:"2px 8px",borderRadius:"12px",fontSize:"12px"}}>AUTO DELIVERY</span>
       <span style={{background:"#22c55e",color:"black",padding:"2px 8px",borderRadius:"12px",fontSize:"12px"}}>FIX 404</span>
     </div>
   </div>

   <input placeholder="Cari produk.." value={q} onChange={e=>setQ(e.target.value)} style={{width:"100%",padding:"10px",borderRadius:"8px",background:"#1e293b",border:"1px solid #334155",color:"white"}} />
   <p style={{fontSize:"12px",opacity:0.7,margin:"8px 0"}}>Menampilkan {filtered.length} dari 12 produk • Harga Rp 1.000.000 - Rp 100.000.000 • Auto IDR Convert • Auto Delivery</p>

   <div style={{background:"#1e293b",borderRadius:"12px",padding:"12px",marginTop:"12px"}}>
     <h2 style={{fontSize:"20px",fontWeight:"800",marginBottom:"10px"}}>Katalog Premium Variasi Harga</h2>
     {filtered.map(p=>(
       <div key={p.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 0",borderBottom:"1px solid #334155"}}>
         <div>
           <div><span style={{border:"1px solid #eab308",color:"#eab308",fontSize:"10px",padding:"2px 6px",borderRadius:"10px",marginRight:"6px"}}>{p.tier}</span><b>{p.name}</b></div>
           <div style={{fontSize:"12px",opacity:0.7}}>{p.desc}</div>
           <div style={{color:"#38bdf8",fontWeight:"800"}}>Rp {p.price.toLocaleString("id-ID")}</div>
           <div style={{fontSize:"11px",opacity:0.6}}>≈ ${(p.price/16500).toFixed(2)} USD</div>
         </div>
         <button onClick={()=>setShowBank(p)} style={{background:"#0284c7",color:"white",border:"none",padding:"12px 20px",borderRadius:"10px",fontWeight:"700"}}>Beli</button>
       </div>
     ))}
   </div>

   {showBank && (
     <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.8)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px",zIndex:99}}>
       <div style={{background:"white",color:"black",padding:"20px",borderRadius:"12px",width:"100%",maxWidth:"360px"}}>
         <h3 style={{fontWeight:"900"}}>{showBank.name}</h3>
         <p style={{fontSize:"12px"}}>Transfer Rp {showBank.price.toLocaleString("id-ID")} ke:</p>
         <div style={{background:"#f1f5f9",padding:"10px",borderRadius:"8px",fontFamily:"monospace",fontWeight:"800",margin:"10px 0",wordBreak:"break-all"}}>{BANK}</div>
         <p style={{fontSize:"11px",color:"green"}}>✓ Produk sudah terkirim otomatis tanpa WA - terikat ke kita selamanya</p>
         <div style={{display:"flex",gap:"8px",marginTop:"12px"}}>
           <button onClick={()=>{navigator.clipboard.writeText(BANK); alert("Rekening disalin!")}} style={{flex:1,background:"#0ea5e9",color:"white",border:"none",padding:"10px",borderRadius:"8px"}}>Salin Rekening</button>
           <button onClick={()=>setShowBank(null)} style={{flex:1,background:"#e2e8f0",border:"none",padding:"10px",borderRadius:"8px"}}>Tutup</button>
         </div>
         <div style={{marginTop:"10px",fontSize:"10px"}}><a href="/api/token" style={{color:"#0f0"}}>/api/token</a> | <a href="/api/produk" style={{color:"#0f0"}}>/api/produk</a> | <a href="/api/delivery" style={{color:"#0f0"}}>/api/delivery</a></div>
       </div>
     </div>
   )}
 </div>
 )
}



+k

