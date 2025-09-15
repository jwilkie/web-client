import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fetch - Recevoir des données",
    description: "Comment recevoir et traiter différents types de données avec Fetch.",
    keywords: ["fetch", "get", "json", "réponse", "données", "traitement"],
    group: "notes"
}

const basicGet = 
`// Récupérer des données JSON
async function obtenirUtilisateurs() {
  try {
    const response = await fetch('https://api.exemple.com/utilisateurs');
    
    if (!response.ok) {
      throw new Error(\`Erreur HTTP: \${response.status}\`);
    }
    
    const utilisateurs = await response.json();
    console.log('Utilisateurs reçus:', utilisateurs);
    return utilisateurs;
  } catch (error) {
    console.error('Erreur lors de la récupération:', error);
  }
}`;

const parametersExample = 
`// Envoyer des paramètres dans l'URL
const params = new URLSearchParams({
  page: 1,
  limite: 10,
  recherche: 'jean'
});

const url = \`https://api.exemple.com/utilisateurs?\${params}\`;
// URL finale: https://api.exemple.com/utilisateurs?page=1&limite=10&recherche=jean

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));`;

const headersExample = 
`// Utiliser les headers pour l'authentification
async function obtenirDonneesPrivees() {
  const response = await fetch('https://api.exemple.com/donnees-privees', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Accept': 'application/json'
    }
  });
  
  const data = await response.json();
  return data;
}`;

const responseTypesExample = 
`// Traiter différents types de réponses
async function traiterReponse(url) {
  const response = await fetch(url);
  
  // Vérifier le type de contenu
  const contentType = response.headers.get('content-type');
  
  if (contentType?.includes('application/json')) {
    const jsonData = await response.json();
    return jsonData;
  } else if (contentType?.includes('text/')) {
    const textData = await response.text();
    return textData;
  } else {
    const blobData = await response.blob();
    return blobData;
  }
}`;

const paginationExample = 
`// Gérer la pagination
async function obtenirTousLesUtilisateurs() {
  let tousLesUtilisateurs = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    const response = await fetch(\`https://api.exemple.com/utilisateurs?page=\${page}&limite=50\`);
    const data = await response.json();
    
    tousLesUtilisateurs = [...tousLesUtilisateurs, ...data.utilisateurs];
    
    // Vérifier s'il y a d'autres pages
    hasMore = data.utilisateurs.length === 50 && data.hasNext;
    page++;
  }
  
  return tousLesUtilisateurs;
}`;

const cacheExample = 
`// Gérer le cache et les requêtes conditionnelles
async function obtenirDonneesAvecCache(url) {
  const response = await fetch(url, {
    headers: {
      'Cache-Control': 'no-cache',  // Forcer une vérification avec le serveur
      // ou 'max-age=300' pour utiliser le cache pendant 5 minutes
    }
  });
  
  // Vérifier si les données ont changé
  const lastModified = response.headers.get('last-modified');
  const etag = response.headers.get('etag');
  
  if (response.status === 304) {
    console.log('Données inchangées, utilisation du cache');
    return null; // Utiliser les données en cache
  }
  
  const data = await response.json();
  
  // Sauvegarder les headers pour les prochaines requêtes
  localStorage.setItem('lastModified', lastModified);
  localStorage.setItem('etag', etag);
  
  return data;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Récupérer des données avec GET</h2>
            <p>
                La méthode GET est la méthode par défaut de <IC>fetch()</IC>. Elle est utilisée pour 
                récupérer des données depuis un serveur sans les modifier:
            </p>
            <CodeBlock language="javascript">{basicGet}</CodeBlock>
            <p>
                Cette fonction récupère une liste d'utilisateurs depuis l'API et gère correctement 
                les erreurs HTTP en vérifiant <IC>response.ok</IC>.
            </p>
        </section>

        <section>
            <h2>Envoyer des paramètres dans l'URL</h2>
            <p>
                Pour filtrer ou configurer les données reçues, nous pouvons ajouter des paramètres 
                à l'URL. <IC>URLSearchParams</IC> facilite la création de chaînes de paramètres:
            </p>
            <CodeBlock language="javascript">{parametersExample}</CodeBlock>
            <ColoredBox title="Conseil">
                <IC>URLSearchParams</IC> s'occupe automatiquement de l'encodage des caractères spéciaux 
                dans les paramètres, évitant ainsi les erreurs dues aux espaces ou accents.
            </ColoredBox>
        </section>

        <section>
            <h2>Authentification avec headers</h2>
            <p>
                Beaucoup d'APIs nécessitent une authentification. Voici comment inclure des tokens 
                d'authentification dans vos requêtes:
            </p>
            <CodeBlock language="javascript">{headersExample}</CodeBlock>
            <p>
                Les types d'authentification courants incluent:
            </p>
            <ul>
                <li><IC>Bearer token</IC> - pour les JWT et autres tokens</li>
                <li><IC>Basic auth</IC> - pour l'authentification username/password</li>
                <li><IC>API Key</IC> - souvent dans un header personnalisé</li>
            </ul>
        </section>

        <section>
            <h2>Traiter différents types de contenu</h2>
            <p>
                Les serveurs peuvent renvoyer différents types de données. Voici comment les détecter 
                et les traiter appropriément:
            </p>
            <CodeBlock language="javascript">{responseTypesExample}</CodeBlock>
            <p>
                Les méthodes de traitement des réponses incluent:
            </p>
            <dl>
                <dt><IC>response.json()</IC></dt>
                <dd>Pour les données JSON</dd>
                
                <dt><IC>response.text()</IC></dt>
                <dd>Pour le texte brut, HTML, CSV, etc.</dd>
                
                <dt><IC>response.blob()</IC></dt>
                <dd>Pour les images, PDF, et autres fichiers binaires</dd>
                
                <dt><IC>response.arrayBuffer()</IC></dt>
                <dd>Pour les données binaires brutes</dd>
                
                <dt><IC>response.formData()</IC></dt>
                <dd>Pour les données de formulaire</dd>
            </dl>
        </section>

        <section>
            <h2>Gérer la pagination</h2>
            <p>
                Quand les APIs retournent de grandes quantités de données, elles utilisent 
                généralement la pagination. Voici comment la gérer:
            </p>
            <CodeBlock language="javascript">{paginationExample}</CodeBlock>
            <p>
                Les patterns de pagination courants incluent:
            </p>
            <ul>
                <li><strong>Offset/Limit:</strong> <IC>?page=1&limite=50</IC></li>
                <li><strong>Cursor-based:</strong> <IC>?after=cursor123&limit=50</IC></li>
                <li><strong>Page/Size:</strong> <IC>?page=1&size=50</IC></li>
            </ul>
        </section>

        <section>
            <h2>Optimisation et cache</h2>
            <p>
                Pour améliorer les performances, vous pouvez utiliser les headers de cache HTTP:
            </p>
            <CodeBlock language="javascript">{cacheExample}</CodeBlock>
            <p>
                Headers de cache utiles:
            </p>
            <ul>
                <li><IC>Cache-Control</IC> - contrôle du cache (max-age, no-cache, etc.)</li>
                <li><IC>ETag</IC> - identifier unique pour la version des données</li>
                <li><IC>Last-Modified</IC> - date de dernière modification</li>
                <li><IC>If-None-Match</IC> - pour les requêtes conditionnelles</li>
            </ul>
        </section>

        <section>
            <h2>Headers de réponse utiles</h2>
            <p>
                Les headers de réponse contiennent des informations précieuses:
            </p>
            <ul>
                <li><IC>Content-Type</IC> - type de contenu de la réponse</li>
                <li><IC>Content-Length</IC> - taille de la réponse</li>
                <li><IC>Location</IC> - URL de la ressource créée (après POST)</li>
                <li><IC>X-Total-Count</IC> - nombre total d'éléments (pour pagination)</li>
                <li><IC>X-RateLimit-*</IC> - informations sur les limites de taux</li>
            </ul>
            <CodeBlock language="javascript">
{`// Accéder aux headers de réponse
const response = await fetch('https://api.exemple.com/data');
console.log('Content-Type:', response.headers.get('content-type'));
console.log('Total items:', response.headers.get('x-total-count'));

// Voir tous les headers
for (const [key, value] of response.headers.entries()) {
  console.log(\`\${key}: \${value}\`);
}`}
            </CodeBlock>
        </section>
    </>
}