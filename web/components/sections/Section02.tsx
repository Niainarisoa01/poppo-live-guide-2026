import React from 'react';
import TableBlock from '../ui/TableBlock';
import CodeBlock from '../ui/CodeBlock';
import AlertBox from '../ui/AlertBox';

export default function Section02() {
  return (
    <>
      <h2>2.1 Téléchargement de l'Application</h2>
      <h3>Plateformes officielles</h3>
      <TableBlock
        headers={['Plateforme', 'Lien', 'Gratuit']}
        rows={[
          ['<strong>Android</strong>', 'Google Play Store → rechercher "Poppo Live"', '✅ Oui'],
          ['<strong>iOS</strong>', 'Apple App Store → rechercher "Poppo Live"', '✅ Oui'],
        ]}
      />

      <AlertBox variant="info">
        <strong>NOTE IMPORTANTE (Mai 2026) - Utilisateurs Indiens :</strong> À cause des régulations spécifiques en Inde, les utilisateurs de cette région doivent télécharger l'application <strong>Vone</strong>. C'est la version locale officielle de Poppo Live avec des fonctionnalités strictement identiques.
      </AlertBox>

      <AlertBox variant="warning">
        <strong>ATTENTION :</strong> Ne téléchargez JAMAIS l'app depuis des sources non officielles (APK tiers, sites web douteux). Les versions modifiées peuvent contenir des malwares et mèneront à un <strong>ban permanent</strong> de votre compte.
      </AlertBox>

      <h3>Configuration minimale requise</h3>
      <TableBlock
        headers={['Critère', 'Android', 'iOS']}
        rows={[
          ['<strong>OS minimum</strong>', 'Android 5.0+', 'iOS 12.0+'],
          ['<strong>RAM</strong>', '2 Go minimum', '2 Go minimum'],
          ['<strong>Stockage</strong>', '~150 Mo', '~200 Mo'],
          ['<strong>Caméra</strong>', 'Frontale requise', 'Frontale requise'],
          ['<strong>Internet</strong>', '4G/Wi-Fi stable', '4G/Wi-Fi stable'],
        ]}
      />

      <h2>2.2 Création du Compte — Étape par Étape</h2>
      <h3>Étape 1 : Ouvrir l'application</h3>
      <ul>
        <li>Lancer Poppo Live après installation</li>
        <li>L'écran d'accueil présente les options de connexion</li>
      </ul>

      <h3>Étape 2 : Choisir la méthode d'inscription</h3>
      <TableBlock
        headers={['Méthode', 'Avantages', 'Inconvénients']}
        rows={[
          ['<strong>Numéro de téléphone</strong>', 'Récupération facile, vérification rapide', 'Nécessite un numéro valide'],
          ['<strong>Google</strong>', 'Connexion rapide, pas de mot de passe', 'Lié au compte Google'],
          ['<strong>Facebook</strong>', 'Connexion sociale rapide', 'Dépend de votre compte FB'],
          ['<strong>Apple ID</strong> (iOS)', 'Sécurisé, option "Hide My Email"', 'iOS uniquement'],
        ]}
      />

      <h3>Étape 3 : Vérification</h3>
      <ul>
        <li><strong>Par téléphone :</strong> Entrer le code SMS reçu (valide 60 secondes)</li>
        <li><strong>Par réseau social :</strong> Autoriser l'accès dans la popup</li>
      </ul>

      <h3>Étape 4 : Configuration initiale du profil</h3>
      <ul>
        <li>Choisir un <strong>pseudo/nom d'affichage</strong> (modifiable plus tard)</li>
        <li>Ajouter une <strong>photo de profil</strong> (obligatoire pour streamer)</li>
        <li>Sélectionner votre <strong>genre</strong> (certaines tâches varient selon le genre)</li>
        <li>Indiquer vos <strong>centres d'intérêt</strong> (aide l'algorithme à vous recommander)</li>
      </ul>

      <h2>2.3 Configuration du Profil — Best Practices</h2>
      <h3>Photo de profil — Les règles</h3>
      <TableBlock
        headers={['✅ À FAIRE', '❌ À ÉVITER']}
        rows={[
          ['Photo claire de votre visage', 'Photos floues ou sombres'],
          ['Éclairage naturel', 'Filtres excessifs (risque de rejet KYC)'],
          ['Sourire engageant', 'Photos de groupe'],
          ['Fond propre et simple', 'Images de célébrités/personnages'],
          ['Photo récente', 'Photos anciennes non ressemblantes'],
        ]}
      />

      <h3>Bio/Description — Optimisation</h3>
      <p>Votre bio influence l'algorithme de découverte. Structurez-la ainsi :</p>
      <CodeBlock>
{`📌 Format recommandé :

🎤 [Votre talent principal] | 🌍 [Votre pays/ville]
⏰ Live tous les jours à [heure] !
💬 [Phrase d'accroche personnelle]
#[mot-clé1] #[mot-clé2] #[mot-clé3]`}
      </CodeBlock>

      <p><strong>Exemples :</strong></p>
      <CodeBlock>
{`🎤 Chanteuse & DJ | 🌍 Madagascar
⏰ Live tous les jours à 20h !
💬 Venez partager un bon moment musical ensemble 🎶
#music #live #chill

💃 Danse & Entertainment | 🌍 Paris
⏰ Live lundi-samedi 19h-22h
💬 Bonne ambiance garantie ✨
#dance #party #fun`}
      </CodeBlock>

      <h2>2.4 Authentification Faciale (Face Auth)</h2>
      <p>L'authentification faciale est <strong>OBLIGATOIRE</strong> pour :</p>
      <ul>
        <li>Passer en live</li>
        <li>Retirer de l'argent</li>
        <li>Participer aux PK battles</li>
        <li>Accéder à certaines fonctionnalités premium</li>
      </ul>

      <h3>Processus</h3>
      <TableBlock
        headers={['Étape', 'Action']}
        rows={[
          ['<strong>1</strong>', 'Aller dans Profil → Paramètres → Vérification d\'identité'],
          ['<strong>2</strong>', 'Prendre un <strong>selfie en temps réel</strong> (pas de photo existante)'],
          ['<strong>3</strong>', 'Suivre les instructions à l\'écran (tourner la tête, cligner des yeux)'],
          ['<strong>4</strong>', 'Attendre la validation (généralement instantanée à quelques minutes)'],
        ]}
      />

      <h3>Conseils pour réussir la vérification</h3>
      <ul>
        <li><strong>Éclairage :</strong> Face à une source de lumière naturelle</li>
        <li><strong>Fond :</strong> Uni et clair (mur blanc idéal)</li>
        <li><strong>Accessoires :</strong> Retirer lunettes de soleil, casquettes, masques</li>
        <li><strong>Maquillage :</strong> Léger — votre visage doit ressembler à votre photo de profil</li>
        <li><strong>Stabilité :</strong> Tenir le téléphone fermement, ne pas bouger</li>
      </ul>

      <AlertBox variant="warning">
        Si la vérification échoue 3 fois, vous devrez attendre 24h avant de réessayer.
      </AlertBox>

      <h2>2.5 Vérification KYC (Know Your Customer) — Niveau 5</h2>
      <p>La vérification KYC complète est nécessaire pour les <strong>retraits d'argent</strong>.</p>

      <h3>Documents requis</h3>
      <TableBlock
        headers={['Document', 'Formats acceptés']}
        rows={[
          ['<strong>Pièce d\'identité</strong>', 'Carte nationale d\'identité, Passeport, Permis de conduire'],
          ['<strong>Selfie de vérification</strong>', 'Photo en temps réel tenant votre pièce d\'identité'],
        ]}
      />

      <h3>Niveaux de vérification</h3>
      <TableBlock
        headers={['Niveau', 'Exigence', 'Déblocage']}
        rows={[
          ['<strong>Niveau 1</strong>', 'Inscription simple', 'Accès basique (regarder, chatter)'],
          ['<strong>Niveau 2</strong>', 'Photo de profil ajoutée', 'Accès élargi'],
          ['<strong>Niveau 3</strong>', 'Face auth complétée', 'Possibilité de streamer'],
          ['<strong>Niveau 4</strong>', 'Informations personnelles', 'Fonctionnalités avancées'],
          ['<strong>Niveau 5</strong>', 'KYC complet (ID + selfie)', '<strong>Retrait d\'argent autorisé</strong>'],
        ]}
      />

      <h2>2.6 Poppo ID — Votre Identifiant Unique</h2>
      <h3>Qu'est-ce que le Poppo ID ?</h3>
      <ul>
        <li>Un <strong>numéro unique de 9-10 chiffres</strong> attribué à chaque compte</li>
        <li>Visible dans Profil → sous votre nom d'affichage</li>
        <li><strong>Ne peut PAS être modifié</strong> une fois attribué</li>
      </ul>

      <h3>Importance du Poppo ID</h3>
      <TableBlock
        headers={['Utilisation', 'Détail']}
        rows={[
          ['<strong>Inscription agent</strong>', 'Nécessaire pour créer une agence'],
          ['<strong>Recevoir des invitations</strong>', 'Les agents l\'utilisent pour vous recruter'],
          ['<strong>Support technique</strong>', 'Demandé par le support pour identifier votre compte'],
          ['<strong>Transactions</strong>', 'Lié à vos méthodes de paiement'],
        ]}
      />

      <AlertBox variant="tip">
        <strong>Astuce :</strong> Notez votre Poppo ID dans un endroit sûr. Vous en aurez besoin pour toute démarche administrative.
      </AlertBox>

      <h2>2.7 Paramètres Essentiels à Configurer</h2>
      <h3>Notifications</h3>
      <TableBlock
        headers={['Notification', 'Recommandation']}
        rows={[
          ['Cadeaux reçus', '✅ Activer'],
          ['Nouveaux followers', '✅ Activer'],
          ['Messages privés', '✅ Activer'],
          ['Événements/Promotions', '✅ Activer (pour ne pas rater les bonus)'],
          ['Streams recommandés', '⚙️ Optionnel'],
        ]}
      />

      <h3>Confidentialité</h3>
      <TableBlock
        headers={['Paramètre', 'Recommandation']}
        rows={[
          ['Qui peut m\'envoyer des messages', 'Tout le monde (pour maximiser l\'engagement)'],
          ['Afficher mon statut en ligne', 'Oui (pour être découvert)'],
          ['Localisation', 'Activée (pour apparaître dans les recherches régionales)'],
          ['Bloquer les utilisateurs', 'Utiliser si nécessaire (harcèlement)'],
        ]}
      />

      <h3>Portefeuille (Wallet)</h3>
      <TableBlock
        headers={['Configuration', 'Action']}
        rows={[
          ['Lier méthode de retrait', 'Payoneer / USDT / Virement bancaire'],
          ['Vérifier les taux', 'Vérifier les frais de chaque méthode'],
          ['Activer les alertes', 'Pour suivre vos revenus en temps réel'],
        ]}
      />

      <h2>2.8 Checklist Complète d'Installation</h2>
      <CodeBlock>
{`☐ App téléchargée depuis une source officielle
☐ Compte créé et vérifié
☐ Photo de profil claire et engageante ajoutée
☐ Bio optimisée avec mots-clés
☐ Authentification faciale réussie
☐ Poppo ID noté en lieu sûr
☐ Notifications activées
☐ Paramètres de confidentialité configurés
☐ Méthode de retrait liée au Wallet
☐ KYC complété (Niveau 5) pour les retraits
☐ Niveau 5 atteint pour pouvoir streamer`}
      </CodeBlock>
    </>
  );
}
