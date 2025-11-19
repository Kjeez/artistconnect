import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TheatreConnect - Empowering Theatre Communities',
  description: 'Connect, create, and collaborate with artists in Delhi-NCR. AI-powered theatre platform for auditions, rehearsals, events, and more.',
  keywords: 'theatre, performing arts, auditions, casting, Delhi, NCR, artists, musicians, actors, dancers',
  authors: [{ name: 'TheatreConnect' }],
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  themeColor: '#ff00ff',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
