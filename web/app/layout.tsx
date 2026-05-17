import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ReadingProgress from '@/components/ui/ReadingProgress';

export const metadata: Metadata = {
  title: 'Guide Poppo Live 2026 — Le Guide Complet',
  description: 'Le guide complet et à jour pour réussir sur Poppo Live en 2026. Inscription, revenus, VIP, stratégies de croissance, règles et plus encore.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="app-layout">
          <Sidebar />
          <ReadingProgress />
          <main className="main-content">
            {children}
          </main>
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
