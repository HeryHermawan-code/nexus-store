from http.server import BaseHTTPRequestHandler
import json
import urllib.parse

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        query = urllib.parse.urlparse(self.path).query
        params = urllib.parse.parse_qs(query)
        product = params.get('product', ['QUANTUM-AGENT-001'])[0]
        data = {
          "STATUS": "READY - DIRECT REKENING",
          "TOKEN_PRICE": "$100 / token",
          "HARGA_RUPIAH": "Rp 1.666.000 (kurs 16660)",
          "REKENING": "BRI 015901054376505",
          "ATAS_NAMA": "HERY HERMAWAN",
          "MODE": "DIRECT TANPA MAKELAR - 100% MASUK REKENING",
          "product": product,
          "auto_delivery": True,
          "instruction": "Transfer PERSIS ke BRI 015901054376505 A/N HERY HERMAWAN"
        }
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data, indent=2).encode())
        return

    def do_POST(self):
        self.do_GET()
