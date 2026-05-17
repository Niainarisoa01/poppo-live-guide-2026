import React from 'react';
import TableBlock from '../ui/TableBlock';
import AlertBox from '../ui/AlertBox';

export default function Section13() {
  return (
    <>
      <h2>13.1 Conditions Préalables au Retrait</h2>
      <p>Avant de pouvoir retirer le moindre centime, vous <strong>DEVEZ</strong> remplir ces conditions strictes :</p>
      <AlertBox variant="info">
        <strong>MISE À JOUR :</strong> La <strong>vérification faciale (KYC)</strong> est désormais la condition absolue pour débloquer les retraits d'argent. Aucun retrait n'est possible sans cette étape validée.
      </AlertBox>

      <ol>
        <li><strong>Vérification Faciale (KYC) Obligatoire :</strong> Vous devez avoir soumis votre selfie et pièce d'identité et avoir été approuvé par le système. Sans le badge KYC (Authentification), le bouton de retrait est désactivé.</li>
        <li><strong>Niveau Livestream :</strong> Avoir atteint le <strong>Level 5</strong>.</li>
        <li><strong>Sécurité 2FA (Nouveauté 2026) :</strong> L'authentification à deux facteurs est désormais obligatoire. Un code à 6 chiffres valide 30 secondes sera demandé à chaque retrait.</li>
        <li><strong>Version de l'App :</strong> Vous devez obligatoirement utiliser la <strong>version 2.9.6 ou supérieure</strong> de l'application Poppo Live (ou Vone en Inde).</li>
        <li><strong>Solde Minimum :</strong> Posséder au moins <strong>100 000 Points</strong>.</li>
      </ol>

      <h2>13.2 Les Règles du Retrait</h2>
      <ul>
        <li><strong>Taux de conversion fixe :</strong> 10 000 Points = 1 $ USD.</li>
        <li><strong>Seuil minimum :</strong> 10 $ USD (100 000 Points).</li>
        <li><strong>Incréments stricts :</strong> Vous ne pouvez retirer que des multiples de 10 $ (10$, 20$, 30$, 100$, etc.). Si vous avez 115 000 points (11,50$), vous ne pourrez retirer que 10$ et garderez 1,50$ en solde.</li>
        <li><strong>Limite quotidienne :</strong> Généralement fixée à <strong>500 $ par jour</strong>. Elle se réinitialise à minuit (UTC+8).</li>
        <li><strong>Limite mensuelle (Nouveauté 2026) :</strong> Fixée strictement à <strong>15 000 $</strong> (sur une base de 30 jours glissants).</li>
      </ul>

      <h2>13.3 Méthodes de Paiement (Options, Délais, Frais)</h2>
      <p>La disponibilité des méthodes dépend de votre pays de résidence.</p>

      <h3>1. E-Pay / E-Wallet (Local)</h3>
      <p><em>Certains pays (ex: GCash aux Philippines, Dana en Indonésie) ont des options locales directes.</em></p>
      <ul>
        <li><strong>Délai :</strong> Presque instantané (quelques minutes).</li>
        <li><strong>Frais :</strong> Très bas (0-1%).</li>
      </ul>

      <h3>2. Crypto-monnaie (USDT TRC-20)</h3>
      <p><em>Le choix préféré des professionnels car universel et rapide.</em></p>
      <ul>
        <li><strong>Délai :</strong> Très rapide. De 15 minutes à 3 heures (hors premier retrait).</li>
        <li><strong>Frais :</strong> 1% à 3% de frais réseau blockchain (soit environ 1$ à 3$ par transaction).</li>
        <li><strong>Prérequis :</strong> Avoir un wallet crypto (Binance, Trust Wallet, etc.) acceptant le réseau TRON (TRC20).</li>
      </ul>

      <h3>3. Payoneer</h3>
      <p><em>L'option internationale classique.</em></p>
      <ul>
        <li><strong>Délai :</strong> 1 à 3 jours ouvrés.</li>
        <li><strong>Frais :</strong> Poppo ne prend presque rien, mais Payoneer applique des frais de réception et de conversion de devises assez élevés (souvent 2-3$).</li>
      </ul>

      <h3>4. Virement Bancaire (Bank Transfer)</h3>
      <p><em>Moins recommandé pour les petites sommes.</em></p>
      <ul>
        <li><strong>Délai :</strong> Très lent (3 à 7 jours ouvrés).</li>
        <li><strong>Frais :</strong> Élevés (souvent 2-4% ou frais fixes de $5-$15) avec de mauvais taux de conversion interbancaires.</li>
      </ul>

      <h2>13.4 Procédure pour Lier son Compte de Retrait</h2>
      <ol>
        <li>Allez dans <strong>Profil</strong> → <strong>Wallet</strong> (Portefeuille).</li>
        <li>Cliquez sur l'onglet <strong>Withdraw</strong> (Retrait).</li>
        <li>Cliquez sur <strong>Bind Account</strong> (Lier un compte).</li>
        <li>Saisissez votre numéro de téléphone (un SMS de sécurité vous sera envoyé).</li>
        <li>Choisissez la méthode de paiement souhaitée (ex: USDT).</li>
        <li>Entrez les détails exacts de votre compte (Ex: l'adresse de votre wallet USDT TRC20).</li>
        <li>Validez.</li>
      </ol>

      <AlertBox variant="warning">
        <strong>IMPORTANT (Le Premier Retrait) :</strong> Votre tout premier retrait subit une vérification de sécurité manuelle. Il peut prendre de <strong>1 à 3 jours supplémentaires</strong>. Ne paniquez pas ! Les retraits suivants seront beaucoup plus rapides.
      </AlertBox>

      <h2>13.5 Problèmes de Retrait Fréquents</h2>
      <TableBlock
        headers={['Problème', 'Cause Probable', 'Solution']}
        rows={[
          ['<strong>"Binding Failed"</strong>', 'Compte (Payoneer/Banque) déjà lié à un autre Poppo ID.', 'Un compte bancaire ne peut être lié qu\'à un seul Poppo ID. Utilisez un autre compte.'],
          ['<strong>"Withdrawal Rejected"</strong>', 'KYC non valide ou suspicion de fraude.', 'Contactez le support via "Help & Feedback".'],
          ['<strong>Fonds non reçus après 48h</strong>', '(Si USDT) Erreur de réseau (ex: ERC20 au lieu de TRC20).', 'L\'argent est probablement perdu. Vérifiez TOUJOURS que vous utilisez l\'adresse TRC-20.'],
        ]}
      />

      <AlertBox variant="danger">
        <strong>ALERTE SÉCURITÉ 2026 : Arnaques aux "Frais de Formation"</strong><br/>
        De faux agents de "Service Client" demandent parfois aux utilisateurs de payer une "taxe", un "dépôt" ou des "frais de formation" pour débloquer leurs gains ou finaliser un retrait. <strong>Poppo Live ne demande JAMAIS de paiements externes pour traiter vos retraits</strong>. Le seul processus légitime se fait à l'intérieur de l'application. Ne payez jamais rien.
      </AlertBox>
    </>
  );
}
