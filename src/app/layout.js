import { Geist, Geist_Mono } from "next/font/google";
import { Leckerli_One } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Providers from "@/store/providers";
import SessionProviderWrapper from "@/store/sessionProviderWrapper";

const leckerliOne = Leckerli_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-leckerli",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cover Letter Rizz",
  description:
    "Your solution to quickly creating cover letters and upping your job application game.",
  icons: {
    icon: "/faviconRizz.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${leckerliOne.variable} antialiased`}
      >
        <SessionProviderWrapper>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Providers> {children} </Providers>
          </ThemeProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
