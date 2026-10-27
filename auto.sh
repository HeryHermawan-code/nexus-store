#!/data/data/com.termux/files/usr/bin/bash
set -e
cd ~/nexus-store
echo "[1] Install & Login check"
npm i -g vercel@latest > /dev/null 2>&1 || true

echo "[2] Deploy prod (force yes)"
rm -f deploy.log
yes | npx vercel --prod --yes --name nexus-store --force | tee deploy.log

echo "[3] Ambil URL asli"
URL=$(cat deploy.log | grep -Eo 'https://[^ ]+vercel\.app' | sort -u | tail -1)
echo "URL = $URL"
echo "$URL" > live_url.txt

echo "[4] Test LIVE"
if [ -z "$URL" ]; then
  echo "GAGAL: URL kosong, cek deploy.log"
  cat deploy.log
  exit 1
fi

curl -sL "$URL" | head -20
echo ""
echo "[OK] LIVE di: $URL"
echo "$URL"
