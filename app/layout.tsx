import type { Metadata } from "next";
import {
  ebGaramond,
  jetBrainsMono,
  geistMono,
  geist,
  tiemposText,
} from "@/lib/fonts";
import ScrollToTop from "@/components/ScrollToTop";
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
        {children}
      </body>
    </html>
  );
}
