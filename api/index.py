from http.server import BaseHTTPRequestHandler
import json
class handler(BaseHTTPRequestHandler):
 def do_GET(self):
  self.send_response(200)
  self.send_header('Content-type','application/json')
  self.send_header('Access-Control-Allow-Origin','*')
  self.end_headers()
  self.wfile.write(json.dumps({"STATUS":"NEXUS READY","REKENING":"BRI 015901054376505","PRICE":"$100 DIRECT"}).encode())
