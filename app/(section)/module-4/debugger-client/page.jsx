import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Déboguer le client",
    description: "Techniques et outils pour déboguer les applications client JavaScript et les requêtes Fetch.",
    keywords: ["débogage", "client", "devtools", "console", "network", "fetch"],
    group: "notes"
}

const consoleLogging = 
`// Logging détaillé des requêtes
async function obtenirUtilisateur(id) {
  console.log('🚀 Début de la requête pour utilisateur:', id);
  console.time('requête-utilisateur');
  
  try {
    const url = \`https://api.exemple.com/utilisateurs/\${id}\`;
    console.log('📡 URL de la requête:', url);
    
    const response = await fetch(url);
    console.log('📥 Réponse reçue:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    
    const data = await response.json();
    console.log('✅ Données reçues:', data);
    console.timeEnd('requête-utilisateur');
    
    return data;
  } catch (error) {
    console.error('❌ Erreur lors de la requête:', error);
    console.timeEnd('requête-utilisateur');
    throw error;
  }
}`;

const interceptorExample = 
`// Créer un intercepteur pour toutes les requêtes fetch
const originalFetch = window.fetch;

window.fetch = function(...args) {
  const [url, options = {}] = args;
  
  console.group(\`🌐 Fetch: \${options.method || 'GET'} \${url}\`);
  console.log('Options:', options);
  
  const startTime = performance.now();
  
  return originalFetch(...args)
    .then(response => {
      const endTime = performance.now();
      const duration = Math.round(endTime - startTime);
      
      console.log(\`⏱️ Durée: \${duration}ms\`);
      console.log(\`📊 Statut: \${response.status} \${response.statusText}\`);
      console.log('Headers de réponse:', Object.fromEntries(response.headers.entries()));
      console.groupEnd();
      
      return response;
    })
    .catch(error => {
      const endTime = performance.now();
      const duration = Math.round(endTime - startTime);
      
      console.log(\`⏱️ Durée: \${duration}ms\`);
      console.error('❌ Erreur:', error);
      console.groupEnd();
      
      throw error;
    });
};`;

const errorBoundaryExample = 
`// Gestionnaire d'erreurs global pour les requêtes
class APIError extends Error {
  constructor(message, status, response) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.response = response;
  }
}

async function fetchAvecGestionErreur(url, options = {}) {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      const errorBody = await response.text();
      throw new APIError(
        \`Erreur API: \${response.status} \${response.statusText}\`,
        response.status,
        errorBody
      );
    }
    
    return response;
  } catch (error) {
    // Logger l'erreur pour le développement
    console.group('❌ Erreur de requête');
    console.error('URL:', url);
    console.error('Options:', options);
    console.error('Erreur:', error);
    
    if (error instanceof APIError) {
      console.error('Status:', error.status);
      console.error('Response body:', error.response);
    }
    
    console.groupEnd();
    
    // Re-lancer l'erreur pour que l'appelant puisse la gérer
    throw error;
  }
}`;

const performanceExample = 
`// Monitoring des performances des requêtes
class FetchMonitor {
  constructor() {
    this.metrics = [];
  }
  
  async monitoredFetch(url, options = {}) {
    const startMark = \`fetch-start-\${Date.now()}\`;
    const endMark = \`fetch-end-\${Date.now()}\`;
    const measureName = \`fetch-\${url}\`;
    
    performance.mark(startMark);
    
    try {
      const response = await fetch(url, options);
      performance.mark(endMark);
      
      const measure = performance.measure(measureName, startMark, endMark);
      
      this.metrics.push({
        url,
        method: options.method || 'GET',
        status: response.status,
        duration: measure.duration,
        timestamp: Date.now()
      });
      
      console.log(\`📊 \${url}: \${Math.round(measure.duration)}ms\`);
      
      return response;
    } catch (error) {
      performance.mark(endMark);
      const measure = performance.measure(measureName, startMark, endMark);
      
      this.metrics.push({
        url,
        method: options.method || 'GET',
        status: 'ERROR',
        duration: measure.duration,
        timestamp: Date.now(),
        error: error.message
      });
      
      throw error;
    }
  }
  
  getMetrics() {
    return this.metrics;
  }
  
  getSlowRequests(threshold = 1000) {
    return this.metrics.filter(m => m.duration > threshold);
  }
}

// Utilisation
const monitor = new FetchMonitor();
const response = await monitor.monitoredFetch('https://api.exemple.com/data');`;

export default function Page() {
    return <>
        <section>
            <h2>Outils de débogage du navigateur</h2>
            <p>
                Les navigateurs modernes offrent des outils puissants pour déboguer les applications web. 
                Voici les principales techniques pour déboguer côté client:
            </p>
        </section>

        <section>
            <h2>1. Console DevTools</h2>
            <p>
                La console est votre premier outil de débogage. Utilisez des logs structurés pour 
                suivre vos requêtes:
            </p>
            <CodeBlock language="javascript">{consoleLogging}</CodeBlock>
            <p>
                <strong>Méthodes de console utiles:</strong>
            </p>
            <ul>
                <li><IC>console.log()</IC> - messages généraux</li>
                <li><IC>console.error()</IC> - erreurs (en rouge)</li>
                <li><IC>console.warn()</IC> - avertissements (en orange)</li>
                <li><IC>console.info()</IC> - informations (en bleu)</li>
                <li><IC>console.group()</IC> - grouper les messages</li>
                <li><IC>console.time()</IC> - mesurer la durée</li>
                <li><IC>console.table()</IC> - afficher des tableaux</li>
            </ul>
        </section>

        <section>
            <h2>2. Onglet Network des DevTools</h2>
            <p>
                L'onglet Network vous montre toutes les requêtes HTTP. Informations disponibles:
            </p>
            <ul>
                <li><strong>Status:</strong> Code de réponse HTTP</li>
                <li><strong>Method:</strong> GET, POST, PUT, DELETE</li>
                <li><strong>Size:</strong> Taille de la requête et de la réponse</li>
                <li><strong>Time:</strong> Durée de la requête</li>
                <li><strong>Headers:</strong> En-têtes envoyés et reçus</li>
                <li><strong>Payload:</strong> Données envoyées</li>
                <li><strong>Response:</strong> Données reçues</li>
            </ul>
            <ColoredBox title="Astuce">
                Utilisez le filtre "Fetch/XHR" pour voir uniquement les requêtes AJAX/fetch.
                Cliquez sur une requête pour voir tous les détails dans la barre latérale.
            </ColoredBox>
        </section>

        <section>
            <h2>3. Intercepteur de requêtes</h2>
            <p>
                Créez un intercepteur pour logger automatiquement toutes vos requêtes fetch:
            </p>
            <CodeBlock language="javascript">{interceptorExample}</CodeBlock>
            <p>
                Cet intercepteur vous permet de voir toutes les requêtes sans modifier votre code existant.
            </p>
        </section>

        <section>
            <h2>4. Gestion globale des erreurs</h2>
            <p>
                Implémentez un système de gestion d'erreurs centralisé:
            </p>
            <CodeBlock language="javascript">{errorBoundaryExample}</CodeBlock>
        </section>

        <section>
            <h2>5. Monitoring des performances</h2>
            <p>
                Surveillez les performances de vos requêtes pour identifier les goulots d'étranglement:
            </p>
            <CodeBlock language="javascript">{performanceExample}</CodeBlock>
        </section>

        <section>
            <h2>Breakpoints et débogage pas-à-pas</h2>
            <p>
                Techniques de débogage avancées dans les DevTools:
            </p>
            <ol>
                <li><strong>Breakpoints classiques:</strong> Cliquez sur un numéro de ligne dans l'onglet Sources</li>
                <li><strong>Conditional breakpoints:</strong> Clic droit → "Add conditional breakpoint"</li>
                <li><strong>XHR/Fetch breakpoints:</strong> Sources → XHR/fetch Breakpoints</li>
                <li><strong>Event listener breakpoints:</strong> Pause sur des événements spécifiques</li>
            </ol>
            <ColoredBox title="Raccourcis clavier utiles">
                <ul>
                    <li><IC>F12</IC> - Ouvrir les DevTools</li>
                    <li><IC>Ctrl+Shift+I</IC> - Ouvrir les DevTools</li>
                    <li><IC>F8</IC> - Continuer l'exécution</li>
                    <li><IC>F10</IC> - Step over (ligne suivante)</li>
                    <li><IC>F11</IC> - Step into (entrer dans la fonction)</li>
                    <li><IC>Shift+F11</IC> - Step out (sortir de la fonction)</li>
                </ul>
            </ColoredBox>
        </section>

        <section>
            <h2>Débogage des problèmes courants</h2>
            <dl>
                <dt><strong>Requête qui ne part pas:</strong></dt>
                <dd>
                    <ul>
                        <li>Vérifiez la console pour les erreurs JavaScript</li>
                        <li>Vérifiez l'onglet Network</li>
                        <li>Assurez-vous que le code s'exécute (utilisez console.log)</li>
                    </ul>
                </dd>
                
                <dt><strong>Réponse vide ou incorrecte:</strong></dt>
                <dd>
                    <ul>
                        <li>Vérifiez l'onglet Network → Response</li>
                        <li>Vérifiez le Content-Type de la réponse</li>
                        <li>Testez l'API avec un outil comme Postman</li>
                    </ul>
                </dd>
                
                <dt><strong>Erreurs CORS:</strong></dt>
                <dd>
                    <ul>
                        <li>Regardez la console pour les messages CORS</li>
                        <li>Vérifiez les headers dans l'onglet Network</li>
                        <li>Testez avec un proxy ou depuis le serveur</li>
                    </ul>
                </dd>
                
                <dt><strong>Performances lentes:</strong></dt>
                <dd>
                    <ul>
                        <li>Utilisez l'onglet Performance pour profiler</li>
                        <li>Vérifiez la taille des réponses</li>
                        <li>Surveillez les waterfalls de requêtes</li>
                    </ul>
                </dd>
            </dl>
        </section>

        <section>
            <h2>Extensions utiles pour le débogage</h2>
            <ul>
                <li><strong>React Developer Tools:</strong> Pour les apps React</li>
                <li><strong>Vue.js devtools:</strong> Pour les apps Vue</li>
                <li><strong>Redux DevTools:</strong> Pour le state management</li>
                <li><strong>JSON Viewer:</strong> Pour formater les réponses JSON</li>
                <li><strong>Postman Interceptor:</strong> Pour capturer les requêtes</li>
            </ul>
        </section>
    </>
}