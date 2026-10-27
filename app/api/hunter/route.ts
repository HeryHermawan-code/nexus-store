import { NextResponse } from 'next/server'
const HUNT_MSG = [
  "V50 12 PRODUK MEGA siap auto delivery - klik langsung dapat!",
  "NEXUS MEGA 6666 OMEGA ACTIVE - tanpa makelar, uang langsung BRI",
  "Token NX-OMEGA terbatas - Buyer Hunter aktif 24/7",
  "A2Z-Z2A Automation - produce token > produce product > sell > deliver auto"
]
export async function GET(){
  const msg = HUNT_MSG[Math.floor(Math.random()*HUNT_MSG.length)]
  return NextResponse.json({
    hunter:"6666 AGENT HUNTER ACTIVE 24/7",
    action:"LOBBY PEMBELI DUNIA",
    message: msg,
    target:["Google SEO","TikTok Auto","IG Auto","FB Marketplace","SEO Keyword V10 V50 V100"],
    next_job: new Date(Date.now()+3600000).toISOString(),
    self_heal:"Mencari pembeli otomatis selamanya tanpa manusia"
  })
}
