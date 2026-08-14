import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import InteractiveBackground from "@/components/interactiveBackground";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Noe Rios, a software engineer and game developer. This site contains information about my projects, skills, and experience.",
  icons: "/portfolio/icon.svg", //icon.png as img/logo.svg doesnt work for this
  keywords: [
    "onlynoer", "portfolio",
  ],
  authors: [{name: "Noe Rios", url: "https://onlynoer.github.io/portfolio"}],
  openGraph: {
    title: "Portfolio",
    description: "Portfolio of Noe Rios, a software engineer and game developer. This site contains information about my projects, skills, and experience.",
    url: "https://onlynoer.github.io/portfolio",
    type: "website",
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
          <InteractiveBackground />
          <main>
            <div className="text-main-other-text">{children}</div>
          </main>
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}
