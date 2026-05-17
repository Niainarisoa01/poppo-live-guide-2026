import React from 'react';
import TableBlock from '../ui/TableBlock';

export default function Section16() {
  return (
    <>
      <h2>16.1 L'Algorithme de Poppo Live (Comment il fonctionne)</h2>
      <p>Pour avoir plus de viewers, il faut comprendre comment l'application décide de mettre votre live en page d'accueil (onglet "Hot").</p>
      
      <p>L'algorithme favorise :</p>
      <ol>
        <li><strong>La complétion du profil :</strong> Un profil 100% rempli (photo, bio, intérêts) est boosté.</li>
        <li><strong>Le temps de stream :</strong> Des streams de 2h continus valent mieux que quatre streams de 30 minutes.</li>
        <li><strong>L'Engagement Rate (Taux d'engagement) :</strong> Ce n'est pas seulement le nombre de spectateurs, c'est ce qu'ils font. Les commentaires, les cœurs cliqués et les petits cadeaux fréquents poussent votre live vers le haut.</li>
        <li><strong>La Rétention :</strong> Combien de temps un viewer reste-t-il sur votre stream avant de swiper ? Plus c'est long, plus l'algorithme vous met en avant.</li>
      </ol>

      <h2>16.2 Optimisation du Profil (Le SEO interne)</h2>
      <p>Votre profil est votre vitrine. Optimisez-le pour être trouvé.</p>
      <ul>
        <li><strong>La règle des Mots-clés :</strong> Mettez dans votre bio les mots que les gens recherchent. Ex: <code>Singer</code>, <code>Gamer</code>, <code>Chat</code>, <code>English</code>, <code>French</code>.</li>
        <li><strong>La Photo de Profil :</strong> C'est la miniature de votre stream. Elle doit être lumineuse, de bonne qualité, avec votre visage bien visible. Évitez les avatars ou les paysages.</li>
        <li><strong>La Bio :</strong> Indiquez vos <strong>horaires de stream</strong> pour que l'audience sache quand revenir.</li>
      </ul>

      <h2>16.3 Les 4 Piliers pour Attirer et Garder les Viewers</h2>
      
      <h3>1. Le "Greeting" (L'accueil)</h3>
      <p><strong>Règle absolue :</strong> Ne laissez jamais un viewer entrer sans dire son nom.</p>
      <p><em>Exemple : "Salut [Nom], bienvenue dans le stream ! Comment se passe ta journée ?"</em></p>
      <p>Cela crée une connexion immédiate et l'empêche de scroller au prochain live.</p>

      <h3>2. La Conversation</h3>
      <p>Si le chat est calme, ne restez pas à regarder votre écran en silence.</p>
      <ul>
        <li>Ayez des sujets préparés (une anecdote, un sujet d'actualité léger).</li>
        <li>Posez des questions ouvertes : "D'où venez-vous tous ce soir ?" ou "Quel est votre plat préféré ?".</li>
      </ul>

      <h3>3. La Gratitude (Remercier les Gifters)</h3>
      <ul>
        <li><strong>Pour les petits cadeaux (roses) :</strong> Un simple merci avec le nom.</li>
        <li><strong>Pour les gros cadeaux :</strong> Une réaction visible ! Certains streamers ont des chansons spéciales, des danses ou crient le nom du gifter. Le gifter paie pour de l'attention, donnez-lui.</li>
      </ul>

      <h3>4. Le Contenu Hors-Ligne (Les Moments & Vidéos)</h3>
      <p>Ne disparaissez pas quand vous coupez le stream.</p>
      <ul>
        <li><strong>Creator Center (Nouveauté 2026) :</strong> Utilisez ce nouvel espace pour publier des vidéos courtes (style TikTok). C'est aujourd'hui le meilleur moyen de faire monter votre <strong>Creator Level</strong> et d'attirer une nouvelle audience.</li>
        <li>Publiez sur l'onglet <strong>Moments/Square</strong> (photos, courts clips de votre journée).</li>
        <li>Rappelez l'heure de votre prochain live dans vos publications.</li>
      </ul>

      <h2>16.4 Le Réseautage (Networking)</h2>
      <p>Sur Poppo, on ne grandit pas seul.</p>
      <TableBlock
        headers={['Technique', 'Explication']}
        rows={[
          ['<strong>Collaboration (Multi-Guest)</strong>', 'Invitez d\'autres streamers dans des Party Rooms. Leurs viewers vous découvriront, et vice-versa.'],
          ['<strong>Gifting croisé</strong>', 'Utilisez une partie de vos coins gratuits pour offrir de petits cadeaux à d\'autres petits streamers. Souvent, ils vous le rendront et viendront vous voir.'],
          ['<strong>Familles / Guildes</strong>', 'Rejoignez des groupes au sein de votre agence pour vous soutenir mutuellement pendant les PK battles.'],
        ]}
      />
    </>
  );
}
