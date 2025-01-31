import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Stulog',
  description: '勉強時間を記録するアプリ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="bg-gradient-to-bl from-emerald-50 to-blue-50">
      <body
        className={`${notoSansJp.className} antialiased selection:bg-opacity-55 selection:bg-blue-200`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
