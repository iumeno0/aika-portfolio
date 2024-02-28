import { M_PLUS_1p } from 'next/font/google';
import { Footer } from '@/views/Footer';
import { Header } from '@/views/Header';
import { SideMenu } from '@/views/SideMenu';
import type { Metadata } from 'next';
import './globals.css';

const defaultFonfStyle = M_PLUS_1p({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Aika Oguro',
  description: 'AikaOguroのポートフォリオ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={defaultFonfStyle.className}>
        <main className="flex flex-row">
          <SideMenu />
          <section className="min-h-screen w-full overflow-hidden pl-[300px] max-lg:pl-[146px] max-md:pl-0">
            <Header />
            {children}
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
