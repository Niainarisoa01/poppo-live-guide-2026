import React from 'react';
import TableBlock from '../ui/TableBlock';
import CodeBlock from '../ui/CodeBlock';

export default function Section09() {
  return (
    <>
      <h2>9.1 Le Principe des Paliers (Tiers)</h2>
      <p>Le système de commission de Poppo Live est <strong>basé sur la performance</strong>. Plus votre agence génère de revenus, plus votre pourcentage de commission augmente.</p>
      <ul>
        <li>Le calcul se fait sur une base <strong>mensuelle (30 jours glissants)</strong>.</li>
        <li>Le volume correspond au <strong>total des points</strong> générés par l'ensemble des hosts de votre agence.</li>
      </ul>

      <h2>9.2 Les Paliers de Commission (Gifts & Live)</h2>
      <p>C'est la commission standard sur les cadeaux reçus pendant les lives ou dans les Party Rooms.</p>
      <TableBlock
        headers={['Palier (Niveau)', 'Objectif Mensuel (Points générés)', 'Taux de Commission']}
        rows={[
          ['<strong>Level D</strong>', '0 – 2 Millions', '<strong>4%</strong>'],
          ['<strong>Level C</strong>', '2 Millions – 10 Millions', '<strong>8%</strong>'],
          ['<strong>Level B</strong>', '10 Millions – 50 Millions', '<strong>12%</strong>'],
          ['<strong>Level A</strong>', '50 Millions – 150 Millions', '<strong>16%</strong>'],
          ['<strong>Level S</strong>', '150 Millions et +', '<strong>20%</strong>'],
        ]}
      />
      <p><em>(Note : Ces seuils sont des standards indicatifs, Poppo peut ajuster les objectifs selon les régions ou les périodes promotionnelles).</em></p>

      <h2>9.3 Comment la Commission est Calculée ?</h2>
      
      <h3>Cas 1 : Gestion Directe de Hosts</h3>
      <p>Si vous gérez directement vos streamers.</p>
      <div className="formula-box">
        Revenu de l'Agence = (Total des Points des Hosts) × (Votre Taux de Commission)
      </div>
      <p><strong>Exemple :</strong></p>
      <ul>
        <li>Vos 10 hosts génèrent un total de 20 Millions de points ce mois-ci.</li>
        <li>Volume = 20M → Vous êtes au <strong>Level B (12%)</strong>.</li>
        <li>Commission : 20 000 000 × 12% = 2 400 000 points.</li>
        <li>En dollars : 2 400 000 ÷ 10 000 = <strong>240 $ USD</strong>.</li>
      </ul>

      <h3>Cas 2 : Gestion de Sub-Agents (Sous-agents)</h3>
      <p>Si vous recrutez d'autres agents sous vous, vous touchez la différence entre votre palier et le leur.</p>
      <div className="formula-box">
        Commission Sub-Agent = (Points du Sub-Agent) × (Votre Taux - Taux du Sub-Agent)
      </div>
      <p><strong>Exemple :</strong></p>
      <ul>
        <li>Vous êtes <strong>Level A (16%)</strong>.</li>
        <li>Un de vos sub-agents est <strong>Level C (8%)</strong> et a généré 5 Millions de points.</li>
        <li>Votre commission sur lui : 5 000 000 × (16% - 8%) = 5 000 000 × 8% = 400 000 points (<strong>40 $ USD</strong>).</li>
      </ul>

      <h2>9.4 Autres Sources de Revenus pour l'Agence</h2>
      <p>L'agence ne se limite pas à la commission sur les cadeaux :</p>

      <h3>1. Commission sur les Chats et Matchs</h3>
      <p>Les appels privés (Match) et les messages payants ont souvent un taux de commission différent, beaucoup plus élevé pour l'agence. Il peut atteindre <strong>jusqu'à 50%</strong> pour les agences de très haut niveau.</p>

      <h3>2. Bonus de Recrutement (Invite Rewards)</h3>
      <p>Poppo Live offre souvent des bonus fixes pour l'ajout de "Valid Hosts".</p>
      <ul>
        <li>Un <strong>Valid Host</strong> est généralement défini comme un nouveau streamer qui atteint certains critères dans sa première semaine (ex: streamer 2h par jour pendant 5 jours et générer X points).</li>
      </ul>

      <h3>3. Classements et Événements Agence</h3>
      <p>Les agences qui figurent dans le Top 10 ou Top 50 régional reçoivent des primes supplémentaires en fin de mois.</p>

      <h2>9.5 Le Suivi des Performances</h2>
      <p>Le maintien de votre taux dépend de votre activité. Si l'activité de vos hosts baisse le mois suivant, votre niveau (et donc votre taux de pourcentage) <strong>redescendra au palier inférieur</strong>.</p>
      <p>Il est donc crucial pour un agent de :</p>
      <ol>
        <li>Continuer à recruter.</li>
        <li>Remplacer les hosts inactifs.</li>
        <li>Motiver les hosts actuels à participer aux événements de la plateforme.</li>
      </ol>
    </>
  );
}
