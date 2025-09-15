import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Erreurs communes",
    description: "Les erreurs les plus fréquentes lors de l'utilisation de Fetch et comment les résoudre.",
    keywords: ["erreurs", "fetch", "cors", "404", "500", "network", "débogage"],
    group: "notes"
}

const corsError = 
`// ❌ Erreur CORS typique
fetch('https://autre-domaine.com/api/data')
  .then(response => response.json())
  .catch(error => {
    // TypeError: Failed to fetch
    // ou Access to fetch at '...' from origin '...' has been blocked by CORS policy
    console.error('Erreur CORS:', error);
  });`;

const corsSolution = 
`// ✅ Solutions pour CORS
// 1. Utiliser un proxy en développement (dans package.json ou vite.config.js)
// 2. Serveur doit inclure les headers CORS appropriés
// 3. Utiliser un serveur proxy comme alternative

// Exemple avec un proxy local
fetch('/api/proxy/data') // Votre serveur proxy redirige vers l'API externe
  .then(response => response.json())
  .then(data => console.log(data));`;

const networkError = 
`// ❌ Gestion insuffisante des erreurs réseau
fetch('https://api.exemple.com/data')
  .then(response => response.json()) // ⚠️ Ne vérifie pas si la requête a réussi
  .then(data => console.log(data));`;

const networkSolution = 
`// ✅ Gestion complète des erreurs
async function obtenirDonnees() {
  try {
    const response = await fetch('https://api.exemple.com/data');
    
    // Vérifier si la requête a réussi
    if (!response.ok) {
      throw new Error(\`Erreur HTTP: \${response.status} - \${response.statusText}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      // Erreur réseau (pas de connexion, serveur down, etc.)
      console.error('Erreur de connexion:', error);
      throw new Error('Impossible de se connecter au serveur');
    } else if (error.message.includes('HTTP:')) {
      // Erreur HTTP (404, 500, etc.)
      console.error('Erreur serveur:', error);
      throw error;
    } else {
      // Autre erreur (parsing JSON, etc.)
      console.error('Erreur inattendue:', error);
      throw new Error('Une erreur inattendue s\'est produite');
    }
  }
}`;

const jsonError = 
`// ❌ Erreur de parsing JSON
fetch('https://api.exemple.com/data')
  .then(response => response.json()) // ⚠️ Peut échouer si la réponse n'est pas du JSON
  .then(data => console.log(data))
  .catch(error => {
    // SyntaxError: Unexpected token < in JSON at position 0
    console.error('Erreur JSON:', error);
  });`;

const jsonSolution = 
`// ✅ Vérification du type de contenu avant parsing
async function obtenirDonnees() {
  const response = await fetch('https://api.exemple.com/data');
  
  if (!response.ok) {
    throw new Error(\`Erreur HTTP: \${response.status}\`);
  }
  
  const contentType = response.headers.get('content-type');
  
  if (contentType?.includes('application/json')) {
    try {
      return await response.json();
    } catch (error) {
      console.error('Erreur de parsing JSON:', error);
      throw new Error('Réponse JSON invalide');
    }
  } else {
    // La réponse n'est pas du JSON
    const text = await response.text();
    console.warn('Réponse non-JSON reçue:', text);
    throw new Error('Format de réponse inattendu');
  }
}`;

const timeoutError = 
`// ❌ Pas de timeout - la requête peut trainer indéfiniment
fetch('https://api-lente.com/data')
  .then(response => response.json());`;

const timeoutSolution = 
`// ✅ Implémentation d'un timeout
function fetchAvecTimeout(url, options = {}, timeout = 5000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout de la requête')), timeout)
    )
  ]);
}

// Utilisation
async function obtenirDonnees() {
  try {
    const response = await fetchAvecTimeout('https://api-lente.com/data', {}, 5000);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message === 'Timeout de la requête') {
      console.error('La requête a pris trop de temps');
      // Afficher un message à l'utilisateur
    } else {
      console.error('Autre erreur:', error);
    }
  }
}`;

const rateLimitError = 
`// ❌ Ignorer les limites de taux
for (let i = 0; i < 100; i++) {
  fetch(\`https://api.exemple.com/user/\${i}\`); // ⚠️ Trop de requêtes simultanées
}`;

const rateLimitSolution = 
`// ✅ Respecter les limites de taux
async function obtenirUtilisateurs(ids) {
  const utilisateurs = [];
  const BATCH_SIZE = 5;  // Nombre max de requêtes simultanées
  const DELAY = 1000;    // Délai entre les batches (ms)
  
  for (let i = 0; i < ids.length; i += BATCH_SIZE) {
    const batch = ids.slice(i, i + BATCH_SIZE);
    
    // Traiter ce batch en parallèle
    const promises = batch.map(id => 
      fetch(\`https://api.exemple.com/user/\${id}\`)
        .then(response => response.json())
        .catch(error => {
          console.error(\`Erreur pour utilisateur \${id}:\`, error);
          return null; // Continuer même si une requête échoue
        })
    );
    
    const results = await Promise.all(promises);
    utilisateurs.push(...results.filter(user => user !== null));
    
    // Attendre avant le prochain batch
    if (i + BATCH_SIZE < ids.length) {
      await new Promise(resolve => setTimeout(resolve, DELAY));
    }
  }
  
  return utilisateurs;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction aux erreurs Fetch</h2>
            <p>
                Lors de l'utilisation de <IC>fetch()</IC>, plusieurs types d'erreurs peuvent survenir. 
                Il est crucial de bien les comprendre et de les gérer appropriément pour créer des 
                applications robustes et offrir une bonne expérience utilisateur.
            </p>
            <ColoredBox title="Important">
                <IC>fetch()</IC> ne rejette sa Promise que pour les erreurs réseau, pas pour les codes d'erreur HTTP 
                comme 404 ou 500. Il faut explicitement vérifier <IC>response.ok</IC>.
            </ColoredBox>
        </section>

        <section>
            <h2>1. Erreurs CORS (Cross-Origin Resource Sharing)</h2>
            <p>
                L'erreur la plus courante, surtout en développement. CORS empêche les requêtes vers des domaines différents:
            </p>
            <CodeBlock language="javascript">{corsError}</CodeBlock>
            <p>
                <strong>Solutions possibles:</strong>
            </p>
            <CodeBlock language="javascript">{corsSolution}</CodeBlock>
            <ul>
                <li>Configurer le serveur pour inclure les headers CORS appropriés</li>
                <li>Utiliser un proxy en développement</li>
                <li>Faire la requête depuis votre serveur backend (pas depuis le navigateur)</li>
                <li>Utiliser des services proxy publics (attention à la sécurité)</li>
            </ul>
        </section>

        <section>
            <h2>2. Erreurs réseau et codes HTTP</h2>
            <p>
                Ne pas vérifier le statut de la réponse est une erreur très fréquente:
            </p>
            <CodeBlock language="javascript">{networkError}</CodeBlock>
            <p>
                <strong>Gestion correcte:</strong>
            </p>
            <CodeBlock language="javascript">{networkSolution}</CodeBlock>
        </section>

        <section>
            <h2>3. Erreurs de parsing JSON</h2>
            <p>
                Assumer que la réponse est toujours du JSON valide:
            </p>
            <CodeBlock language="javascript">{jsonError}</CodeBlock>
            <p>
                <strong>Solution robuste:</strong>
            </p>
            <CodeBlock language="javascript">{jsonSolution}</CodeBlock>
        </section>

        <section>
            <h2>4. Absence de timeout</h2>
            <p>
                <IC>fetch()</IC> n'a pas de timeout par défaut, les requêtes peuvent traîner:
            </p>
            <CodeBlock language="javascript">{timeoutError}</CodeBlock>
            <p>
                <strong>Implémentation d'un timeout:</strong>
            </p>
            <CodeBlock language="javascript">{timeoutSolution}</CodeBlock>
        </section>

        <section>
            <h2>5. Dépassement des limites de taux (Rate Limiting)</h2>
            <p>
                Envoyer trop de requêtes simultanément peut provoquer des erreurs 429:
            </p>
            <CodeBlock language="javascript">{rateLimitError}</CodeBlock>
            <p>
                <strong>Gestion intelligente des requêtes:</strong>
            </p>
            <CodeBlock language="javascript">{rateLimitSolution}</CodeBlock>
        </section>

        <section>
            <h2>Codes d'erreur HTTP courants</h2>
            <dl>
                <dt><IC>400 Bad Request</IC></dt>
                <dd>Requête malformée - vérifiez le format des données envoyées</dd>
                
                <dt><IC>401 Unauthorized</IC></dt>
                <dd>Authentification requise - vérifiez vos tokens/credentials</dd>
                
                <dt><IC>403 Forbidden</IC></dt>
                <dd>Accès interdit - permissions insuffisantes</dd>
                
                <dt><IC>404 Not Found</IC></dt>
                <dd>Ressource inexistante - vérifiez l'URL</dd>
                
                <dt><IC>422 Unprocessable Entity</IC></dt>
                <dd>Données valides mais logiquement incorrectes</dd>
                
                <dt><IC>429 Too Many Requests</IC></dt>
                <dd>Trop de requêtes - implémentez un rate limiting</dd>
                
                <dt><IC>500 Internal Server Error</IC></dt>
                <dd>Erreur serveur - contact l'équipe API ou réessayez plus tard</dd>
                
                <dt><IC>502/503/504</IC></dt>
                <dd>Problèmes d'infrastructure serveur - réessayez avec backoff</dd>
            </dl>
        </section>

        <section>
            <h2>Bonnes pratiques de gestion d'erreurs</h2>
            <ol>
                <li><strong>Toujours vérifier <IC>response.ok</IC></strong></li>
                <li><strong>Implémenter des timeouts</strong> appropriés</li>
                <li><strong>Vérifier le Content-Type</strong> avant de parser</li>
                <li><strong>Gérer les erreurs réseau</strong> différemment des erreurs HTTP</li>
                <li><strong>Respecter les rate limits</strong> de l'API</li>
                <li><strong>Loguer les erreurs</strong> de manière utile pour le débogage</li>
                <li><strong>Afficher des messages d'erreur</strong> compréhensibles pour les utilisateurs</li>
                <li><strong>Implémenter des retry</strong> avec exponential backoff pour les erreurs temporaires</li>
            </ol>
        </section>
    </>
}