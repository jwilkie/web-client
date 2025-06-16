import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Recherche d'éléments HTML",
    description: "Présentation du laboratoire sur la recherche d'éléments HTML en Javascript.",
    keywords: ["js", "console", "javascript", "recherche", "exercices", "élément", "html"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>

            <p>
                À partir du code distribué ci-dessous, créer un fichier Javascript lié à la page d'accueil du site web qui 
                permettra de d'afficher à la console les éléments suivants:
            </p>
            <ol>
                <li>
                    Afficher la balise ayant le ID <IC>form-achat</IC> à la console.
                </li>
                <li>
                    Afficher tous les éléments ayant la classe <IC>description</IC> à la console.
                </li>
                <li>
                    Afficher le premier élément <IC>&lt;h2&gt;</IC> à la console.
                </li>
                <li>
                    Afficher le nombre de balise <IC>&lt;a&gt;</IC> dans la page.
                </li>
                <li>
                    Afficher le nombre de balise <IC>&lt;a&gt;</IC> dans l'entête de la page.
                </li>
                <li>
                    Afficher le nombre de balise <IC>&lt;li&gt;</IC> qui se retrouve dans des <IC>&lt;fieldset&gt;</IC>.
                </li>
                <li>
                    Afficher le bouton de soumission du formulaire.
                </li>
                <li>
                    Afficher toutes les balises de titre dans la page.
                </li>
                <li>
                    Afficher le nombre de balises <IC>&lt;p&gt;</IC> dans la page.
                </li>
                <li>
                    Afficher l'image du sceptre dans la console.
                </li>
            </ol>
        </section>

        <section>
            <h2>Solution</h2>
            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/recherche-js-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/recherche-js-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
