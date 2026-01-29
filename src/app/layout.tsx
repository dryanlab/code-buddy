import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import ThemeChooserModal from "@/components/ThemeChooserModal";

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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <ThemeChooserModal />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
