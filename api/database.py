from http.server import BaseHTTPRequestHandler
import json
from pathlib import Path
DB=Path("/tmp/database.json")
class handler(BaseHTTPRequestHandler):
 def do_GET(self):
  self.send_response(200)
  self.send_header('Content-type','application/json')
  self.send_header('Access-Control-Allow-Origin','*')
  self.end_headers()
  try: data=json.loads(DB.read_text()) if DB.exists() else []
  except: data=[]
  self.wfile.write(json.dumps({"TOTAL":len(data),"DATA":data}).encode())
