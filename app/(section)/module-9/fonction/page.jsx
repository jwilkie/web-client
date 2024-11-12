import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fonctions",
    description: "Présentation des fonctions en Javascript, un outil essentiel pour organiser et réutiliser son code.",
    keywords: ["js", "réutilisation", "fonctions", "paramètres", "retourner", "return", "flêche", "anonyme"],
    group: "notes"
}

const classic = 
`function direBonjour() {
    console.log("Bonjour!");
}`;

const arrow = 
`const direBonjour = () => {
    console.log("Bonjour!");
}`;

const param = 
`// Fonction classique
function direBonjour(nom, prenom) {
    console.log('Bonjour ' + prenom + ' ' + nom + '!');
}
    
// Fonction flêche
const direBonjour = (nom, prenom) => {
    console.log('Bonjour ' + prenom + ' ' + nom + '!');
}`;

const returns =
`// Fonction classique
function carree(nombre) {
    return nombre * nombre;
}

// Fonction flêche
const carree = (nombre) => {
    return nombre * nombre;
}`;

const variable =
`function carree(nombre) {
    return nombre * nombre;
}

function cube(nombre) {
    return nombre * nombre * nombre;
}

function appliquerFonction(fonction, nombre) {
    return fonction(nombre);
}

// Afficher 9 dans la console
console.log(appliquerFonction(carree, 3)); 
`;

const anon =
`function appliquerFonction(fonction, nombre) {
    return fonction(nombre);
}

// Afficher 27 dans la console
console.log(
    appliquerFonction((nombre) => nombre * nombre * nombre, 3)
);
`;

export default function Page() {
    return <>
        <section>
            <h2>Type de fonctions</h2>
            <p>
                En Javascript, il existe plusieurs façons de déclarer ses fonctions.
            </p>
            <ul>
                <li>
                    La fonction classique
                </li>
                <li>
                    La fonction flêche
                </li>
            </ul>
            <p>
                La fonction classique ressemble à une fonction typique  du language C, C# ou Java. Elle est déclarée avec le 
                mot-clé <IC>function</IC> suivi du nom de la fonction et des paramètres entre parenthèses. Le corps de la fonction
                est délimité par des accolades. Voici un exemple:
            </p>
            <CodeBlock language="js">{classic}</CodeBlock>
            <p>
                La fonction flêche est une syntaxe plus récente et plus concise pour déclarer des fonctions. Elle est déclarée avec
                le nom des paramètres entre parenthèses, suivi de la flêche <IC>=&gt;</IC> et du corps de la fonction qui sera 
                souvent entre accolades. On définira son nom à l&apos;aide d&apos;une constante. Voici un exemple:  
            </p>
            <CodeBlock language="js">{arrow}</CodeBlock>
            <p>
                Ces 2 types de fonctions sont essentiellement équivalents. Vous pouvez utilier la façon qui vous intéresse le plus 
                ou vous mélange le moins. En général, on préfèrera utiliser celle qui demande d&apos;écrire le moins de code 
                possible, ce qui dépends du contexte. La fonction flêche a toutefois des propriétés particulière qui nous permet 
                de raccourcir son écriture dans certains cas.
            </p>
        </section>

        <section>
            <h2>Paramètres</h2>
            <p>
                Les fonctions peuvent prendre des paramètres. Ces paramètres sont des valeurs que l&apos;on passe à la fonction
                lors de son appel. On peut définir autant de paramètres que l&apos;on veut, séparés par des virgules que l&apos;on 
                mettra entre les parenthèses de la déclaration de la fonction. Voici un exemple avec les 2 types de fonctions:
            </p>
            <CodeBlock language="js">{param}</CodeBlock>
        </section>

        <section>
            <h2>Retourner une valeur</h2>
            <p>
                Les fonctions peuvent retourner une valeur, comme dans les autres langage. Pour ce faire, nous utiliserpms le 
                mot-clé <IC>return</IC> suivi de la valeur que l&apos;on veut retourner. Contrairement aux autres lanagages de 
                programmation que vous avez vu jusqu&apos;à présent, il n&apos;est pas nécessaire de spécifier le type de la valeur
                retournée. Une fonction qui contient un <IC>return</IC> retournera la valeur spécifiée, peu importe son type 
                alors qu&apos;une fonction qui ne contient pas de <IC>return</IC> retournera <IC>undefined</IC>. Voici un exemple
                avec les 2 types de fonctions:
            </p>
            <CodeBlock language="js">{returns}</CodeBlock>
        </section>

        <section>
            <h2>Fonction comme variable</h2>
            <p>
                En Javascript, les fonctions sont des valeurs comme les autres. Cela signifie que vous pouvez les stocker dans 
                des variables, les passer en paramètres à d&apos;autres fonctions et les retourner comme valeurs de fonctions. 
                Celà nous permet d&apos;écrire du code très flexible, court et modulaire, mais peut aussi le rendre aussi facile 
                à lire qu&apos;un bol de spaghetti. Voici un exemple de fonction qui est passé à une autre fonction:
            </p>
            <CodeBlock language="js">{variable}</CodeBlock>
            <p>
                Dans cet exemple, on a défini la fonction <IC>carree</IC> qui est passé en paramètre à la 
                fonction <IC>appliquerFonction</IC>. Dans la fonction <IC>appliquerFonction</IC>, le 
                paramètre <IC>fonction</IC> contient donc la fonction <IC>carree</IC>. On peut ensuite l&apos;appeler en utilisant les 
                parenthèses comme n&apos;importe quelle autre fonction et en lui passant les paramètres nécessaires.
            </p>
            <ColoredBox title="À noter:">
                Lorsqu&apos;on passe une fonction en paramètre, on ne met pas les parenthèses après le nom de la fonction. Les parenthèses
                indique que la fonction doit être exécutée, ce qui n&apos;est pas le cas lorsqu&apos;on veut la passer en paramètre. Dans 
                l&apos;exemple ci-dessus, on ne mets donc pas de parenthèses après <IC>carree</IC> lorsqu&apos;on la passe en paramètre 
                à <IC>appliquerFonction</IC>.
            </ColoredBox>
        </section>

        <section>
            <h2>Propriétés de la fonction flêche</h2>
            <p>
                Les fonctions flêches ont quelques propriétés intéressantes qui les rendent très utile pour raccourcir notre code:               
            </p>
            <ul>
                <li>
                    Les accolades sont optionnelles si le corps de la fonction ne contient qu&apos;une seule instruction. Bref, si
                    le corps de la fonction est une seule ligne, vous pouvez omettre les accolades.
                </li>
                <li>
                    Si le corps de la fonction est une seule instruction qui retourne une valeur, vous pouvez omettre le mot-clé 
                    <IC>return</IC>. La valeur sera automatiquement retournée par la fonction.
                </li>
            </ul>
            <p>
                Ces propriétés nous permettent d&apos;écrire des fonctions très courtes comme ceci:
            </p>
            <CodeBlock language="js">{`const carree = (nombre) => nombre * nombre;`}</CodeBlock>
            <p>
                Dans ce cas-ci on a omis les accolades et le mot-clé <IC>return</IC> car le corps de la fonction est une seule
                instruction qui retourne une valeur. Cela rend la fonction très concise, même si elle a l&apos;air un peu bizarre
                pour les nouveaux programmeurs.
            </p>
        </section>

        <section>
            <h2>Fonction anonyme</h2>
            <p>
                Les fonctions anonymes sont des fonctions qui n&apos;ont pas de nom. Elles sont souvent utilisées lorsqu&apos;on 
                veut passer une fonction en paramètre à une autre fonction. Voici un exemple de fonction anonyme:
            </p>
            <CodeBlock language="js">{anon}</CodeBlock>
            <p>
                Dans le code ci-dessus, on a passé une fonction anonyme en paramètre à la fonction <IC>appliquerFonction</IC>.
                Cette fonction anonyme est définie directement dans l&apos;appel de la fonction. Puisqu&apos;elle n&apos;est pas
                stockée dans une variable ou nommé, elle n&apos;est pas réutilisable ailleurs dans le code autre que dans la 
                fonction <IC>appliquerFonction</IC>.
            </p>
            <p>
                Ce genre de fonction est très pratique pour les fonctions qui ne sont utilisées qu&apos;une seule fois. Elle est 
                toutefois problématique si vous voulez réutiliser votre code.
            </p>
        </section>
    </>
}