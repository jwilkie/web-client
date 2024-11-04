import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Tableaux",
    description: "Présentation des tableaux en Javascript et de leurs différences avec les tableux des autres langages.",
    keywords: ["js", "array", "table", "list", "length", "at", "index", "push", "pop", "shift", "unshift", "splice", "sort", "reverse", "concat", "slice", "join", "2d"],
    group: "notes"
}

const diff = 
`// Tableau vide que l'on pourra remplir plus tard
let tableau1 = [];

// Tableau contenant multiples types de données
let tableau2 = [1, 'deux', true];`;

const size = 
`let tableau = [1, 2, 3, 4, 5];

// Ajoute 6 à la fin du tableau
tableau.push(6);

// Ajoute 0 au début du tableau
tableau.unshift(0);

// Retire le dernier élément du tableau. La valeur peut être 
// stockée dans une variable
let dernier = tableau.pop();

// Retire le premier élément du tableau. La valeur peut être
// stockée dans une variable
let premier = tableau.shift();`;

const length = 
`let tableau = [];

tableau.push(8);
tableau.push(1);
tableau.push(9);

for(let i = 0; i < tableau.length; i++) {
    // ...
}`;

const get = 
`let prenom = ['Alice', 'Bob', 'Charlie'];
let nom = ['Dupont', 'Tremblay', 'Smith'];

// On utilise les crochets pour cherche l'élément à 
// l'index 1 des tableaux
let courrielBob = prenom[1] + '.' + nom[1] + '@gmail.com';`;

const at = 
`let prenom = ['Alice', 'Bob', 'Charlie'];
let nom = ['Dupont', 'Tremblay', 'Smith'];

// On utilise la fonction .at() pour chercher l'élément à
// la fin du tableau
let courrielBob = prenom[-1] + '.' + nom[-1] + '@gmail.com';`;

export default function Page() {
    return <>
        <section>
            <h2>Différences</h2>
            <p>
                Les tableaux en Javascript sont des objets qui permettent de stocker des valeurs de façon ordonnée. Ils sont similaires aux 
                tableaux des autres langages de programmation, mais ils possèdent quelques différences importantes. Voici quelques-unes de 
                ces différences:
            </p>
            <ul>
                <li>
                    Les tableaux en Javascript sont dynamiques, ce qui signifie que leur taille peut changer à tout moment. On peut donc 
                    ajouter des éléments et en enlever à n&apos;importe quel moment. Nous n&apos;avons donc pas besoin de spécifier la taille du 
                    tableau lors de sa création.
                </li>
                <li>
                    Même s&apos;il n&apos;est pas recommandé de le faire, les tableaux en Javascript peuvent contenir des valeurs de différents types.
                    Il est donc possible de mettre des chaînes de caractères, des nombres, des objets et des valeurs booléennes dans un même
                    tableau.
                </li>
            </ul>
            <CodeBlock language="js">{diff}</CodeBlock>
        </section>

        <section>
            <h2>Modifier la taille d&apos;un tableau</h2>
            <p>
                Comme mentionné ci-dessus, les tableaux en Javascript sont dynamiques. Il est donc possible d&apos;ajouter et de retirer des 
                éléments à tout moment. Pour ce faire, nous utilisons les 
                méthodes <IC>push</IC>, <IC>pop</IC>, <IC>shift</IC> et <IC>unshift</IC>.
            </p>
            <CodeBlock language="js">{size}</CodeBlock>
            <p>
                À n&apos;importe quel moment, vous pouvez connaître la taille d&apos;un tableau en utilisant la propriété <IC>length</IC>. Cette
                propriété retourne le nombre d&apos;éléments dans le tableau.
            </p>
            <CodeBlock language="js">{length}</CodeBlock>
        </section>

        <section>
            <h2>Accéder aux éléments</h2>
            <p>
                Pour accéder à un élément d&apos;un tableau, on utilise son index. L&apos;index est un nombre entier qui représente la position de 
                l&apos;élément dans le tableau. Les indices commencent à 0, donc le premier élément du tableau a l&apos;index 0. Pour accéder à un
                élément, on utilise les crochets <IC>[]</IC>. Voici un exemple:
            </p>
            <CodeBlock language="js">{get}</CodeBlock>
            <p>
                Si vous ne voulez pas utiliser les crochets, vous pouvez aussi utiliser la méthode <IC>at</IC> qui fonctionne essentiellement 
                de la même manière. Cette fonction est plus récente et apporte une fonctionnalité supplémentaire, celle de retourner une valeur
                en partant de la fin du tableau. Pour ce faire, on peut fournir un index négatif. Un index de -1 retournera le dernier élément 
                du tableau.
            </p>
            <CodeBlock language="js">{at}</CodeBlock>
            <ColoredBox title="Attention:">
                Assurer toujours de spécifier un index valide lors de l&apos;accès à un élément d&apos;un tableau. Si l&apos;index est à l&apos;extérieur de la 
                taille du tableau, il est possible que votre code génère une erreur ou qu&apos;il s&apos;exécute de façon inattendue.
            </ColoredBox>
        </section>

        <section>
            <h2>Autres fonctions</h2>
            <p>
                Javascript possède de nombreuses autres fonctions pour manipuler les tableaux. Nombreuse de ces fonctions sont difficile à 
                comprendre pour les débutants, mais elles sont très utiles pour les développeurs plus avancés. Nous ne les couvrirons pas
                toutes dans ce cours, mais voici quelques-unes des plus courantes:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Fonction</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><IC>sort</IC></td>
                            <td>
                                Trie les éléments du tableau. Par défaut, les éléments sont triés en ordre croissant.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>reverse</IC></td>
                            <td>
                                Inverse l&apos;ordre des éléments du tableau. Le premier élément devient le dernier et vice-versa.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>splice</IC></td>
                            <td>
                                Permet d&apos;ajouter ou de retirer des éléments d&apos;un tableau à une position donnée.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>concat</IC></td>
                            <td>
                                Fusionne deux tableaux en un seul. Les éléments du deuxième tableau sont ajoutés à la fin du premier tableau.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>slice</IC></td>
                            <td>
                                Retourne une sous-section du tableau. Les éléments retournés sont ceux entre les indices fournis.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>join</IC></td>
                            <td>
                                Fusionne tous les éléments du tableau en une seule chaîne de caractères. Le tableau doit uniquement 
                                contenir des chaînes de caractère. Un séparateur peut être fourni pour séparer les éléments.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>includes</IC></td>
                            <td>
                                Vérifie si un élément est présent dans le tableau. Retourne <IC>true</IC> si l&apos;élément est 
                                présent, <IC>false</IC> sinon.
                            </td>
                        </tr>
                        <tr>
                            <td><IC>indexOf</IC></td>
                            <td>
                                Retourne l&apos;index de la première occurrence d&apos;un élément dans le tableau. Retourne -1 si l&apos;élément n&apos;est
                                pas présent.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Vous pouvez trouver plus d&apos;information sur ces fonctions et plusieurs autres dans la documentation de MDN sur les tableaux.
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">
                    MDN - Array
                </a>
            </p>
        </section>
    </>
}