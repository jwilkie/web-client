import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fetch - Envoyer des données",
    description: "Comment utiliser Fetch pour envoyer des données vers un serveur avec POST, PUT et DELETE.",
    keywords: ["fetch", "post", "put", "delete", "json", "formulaire", "headers"],
    group: "notes"
}

const postExample = 
`// Envoyer des données JSON avec POST
const donnees = {
  nom: 'Jean Dupont',
  email: 'jean@exemple.com',
  age: 30
};

fetch('https://api.exemple.com/utilisateurs', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(donnees)
})
.then(response => response.json())
.then(data => {
  console.log('Utilisateur créé:', data);
})
.catch(error => {
  console.error('Erreur:', error);
});`;

const putExample = 
`// Mettre à jour des données avec PUT
const donneesModifiees = {
  id: 123,
  nom: 'Jean Dupont-Martin',
  email: 'jean.martin@exemple.com',
  age: 31
};

fetch('https://api.exemple.com/utilisateurs/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(donneesModifiees)
})
.then(response => response.json())
.then(data => {
  console.log('Utilisateur mis à jour:', data);
});`;

const deleteExample = 
`// Supprimer des données avec DELETE
fetch('https://api.exemple.com/utilisateurs/123', {
  method: 'DELETE'
})
.then(response => {
  if (response.ok) {
    console.log('Utilisateur supprimé avec succès');
  } else {
    console.error('Erreur lors de la suppression');
  }
});`;

const formDataExample = 
`// Envoyer des données de formulaire
const formData = new FormData();
formData.append('nom', 'Jean Dupont');
formData.append('email', 'jean@exemple.com');
formData.append('fichier', document.querySelector('#fichierInput').files[0]);

fetch('https://api.exemple.com/upload', {
  method: 'POST',
  body: formData  // Pas besoin de Content-Type pour FormData
})
.then(response => response.json())
.then(data => console.log(data));`;

const asyncExample = 
`// Version async/await pour POST
async function creerUtilisateur(donnees) {
  try {
    const response = await fetch('https://api.exemple.com/utilisateurs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donnees)
    });

    if (!response.ok) {
      throw new Error(\`Erreur HTTP: \${response.status}\`);
    }

    const resultat = await response.json();
    console.log('Utilisateur créé:', resultat);
    return resultat;
  } catch (error) {
    console.error('Erreur lors de la création:', error);
    throw error;
  }
}`;

export default function Page() {
    return <>
        <section>
            <h2>Configuration des requêtes</h2>
            <p>
                Pour envoyer des données vers un serveur, nous devons configurer la requête <IC>fetch()</IC> 
                avec des options supplémentaires. Le deuxième paramètre de <IC>fetch()</IC> est un objet 
                de configuration qui nous permet de spécifier:
            </p>
            <ul>
                <li>La méthode HTTP (POST, PUT, DELETE, etc.)</li>
                <li>Les en-têtes (headers)</li>
                <li>Le corps de la requête (body)</li>
                <li>D'autres options comme les cookies, les redirections, etc.</li>
            </ul>
        </section>

        <section>
            <h2>Envoyer des données JSON avec POST</h2>
            <p>
                La méthode POST est utilisée pour créer de nouvelles ressources sur le serveur. 
                Voici comment envoyer des données JSON:
            </p>
            <CodeBlock language="javascript">{postExample}</CodeBlock>
            <p>
                Points importants de cet exemple:
            </p>
            <ul>
                <li><IC>method: 'POST'</IC> spécifie la méthode HTTP</li>
                <li><IC>Content-Type: 'application/json'</IC> indique que nous envoyons du JSON</li>
                <li><IC>JSON.stringify()</IC> convertit l'objet JavaScript en chaîne JSON</li>
                <li>Le <IC>body</IC> contient les données à envoyer</li>
            </ul>
        </section>

        <section>
            <h2>Mettre à jour avec PUT</h2>
            <p>
                La méthode PUT est utilisée pour mettre à jour des ressources existantes:
            </p>
            <CodeBlock language="javascript">{putExample}</CodeBlock>
            <p>
                PUT remplace généralement la ressource entière, contrairement à PATCH qui ne 
                modifie que les champs spécifiés.
            </p>
        </section>

        <section>
            <h2>Supprimer avec DELETE</h2>
            <p>
                La méthode DELETE est utilisée pour supprimer des ressources:
            </p>
            <CodeBlock language="javascript">{deleteExample}</CodeBlock>
            <p>
                Notez que pour DELETE, nous n'avons généralement pas besoin d'envoyer de données 
                dans le body, seulement l'identifiant dans l'URL.
            </p>
        </section>

        <section>
            <h2>Envoyer des fichiers avec FormData</h2>
            <p>
                Pour envoyer des fichiers ou des données de formulaire complexes, utilisez <IC>FormData</IC>:
            </p>
            <CodeBlock language="javascript">{formDataExample}</CodeBlock>
            <ColoredBox title="Important">
                Avec <IC>FormData</IC>, ne spécifiez pas le header <IC>Content-Type</IC>. 
                Le navigateur le définira automatiquement avec la bonne boundary pour 
                les données multipart/form-data.
            </ColoredBox>
        </section>

        <section>
            <h2>Gestion des erreurs avec async/await</h2>
            <p>
                Voici un exemple complet utilisant <IC>async/await</IC> avec une bonne gestion d'erreurs:
            </p>
            <CodeBlock language="javascript">{asyncExample}</CodeBlock>
        </section>

        <section>
            <h2>Headers communs</h2>
            <p>
                Voici les en-têtes les plus couramment utilisés lors de l'envoi de données:
            </p>
            <dl>
                <dt><IC>Content-Type</IC></dt>
                <dd>
                    <ul>
                        <li><IC>application/json</IC> - pour les données JSON</li>
                        <li><IC>application/x-www-form-urlencoded</IC> - pour les formulaires simples</li>
                        <li><IC>multipart/form-data</IC> - pour les fichiers (automatique avec FormData)</li>
                    </ul>
                </dd>
                
                <dt><IC>Authorization</IC></dt>
                <dd>Pour l'authentification (ex: <IC>Bearer token123</IC>)</dd>
                
                <dt><IC>Accept</IC></dt>
                <dd>Type de contenu attendu en réponse (ex: <IC>application/json</IC>)</dd>
            </dl>
        </section>

        <section>
            <h2>Codes de statut courants</h2>
            <p>
                Lors de l'envoi de données, voici les codes de réponse les plus fréquents:
            </p>
            <ul>
                <li><IC>200 OK</IC> - Requête réussie</li>
                <li><IC>201 Created</IC> - Ressource créée avec succès</li>
                <li><IC>400 Bad Request</IC> - Données invalides</li>
                <li><IC>401 Unauthorized</IC> - Authentification requise</li>
                <li><IC>403 Forbidden</IC> - Accès interdit</li>
                <li><IC>422 Unprocessable Entity</IC> - Données valides mais logiquement incorrectes</li>
                <li><IC>500 Internal Server Error</IC> - Erreur serveur</li>
            </ul>
        </section>
    </>
}