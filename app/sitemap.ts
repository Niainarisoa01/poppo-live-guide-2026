import { MetadataRoute } from 'next';
import { sections } from '@/lib/sections';

export default function sitemap(): MetadataRoute.Sitemap {
  // Définir l'URL de base (à changer lors du déploiement sur votre domaine personnalisé)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://poppo-live-guide.vercel.app';

  // Générer les URLs pour toutes les 18 sections
  const sectionUrls = sections.map((section) => ({
    url: `${baseUrl}/sections/${section.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Retourner la page d'accueil + toutes les sections
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...sectionUrls,
  ];
}
