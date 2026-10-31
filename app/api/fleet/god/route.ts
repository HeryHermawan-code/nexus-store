import { NextResponse } from 'next/server'
const G = global as any
if(!G.O3X) G.O3X={recruited:5892,bound:5892}
export async function GET(){
 return NextResponse.json({
  protocol:"6666 OMEGA GOD 3X - FINAL REAL GOAL",
  fleet:{total:6666,V10:1000,V25:2000,V50:2000,V100:1000,V500:666},
  token:"NX-OMEGA-GOD-3X-FINAL",
  status:"FINAL REAL GOAL DONE"
 })
}
export async function POST(){
 G.O3X.recruited+=15
 return NextResponse.json({status:"RECRUIT SUCCESS"})
}
