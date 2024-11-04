import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Conditions",
    description: "Présentation de la structure de flux de la condition en Javascript.",
    keywords: ["js", "bool", "boolean", "if", "else", "else if", "condition", "ternary", "ternaire"],
    group: "notes"
}

const condition = 
`let age = 23;
if (age >= 18) {
    // Vous êtes majeur au Canada
}
`;

const sinon = 
`let age = 15;
if (age >= 18) {
    // Vous êtes majeur au Canada
} 
else {
    // Vous êtes encore mineur au Canada
}`;

const bool =
`// Variable booléenne
estVivant

// Opérateur logique
estEnExecution || !contientErreur

// Comparaison
age >= 18

// Mix de tout
estVivant && age >= 18`;

const trans = 
`let compteur = 20;
if(compteur) {
    // ...
}`;

const ternary =
`// On diminue les points de vie de 10 si le joueur a au moins 10 points 
// de vie. Sinon, on met les points de vie à 0.
pointDeVie = (pointDeVie - 10) > 0 ? pointDeVie - 10 : 0;`;

export default function Page() {
    return <>
        <section>
            <h2>Structure de flux if/else</h2>
            <p>
                Comme dans les autres langage de programmation, Javascript possède un mot-clé <IC>if</IC>. Il s&apos;utilise de façon presque 
                identique aux autres langages de programmation que vous avez pu voir, comme le Java ou le C#. La structure de 
                flux <IC>if</IC>/<IC>else</IC> permet de définir un bloc de code qui sera exécuté si une condition est vérifiée. La 
                condition doit être une expression booléenne, donc une expression qui peut être évaluée à <IC>true</IC> ou <IC>false</IC>. 
                Voici un exemple:
            </p>
            <CodeBlock language="js">{condition}</CodeBlock>
            <p>
                Le mot-clé <IC>else</IC>, quant à lui, permet de définir un bloc de code qui sera exécuté si la condition n&apos;est pas 
                validée. Il est optionnel, mais il est souvent utilisé pour gérer les cas où la condition doit faire autre chose lorsque 
                la condition n&apos;est pas vérifiée. Voici un exemple:
            </p>
            <CodeBlock language="js">{sinon}</CodeBlock>
        </section>

        <section>
            <h2>Expression booléenne</h2>
            <p>
                Une expression booléenne est une expression qui peut être évaluée à <IC>true</IC> ou <IC>false</IC>. En javascript, une
                variable booléenne, une comparaison ou l&apos;utilisation d&apos;un opérateur logique est considéré comme une expression booléenne. 
                Voici quelques exemples d&apos;expressions booléennes:
            </p>
            <CodeBlock language="js">{bool}</CodeBlock>
            <p>
                Ces expressions booléenne pourront être utilisées dans les conditions <IC>if</IC> pour déterminer si un bloc de code doit
                être exécuté ou non, mais aussi pour créer de nouvelles variables booléennes ou pour contrôler des boucles.
            </p>
            <p>
                Javascript a aussi un principe particulier. Dans un <IC>if</IC> ou une boucle, il peut considérer des valeurs ou des 
                variables qui ne sont pas des booléens comme des booléens. Dans ce genre de code, Javascript convertit la valeur en 
                booléen en suivant les règles ci-dessous:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Type de données</th>
                            <th>Valeur false</th>
                            <th>Valeur true</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>String</td>
                            <td>Chaîne vide</td>
                            <td>Toute chaîne qui n&apos;est pas vide</td>
                        </tr>
                        <tr>
                            <td>Number</td>
                            <td>0 ou NaN (Not a Number)</td>
                            <td>Tout autre nombre autre que 0 ou NaN (Not a Number)</td>
                        </tr>
                        <tr>
                            <td>Autres types</td>
                            <td>Ne peuvent pas être faux</td>
                            <td>Tableau, objets, fonctions ou autre types</td>
                        </tr>
                        <tr>
                            <td>Null ou undefined</td>
                            <td>Null ou undefined</td>
                            <td>Ne peut jamais être vrai</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Ainsi, dans le code ci-dessous, le bloc de code dans le <IC>if</IC> sera exécuté, car la variable <IC>compteur</IC> n&apos;est 
                pas <IC>NaN</IC> ou <IC>0</IC>. Elle est donc convertit à <IC>true</IC>.
            </p>
            <CodeBlock language="js">{trans}</CodeBlock>
        </section>

        <section>
            <h2>Opérateur ternaire</h2>
            <p>
                L&apos;opérateur ternaire est une façon plus concise d&apos;écrire une condition <IC>if</IC>/<IC>else</IC>. Il est souvent utilisé 
                pour assigner une valeur à une variable en fonction d&apos;une condition. Vous l&apos;avez peut-être déjà utilisé dans un autre 
                langage de programmation. On l&apos;appelle aussi parfois le &quot;inline if&quot;. Voici un exemple:
            </p>
            <CodeBlock language="js">{ternary}</CodeBlock>
            <p>
                L&apos;opérateur ternaire est composé de trois parties: une condition, une valeur si la condition est vraie, et une valeur si
                la condition est fausse. Ces trois parties sont séparées par un point d&apos;interrogation <IC>?</IC> entre la condition et la 
                valeur si vrai, et par un deux-points <IC>:</IC> entre la valeur si vrai et la valeur si faux.
            </p>
            <p>
                Il peut être attrayant d&apos;utiliser l&apos;opérateur ternaire pour des conditions simples, mais il est important de ne pas
                l&apos;utiliser de façon excessive. Assurez-vous toujours que votre code reste lisible et compréhensible pour les autres
                développeurs.
            </p>
        </section>
    </>
}