import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { FileExplorer, Folder, File } from '@/components/FileExplorer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction au stylage",
    description: "Présentation du CSS, le langage de stylage des pages web.",
    keywords: ["css", "liaison", "lier", "link"],
    group: "notes"
}

const link = 
`...

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de page</title>

    <!-- Fichier CSS -->
    <link rel="stylesheet" href="/css/nom-de-fichier.css">
</head>

...`;

export default function Page() {
    return <>
        <section>
            <h2>Cascading Style Sheet</h2>
            <p>
                Le CSS est un langage de style servant à décrire comment les éléments d&apos;une page HTML devrait être affiché. 
                C&apos;est l&apos;un des 3 langages principal du Web, avec le HTML et le Javascript. Ce langage nous permettra de créer 
                des &quot;feuilles de styles&quot; que nous pourrons appliquer à notre HTML pour le rendre plus beau. Nous commencerons 
                donc à avoir des pages web beaucoup plus intéressantes et attrayantes.
            </p>
        </section>

        <section>
            <h2>Création d&apos;un fichier CSS</h2>
            <p>
                Pour créer un fichier CSS, vous pouvez le faire comme pour un fichier HTML.
            </p>
            <ul>
                <li>
                    En créant un fichier texte dont vous renommez l&apos;extension à <IC>.css</IC> dans votre explorateur de fichier.
                </li>
                <li>
                    En créant un fichier CSS directement à partir de votre éditeur de code.
                </li>
            </ul>
            <p>
                Peu importe de quelle façon vous créez le fichier, vous devez le mettre dans le dossier <IC>css</IC> de votre 
                projet Web. Cela nous permettra de garder notre code de façon plus organisée.
            </p>
            <FileExplorer>
                <Folder name="nom-du-projet">
                    <Folder name="assets"></Folder>
                    <Folder name="css" highlight></Folder>
                    <Folder name="js"></Folder>
                    <File name="index.html"></File>
                </Folder>
            </FileExplorer>
        </section>

        <section>
            <h2>Lier un fichier CSS</h2>
            <p>
                Une fois votre fichier CSS créé, nous ne pourrons pas immédiatement écrire du code dedans. En effet, il va falloir 
                d&apos;abords indiquer à notre page HTML d&apos;utiliser ce nouveau fichier CSS. Pour ce faire, rendez vous dans le fichier 
                HTML que vous voulez lier avec votre nouveau fichier CSS et ajouter la balise <IC>&lt;link&gt;</IC> dans la 
                balise <IC>&lt;head&gt;</IC> de la page.
            </p>
            <CodeBlock language="html">{link}</CodeBlock>
            <dl>
                <dt><IC>rel</IC></dt>
                <dd>
                    Indique la relation entre le document lié et ce fichier HTML. Dans le cas du CSS, nous le mettrons toujours à 
                    &quot;stylesheet&quot;.
                </dd>
                <dt><IC>href</IC></dt>
                <dd>
                    Indique le chemin vers le fichier CSS que nous désirons lier. Nous utiliserons généralement un chemin relatif 
                    qui pointe dans notre dossier <IC>css</IC>.
                </dd>
            </dl>
            <p>
                Dans les pages suivantes, nous verrons comment écrire le code CSS pour permettre à notre navigateur d&apos;afficher 
                de plus belle pages.
            </p>
        </section>
    </>
}