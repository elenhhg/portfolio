import { Pacifico, Rajdhani, Syncopate } from "next/font/google"

export const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
})

export const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rajdhani",
})

export const syncopate = Syncopate({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syncopate",
})
