import './globals.css';

import { Figtree } from 'next/font/google';

import MainContentFooter from '~/components/layout/footer';
import Header from '~/components/layout/header';
import { Toaster } from '~/components/ui/toaster';
import getLanguageCookie from '~/i18n/get-language-cookie';
import initializeServerI18n from '~/i18n/i18n.server';
import configuration from '~/libs/configuration';
import { cn } from '~/libs/utils';

const font = Figtree({ subsets: ['latin'] });

export const metadata = {
  title: configuration.site.name,
  description: configuration.site.description,
  metadataBase: new URL(configuration.site.siteUrl!),
  openGraph: {
    url: configuration.site.siteUrl,
    siteName: configuration.site.siteName,
    description: configuration.site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: configuration.site.name,
    description: configuration.site.description,
    creator: configuration.site.twitterHandle,
  },
  icons: {
    icon: '/assets/images/favicon/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/assets/images/favicon/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const i18n = await initializeServerI18n(getLanguageCookie());

  return (
    <html lang={i18n.language}>
      <body
        className={cn(
          'grainy min-h-screen font-sans antialiased',
          font.className
        )}
      >
        <Header />
        {children}
        <MainContentFooter />
        <Toaster />
      </body>
    </html>
  );
}
