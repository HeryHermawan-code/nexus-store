from http.server import BaseHTTPRequestHandler
import json, os, datetime, urllib.parse
from pathlib import Path
DB_PATH=Path("/tmp/database.json")
class handler(BaseHTTPRequestHandler):
 def do_GET(self):
  params=urllib.parse.parse_qs(urllib.parse.urlparse(self.path).query)
  product=params.get('product',['QUANTUM-AGENT-001'])[0]
  key=os.environ.get('GEMINI_API_KEY','NOT_SET')
  rec={"time":datetime.datetime.utcnow().isoformat(),"product":product,"price":100,"rekening":"BRI 015901054376505"}
  try:
   d=[]
   if DB_PATH.exists(): d=json.loads(DB_PATH.read_text())
   d.append(rec)
   DB_PATH.write_text(json.dumps(d[-100:]))
  except: pass
  resp={"STATUS":"SUCCESS","TOKEN_PRICE":"$100","REKENING":"BRI 015901054376505","ATAS_NAMA":"HERY HERMAWAN","PRODUCT":product,"TYPE":"DIRECT","auto_delivery":True,"GEMINI_MODEL":"v1/models/gemini-2.0-flash","KEY_STATUS":"OK" if key!="NOT_SET" else "SET DI VERCEL"}
  self.send_response(200)
  self.send_header('Content-type','application/json')
  self.send_header('Access-Control-Allow-Origin','*')
  self.end_headers()
  self.wfile.write(json.dumps(resp,indent=2).encode())
