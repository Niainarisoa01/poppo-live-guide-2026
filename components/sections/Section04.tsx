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
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💵</div>
          <div className="stat-title">Conversion standard</div>
          <div className="stat-value">10k pts = 1$</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-title">Seuil de retrait</div>
          <div className="stat-value">100k pts = 10$</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💎</div>
          <div className="stat-title">Haut revenu</div>
          <div className="stat-value">1M pts = 100$</div>
        </div>
      </div>

      <h3>Flux de conversion complet</h3>
      <div className="workflow-diagram">
        <div className="workflow-step">
          <div className="workflow-icon">👤</div>
          <div className="workflow-content">
            <h4>Viewer</h4>
            <p>Achète 100 000 Coins (~10$)</p>
          </div>
        </div>
        <div className="workflow-arrow">⬇</div>
        <div className="workflow-step">
          <div className="workflow-icon">🎁</div>
          <div className="workflow-content">
            <h4>Envoi de Cadeau</h4>
            <p>Envoie un cadeau de 100 000 Coins au Host</p>
          </div>
        </div>
        <div className="workflow-arrow">⬇</div>
        <div className="workflow-step">
          <div className="workflow-icon">🏢</div>
          <div className="workflow-content">
            <h4>Plateforme</h4>
            <p>Retient ~30% (30 000)</p>
          </div>
        </div>
        <div className="workflow-arrow">⬇</div>
        <div className="workflow-step">
          <div className="workflow-icon">🎙️</div>
          <div className="workflow-content">
            <h4>Host</h4>
            <p>Reçoit ~70 000 Points</p>
          </div>
        </div>
        <div className="workflow-arrow">⬇</div>
        <div className="workflow-step" style={{ borderLeftColor: 'var(--accent-green)' }}>
          <div className="workflow-icon">💸</div>
          <div className="workflow-content">
            <h4>Retrait</h4>
            <p>Host retire : 70 000 ÷ 10 000 = <strong>7 $ USD</strong></p>
          </div>
        </div>
      </div>

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
      <div className="workflow-diagram horizontal">
        <div className="workflow-step">
          <div className="workflow-icon">💳</div>
          <div className="workflow-content">
            <h4>Argent réel</h4>
          </div>
        </div>
        <div className="workflow-arrow">➔</div>
        <div className="workflow-step">
          <div className="workflow-icon">🪙</div>
          <div className="workflow-content">
            <h4>Coins</h4>
            <p>Achat</p>
          </div>
        </div>
        <div className="workflow-arrow">➔</div>
        <div className="workflow-step">
          <div className="workflow-icon">🎁</div>
          <div className="workflow-content">
            <h4>Cadeaux</h4>
            <p>Envoi</p>
          </div>
        </div>
        <div className="workflow-arrow">➔</div>
        <div className="workflow-step">
          <div className="workflow-icon">⭐</div>
          <div className="workflow-content">
            <h4>Points</h4>
            <p>Réception ~70%</p>
          </div>
        </div>
        <div className="workflow-arrow">➔</div>
        <div className="workflow-step" style={{ borderTopColor: 'var(--accent-green)' }}>
          <div className="workflow-icon">💵</div>
          <div className="workflow-content">
            <h4>Argent réel</h4>
            <p>Retrait</p>
          </div>
        </div>
      </div>

      <ul className="checklist" style={{ background: 'var(--bg-card)', padding: '1.5rem 1.5rem 1.5rem 2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
        <li><strong>~10 000 Coins = 1 $</strong> (à l'achat)</li>
        <li><strong>10 000 Points = 1 $</strong> (au retrait)</li>
        <li><strong>Host garde ~70%</strong> → Pour 10$ de cadeaux, le host reçoit ~7$</li>
        <li><strong>Agent gagne 4-20%</strong> → Sur les 7$, l'agent prend entre 0.28$ et 1.40$</li>
        <li><strong>Minimum retrait</strong> = 100 000 points = 10$</li>
      </ul>
    </>
  );
}
