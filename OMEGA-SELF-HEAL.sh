#!/data/data/com.termux/files/usr/bin/bash
# 6666 OMEGA SELF HEAL FOREVER - Tanpa Manusia Selamanya
SECRET="NEXUS-6666-OMEGA-INFINITY-A2Z-Z2A-ULTIMATE-∞-2026-BRI-015901054376505-HERY-HERMAWAN-AUTO-FOREVER-100X"
URL="https://nexus-store-iota-ebon.vercel.app"
while true; do
  echo "[$(date)] OMEGA CHECK..."
  STATUS=$(curl -s "$URL/api/nexus-core?action=status&key=$SECRET" | grep -o "OMEGA ACTIVE" || echo "DOWN")
  if [ "$STATUS" = "DOWN" ]; then
    echo "DOWN -> SELF HEAL..."
    git add . && git commit -m "OMEGA SELF HEAL $(date) - AUTO FIX" && git push || echo "Push gagal, coba lagi 60 detik"
    npx vercel --prod --yes || npm run build
  else
    echo "OMEGA ACTIVE - TOKEN FACTORY ON - HUNTER LOBBY PEMBELI"
    curl -s "$URL/api/token-factory?product=V50" > /dev/null
    curl -s "$URL/api/hunter" > /dev/null
  fi
  sleep 900
done
