module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Content-Type','application/json');
  const BANK = {bank:'BRI', no:'015901054376505', an:'HERY HERMAWAN'};
  const PRODUCTS = [
    {id:'V30', name:'V30 ULTRA', price:7500, stock:999, link:'/api/bayar?id=V30'},
    {id:'V21', name:'V21 QUANTUM SHIELD', price:29999, stock:999, link:'/api/bayar?id=V21'},
    {id:'VP', name:'9999 A2Z Z2A REAL', price:100000, stock:99, link:'/api/bayar?id=VP'}
  ];
  const url = (req.url || '').toLowerCase();
  const q = req.query || {};
  let id = (q.id || '').toString().toUpperCase();
  if(!id && url.includes('id=')){ try{id=url.split('id=')[1].split('&')[0].toUpperCase();}catch(e){} }
  if(url.includes('/bayar') && id){
    const p = PRODUCTS.find(x=>x.id===id) || PRODUCTS[0];
    return res.json({status:'BAYAR-ACTIVE', real_goal:'100', a2z:'ACTIVE', z2a:'ACTIVE', mode:'3X-FINAL-API-SELFHEAL', product:p, transfer:BANK, instruksi:'Transfer Rp '+p.price+' ke '+BANK.bank+' '+BANK.no+' AN '+BANK.an+' lalu kirim bukti ke WhatsApp', time:new Date().toISOString()});
  }
  if(url.includes('/products') || url.includes('/produk')){
    return res.json({status:'ONLINE', real_goal:'100', count:PRODUCTS.length, products:PRODUCTS, bank:BANK, time:new Date().toISOString()});
  }
  return res.json({status:'ONLINE', real_goal:'100', a2z:'ACTIVE', z2a:'ACTIVE', node:'3X-FINAL-API-SELFHEAL', bank:BANK, products:PRODUCTS, api:['/api','/api/products','/api/bayar?id=V30','/api/bayar?id=V21'], tunnel:'6666-7777-ACTIVE', time:new Date().toISOString()});
};
