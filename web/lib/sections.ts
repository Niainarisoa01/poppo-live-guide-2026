export interface SectionData {
  slug: string;
  num: string;
  icon: string;
  title: string;
  shortTitle: string;
}

export const sections: SectionData[] = [
  { slug: 'introduction', num: '01', icon: '📱', title: "Qu'est-ce que Poppo Live ?", shortTitle: 'Introduction' },
  { slug: 'inscription-configuration', num: '02', icon: '📝', title: 'Inscription & Configuration', shortTitle: 'Inscription' },
  { slug: 'navigation-application', num: '03', icon: '🧭', title: "Navigation de l'Application", shortTitle: 'Navigation' },
  { slug: 'systeme-devises', num: '04', icon: '💰', title: 'Système de Devises', shortTitle: 'Devises' },
  { slug: 'systeme-niveaux', num: '05', icon: '📊', title: 'Système de Niveaux', shortTitle: 'Niveaux' },
  { slug: 'taches-recompenses', num: '06', icon: '📋', title: 'Tâches & Récompenses', shortTitle: 'Tâches' },
  { slug: 'gagner-argent-host', num: '07', icon: '🎤', title: 'Gagner de l\'Argent (Host)', shortTitle: 'Revenus Host' },
  { slug: 'gagner-argent-agent', num: '08', icon: '👔', title: 'Gagner de l\'Argent (Agent)', shortTitle: 'Revenus Agent' },
  { slug: 'structure-commission', num: '09', icon: '📈', title: 'Structure de Commission', shortTitle: 'Commissions' },
  { slug: 'systeme-vip', num: '10', icon: '💎', title: 'Le Système VIP', shortTitle: 'VIP' },
  { slug: 'batailles-pk-party', num: '11', icon: '⚔️', title: 'Batailles PK & Party Rooms', shortTitle: 'PK & Party' },
  { slug: 'regles-live-guidelines', num: '12', icon: '📜', title: 'Règles de Live & Guidelines', shortTitle: 'Guidelines Live' },
  { slug: 'methodes-retrait', num: '13', icon: '💸', title: 'Méthodes de Retrait', shortTitle: 'Retraits' },
  { slug: 'regles-interdictions', num: '14', icon: '🚫', title: 'Règles & Interdictions', shortTitle: 'Règles' },
  { slug: 'ban-processus-appel', num: '15', icon: '⚖️', title: "Ban & Processus d'Appel", shortTitle: 'Bans & Appel' },
  { slug: 'strategies-croissance', num: '16', icon: '🚀', title: 'Stratégies de Croissance', shortTitle: 'Croissance' },
  { slug: 'conseils-erreurs', num: '17', icon: '💡', title: 'Conseils & Erreurs à Éviter', shortTitle: 'Conseils' },
  { slug: 'mises-a-jour-2026', num: '18', icon: '📢', title: 'Mises à Jour Mai 2026', shortTitle: 'Nouveautés' },
];

export function getSectionBySlug(slug: string): SectionData | undefined {
  return sections.find(s => s.slug === slug);
}

export function getAdjacentSections(slug: string): { prev?: SectionData; next?: SectionData } {
  const idx = sections.findIndex(s => s.slug === slug);
  return {
    prev: idx > 0 ? sections[idx - 1] : undefined,
    next: idx < sections.length - 1 ? sections[idx + 1] : undefined,
  };
}
