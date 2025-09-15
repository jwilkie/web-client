import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Déboguer le serveur",
    description: "Techniques pour identifier et résoudre les problèmes côté serveur lors des interactions client-serveur.",
    keywords: ["débogage", "serveur", "api", "logs", "monitoring", "erreurs"],
    group: "notes"
}

const serverLogging = 
`// Exemple de logging côté serveur (Node.js/Express)
app.use((req, res, next) => {
  console.log(\`\${new Date().toISOString()} - \${req.method} \${req.url}\`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

app.get('/api/utilisateurs/:id', (req, res) => {
  try {
    const { id } = req.params;
    console.log(\`Recherche utilisateur avec ID: \${id}\`);
    
    const utilisateur = obtenirUtilisateur(id);
    
    if (!utilisateur) {
      console.log(\`Utilisateur \${id} introuvable\`);
      return res.status(404).json({ error: 'Utilisateur introuvable' });
    }
    
    console.log(\`Utilisateur trouvé: \${utilisateur.nom}\`);
    res.json(utilisateur);
  } catch (error) {
    console.error('Erreur lors de la récupération:', error);
    res.status(500).json({ error: 'Erreur serveur interne' });
  }
});`;

const errorHandlingExample = 
`// Gestionnaire d'erreurs global
app.use((error, req, res, next) => {
  // Logger l'erreur avec contexte
  console.error('=== ERREUR SERVEUR ===');
  console.error('URL:', req.url);
  console.error('Method:', req.method);
  console.error('Headers:', req.headers);
  console.error('Body:', req.body);
  console.error('Stack:', error.stack);
  console.error('=====================');
  
  // Déterminer le type d'erreur
  if (error.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Données invalides',
      details: error.message
    });
  }
  
  if (error.name === 'UnauthorizedError') {
    return res.status(401).json({
      error: 'Non autorisé'
    });
  }
  
  // Erreur générique
  res.status(500).json({
    error: 'Erreur serveur interne',
    requestId: req.id // Pour traçabilité
  });
});`;

const corsDebugging = 
`// Configuration CORS détaillée pour débogage
app.use((req, res, next) => {
  console.log('=== REQUÊTE CORS ===');
  console.log('Origin:', req.headers.origin);
  console.log('Method:', req.method);
  console.log('Access-Control-Request-Headers:', req.headers['access-control-request-headers']);
  console.log('==================');
  
  // Headers CORS
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Répondre aux requêtes OPTIONS
  if (req.method === 'OPTIONS') {
    console.log('Requête preflight OPTIONS reçue');
    return res.sendStatus(200);
  }
  
  next();
});`;

const apiTesting = 
`// Script de test pour votre API
const testAPI = async () => {
  const baseURL = 'http://localhost:3000/api';
  
  const tests = [
    {
      name: 'GET /utilisateurs',
      method: 'GET',
      url: \`\${baseURL}/utilisateurs\`,
      expectedStatus: 200
    },
    {
      name: 'POST /utilisateurs',
      method: 'POST',
      url: \`\${baseURL}/utilisateurs\`,
      body: { nom: 'Test User', email: 'test@test.com' },
      expectedStatus: 201
    },
    {
      name: 'GET /utilisateurs/999 (inexistant)',
      method: 'GET',
      url: \`\${baseURL}/utilisateurs/999\`,
      expectedStatus: 404
    }
  ];
  
  for (const test of tests) {
    try {
      console.log(\`\\n🧪 Test: \${test.name}\`);
      
      const options = {
        method: test.method,
        headers: { 'Content-Type': 'application/json' }
      };
      
      if (test.body) {
        options.body = JSON.stringify(test.body);
      }
      
      const response = await fetch(test.url, options);
      const data = await response.text();
      
      console.log(\`Status: \${response.status} (attendu: \${test.expectedStatus})\`);
      console.log('Response:', data);
      
      if (response.status === test.expectedStatus) {
        console.log('✅ Test réussi');
      } else {
        console.log('❌ Test échoué');
      }
    } catch (error) {
      console.error('❌ Erreur de test:', error.message);
    }
  }
};

// Lancer les tests
testAPI();`;

const healthCheckExample = 
`// Point de terminaison de health check
app.get('/health', (req, res) => {
  const healthInfo = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  };
  
  // Vérifier la base de données
  try {
    // Exemple avec une base de données
    // const dbStatus = await checkDatabaseConnection();
    // healthInfo.database = dbStatus;
  } catch (error) {
    healthInfo.status = 'ERROR';
    healthInfo.database = { status: 'DOWN', error: error.message };
    return res.status(503).json(healthInfo);
  }
  
  res.json(healthInfo);
});

// Endpoint pour les métriques détaillées
app.get('/metrics', (req, res) => {
  res.json({
    requests: requestCounter, // Vous devez implémenter ce compteur
    errors: errorCounter,
    responseTime: averageResponseTime,
    activeConnections: getActiveConnections()
  });
});`;

export default function Page() {
    return <>
        <section>
            <h2>Importance du débogage serveur</h2>
            <p>
                Quand une requête client échoue, le problème peut venir du serveur. Il est crucial 
                de savoir diagnostiquer et résoudre les problèmes côté serveur pour offrir une 
                expérience utilisateur optimale.
            </p>
        </section>

        <section>
            <h2>1. Logging côté serveur</h2>
            <p>
                Les logs sont votre première ligne de défense pour comprendre ce qui se passe sur votre serveur:
            </p>
            <CodeBlock language="javascript">{serverLogging}</CodeBlock>
            <p>
                <strong>Informations importantes à logger:</strong>
            </p>
            <ul>
                <li>Requêtes entrantes (méthode, URL, headers)</li>
                <li>Données reçues (body, paramètres)</li>
                <li>Erreurs et exceptions</li>
                <li>Réponses envoyées (status, data)</li>
                <li>Temps de traitement</li>
                <li>Requêtes vers d'autres services</li>
            </ul>
        </section>

        <section>
            <h2>2. Gestion centralisée des erreurs</h2>
            <p>
                Implémentez un gestionnaire d'erreurs global pour capturer toutes les erreurs:
            </p>
            <CodeBlock language="javascript">{errorHandlingExample}</CodeBlock>
            <ColoredBox title="Bonnes pratiques">
                <ul>
                    <li>Ne jamais exposer les détails techniques aux clients</li>
                    <li>Logger suffisamment d'informations pour le débogage</li>
                    <li>Utiliser des codes d'erreur cohérents</li>
                    <li>Inclure des identifiants de requête pour la traçabilité</li>
                </ul>
            </ColoredBox>
        </section>

        <section>
            <h2>3. Débogage des problèmes CORS</h2>
            <p>
                CORS est source de nombreux problèmes. Voici comment les diagnostiquer:
            </p>
            <CodeBlock language="javascript">{corsDebugging}</CodeBlock>
            <p>
                <strong>Points de vérification CORS:</strong>
            </p>
            <ul>
                <li>L'origine (domain) du client est-elle autorisée?</li>
                <li>La méthode HTTP est-elle autorisée?</li>
                <li>Les headers personnalisés sont-ils autorisés?</li>
                <li>Les requêtes preflight (OPTIONS) sont-elles gérées?</li>
                <li>Les credentials sont-ils gérés correctement?</li>
            </ul>
        </section>

        <section>
            <h2>4. Tests automatisés de l'API</h2>
            <p>
                Créez des tests pour valider le comportement de votre API:
            </p>
            <CodeBlock language="javascript">{apiTesting}</CodeBlock>
            <p>
                Ces tests vous aident à identifier rapidement les régressions et les problèmes.
            </p>
        </section>

        <section>
            <h2>5. Monitoring et health checks</h2>
            <p>
                Implémentez des endpoints de surveillance pour monitorer la santé de votre serveur:
            </p>
            <CodeBlock language="javascript">{healthCheckExample}</CodeBlock>
        </section>

        <section>
            <h2>Outils de débogage serveur</h2>
            <dl>
                <dt><strong>Postman/Insomnia</strong></dt>
                <dd>Tester vos endpoints API directement sans client</dd>
                
                <dt><strong>curl</strong></dt>
                <dd>Outil en ligne de commande pour tester les requêtes HTTP</dd>
                
                <dt><strong>Logs de serveur web</strong></dt>
                <dd>Nginx/Apache logs, journalctl pour systemd</dd>
                
                <dt><strong>Monitoring applications</strong></dt>
                <dd>New Relic, DataDog, Application Insights</dd>
                
                <dt><strong>Debuggers</strong></dt>
                <dd>Node.js inspector, pdb pour Python, xdebug pour PHP</dd>
            </dl>
        </section>

        <section>
            <h2>Diagnostic des problèmes courants</h2>
            <dl>
                <dt><strong>500 Internal Server Error:</strong></dt>
                <dd>
                    <ul>
                        <li>Vérifiez les logs d'erreur du serveur</li>
                        <li>Cherchez les stack traces</li>
                        <li>Vérifiez les connexions à la base de données</li>
                        <li>Testez avec des données simplifiées</li>
                    </ul>
                </dd>
                
                <dt><strong>Timeouts:</strong></dt>
                <dd>
                    <ul>
                        <li>Requêtes vers d'autres services trop lentes</li>
                        <li>Requêtes de base de données lourdes</li>
                        <li>Boucles infinies dans le code</li>
                        <li>Problèmes de performance serveur</li>
                    </ul>
                </dd>
                
                <dt><strong>404 Not Found:</strong></dt>
                <dd>
                    <ul>
                        <li>Vérifiez la configuration des routes</li>
                        <li>Vérifiez les middlewares</li>
                        <li>Validez les paramètres d'URL</li>
                    </ul>
                </dd>
                
                <dt><strong>Données corrompues:</strong></dt>
                <dd>
                    <ul>
                        <li>Vérifiez la validation des données entrantes</li>
                        <li>Examinez les transformations de données</li>
                        <li>Testez avec différents types de données</li>
                    </ul>
                </dd>
            </dl>
        </section>

        <section>
            <h2>Commandes utiles pour le débogage</h2>
            <CodeBlock language="bash">
{`# Voir les logs en temps réel
tail -f /var/log/nginx/error.log
tail -f /var/log/application.log

# Tester une requête avec curl
curl -X POST https://api.exemple.com/data \\
  -H "Content-Type: application/json" \\
  -d '{"test": "data"}' \\
  -v  # mode verbose

# Vérifier les ports ouverts
netstat -tlnp | grep :3000
lsof -i :3000

# Vérifier les processus
ps aux | grep node
top -p $(pgrep node)

# Surveiller les ressources
htop
iostat 1`}
            </CodeBlock>
        </section>

        <section>
            <h2>Checklist de débogage serveur</h2>
            <ol>
                <li>✅ Les logs montrent-ils la requête entrante?</li>
                <li>✅ Y a-t-il des erreurs dans les logs?</li>
                <li>✅ Le serveur répond-il au health check?</li>
                <li>✅ La base de données est-elle accessible?</li>
                <li>✅ Les services externes répondent-ils?</li>
                <li>✅ La configuration CORS est-elle correcte?</li>
                <li>✅ Les middlewares sont-ils bien configurés?</li>
                <li>✅ Les routes sont-elles définies correctement?</li>
                <li>✅ Les ressources serveur sont-elles suffisantes?</li>
            </ol>
        </section>
    </>
}