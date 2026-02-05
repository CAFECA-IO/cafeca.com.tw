import type { Metadata } from 'next';
import '@/app/globals.css';
import { LanguageProvider } from '@/contexts/language_context';

export const metadata: Metadata = {
  title: '卡菲卡金融科技股份有限公司',
  description: 'CAFECA 致力於打造智慧金融架構，提供媲美全球標準的現代化模組技術棧。我們自行研發的高效能金融基礎設施，專為自主性、擴展性及跨國部署設計，以去中心化技術賦能企業，創造可信賴、安全且智能的數位商業環境。',
  icons: {
    icon: '/logo/cafeca_icon.svg',
    shortcut: '/logo/cafeca_icon.svg',
    apple: '/logo/cafeca_icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
