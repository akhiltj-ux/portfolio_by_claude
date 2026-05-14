import type { Metadata } from 'next';
import { ebGaramond, jetBrainsMono } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akhil T J — UX Designer',
  description: 'Portfolio of Akhil T J, UX Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
