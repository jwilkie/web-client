import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Génération de nombres aléatoires",
    description: "Présentation d'une technique pour générer des nombres aléatoires entre certaines valeurs spécifiques.",
    keywords: ["js", "random", "aléatoire", "génération", "math"],
    group: "hack"
}

const random = 
`// Génére un nombre aléatoire dans l'intervalle [0, 1[
const nombre = Math.random();

console.log(nombre);`;

const bornes = 
`// Génére un nombre aléatoire avec l'amplitude et la valeur minimale désirée
// Remplacez "amplitude" et "min" par les valeurs de votre choix
const nombre = Math.random() * amplitude + min;

// Génére un nombre aléatoire dans l'intervalle [min, max[
// Remplacez "min" et "max" par les valeurs de votre choix
const nombre = Math.random() * (max - min) + min;`;

const exemples = 
`// Génére un nombre aléatoire dans l'intervalle [0, 10[
const nombre1 = Math.random() * 10;

// Génére un nombre aléatoire dans l'intervalle [7, 8[
const nombre2 = Math.random() + 7;

// Génére un nombre aléatoire dans l'intervalle [5, 15[
const nombre3 = Math.random() * 10 + 5;

// Génére un nombre aléatoire dans l'intervalle [-10, 10[
const nombre4v2 = Math.random() * 20 - 10;`;

const floor = 
`// Contient le nombre "5"
const nombre1 = Math.floor(5.9);

// Contient aussi le nombre "5"
const nombre2 = Math.floor(5.1);

// Contient le nombre "42"
const nombre3 = Math.floor(42.5);`;

const entier =
`// Génère un nombre aléatoire entier dans l'intervalle [0, 9]
const nombre1 = Math.floor(Math.random() * 10);

// Génère un nombre aléatoire entier dans l'intervalle [0, 10]
// Remarquez que l'on ajoute 1 à la valeur maximale pour inclure le nombre 10
const nombre2 = Math.floor(Math.random() * 11);

// Génère un nombre aléatoire entier représentant un jet de dé à 6 faces
const nombre3 = Math.floor(Math.random() * 6) + 1;

// Génère un nombre aléatoire entier dans l'intervalle [-10, 10]
// Ici l'amplitude est de 21 puisque l'on doit inclure le nombre 0
const nombre4 = Math.floor(Math.random() * 21) - 10;`;

export default function Page() {
    return <>
        <section>
            <h2>Applications</h2>
            <p>
                La génération de nombres aléatoires est un concept fondamental en programmation. Il est utilisé dans une variété 
                de programmes et d&apos;applications, tel que les jeux, la cryptographie, la simulation, l&apos;intelligence 
                artificielle et plusieurs autres domaines. Il est donc essentiel de savoir comment l&apos;utiliser correctement. 
            </p>
            <p>
                En Javascript, nous pourrons générer des nombres à l&apos;aide de la fonction <IC>Math.random()</IC>. Cette fonction
                génère un nombre entre 0 et 1. Bien que la borne inférieure (0) soit inclu, la borne supérieure (1) est exclusive, 
                c&apos;est-à-dire que le nombre 1 ne sera jamais généré. La maximum sera donc <IC>0.9999999999999999</IC>.
            </p>
            <CodeBlock language="js">{random}</CodeBlock>
        </section>

        <section>
            <h2>Changer les bornes</h2>
            <p>
                Pour changer les bornes de la génération aléatoire, il faudra effectuer quelques opérations mathématiques. En effet, 
                nous pouvons utiliser la multiplication pour modifier l&apos;amplitude de la valeur générée et l&apos;addition pour 
                changer la valeur minimale. En règle générale, nous pourrons utiliser les formules suivantes:
            </p>
            <CodeBlock language="js">{bornes}</CodeBlock>
            <p>
                Voici quelques exemples:
            </p>
            <CodeBlock language="js">{exemples}</CodeBlock>
        </section>

        <section>
            <h2>Nombres entiers</h2>
            <p>
                Les nombres générés jusqu&apos;à présent dans les exemples précédents sont des nombres à virgule flottante. Puisque 
                Javascript ne fait pas la différence entre les entiers et les nombres à virgule flottante, il peut sembler difficile
                de générer des nombres entiers. Heureusement, il existe une solution simple: utiliser la fonction <IC>Math.floor()</IC>.
                Cette fonction arrondit un nombre à l&apos;entier inférieur le plus proche.
            </p>
            <p>
                Par exemple:
            </p>
            <CodeBlock language="js">{floor}</CodeBlock>
            <p>
                Cette fonction est donc un peu comme l&apos;équivalent d&apos;un transtypage (cast) en entier dans les langages 
                comme C, C++ ou Java. On pourrat donc l&apos;utiliser pour générer des nombres entiers aléatoires. Pour ce faire,
                on l&apos;ajoutera à la formule autour de la multiplication.
            </p>
            <p>
                Voici quelques exemples: 
            </p>
            <CodeBlock language="js">{entier}</CodeBlock>
        </section>
    </>
}