import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Buddy — Learn to Code Like a Pro 🐍",
  description: "Interactive Python programming for young coders. Learn coding, computer science, and AI!",
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0a0e17",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0e17] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
