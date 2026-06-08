import type { Metadata } from "next";
import {
  ebGaramond,
  jetBrainsMono,
  geistMono,
  geist,
  tiemposText,
} from "@/lib/fonts";
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akhil T J — UX Designer",
  description: "Portfolio of Akhil T J, UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramond.variable} ${jetBrainsMono.variable} ${geistMono.variable} ${geist.variable} ${tiemposText.variable}`}
      >
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
