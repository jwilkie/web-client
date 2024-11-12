import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Objets",
    description: "Présentation des objets en Javascript, un type de données flexible qui nous permet de stocker plusieurs autres données.",
    keywords: ["js", "dictionnaire", "clé", "valeur", "ensemble", "variable"],
    group: "notes"
}

const objet =
`const musique = {
    titre: "Bohemian Rhapsody",
    artiste: "Queen",
    annee: 1975,
    duree: 355,
    jouer: function() {
        // ... 
    }
};`;

const props = 
`// Modifier la valeur du titre
musique.titre = 'Another One Bites the Dust';

// Affiche "Another One Bites the Dust"
console.log(musique.titre);

// Modifier encore la valeur du titre
musique['titre'] = 'We Will Rock You';

// Affiche "We Will Rock You"
console.log(musique['titre']);`;

const method =
`// Exécuter la fonction jouer
musique.jouer();`;

const imbrique = 
`const album = {
    titre: "A Night at the Opera",
    annee: 1975,
    chansons: [
        {
            titre: "Death on Two Legs",
            duree: 210
        },
        {
            titre: "Lazing on a Sunday Afternoon",
            duree: 70
        },
        {
            titre: "I'm in Love with My Car",
            duree: 180
        },

        // ...
    ]
};
`;

export default function Page() {
    return <>
        <section>
            <h2>Définition</h2>
            <p>
                Lorsqu&apos;on parle d&apos;objets dans la plupart des langages de programmation, on pense immédiatement aux classes. Au fait 
                qu&apos;un objet est une instance d&apos;une classe. Aux méthodes et aux attributs qui sont associés aux classes... En 
                Javascript, les objets sont un peu différents.
            </p>
            <p>
                En Javascript, un objet est simplement un ensemble de variables. Ces variables sont appelées des &quot;propriétés&quot;
                ou des &quot;clés&quot;. Chaque propriété est associée à une valeur. Cette valeur peut être de n&apos;importe quel type:
                un nombre, une chaîne de caractères, un tableau, un autre objet et même une fonction. Celà nous permet de stocker
                des données et des comportements de manière très flexible. Voici un exemple d&apos;objet:
            </p>
            <CodeBlock language="js">{objet}</CodeBlock>
            <p>
                Pour créer un objet, on utilise les accolades <IC>{`{}`}</IC>. À l&apos;intérieur des accolades, on définit les propriétés
                de l&apos;objet en les séparant par des virgules. Chaque propriété est définie avec une clé et une valeur, séparées par
                un deux-points. Dans l&apos;exemple ci-dessus, on a défini un objet <IC>musique</IC> avec 5 
                propriétés: <IC>titre</IC>, <IC>artiste</IC>, <IC>annee</IC>, <IC>duree</IC> et <IC>jouer</IC>. La dernière propriété 
                est une fonction, ce qui est tout à fait possible en Javascript.
            </p>
        </section>

        <section>
            <h2>Accéder aux propriétés</h2>
            <p>
                Pour accéder à une propriété d&apos;un objet, on utilise la notation du point <IC>.</IC>. Si l&apos;on reprends l&apos;exemple
                de l&apos;objet <IC>musique</IC> ci-dessus, on peut accéder à la propriété <IC>titre</IC> en 
                écrivant <IC>musique.titre</IC>. On peut aussi accéder à une propriété en utilisant la notation des 
                crochets <IC>[]</IC>. Dans ce cas, on écrit <IC>musique[&quot;titre&quot;]</IC>. Les deux notations sont équivalentes,
                mais la notation du point est plus courante puisqu&apos;elle est plus courte. On peut aussi modifier la valeur d&apos;une 
                propriété en utilisant les mêmes notation:
            </p>
            <CodeBlock language="js">{props}</CodeBlock>
            <p>
                Si vous voulez plutôt exécuter une fonction contenue dans un objet, le code est très similaire. Vous utilisez la
                notation du point pour accéder à la fonction, puis vous ajoutez les parenthèses pour l&apos;exécuter. Voici un exemple:
            </p>
            <CodeBlock language="js">{method}</CodeBlock>
        </section>

        <section>
            <h2>Objets imbriqués</h2>
            <p>
                Les objets peuvent contenir d&apos;autres objets. Cela nous permet de créer des structures de données complexes et 
                hiérarchiques. Par exemple, on pourrait avoir un objet <IC>album</IC> qui contient un tableau de chansons, qui 
                sont elles-mêmes des objets. Voici un exemple:
            </p>
            <CodeBlock language="js">{imbrique}</CodeBlock>
            <p>
                Les objets imbriqués sont très utiles pour organiser des données complexes. Ils nous permettent de garder des
                données qui sont liées ensemble dans un seul endroit. Cela rend notre code plus lisible et plus facile à
                maintenir.
            </p>
        </section>

        <section>
            <h2>Publique, privée et encapsulation</h2>
            <p>
                En Javascript, il n&apos;y a pas de notion de visibilité des propriétés. Toutes les propriétés d&apos;un objet sont 
                publiques, c&apos;est-à-dire qu&apos;elles sont accessibles de l&apos;extérieur de l&apos;objet. Cela signifie que n&apos;importe qui 
                peut lire ou modifier les propriétés d&apos;un objet. Cela peut être très utile, mais aussi problématique si on
                travaille en équipe avec des personnes qui ne font pas attention au code ou qui sont de mauvais programmeurs.
            </p>
            <p>
                Pour pallier à ce problème, on peut utiliser des conventions de nommage pour indiquer que certaines propriétés
                sont privées. Plusieurs programmeurs préfixe encore les noms des propriétés privées avec un underscore <IC>_</IC>. 
                Cela indique aux autres programmeurs que ces propriétés ne doivent pas être modifiées directement. Cela ne 
                protège pas vraiment les propriétés, mais cela indique clairement l&apos;intention du programmeur.
            </p>
            <p>
                Autrement, les modules Javascript permettent de créer des variables privées. Le concept de module sera abordé
                dans une autre page.
            </p>
        </section>
    </>
}