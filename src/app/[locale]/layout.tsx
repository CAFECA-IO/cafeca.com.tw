import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Jost, Noto_Sans_TC, Noto_Sans_SC } from 'next/font/google';
import '@/app/globals.css';

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-noto-sans-tc',
  display: 'swap',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CAFECA Official Web',
  description: 'CAFECA Official Web',
  icons: {
    icon: '/logo/cafeca_icon.svg',
  },
  openGraph: {
    title: 'CAFECA',
    description: 'CAFECA Official Web',
    url: 'https://cafeca.com.tw/',
    siteName: 'CAFECA',
    type: 'website',
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${jost.variable} ${notoSansTC.variable} ${notoSansSC.variable} bg-surface-background`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
