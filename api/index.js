module.exports=(req,res)=>{
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Content-Type','application/json');
const url=(req.url||'/').toLowerCase();
const q=req.query||{};
const now=new Date().toISOString();
const BANK={bank:'BRI',no:'015901054376505',an:'HERY HERMAWAN'};
const PRODUCTS=[
{id:'V30',name:'V30 ULTRA',price:7500,stock:999,api:'/api/bayar?id=V30'},
{id:'V21',name:'V21 QUANTUM SHIELD',price:29999,stock:999,api:'/api/bayar?id=V21'}
];
if(url.includes('/bayar')){
  const p=PRODUCTS.find(x=>url.includes(x.id.toLowerCase()))||PRODUCTS[0];
  return res.json({status:'BAYAR-AKTIF',real_goal:'100',a2z:'ACTIVE',z2a:'ACTIVE',product:p,transfer:BANK,instruksi:`Transfer Rp ${p.price} ke ${BANK.bank} ${BANK.no} AN ${BANK.an}, lalu kirim bukti ke WA`,time:now});
}
if(url.includes('/products')||url.includes('/produk')){
  return res.json({status:'ONLINE',real_goal:'100',count:PRODUCTS.length,products:PRODUCTS,bank:BANK,time:now});
}
return res.json({status:'ONLINE',
set +H
cd /data/data/com.termux/files/home/nexus-store
cat > api/index.js <<'END'
module.exports=(req,res)=>{
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Content-Type','application/json');
const BANK={bank:'BRI',no:'015901054376505',an:'HERY HERMAWAN'};
const PRODUCTS=[
{id:'V30',name:'V30 ULTRA',price:7500,stock:999,link:'/api/bayar?id=V30'},
{id:'V21',name:'V21 QUANTUM SHIELD',price:29999,stock:999,link:'/api/bayar?id=V21'},
{id:'VIP',name:'9999 A2Z Z2A REAL',price:100000,stock:99,link:'/api/bayar?id=VIP'}
];
const url=(req.url||'').toLowerCase();
const q=req.query||{};
if(url.includes('/bayar')){
 let id=(q.id||'V30').toUpperCase();
 let p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0];
 return res.json({status:'BAYAR-ACTIVE',real_goal:'100',a2z:'ACTIVE',z2a:'ACTIVE',mode:'3X-FINAL-API',product:p,transfer:BANK,instruksi:'Transfer Rp '+p.price+' ke '+BANK.bank+' '+BANK.no+' a.n '+BANK.an,wa:'Kirim bukti ke WhatsApp',time:new Date().toISOString()});
}
if(url.includes('/products')||url.includes('/produk')){
 return res.json({status:'ONLINE',real_goal:'100',count:PRODUCTS.length,products:PRODUCTS,bank:BANK,time:new Date().toISOString()});
}
return res.json({status:'ONLINE',real_goal:'100',a2z:'ACTIVE',z2a:'ACTIVE',mode:'3X-FINAL-API',bank:BANK,products:PRODUCTS,api:['/api','/api/products','/api/bayar?id=V30','/api/bayar?id=V21'],tunnel:'6666-7777-ACTIVE',time:new Date().toISOString()});
}
