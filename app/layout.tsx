import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WebFooter from '@/components/WebFooter';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata: Metadata = {
  title: 'ArtistConnect - Empowering All Artists',
  description: 'Connect, create, and collaborate with artists worldwide. Platform for musicians, visual artists, photographers, filmmakers, dancers, writers, and all creative professionals.',
  keywords: 'artists, musicians, visual arts, photography, filmmaking, dance, writing, digital art, creative community, collaboration, AI, human creativity',
  authors: [{ name: 'ArtistConnect' }],
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
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pb-20 md:pb-0 page-container">
            {children}
          </main>
          <WebFooter />
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
