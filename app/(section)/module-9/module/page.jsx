import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { FileExplorer, Folder, File } from '@/components/FileExplorer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Modules",
    description: "Présentation des modules ES6, une manière de découper son code en plusieurs fichiers pour le rendre plus lisible, modulaire et réutilisable.",
    keywords: ["js", "import", "export", "module", "es6", "importer", "exporter", "fichier"],
    group: "notes"
}

const mod = 
`<script type="module" src="/js/fichier-de-module.js"></script>`;

const exprt =
`export const nom = 'John';

export function direBonjour() {
    // ...
}`;

const exprt2 =
`const nom = 'Alice';

function carree(nombre) {
    // ...
}

export { nom, carree };`;

const imprt = 
`import { nom, carree } from './fichier.js';
import { autreFonctionalite } from './autre-fichier.js';`;

const as = 
`import { nomDeLaPersonne as prenom } from './fichier.js';`;

export default function Page() {
    return <>
        <section>
            <h2>Multiple fichiers</h2>
            <p>
                Lorsqu&apos;un projet devient assez grand, il est souvent nécessaire de découper son code en plusieurs fichiers 
                pour le rendre plus lisible, modulaire et réutilisable. Alors qu&apos;en C, C# et Java on utilise des classes dans 
                leur propre fichier, en Javascript on utilise des modules.
            </p>
            <p>
                Un module est un fichier Javascript où l&apos;on peut contrôler ce que l&apos;on partage avec les autres fichiers. 
                Ils nous permettent d&apos;écrire du code privée et de n&apos;exposer que ce qui est nécessaire. Cela nous permet de
                mieux organiser notre code et de le rendre plus facile à maintenir. 
            </p>
            <p>
                Créer un module est simple. Vous en utilisez déjà sans le savoir. Chaque fichier Javascript qui est lié au HTML 
                par une balise <IC>{'<script>'}</IC> avec un attribut <IC>{'type="module"'}</IC> est un module.
            </p>
            <CodeBlock language="html">{mod}</CodeBlock>
        </section>

        <section>
            <h2>Exporter des éléments</h2>
            <p>
                Pour partager des éléments d&apos;un module à un autre, on utilise le mot-clé <IC>export</IC>. On peut exporter
                des variables, des fonctions et même des objets. Pour ce faire, on ajoute le mot-clé <IC>export</IC> devant la
                déclaration de l&apos;élément à exporter. Voici un exemple:
            </p>
            <CodeBlock language="js">{exprt}</CodeBlock>
            <p>
                Comme l&apos;exemple ci-dessus le démontre, on peut exporter plusieurs éléments dans un même fichier. Il est fréquent
                de le faire, donc n&apos;hésitez pas à le faire.
            </p>
            <p>
                On peut aussi exporter les éléments à la fin du fichier au lieu de les exporter directement dans leur déclaration.
                Pour y arriver, on créera un bloc d&apos;exportation à la fin du fichier. Voici un exemple:
            </p>
            <CodeBlock language="js">{exprt2}</CodeBlock>
        </section>

        <section>
            <h2>Importer des éléments</h2>
            <p>
                Pour importer des éléments d&apos;un autre module, on utilise le mot-clé <IC>import</IC>. On importera les éléments
                voulu dans le haut de notre fichier Javascript, similaire à l&apos;importation de classes ou fonctions 
                avec <IC>#include</IC>, <IC>using</IC> et <IC>import</IC> dans les langages C, C# et Java respectivement. Voici un 
                exemple:
            </p>
            <CodeBlock language="js">{imprt}</CodeBlock>
            <p>
                Comme l&apos;exemple ci-dessus le démontre, pour importer des éléments d&apos;un autre module, on doit les 
                spécifier entre les accolades <IC>{'{}'}</IC> après le mot-clé <IC>import</IC>. On doit aussi spécifier le chemin
                relatif du fichier à importer après le mot-clé <IC>from</IC>.
            </p>
            <p>
                Comme on peut le voir, on peut aussi importer plusieurs éléments d&apos;un même fichier. Il faut simplement 
                les séparer par des virgules. On peut aussi importer un élément avec un autre nom en utilisant le 
                mot-clé <IC>as</IC> comme ceci:
            </p>
            <CodeBlock language="js">{as}</CodeBlock>
            <p>
                Cela nous permet de renommer l&apos;élément importé pour qu&apos;il soit plus clair dans notre code ou encore pour 
                éviter des conflits de nommage.
            </p>
        </section>

        <section>
            <h2>Nouveauté</h2>
            <p>
                Les modules tel que démontré dans cette page sont relativement récent. Ils ont été introduit dans la version 
                ES6 de Javascript, en 2015, mais ont été considéré comme largement supporté par tous les navigateurs qu&apos;après 
                les années 2020. Ils sont basé sur un historique très intéressant de tehcnologies que vous verrez dans des cours 
                futurs. 
            </p>
            <p>
                Bien que plusieurs morceaux de code en ligne utilise encore l&apos;ancienne façon de faire, sans les modules, je 
                vous demande de toujours les utiliser dans vos projets.
            </p>
        </section>
    </>
}