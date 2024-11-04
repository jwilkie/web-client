import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Variables et constantes",
    description: "Présentation des variables, constantes et types de données en Javascript.",
    keywords: ["js", "var", "let", "const", "number", "string", "boolean", "null", "undefined", "table", "object"],
    group: "notes"
}

const letconst =
`// Variable
let x = 5;

// Constante
const maximum = 100;`;

const noms =
`// Bon nom de variable
let nombreDeVies = 3;
let estConnecte = true;
let inputNom = null;

// Mauvais nom de variable
let a = 5;
let test = 15;
let i = 'Jean';`;

const nombre =
`let a = -5;
let b = 3.5;
let c = 3;

let preCalcul = Math.sqrt(b ** 2 - 4 * a * c) / (2 * a);

let zero1 = -b + preCalcul;
let zero2 = -b - preCalcul;`

const chaine = 
`let prenom = 'Alice';
let nom = "Boisvert";

let nomComplet = prenom + ' ' + nom;
let initiale = prenom[0] + nom[0];
let courriel = 
    prenom.charAt(0).toLowerCase() + 
    nom.substring(0, 5).toLowerCase() + 
    '@lacitec.on.ca';`;

const bool =
`let estVivant = true;
let depasseLimite = false;

let enDanger = estVivant && depasseLimite;`;

const nullundefined = 
`// Valeur undefined
let recherche;

// Valeur null
let elementSelection = null;`;

const tableau =
`let liste = [1, 2, 3, 4, 5];
let dernier = liste[liste.length - 1];

let noms = ['Alice', 'Bob', 'Charlie'];
noms.push('David');`;

const objet =
`let monstre = {
    nom: 'Gobelin',
    pointsDeVie: 10,
    force: 5
};`;

const fonction = 
`function carree(nombre) {
    return nombre ** 2;
}

const cube = (nombre) => {
    return nombre ** 3;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Déclaration</h2>
            <p>
                En Javascript, il existe plusieurs façons de déclarer une variable. Les plus courantes sont <IC>let</IC> et <IC>const</IC>.
                Le mot-clé <IC>let</IC> permet de déclarer une variable typique qui pourra être modifiée par la suite. Le
                mot-clé <IC>const</IC>, quant à lui, permet de déclarer, comme son nom l&apos;indique, une constante, donc une variable qui peut
                pas être modifiée une fois qu&apos;elle a une valeur.
            </p>
            <CodeBlock language="js">{letconst}</CodeBlock>
            <ColoredBox title="Attention:">
                <p>
                    Il existe théoriquement un troisième mot-clé pour déclarer des variables qui est <IC>var</IC>. Cependant, il est
                    fortement recommandé de ne pas l&apos;utiliser en raison de son comportement particulier. Il était utilisé avant l&apos;arrivée des
                    mot-clé <IC>let</IC> et <IC>const</IC> et est maintenant obsolète.
                </p>
                <p>
                    N&apos;utilisez jamais <IC>var</IC> pour déclarer des variables. C&apos;est une mauvaise pratique et votre enseignant pourra vous
                    pénaliser si vous l&apos;incorporez dans votre code.
                </p>
            </ColoredBox>
        </section>

        <section>
            <h2>Identifiant</h2>
            <p>
                Les identifiants de variables et de constantes en Javascript doivent respecter certaines règles:
            </p>
            <ul>
                <li>Doivent commencer par une lettre minuscule.</li>
                <li>Doivent suivre la casse camelCase minuscule (ex: maVariable, nombreDeVies).</li>
                <li>Ne peuvent pas contenir d&apos;espaces.</li>
                <li>Ne peuvent pas être des mots-clés réservés du langage Javascript.</li>
                <li>Doivent avoir un nom significatif.</li>
            </ul>
            <p>
                Le dernier point est particulièrement important. Il est recommandé de toujours donner des noms de variables qui ont un sens
                et qui décrivent ce que la variable contient.
            </p>
            <CodeBlock language="js">{noms}</CodeBlock>
        </section>

        <section>
            <h2>Types de données de base</h2>
            <p>
                Vous pouvez probablement remarquer quelque chose de particulier dans les déclarations de variables ci-dessus. En effet,
                contrairement aux langages de programmation Java ou C# que vous avez peut-être vu, il n&apos;est pas nécessaire de spécifier
                le type de données de la variable lors de sa déclaration en Javascript. Ceci étant dit, il y a quand même des types de
                données en Javascript. Ils ne sont simplement pas indiqué dans la déclaration de la variable. Le langage est dit faiblement
                typé, ce qui signifie que le type de données est déterminé automatiquement en fonction de la valeur assignée à la variable.
            </p>
            <p>
                Javascript possède un nombre très limité de types de données de base comparé à d&apos;autres langages de programmation. Dans cette
                section, nous vous présenterons les 7 types de données de base de ce langage.
            </p>
            <ColoredBox title="Attention:">
                Puisque Javascript est faiblement typé, il est techniquement possible de changer le type de données d&apos;une variable au
                cours de son existence. Cependant, il est fortement déconseillé de le faire car cela peut rendre le code difficile à
                lire. C&apos;est une mauvaise pratique que vous devriez toujours éviter.
            </ColoredBox>

            <section>
                <h3>Nombre</h3>
                <p>
                    Les nombres ou <IC>number</IC> en Javascript sont des valeurs numériques. Contrairement à d&apos;autres langages, il n&apos;y a pas de
                    distinction entre les entiers et les nombres à virgule flottante. Tous les nombres sont représentés de la même façon.
                </p>
                <p>
                    Les opérations mathématiques de base sont supportées en Javascript. Vous pouvez additionner, soustraire, multiplier et
                    diviser des nombres comme vous le feriez dans un autre langage. Vous avez aussi accès à des fonctions mathématiques plus
                    avancées dans l&apos;objet <IC>Math</IC> de Javascript. Voici quelques exemples:
                </p>
                <CodeBlock language="js">{nombre}</CodeBlock>
                <p>
                    Vous pouvez trouver la liste complète des fonctions et opérations mathématiques ici:
                </p>
                <ul>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math" target="_blank">
                            MDN - Basic math in JavaScript
                        </a>
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank">
                            MDN - Math
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Chaîne de caractères</h3>
                <p>
                    Les chaînes de caractères ou <IC>string</IC> en Javascript sont des séquences de caractères Unicode. Elles sont utilisées
                    pour stocker du texte et sont délimitées par des guillemets simples <IC>&apos;</IC>, doubles <IC>&quot;</IC> ou des accents 
                    graves <IC>`</IC>.
                </p>
                <p>
                    Les fonctions de base sur les chaînes de charactères sont sensiblement les mêmes que dans d&apos;autres langages. Vous pouvez
                    concaténer des chaînes, extraire des sous-chaînes, rechercher des caractères, etc. Voici quelques exemples:
                </p>
                <CodeBlock language="js">{chaine}</CodeBlock>
                <p>
                    Vous pouvez trouver la liste complète des fonctions et opérations sur les chaînes de caractères ici:
                </p>
                <p>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank">
                        MDN - String
                    </a>
                </p>
            </section>

            <section>
                <h3>Booléen</h3>
                <p>
                    Les valeurs booléennes ou <IC>boolean</IC> en Javascript sont des valeurs logiques. Elles peuvent être soit 
                    vrai (<IC>true</IC>) ou fausse (<IC>false</IC>). Elles sont souvent utilisées pour contrôler le flux d&apos;exécution d&apos;un 
                    programme à l&apos;aide de structures conditionnelles ou de boucles.
                </p>
                <p>
                    Les opérateurs logiques de base sont supportés en Javascript. Vous pouvez donc faire des négations, des ET, des OU et 
                    des comparaisons. Voici quelques exemples:
                </p>
                <CodeBlock language="js">{bool}</CodeBlock>
                <p>
                    Une grande différence dans les comparaisons en Javascript est que le langage propose 2 types d&apos;égalité et d&apos;inégalité.
                    L&apos;égalité/inégalité stricte (<IC>===</IC>, <IC>!==</IC>) et l&apos;égalité/inégalité faible (<IC>==</IC>, <IC>!=</IC>). Je 
                    n&apos;entrerai pas dans les détails ici, mais sachez que vous devriez toujours utiliser l&apos;égalité stricte pour éviter d&apos;avoir 
                    des comportements inattendus dans votre code.
                </p>
                <p>
                    Vous trouverez la liste complète des opérateurs logiques ici:
                </p>
                <ul>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators" target="_blank">
                            MDN - Comparison operators
                        </a>
                    </li>
                    <li>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators" target="_blank">
                            MDN - Logical operators
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Null et undefined</h3>
                <p>
                    Les valeurs <IC>null</IC> et <IC>undefined</IC> en Javascript sont des valeurs spéciales qui représentent l&apos;absence de 
                    valeur. <IC>null</IC> est utilisé pour indiquer explicitement qu&apos;une variable ne contient aucune valeur. <IC>undefined</IC> 
                    est utilisé pour indiquer que la variable n&apos;a pas encore été initialisée.
                </p>
                <p>
                    Vous utiliserez rarement la valeur <IC>undefined</IC> dans votre code puisque le langage se charge de l&apos;assigner 
                    automatiquement aux variables non initialisées. La valeur <IC>null</IC> est plus courante et est souvent utilisée pour
                    explicitement indiquer qu&apos;une variable ne contient aucune valeur ou réinitialiser une variable.
                </p>
                <CodeBlock language="js">{nullundefined}</CodeBlock>
            </section>

            <section>
                <h3>Tableaux</h3>
                <p>
                    Les tableaux ou <IC>array</IC> en Javascript sont des structures de données ordonnées. Ils sont utilisés pour stocker 
                    plusieurs valeurs dans une seule variable. Les éléments d&apos;un tableau peuvent être de n&apos;importe quel type de données, y 
                    compris d&apos;autres tableaux. Plus de détails sur les tableaux seront donnés dans une page dédiée à ce sujet puisqu&apos;ils 
                    sont plus complexes que les autres types de données de base.
                </p>
                <CodeBlock language="js">{tableau}</CodeBlock>
            </section>

            <section>
                <h3>Objets</h3>
                <p>
                    Les objets en Javascript sont des structures de données complexes qui peuvent contenir plusieurs propriétés. On peut les 
                    voir comme une collection de paires clé-valeur ou un ensemble de variables regroupées sous un même nom. Les objets sont
                    utilisés pour représenter des entités plus complexes que les types de données de base. 
                </p>
                <p>
                    Plus de détails sur les objets seront donnés dans un autre module puisqu&apos;ils sont plus complexes que les autres types 
                    de données de base et sont fondamentalement différents des objets des autres langage que vous avez appris jusqu&apos;à 
                    maintenant.
                </p>
                <CodeBlock language="js">{objet}</CodeBlock>
            </section>

            <section>
                <h3>Fonctions</h3>
                <p>
                    Les fonctions en Javascript sont des blocs de code réutilisables. Elles sont utilisées pour exécuter une série 
                    d&apos;instructions lorsqu&apos;elles sont appelées. On se demande pourquoi les fonctions sont considérées comme des types de
                    données de base. C&apos;est parce qu&apos;en Javascript, les fonctions peuvent être assignées à des variables, passées en
                    paramètres à d&apos;autres fonctions et retournées par d&apos;autres fonctions. 
                </p>
                <p>
                    Plus de détails sur les fonctions seront donnés dans un autre module puisqu&apos;elles sont plus complexes que les autres
                    types de données de base et sont fondamentalement différentes des fonctions des autres langages que vous avez appris
                    jusqu&apos;à maintenant.
                </p>
                <CodeBlock language="js">{fonction}</CodeBlock>
            </section>
        </section>
    </>
}