"use client";
import { useState } from "react";
const PRODUCTS=[
{id:"V10",name:"V10 STARTER",price:1000000},
{id:"V25",name:"V25 PRO MAX",price:3999000},
{id:"V50",name:"V50 12 PRODUK",price:35000000},
{id:"V100",name:"V100 TOTAL",price:50000000},
];
export default function Page(){
const [sel,setSel]=useState<any>(null);
const BANK=process.env.NEXT_PUBLIC_BANK_ACCOUNT||"BRI 015901054376505 An HERY HERMAWAN";
const MASKED=BANK.replace(/\d{6,}/,(m)=>"****"+m.slice(-4));
async function buy(p:any){
const r=await fetch("/api/jual",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:p.id})});
const j=await r.json(); setSel(j);
}
return(<div style={{background:"#01172a",minHeight:"100vh",color:"white",padding:"16px"}}>
<div style={{background:"#0a2939",padding:"10px",borderRadius:"8px",borderLeft:"4px solid #0ae569",marginBottom:"12px",fontFamily:"monospace"}}>{MASKED} - AUTO DELIVERY TANPA WA</div>
<h3>NEXUS MEGA - 6666 ACTIVE</h3>
{PRODUCTS.map((p:any)=><div key={p.id} style={{display:"flex",justifyContent:"space-between",padding:"12px",background:"#1e293b",marginBottom:"4px"}}>
<span>{p.id} - {p.name} - Rp {p.price.toLocaleString()}</span><button onClick={()=>buy(p)} style={{background:"#0284c7",color:"white",border:"none",padding:"10px 18px",borderRadius:"8px"}}>BELI LANGSUNG</button></div>)}
{sel&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.85)",display:"flex",alignItems:"center",justifyContent:"center"}}>
<div style={{background:"white",color:"black",padding:"20px",borderRadius:"12px",maxWidth:"380px",width:"100%"}}>
<h3>DELIVERED AUTOMATICALLY</h3><div>Token: {sel.token}</div><div>Bank: {sel.bank_transfer}</div>
<a href={sel.download} style={{display:"block",background:"#22c55e",padding:"12px",textAlign:"center",borderRadius:"8px",marginTop:"10px",textDecoration:"none",color:"black"}}>DOWNLOAD PRODUK LANGSUNG</a>
<button onClick={()=>setSel(null)} style={{width:"100%",marginTop:"10px",padding:"10px"}}>Tutup</button></div></div>}
</div>)
}
