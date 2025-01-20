import "./globals.css"
import { Inter } from "next/font/google"

import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Full Stack Developer Portfolio",
  description: "Portfolio website showcasing my projects and skills as a full stack developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

