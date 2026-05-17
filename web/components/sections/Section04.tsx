import React from 'react';
import TableBlock from '../ui/TableBlock';
import CodeBlock from '../ui/CodeBlock';
import AlertBox from '../ui/AlertBox';

export default function Section04() {
  return (
    <>
      <h2>4.1 Les 3 Devises Principales</h2>
      <TableBlock
        headers={['Devise', 'Qui l\'utilise', 'Comment l\'obtenir', 'Retirable ?']}
        rows={[
          ['<strong>Coins</strong> 🪙', 'Viewers', 'Achat avec argent réel', '❌ Non'],
          ['<strong>Points</strong> ⭐', 'Hosts', 'Réception de cadeaux + tâches', '✅ Oui'],
          ['<strong>Diamonds</strong> 💎', 'Hosts', 'Synonyme de Points', '✅ Oui'],
        ]}
      />

      <h2>4.2 Coins — La Devise des Spectateurs</h2>
      <h3>Comment acheter des Coins</h3>
      <TableBlock
        headers={['Méthode', 'Disponibilité']}
        rows={[
          ['Carte bancaire (in-app)', 'Mondial'],
          ['Google Pay / Apple Pay', 'Selon région'],
          ['PayPal', 'Certains pays'],
          ['Plateformes partenaires (LootBar, BitTopUp, JollyMax)', 'Mondial'],
        ]}
      />

      <h3>Taux de change approximatifs</h3>
      <TableBlock
        headers={['Montant USD', 'Coins reçus (approx.)']}
        rows={[
          ['1 $', '~8 300 – 10 000 coins'],
          ['5 $', '~42 000 – 50 000 coins'],
          ['10 $', '~83 000 – 100 000 coins'],
          ['50 $', '~420 000 – 500 000 coins'],
          ['100 $', '~830 000 – 1 000 000 coins'],
        ]}
      />

      <AlertBox variant="info">
        Les taux varient selon la région, le pack choisi et les promotions en cours. Les plateformes tierces offrent parfois des bonus (5-15% de coins en plus).
      </AlertBox>

      <h3>À quoi servent les Coins</h3>
      <TableBlock
        headers={['Usage', 'Description']}
        rows={[
          ['<strong>Envoyer des cadeaux</strong>', 'Acheter des gifts virtuels pour les hosts'],
          ['<strong>Activer le VIP</strong>', 'Payer l\'accès aux niveaux VIP'],
          ['<strong>Effets spéciaux</strong>', 'Acheter des entrées, frames, stickers exclusifs'],
          ['<strong>Participation événements</strong>', 'Certains événements nécessitent des coins'],
        ]}
      />

      <h3>⚠️ Règles importantes sur les Coins</h3>
      <ul>
        <li>Les Coins sont <strong>NON REMBOURSABLES</strong> une fois achetés</li>
        <li>Les Coins sont <strong>NON TRANSFÉRABLES</strong> entre comptes</li>
        <li>Faire un chargeback = <strong>BAN PERMANENT</strong></li>
        <li>Vérifiez toujours les prix avant achat</li>
      </ul>

      <h2>4.3 Points — La Devise des Streamers</h2>
      <h3>Comment gagner des Points</h3>
      <TableBlock
        headers={['Source', 'Description', 'Fréquence']}
        rows={[
          ['<strong>Cadeaux des viewers</strong>', '~70% de la valeur convertie en points', 'En temps réel'],
          ['<strong>Tâches quotidiennes</strong>', 'Compléter les missions du Reward Center', 'Quotidien'],
          ['<strong>Tâches hebdomadaires</strong>', 'Missions à plus long terme', 'Hebdomadaire'],
          ['<strong>Bonus nouveaux utilisateurs</strong>', 'Missions spéciales 7 premiers jours', 'Unique'],
          ['<strong>Événements saisonniers</strong>', 'Bonus lors des campagnes spéciales', 'Variable'],
          ['<strong>Coins gratuits quotidiens</strong>', '400 coins/jour collectables', 'Quotidien'],
        ]}
      />

      <h3>Taux de conversion</h3>
      <CodeBlock>
{`💵 10 000 Points = 1 $ USD
💵 100 000 Points = 10 $ USD (seuil minimum de retrait)
💵 1 000 000 Points = 100 $ USD`}
      </CodeBlock>

      <h3>Flux de conversion complet</h3>
      <CodeBlock>
{`Viewer achète 100 000 Coins (~10$)
    → Envoie un cadeau de 100 000 Coins au Host
        → Plateforme retient ~30% (30 000)
            → Host reçoit ~70 000 Points
                → Host retire : 70 000 ÷ 10 000 = 7 $ USD`}
      </CodeBlock>

      <h2>4.4 Diamonds — Synonyme de Points</h2>
      <ul>
        <li>Les <strong>Diamonds</strong> et les <strong>Points</strong> sont souvent utilisés de manière interchangeable</li>
        <li>Dans certaines interfaces, les gains apparaissent en "Diamonds" plutôt qu'en "Points"</li>
        <li>Le taux reste identique : <strong>10 000 Diamonds = 1 $ USD</strong></li>
        <li>C'est simplement une question de terminologie dans l'interface</li>
      </ul>

      <h2>4.5 Coins Gratuits — Comment les Obtenir</h2>
      <TableBlock
        headers={['Méthode', 'Coins/jour', 'Effort']}
        rows={[
          ['<strong>Check-in quotidien</strong>', '~400 coins', 'Minimal'],
          ['<strong>Treasure Boxes</strong>', 'Variable (10-500)', 'Faible'],
          ['<strong>Regarder des streams</strong>', 'Variable', 'Faible'],
          ['<strong>Compléter les tâches</strong>', 'Variable', 'Moyen'],
          ['<strong>Événements spéciaux</strong>', 'Variable', 'Variable'],
          ['<strong>Récompenses VIP</strong>', '3 500-16 000/jour', 'Nécessite VIP actif'],
        ]}
      />

      <AlertBox variant="tip">
        <strong>Astuce économe :</strong> En collectant religieusement les 400 coins gratuits/jour pendant 3-4 mois, vous pouvez atteindre les niveaux VIP bas sans dépenser d'argent réel.
      </AlertBox>

      <h2>4.6 Tableau Récapitulatif</h2>
      <CodeBlock>
{`ARGENT RÉEL → COINS (achat) → CADEAUX (envoi) → POINTS (réception ~70%) → ARGENT RÉEL (retrait)

Taux clés :
• ~10 000 Coins = 1 $ (achat)
• 10 000 Points = 1 $ (retrait)
• Host garde ~70% → Pour 10$ de cadeaux, host reçoit ~7$
• Agent gagne 4-20% → Sur les 7$, agent prend 0.28$ à 1.40$
• Minimum retrait = 100 000 points = 10$`}
      </CodeBlock>
    </>
  );
}
