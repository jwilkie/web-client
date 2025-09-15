import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { WebExample, Code } from '@/components/WebExample';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction au Client Web et API",
    description: "Introduction aux concepts de base des clients web et des interactions avec des APIs.",
    keywords: ["web client", "api", "fetch", "http", "client-serveur"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Qu'est-ce qu'un client web?</h2>
            <p>
                Un client web est une application qui communique avec des serveurs pour obtenir ou envoyer des données. 
                Les navigateurs web sont les clients web les plus courants, mais nous pouvons aussi créer nos propres 
                clients web en utilisant JavaScript.
            </p>
            <p>
                Dans ce module, nous explorerons comment créer des applications JavaScript qui interagissent avec des 
                serveurs et des APIs (Application Programming Interfaces) pour échanger des données.
            </p>
        </section>

        <section>
            <h2>APIs et services web</h2>
            <p>
                Une API (Application Programming Interface) est un ensemble de règles et de protocoles qui permettent 
                à différentes applications de communiquer entre elles. Les APIs web utilisent généralement le protocole 
                HTTP pour échanger des données au format JSON.
            </p>
            <ColoredBox title="Note importante">
                Les APIs modernes utilisent principalement les méthodes HTTP suivantes:
                <ul>
                    <li><IC>GET</IC> - pour récupérer des données</li>
                    <li><IC>POST</IC> - pour envoyer de nouvelles données</li>
                    <li><IC>PUT</IC> - pour modifier des données existantes</li>
                    <li><IC>DELETE</IC> - pour supprimer des données</li>
                </ul>
            </ColoredBox>
        </section>

        <section>
            <h2>Communication client-serveur</h2>
            <p>
                La communication entre un client et un serveur suit généralement ce processus:
            </p>
            <ol>
                <li>Le client envoie une requête HTTP au serveur</li>
                <li>Le serveur traite la requête</li>
                <li>Le serveur renvoie une réponse HTTP avec les données ou un message d'erreur</li>
                <li>Le client traite la réponse reçue</li>
            </ol>
        </section>

        <section>
            <h2>JavaScript et Fetch API</h2>
            <p>
                En JavaScript moderne, nous utilisons l'API <IC>fetch()</IC> pour faire des requêtes HTTP vers des serveurs. 
                Cette API nous permet de récupérer des données, d'envoyer des formulaires, et d'interagir avec des services 
                web de manière asynchrone.
            </p>
            <p>
                Dans les prochaines sections, nous verrons comment utiliser <IC>fetch()</IC> pour créer des applications 
                web interactives qui communiquent avec des serveurs.
            </p>
        </section>

        <section>
            <h2>Ce que nous apprendrons</h2>
            <p>
                Dans ce module, nous couvrirons:
            </p>
            <ul>
                <li>Les bases de l'API Fetch</li>
                <li>Comment envoyer des données vers un serveur</li>
                <li>Comment recevoir et traiter des données depuis un serveur</li>
                <li>La gestion des erreurs communes</li>
                <li>Le débogage des applications client et serveur</li>
                <li>Des exercices pratiques avec des interfaces complètes</li>
            </ul>
        </section>
    </>
}