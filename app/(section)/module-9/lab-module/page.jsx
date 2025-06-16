import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Exercice module ES",
    description: "Présentation du laboratoire sur l'utilisation des modules EcmaScript et des fonctions.",
    keywords: ["js", "console", "javascript", "terminal", "exercices"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>

            <p>
                Créer une base de site web et ajouter le code Javascript pour résoudre le problème suivant:
            </p>

            <ol>
                <li>
                    Créer un fichier <IC>main.js</IC>. Assurez-vous de lier ce fichier à votre page HTML.
                </li>
                <li>
                    Créer un fichier <IC>tableau.js</IC>.
                </li>
                <li>
                    Dans le fichier <IC>tableau.js</IC>, créer une fonction <IC>genererTableau()</IC> qui prendra 4 entiers
                    paramètres: longueur minimale, longueur maximale, valeur minimale et valeur maximale. Cette fonction
                    doit retourner un tableau de taille aléatoire entre la longueur minimale et la longueur maximale et
                    contenir des nombres entiers aléalatoires entre les valeurs minimales et maximales. Assurez-vous que la
                    fonction puisse être utilisée dans d'autres modules Javascript.
                </li>
                <li>
                    Dans le fichier <IC>tableau.js</IC>, créer une fonction <IC>sommeTableau()</IC> qui prendra un
                    tableau de nombres entiers en paramètre et qui retournera la somme de tous les éléments du tableau.
                </li>
                <li>
                    Dans le fichier <IC>main.js</IC>, générer 10 tableaux aléatoires de 10 à 20 valeurs chacun contenant des 
                    nombres entiers entre 0 et 100 inclusivement. À chaque tableau généré, vous devez lui 
                    associer une lettre de l'alphabet, donc vous aurez les tableaux de A à J. Afficher tous les tableaux, avec 
                    leur lettre identifiante, dans la console du navigateur. Vous devez utiliser les fonctions créées dans le 
                    fichier <IC>tableau.js</IC> pour générer les tableaux.
                </li>
                <li>
                    Dans le fichier <IC>main.js</IC>, calculer la somme de chaque tableau et afficher la lettre du tableau ayant 
                    la plus grande et la plus petite somme dans la console du navigateur.  Vous devez utiliser les fonctions créées 
                    dans le fichier <IC>tableau.js</IC> pour calculer les sommes.
                </li>
            </ol>
        </section>

        <section>
            <h2>Solution</h2>
            <DownloadBlock>
                <File fileName="solution.zip" path="/labs/module-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
