from http.server import BaseHTTPRequestHandler
import json
class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        data = {
            "TOTAL_AGENTS": 6666,
            "ACTIVE": 6666,
            "CASTA": {
                "ACQUISITION": 1666,
                "SALES": 1666,
                "DUPLICATION": 1666,
                "ASCENSION": 1668
            },
            "BRI_7605": "OMEGA_ACTIVE",
            "STORE": "nexus-store-titc.vercel.app",
            "SWARM_STATUS": "A2Z_Z2A_RUNNING"
        }
        self.wfile.write(json.dumps(data, indent=2).encode())
