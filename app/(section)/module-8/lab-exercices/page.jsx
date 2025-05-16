import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Exercices dans la console",
    description: "Présentation du laboratoire contenant une multitude d'exercices pour maîtriser la base du Javascript.",
    keywords: ["js", "console", "javascript", "terminal", "exercices"],
    group: "labs"
}

const triangles = 
`*       *****   *****       *       *
**      ****     ****      **      ***
***     ***       ***     ***     *****
****    **         **    ****    *******
*****   *           *   *****   *********`;

const binaire =
`10000001110110111110110110111010010100000111000000101101110110011011010101011111
10010010110110010010011010010100001010100011010010101011001100100001001001110101
10100000110011100001100110000111011111101001011000111011101000000001110110010001
00100010011101000011101010001100110101110111001001110001111011111100111110010110
01111111011100011101111101011110110100001011001000000100011110110011010011010001
1011001011101000101101001001111000100000110000101010000000000
Nombre de valeurs générées : 1661`

const matrice = 
`| -12   7  30 | 
|  36 -85 -64 | 
| -94  72  -5 |`;

export default function Page() {
    return <>
        <section>
        <h2>Marche à suivre</h2>
            <p>
                Suivez les étapes suivantes pour compléter le laboratoire:
            </p>
            <ol>
                <li>
                    Créer un projet web de base avec un fichier avec la structure vu au début du cours. Votre projet doit au 
                    moins contenir un fichier <IC>index.html</IC> et un dossier <IC>js</IC>.
                </li>
                <li>
                    Pour chacun des exercices ci-dessous, créez un fichier <IC>exercice-1.js</IC>, <IC>exercice-2.js</IC>, etc. 
                    dans le dossier <IC>js</IC>. Vous écrirez le code de chaque exercice dans ces fichiers.
                </li>
                <li>
                    Dans le fichier <IC>index.html</IC>, ajoutez une balise <IC>&lt;script&gt;</IC> pour inclure chacun des 
                    fichiers d&apos;exercices.
                </li>
                <li>
                    Mettre toutes les balises <IC>&lt;script&gt;</IC> en commentaire. Vous pourrez les décommenter lorsque vous
                    travaillerez sur l&apos;exercice correspondant.
                </li>
            </ol>
        </section>

        <section>
            <h2>Exercices</h2>
            <p>
                Voici les exercices à compléter:
            </p>
            <ol>
                <li>
                    Générer aléatoirement une nombre entre 1 et 10. Afficher le nombre dans la console avec le texte du nombre. 
                    Par exemple, si le nombre est 5, afficher: <IC>5 (cinq)</IC>.
                </li>
                <li>
                    Générer aléatoirement une lettre de l&apos;alphabet et affichez là dans la console. 
                </li>
                <li>
                    À l&apos;aide de boucles, trouvez le nombre entre 1 et 1000 qui a le plus de facteurs (diviseurs).
                </li>
                <li>
                    Générer un tableau contenant aléatoirement entre 10 et 40 valeurs. Chaque valeur du tableau doit être un 
                    nombre entier aléatoire entre 1 et 100. Afficher le tableau dans la console.
                </li>
                <li>
                    Définissez une matrice 3 &times; 3 (un tableau à 2 dimensions). Remplissez-la avec des nombres aléatoires 
                    entre -99 et +99. Faites-la afficher dans la console comme une vraie matrice en l&apos;alignant correctement 
                    de la façon suivante:
                    <CodeBlock language="console">{matrice}</CodeBlock>
                    Je vous recommande de regarder la fonction <IC>String.padStart()</IC> pour vous aider à aligner les nombres.
                </li>
                <li>
                    Afficher la phrase suivante dans la console: <IC>Bonjour, je suis un étudiant en informatique.</IC>.
                    Vous devez ensuite l&apos;afficher de chaque façon suivante:
                    <ul>
                        <li>EN MAJUSCULE</li>
                        <li>EN ENMAJUSCULESANSLESESPACES</li>
                        <li>Verticalement (une lettre par ligne dans la console).</li>
                        <li>En affichant qu&apos;un caractère sur deux</li>
                        <li>À l&apos;envers</li>
                        <li>A v e c &nbsp; u n &nbsp; e s p a c e &nbsp; e n t r e &nbsp; c h a q u e &nbsp; c a r a c t è r e.</li>
                        <li>A v e c u n e s p a c e e n t r e c h a q u e c a r a c t è r e (sauf s&apos;il y a déjà un espace)</li>
                        <li>Avec Une Majuscule À Chaque Mot</li>
                        <li>EnCamelCase</li>
                        <li>En AlTeRnAnT lEs MaJuScUlEs Et LeS mInUsCuLeS</li>
                        <li>An rampleçent tous las A per das E at vica-varse</li>
                    </ul>
                </li>
                <li>
                    Utilisez la boucle de votre choix pour afficher les séquences suivantes dans la console le plus efficacement possible:
                    <ul>
                        <li>3, 6, 9, 12, 15 … 57, 60</li>
                        <li>15, 14, 13, 12, 11 … 1, 0</li>
                        <li>2, 4, 8, 16, 32, 64 … 4096</li>
                        <li>2187, 729, 243, 81 … 3, 1</li>
                        <li>0, 1, 2, 0, 1, 2 … 0, 1, 2 (dix fois)</li>
                        <li>A, B, C, D, E … Y, Z</li>
                        <li>1/2, 1/3, 1/4, 1/5 … 1/12</li>
                    </ul>
                </li>
                <li>
                    Déclarez un tableau de chaînes de caractères contenant 52 cases. Initialisez ce tableau avec les valeurs 
                    d&apos;un jeu de carte à jouer (ex : A♠, 5♦, D♥, etc.). Pigez 5 cartes de façon aléatoire dans ce tableau 
                    en vous assurant de ne pas piger 2 fois la même carte. Vous pouvez utiliser un 2e tableau contenant les 
                    cartes ou les index pigés pour vous faciliter la tâche. Les caractères spéciaux peuvent être trouvé à 
                    l&apos;aide d&apos;une petite recherche sur Google.
                </li>
                <li>
                    Afficher dans la console les triangles d&apos;étoiles suivants:
                    <CodeBlock language="console">{triangles}</CodeBlock>
                    Vous pouvez afficher les triangles un en dessous de l&apos;autre au lieu de les afficher un à côté de 
                    l&apos;autre. Vous devez utiliser les boucles <IC>for</IC> pour afficher les triangles. Je vous recommande 
                    aussi de regarder la fonction <IC>String.repeat()</IC> pour vous aider.
                </li>
                <li>
                    Générer des valeurs 0 ou 1 aléatoirement que vous afficherez dans la console. Vous devez afficher un maximum 
                    de 80 caractères par rangée. Arrêter de générer des valeurs dès que 10 zéro (0) successif sont affiché dans 
                    la console et afficher le nombre total de valeurs générées avant de terminer le programme.
                    <CodeBlock language="console">{binaire}</CodeBlock>
                    Puisque l&apos;instruction <IC>console.log()</IC> affiche une nouvelle ligne, vous devrez générer les valeurs
                    dans une variable de type <IC>String</IC> et afficher la variable à chaque fois qu&apos;elle atteint 80 
                    caractères ou lorsque les 10 zéro (0) successif sont généré.
                </li>
            </ol>
        </section>

        <section>
            <h2>Fichiers</h2>
            <DownloadBlock>
                <File fileName="solution.zip" path="/labs/js-exercices-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}