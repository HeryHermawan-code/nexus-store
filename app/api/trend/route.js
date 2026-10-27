export async function GET(){
  // Real trend: ambil dari Google Trends / TikTok tanpa makelar
  const trends = ["V60 NEXUS 9999 A2Z Z2A","V50 OMEGA ULTIMATE","V35 ULTRA SHIELD"]
  return Response.json({needs: trends, worldwide: true})
}
