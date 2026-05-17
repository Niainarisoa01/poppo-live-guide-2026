import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ReadingProgress from '@/components/ui/ReadingProgress';
import FloatingCTA from '@/components/ui/FloatingCTA';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    template: '%s | Guide Poppo Live 2026',
    default: 'Guide Poppo Live 2026 — Le Guide Complet',
  },
  description: 'Le guide complet et à jour pour réussir sur Poppo Live en 2026. Inscription, revenus, VIP, stratégies de croissance, règles et plus encore.',
  keywords: ['Poppo Live', 'Guide Poppo', 'Gagner de l\'argent Poppo', 'Application de stream', 'Poppo Live Agent', 'Poppo Live Host', 'Revenus Poppo'],
  authors: [{ name: 'Poppo Live Guide' }],
  openGraph: {
    title: 'Guide Poppo Live 2026 — Le Guide Complet',
    description: 'Tout savoir sur Poppo Live : inscription, retraits, règles et stratégies de croissance.',
    url: 'https://poppo-live-guide.vercel.app',
    siteName: 'Guide Poppo Live 2026',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide Poppo Live 2026',
    description: 'Le guide complet pour réussir sur Poppo Live.',
  },
  alternates: {
    canonical: 'https://poppo-live-guide.vercel.app',
  },
  icons: {
    icon: '/logo-Poppo.webp',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Guide Poppo Live 2026',
    url: 'https://poppo-live-guide.vercel.app',
    description: 'Le guide complet et à jour pour réussir sur Poppo Live en 2026.',
  };

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="app-layout">
          <Sidebar />
          <ReadingProgress />
          <main className="main-content">
            {children}
            <Footer />
          </main>
          <ScrollToTop />
          <FloatingCTA />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
