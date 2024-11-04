import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Boucles",
    description: "Présentation des différentes boucles possible en Javascript.",
    keywords: ["js", "bool", "boolean", "loop", "for", "while", "do while", "for of", "break", "continue"],
    group: "notes"
}

const loopWhile =
`let pointDeVie = 100;
while (pointDeVie > 0) {
    // Continuer le jeu...
}`;

const loopDoWhile =
`let nom;
do {
    // Code pour demander le nom...
} while(nom === '');`;

const loopFor =
`for (let i = 0; i < 10; i++) {
    // Code à répéter 10 fois...
}`;

const loopForOf = 
`let prenoms = ['Alice', 'Bob', 'Charlie'];
for (let prenom of prenoms) {
    // Code à effectuer pour chaque prénom...
}`;

const breakcontinue = 
`let compteur = 0;
for(let i = 0; i < tableau.length; i++) {
    // Si l'élément est 0, on passe à l'itération suivante
    if (tableau[i] === 0) {
        continue;
    }

    // Si le compteur dépasse 100, on sort de la boucle
    if (compteur > 100) {
        break;
    }

    // On incrémente le compteur avec la valeur de l'élément 
    // du tableau
    compteur += tableau[i];
}`;

export default function Page() {
    return <>
        <section>
            <h2>Types de boucles</h2>
            <p>
                Les boucles sont des structures de contrôle qui permettent de répéter une ou plusieurs instructions tant qu&apos;une
                condition est vraie. Javascript possède essentiellement les mêmes types de boucles que les autres langages de programmation. 
                Les trois principales, soit la boucle <IC>for</IC>, la boucle <IC>while</IC> et la boucle <IC>do while</IC> sont aussi 
                disponibles en Javascript, mais d&apos;autres sont aussi disponibles, comme la boucle <IC>for of</IC> qui est un équivalent de
                la boucle <IC>foreach</IC>. Javascript possède bon nombre d&apos;autres boucle, mais nous ne les couvrirons pas dans ce cours 
                puisqu&apos;elles nécessite une connaissance plus avancée du langage.
            </p>
        </section>

        <section>
            <h2>while</h2>
            <p>
                La boucle <IC>while</IC> est une boucle qui répète une ou plusieurs instructions tant qu&apos;une condition est vraie. La 
                condition est évaluée avant l&apos;exécution des instructions. Si la condition est fausse dès le départ, les instructions 
                ne seront jamais exécutées. Voici un exemple:
            </p>
            <CodeBlock language="js">{loopWhile}</CodeBlock>
        </section>

        <section>
            <h2>do/while</h2>
            <p>
                La boucle <IC>do/while</IC> est similaire à la boucle <IC>while</IC>, mais la condition est évaluée après l&apos;exécution des 
                instructions. Cela signifie que les instructions seront exécutées au moins une fois, même si la condition est fausse dès 
                le départ. Voici un exemple:
            </p>
            <CodeBlock language="js">{loopDoWhile}</CodeBlock>
        </section>

        <section>
            <h2>for</h2>
            <p>
                La boucle <IC>for</IC> est une boucle qui répète une ou plusieurs instructions tant qu&apos;une condition est vraie. Généralement,
                elle est utilisée lorsqu&apos;on connaît à l&apos;avance le nombre d&apos;itérations à effectuer et l&apos;on itérera sur une certaine variable 
                qui sera modifé à chaque itération. Voici un exemple:
            </p>
            <CodeBlock language="js">{loopFor}</CodeBlock>
            <p>
                La boucle for est composée de trois parties: l&apos;initialisation, la condition et l&apos;incrémentation. L&apos;initialisation est 
                effectuée avant la première itération, la condition est évaluée avant chaque itération et l&apos;incrémentation est effectuée
                après chaque itération. Ces trois parties sont séparées par des points-virgules.
            </p>
        </section>

        <section>
            <h2>for of</h2>
            <p>
                La boucle <IC>for of</IC> est une boucle qui permet de parcourir les éléments d&apos;un objet itérable, comme un tableau ou une 
                chaîne de caractères. Elle est comparable à la boucle <IC>foreach</IC> de certains autres langages de programmation. Voici un
                exemple:
            </p>
            <CodeBlock language="js">{loopForOf}</CodeBlock>
            <ColoredBox title="À noter:">
                Il arrive souvent que l&apos;index d&apos;un élément du tableau soit nécessaire dans votre code. Dans ce genre de situation, il est
                préférable d&apos;utiliser une boucle <IC>for</IC> classique. Assurez-vous de bien comprendre la différence entre les deux types
                de boucles avant de les utiliser. À défaut de savoir laquelle utiliser, il est préférable d&apos;utiliser la 
                boucle <IC>for</IC> classique.
            </ColoredBox>
        </section>

        <section>
            <h2>break et continue</h2>
            <p>
                Les instructions <IC>break</IC> et <IC>continue</IC> sont utilisées pour contrôler le flux d&apos;une boucle. L&apos;instruction 
                <IC>break</IC> permet de sortir de la boucle immédiatement, tandis que l&apos;instruction <IC>continue</IC> permet de passer à 
                l&apos;itération suivante. Voici un exemple:
            </p>
            <CodeBlock language="js">{breakcontinue}</CodeBlock>
        </section>
    </>
}