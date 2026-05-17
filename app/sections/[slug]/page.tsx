import { sections, getSectionBySlug, getAdjacentSections } from '@/lib/sections';
import { notFound } from 'next/navigation';
import SectionNav from '@/components/ui/SectionNav';
import Section01 from '@/components/sections/Section01';
import Section02 from '@/components/sections/Section02';
import Section03 from '@/components/sections/Section03';
import Section04 from '@/components/sections/Section04';
import Section05 from '@/components/sections/Section05';
import Section06 from '@/components/sections/Section06';
import Section07 from '@/components/sections/Section07';
import Section08 from '@/components/sections/Section08';
import Section09 from '@/components/sections/Section09';
import Section10 from '@/components/sections/Section10';
import Section11 from '@/components/sections/Section11';
import Section12 from '@/components/sections/Section12';
import Section13 from '@/components/sections/Section13';
import Section14 from '@/components/sections/Section14';
import Section15 from '@/components/sections/Section15';
import Section16 from '@/components/sections/Section16';
import Section17 from '@/components/sections/Section17';
import Section18 from '@/components/sections/Section18';

const componentMap: Record<string, React.ComponentType> = {
  'introduction': Section01,
  'inscription-configuration': Section02,
  'navigation-application': Section03,
  'systeme-devises': Section04,
  'systeme-niveaux': Section05,
  'taches-recompenses': Section06,
  'gagner-argent-host': Section07,
  'gagner-argent-agent': Section08,
  'structure-commission': Section09,
  'systeme-vip': Section10,
  'batailles-pk-party': Section11,
  'regles-live-guidelines': Section12,
  'methodes-retrait': Section13,
  'regles-interdictions': Section14,
  'ban-processus-appel': Section15,
  'strategies-croissance': Section16,
  'conseils-erreurs': Section17,
  'mises-a-jour-2026': Section18,
};

export function generateStaticParams() {
  return sections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const section = getSectionBySlug(resolvedParams.slug);
  if (!section) return {};
  return {
    title: `${section.icon} ${section.title} — Guide Poppo Live 2026`,
    description: `Section ${section.num} du guide complet Poppo Live 2026 : ${section.title}`,
  };
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const section = getSectionBySlug(resolvedParams.slug);
  if (!section) notFound();

  const { prev, next } = getAdjacentSections(resolvedParams.slug);
  const Content = componentMap[resolvedParams.slug];
  if (!Content) notFound();

  return (
    <div className="page-content fade-in">
      <div className="section-badge">
        <span>{section.icon}</span>
        <span>Section {section.num} sur 18</span>
      </div>
      <h1 className="section-title">{section.icon} {section.title}</h1>
      <hr className="section-divider" />

      <Content />

      <SectionNav prev={prev} next={next} />
    </div>
  );
}
