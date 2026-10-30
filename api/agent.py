from http.server import BaseHTTPRequestHandler
import json, os

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        from urllib.parse import urlparse, parse_qs
        query = parse_qs(urlparse(self.path).query)
        agent_id = query.get('id', ['A0001'])[0]
        
        try:
            num = int(''.join(filter(str.isdigit, agent_id)) or 1)
        except:
            num = 1
            
        if num <= 1666:
            kasta = "ACQUISITION"
            tugas = "Cari traffic TikTok/IG/SEO"
        elif num <= 3332:
            kasta = "SALES"
            tugas = "Closing BRI ****7605 AUTO DELIVERY TANPA WA"
        elif num <= 4998:
            kasta = "DUPLICATION"
            tugas = "Rekrut A2Z Z2A - clone agent baru"
        else:
            kasta = "ASCENSION"
            tugas = "Upsell V10 ke V100 $100 DIRECT BRI"

        # Cek Gemini Key
        has_key = "OK" if os.environ.get("GEMINI_API_KEY") else "NOT_SET"
        
        resp = {
            "agent_id": agent_id,
            "kasta": kasta,
            "tugas": tugas,
            "BRI": "015901043760505",
            "ATAS_NAMA": "HERY HERMAWAN",
            "GEMINI_STATUS": has_key,
            "SWARM": "6666 OMEGA ACTIVE",
            "MODE": "A2Z_Z2A"
        }
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(resp, indent=2).encode())
