import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DRI - Light Scattering Database",
  description: "DRI Light Scattering Database, a comprehensive resource for Light Scattering data and analysis. View research papers and sample data gathered.",
  icons: "/icon.png", //icon.png as img/logo.svg doesnt work for this
  keywords: [
    "light scattering", "mie scattering", "optics", "photonics", "research database", "dri", "prakash gautam", "aerosol optics"
  ],
  authors: [{name: "Noe Rios", url: "https://onlynoer.github.io/portfolio"}, {name: "Alexander Danamidis", url: ""}],
  openGraph: {
    title: "DRI - Light Scattering Database",
    description: "DRI Light Scattering Database, a comprehensive resource for Light Scattering data and analysis. View research papers and sample data gathered.",
    url: "https://lightscatter.dri.edu",
    type: "website"
  }
};

//base layout for the entier app, rendering pages all like this

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className="scroll-smooth">
      
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}
