import React from 'react';
import TableBlock from '../ui/TableBlock';

export default function Section10() {
  return (
    <>
      <h2>10.1 Comprendre le VIP sur Poppo</h2>
      <p>Le système VIP de Poppo Live n'est pas un abonnement mensuel classique (avec un prix fixe en monnaie fiat). Il est basé sur la <strong>dépense de Coins</strong> à l'intérieur de l'application.</p>

      <h3>Deux concepts clés :</h3>
      <ol>
        <li><strong>Progression Permanente :</strong> Chaque coin que vous dépensez (en cadeaux, etc.) vous fait monter dans une échelle de 100 niveaux. Vous ne perdez jamais cette progression.</li>
        <li><strong>Activation VIP (30 jours) :</strong> Pour bénéficier des avantages concrets de votre niveau VIP, vous devez l'activer pour 30 jours en payant une somme spécifique en Coins.</li>
      </ol>

      <h2>10.2 Les Tiers VIP et Leurs Coûts</h2>
      <p>Il existe deux catégories principales de VIP payants :</p>
      <TableBlock
        headers={['Catégorie', 'Coût d\'Activation (30 Jours)', 'Allocation Quotidienne']}
        rows={[
          ['<strong>Normal VIP</strong>', '<strong>95 000 Coins</strong>', '<strong>~3 500 Coins / jour</strong>'],
          ['<strong>Super VIP</strong>', '<strong>450 000 Coins</strong>', '<strong>~16 000 Coins / jour</strong>'],
        ]}
      />

      <h3>L'astuce du ROI (Retour sur Investissement)</h3>
      <p>Si vous activez le Normal VIP (95K) et que vous vous connectez <strong>tous les jours</strong> pour réclamer vos 3 500 coins, vous accumulerez 105 000 coins en 30 jours. Le VIP se rembourse de lui-même, à condition de ne jamais rater un seul jour de connexion !</p>

      <h2>10.3 Les Avantages VIP (Perks)</h2>
      <p>Plus votre niveau VIP est élevé (1 à 100), plus vos avantages s'améliorent.</p>

      <h3>Avantages Visuels & Sociaux</h3>
      <ul>
        <li><strong>Badge VIP :</strong> Visible à côté de votre nom partout dans l'app.</li>
        <li><strong>Effets d'Entrée :</strong> Animations spectaculaires quand vous entrez dans un live (les niveaux 80+ ont des animations de voitures de luxe, dragons, etc.).</li>
        <li><strong>Bulle de Chat :</strong> Vos messages ressortent en couleur dans le chat.</li>
        <li><strong>Montures (Mounts) :</strong> Véhicules virtuels pour arriver dans les rooms.</li>
      </ul>

      <h3>Avantages Fonctionnels</h3>
      <ul>
        <li><strong>Priorité d'entrée :</strong> Vous pouvez entrer dans des Party Rooms pleines.</li>
        <li><strong>Bonus Multiplicateur :</strong> Vos chances de déclencher des "lucky gifts" (cadeaux avec multiplicateurs) sont légèrement augmentées.</li>
        <li><strong>Le Mode Incognito/Furtif :</strong> Débloqué à partir des niveaux 61+. Permet d'entrer dans des streams sans déclencher d'alerte, de cacher son niveau de richesse, et d'observer anonymement.</li>
      </ul>

      <h2>10.4 Comment obtenir le VIP Gratuitement ?</h2>
      <p>Pour les utilisateurs patients (La voie du "Grind") :</p>
      <ol>
        <li><strong>La Collecte Quotidienne :</strong> Poppo offre environ 400 coins gratuits par jour (via Treasure Boxes, tâches de visionnage).</li>
        <li><strong>L'Accumulation :</strong> 400 coins × 30 jours = 12 000 coins par mois.</li>
        <li><strong>Le Cap :</strong> En environ 3 à 4 mois de collecte régulière, sans rien dépenser d'autre, vous accumulez assez pour payer l'activation du Normal VIP ou monter dans les premiers niveaux VIP permanents.</li>
        <li><strong>Réinvestissement :</strong> Une fois le Normal VIP atteint, les 3 500 coins par jour vous permettent de le renouveler presque indéfiniment.</li>
      </ol>
    </>
  );
}
