import { EB_Garamond, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const geistMono = localFont({
  src: '../app/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '400 500',
  display: 'swap',
});

export const geist = localFont({
  src: '../app/fonts/GeistVF.woff',
  variable: '--font-geist',
  weight: '400 500',
  display: 'swap',
});

export const tiemposText = localFont({
  src: [
    {
      path: '../app/fonts/TiemposText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/fonts/TiemposText-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
  ],
  variable: '--font-tiempos',
  display: 'swap',
});
