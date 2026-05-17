import React from 'react';
import TableBlock from '../ui/TableBlock';

export default function Section15() {
  return (
    <>
      <h2>15.1 Types de Suspensions</h2>
      <TableBlock
        headers={['Type', 'Durée', 'Explication']}
        rows={[
          ['<strong>Mute / Chat Ban</strong>', '1h à 24h', 'Impossible de commenter (spam, insultes légères).'],
          ['<strong>Live Ban Temp.</strong>', '24h à 7 jours', 'Impossible de streamer (inactivité en live, tenue limite).'],
          ['<strong>Device Ban</strong>', 'Permanent', 'Le téléphone (IMEI/IP) est banni. Souvent lié aux multi-comptes.'],
          ['<strong>Ban Permanent</strong>', 'Définitif', 'Compte fermé, fonds gelés (Fraude, nudité, mineurs, chargebacks).'],
        ]}
      />

      <h2>15.2 Comment faire appel (Appeal Process)</h2>
      <p>Si vous estimez que votre suspension est une erreur de l'IA de modération, voici la procédure officielle.</p>

      <h3>Méthode 1 : Via l'application (Le plus rapide)</h3>
      <p><em>Même si vous êtes banni de live, vous avez souvent accès à votre profil.</em></p>
      <ol>
        <li>Allez dans <strong>Profil</strong> → <strong>Settings</strong> (Paramètres).</li>
        <li>Cliquez sur <strong>Help & Feedback</strong> (Aide).</li>
        <li>Choisissez <strong>Message Feedback</strong> ou <strong>Appeal</strong>.</li>
        <li>Rédigez un message clair et objectif.</li>
      </ol>

      <h3>Méthode 2 : Par Email</h3>
      <p>Si l'application est totalement bloquée :</p>
      <ul>
        <li><strong>Email :</strong> <code>support@poppo.live</code> ou <code>contact@poppolive.com</code></li>
        <li><strong>Objet de l'email :</strong> <code>Account Appeal - UID: [Votre Poppo ID]</code></li>
      </ul>

      <h3>Méthode 3 : Via votre Agent (Le plus efficace)</h3>
      <p>Si vous appartenez à une agence, <strong>contactez votre agent immédiatement</strong>. Les Master Agents ont des contacts directs avec les équipes de Poppo sur WhatsApp ou Telegram et peuvent faire remonter votre dossier plus vite.</p>

      <h2>15.3 Comment rédiger un bon appel</h2>
      
      <h3>✅ Ce qu'il faut faire :</h3>
      <ul>
        <li><strong>Soyez concis :</strong> "Bonjour, mon compte a été suspendu pour 'inactivité', mais mon application a crashé."</li>
        <li><strong>Fournissez des preuves :</strong> Captures d'écran, reçus bancaires (en cas de bug de paiement).</li>
        <li><strong>Indiquez TOUJOURS votre Poppo ID (UID).</strong> Sans cela, ils ne chercheront pas.</li>
      </ul>

      <h3>❌ Ce qu'il ne faut pas faire :</h3>
      <ul>
        <li><strong>Spammer le support :</strong> N'envoyez pas 10 messages d'affilée, cela vous remet en bas de la file d'attente.</li>
        <li><strong>Raconter votre vie :</strong> Restez factuel. Les modérateurs lisent des milliers de tickets.</li>
        <li><strong>Être agressif :</strong> Les insultes ferment définitivement le dossier.</li>
      </ul>

      <p>⏱️ <strong>Délai :</strong> Un appel prend généralement entre <strong>24h et 72h</strong> pour être traité, parfois jusqu'à 2 semaines pour les cas complexes.</p>

      <h2>15.4 Et si l'appel est rejeté ?</h2>
      <p>Si vous avez fait un chargeback bancaire, l'appel sera <strong>systématiquement rejeté</strong>. Poppo ne pardonne pas ce qu'ils considèrent comme du vol.</p>

      <h3>Comment créer un nouveau compte en cas de Ban définitif ?</h3>
      <p>Si votre compte est perdu, vous devrez repartir de zéro. MAIS attention :</p>
      <ol>
        <li><strong>Changez d'appareil :</strong> Si votre téléphone a subi un "Device Ban", tout nouveau compte créé dessus sera banni dans l'heure.</li>
        <li><strong>Changez de méthode d'inscription :</strong> N'utilisez pas le même numéro de téléphone ou compte Google.</li>
        <li><strong>Changez de réseau :</strong> N'utilisez pas le même Wi-Fi au moment de la création pour éviter la liaison d'IP.</li>
      </ol>
    </>
  );
}
