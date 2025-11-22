import type { Metadata } from "next";
import { Anton, Merriweather, Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";

// 1. Define the fonts
const anton = Anton({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-hero" 
});

const merriweather = Merriweather({ 
  weight: ["300", "400", "700"], 
  subsets: ["latin"], 
  variable: "--font-narrative" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

const mono = Roboto_Mono({ 
  subsets: ["latin"], 
  variable: "--font-tech" 
});

export const metadata: Metadata = {
  title: "Project Vertex | Confidential",
  description: "Strategic Briefing Protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${merriweather.variable} ${montserrat.variable} ${mono.variable} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}