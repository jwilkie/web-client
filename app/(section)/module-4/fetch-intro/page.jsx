import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fetch - Introduction",
    description: "Introduction à l'API Fetch pour effectuer des requêtes HTTP en JavaScript.",
    keywords: ["fetch", "api", "http", "requête", "asynchrone", "promise"],
    group: "notes"
}

const basicFetch = 
`// Exemple basique de fetch
fetch('https://api.exemple.com/données')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Erreur:', error);
  });`;

const asyncFetch = 
`// Utilisation avec async/await
async function obtenirDonnees() {
  try {
    const response = await fetch('https://api.exemple.com/données');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erreur:', error);
  }
}`;

const responseObject = 
`// La réponse fetch contient plusieurs propriétés utiles
fetch('https://api.exemple.com/données')
  .then(response => {
    console.log('Statut:', response.status);
    console.log('OK:', response.ok);
    console.log('Headers:', response.headers);
    return response.json();
  })
  .then(data => console.log(data));`;

export default function Page() {
    return <>
        <section>
            <h2>Qu'est-ce que Fetch?</h2>
            <p>
                L'API <IC>fetch()</IC> est une interface JavaScript moderne pour effectuer des requêtes HTTP. 
                Elle remplace l'ancienne API <IC>XMLHttpRequest</IC> et offre une syntaxe plus simple et plus 
                puissante pour communiquer avec des serveurs.
            </p>
            <p>
                <IC>fetch()</IC> retourne une <IC>Promise</IC>, ce qui permet d'utiliser les méthodes <IC>.then()</IC> 
                et <IC>.catch()</IC>, ou bien la syntaxe <IC>async/await</IC> pour gérer les opérations asynchrones.
            </p>
        </section>

        <section>
            <h2>Syntaxe de base</h2>
            <p>
                La syntaxe la plus simple de <IC>fetch()</IC> prend une URL en paramètre et retourne une Promise 
                qui résout avec l'objet Response:
            </p>
            <CodeBlock language="javascript">{basicFetch}</CodeBlock>
            <p>
                Dans cet exemple, nous:
            </p>
            <ol>
                <li>Appelons <IC>fetch()</IC> avec l'URL de l'API</li>
                <li>Utilisons <IC>.then()</IC> pour traiter la réponse</li>
                <li>Convertissons la réponse en JSON avec <IC>response.json()</IC></li>
                <li>Traitons les données reçues</li>
                <li>Gérons les erreurs avec <IC>.catch()</IC></li>
            </ol>
        </section>

        <section>
            <h2>Utilisation avec async/await</h2>
            <p>
                Pour un code plus lisible, nous pouvons utiliser la syntaxe <IC>async/await</IC>:
            </p>
            <CodeBlock language="javascript">{asyncFetch}</CodeBlock>
            <ColoredBox title="Avantage d'async/await">
                Cette syntaxe rend le code asynchrone plus facile à lire et à comprendre, 
                en évitant les chaînes de <IC>.then()</IC> complexes.
            </ColoredBox>
        </section>

        <section>
            <h2>L'objet Response</h2>
            <p>
                <IC>fetch()</IC> retourne un objet Response qui contient des informations importantes sur la réponse du serveur:
            </p>
            <CodeBlock language="javascript">{responseObject}</CodeBlock>
            <dl>
                <dt><IC>response.status</IC></dt>
                <dd>Le code de statut HTTP (200, 404, 500, etc.)</dd>
                
                <dt><IC>response.ok</IC></dt>
                <dd>Boolean indiquant si la requête a réussi (statut 200-299)</dd>
                
                <dt><IC>response.headers</IC></dt>
                <dd>Les en-têtes de la réponse</dd>
                
                <dt><IC>response.json()</IC></dt>
                <dd>Méthode pour extraire le contenu JSON de la réponse</dd>
                
                <dt><IC>response.text()</IC></dt>
                <dd>Méthode pour extraire le contenu texte de la réponse</dd>
            </dl>
        </section>

        <section>
            <h2>Types de données supportés</h2>
            <p>
                <IC>fetch()</IC> peut traiter différents types de données en réponse:
            </p>
            <ul>
                <li><IC>response.json()</IC> - pour les données JSON</li>
                <li><IC>response.text()</IC> - pour le texte brut</li>
                <li><IC>response.blob()</IC> - pour les fichiers binaires</li>
                <li><IC>response.arrayBuffer()</IC> - pour les données binaires</li>
                <li><IC>response.formData()</IC> - pour les données de formulaire</li>
            </ul>
        </section>

        <section>
            <h2>Points importants</h2>
            <ColoredBox title="À retenir">
                <ul>
                    <li><IC>fetch()</IC> ne rejette pas les promesses pour les codes d'erreur HTTP (404, 500, etc.)</li>
                    <li>Il faut vérifier <IC>response.ok</IC> pour détecter les erreurs HTTP</li>
                    <li>Les méthodes comme <IC>.json()</IC> et <IC>.text()</IC> retournent aussi des Promises</li>
                    <li><IC>fetch()</IC> est supporté par tous les navigateurs modernes</li>
                </ul>
            </ColoredBox>
        </section>
    </>
}