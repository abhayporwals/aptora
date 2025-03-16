import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Poppins({
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800","900"]
});

// const geistMono = Inter({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Aptura",
  description: "Built for Aptos. Powered by AI. Trusted by Arbiters.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} antialiased bg-[#0a0a0a] text-white`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
