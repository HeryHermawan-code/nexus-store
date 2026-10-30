export const dynamic = "force-dynamic";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body style={{ margin: 0, background: "#000", color: "#fff", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
