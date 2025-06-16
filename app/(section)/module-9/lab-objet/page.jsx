import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Exercice tableau d'objets",
    description: "Présentation du laboratoire sur l'utilisation des tableaux d'objets en Javascript.",
    keywords: ["js", "console", "javascript", "terminal", "exercices"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>

            <p>
                Créer une base de site web et ajouter le code Javascript pour gérer l'inventaire d'un magasin. L'inventaire est 
                représenté par un tableau d'objets, où chaque objet correspondant à un item avec ses propriétés.
            </p>
            <ol>
                <li>
                    Créer un fichier <IC>main.js</IC>. Assurez-vous de lier ce fichier à votre page HTML.
                </li>
                <li>
                    Créer un fichier <IC>inventaire.js</IC>.
                </li>
                <li>
                    Dans le fichier <IC>inventaire.js</IC>, définir la structure de l'inventaire:
                    <ul>
                        <li>
                            Créer un tableau <IC>inventaire</IC> contenant des objets représentant chaque item de l'inventaire.
                        </li>
                        <li>
                            Chaque objet doit avoir les propriétés suivantes: nom, description, prixUnitaire, quantite.
                        </li>
                        <li>
                            Créer au moins 3 items dans le tableau <IC>inventaire</IC> avec des valeurs appropriées.
                        </li>
                    </ul>
                </li>
                <li>
                    Dans le fichier <IC>inventaire.js</IC>, créer une fonction les fonctions de gestion de l'inventaire suivantes:
                    <ul>
                        <li>
                            <IC>getInventaire()</IC>: Retourne la liste complète de l'inventaire.
                        </li>
                        <li>
                            <IC>getItemByIndex(index)</IC>: Retourne l'item dans l'inventaire à l'index spécifié.
                        </li>
                        <li>
                            <IC>addItem(nom, description, prixUnitaire, quantite)</IC>: Ajoute un nouvel item à l'inventaire.
                        </li>
                        <li>
                            <IC>removeItem(index)</IC>: Retire l'item de l'inventaire à l'index spécifié.
                        </li>
                        <li>
                            <IC>updateDescription(index, description)</IC>: Modifie la description d'un item.
                        </li>
                        <li>
                            <IC>addQuantite(index, quantite)</IC>: Augmente la quantité d'un item. Si la quantité n'est pas 
                            spécifiée, on augmente de 1.
                        </li>
                        <li>
                            <IC>removeQuantite(index, quantite)</IC>: Diminue la quantité d'un item et supprime l'item si la 
                            quantité tombe à zéro ou moins. Si la quantité n'est pas spécifiée, on diminue de 1.
                        </li>
                        <li>
                            <IC>achat(index, quantite)</IC>: Tente d'acheter une quantité donnée d'un item. On retourne le prix 
                            total si l'achat est possible, sinon retourne false lorsque la quantité demandée est supérieure à la 
                            quantité disponible.
                        </li>
                    </ul>
                </li>
                <li>
                    Dans le fichier <IC>main.js</IC>, tester chaque fonction créée dans le fichier <IC>inventaire.js</IC> en
                    affichant les résultats dans la console du navigateur.
                </li>
            </ol>
        </section>

        <section>
            <h2>Solution</h2>
            <DownloadBlock>
                <File fileName="solution.zip" path="/labs/objet-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
