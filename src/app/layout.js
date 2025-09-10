import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mrunal Gaikwad — AI & GenAI",
  description: "AI/GenAI practitioner building production ML systems and copilots.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Mrunal Gaikwad — AI & GenAI",
    description: "AI/GenAI practitioner building production ML systems and copilots.",
    type: "website",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mrunal Gaikwad — AI & GenAI",
    description: "AI/GenAI practitioner building production ML systems and copilots.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
