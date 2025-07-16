import React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { pacifico, rajdhani, syncopate } from "./fonts"

export const metadata = {
  title: "Portfolio",
  description: "A creative developer portfolio with unique design and animations",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${pacifico.variable} ${rajdhani.variable} ${syncopate.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
