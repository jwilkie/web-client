import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { FileExplorer, Folder, File } from '@/components/FileExplorer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction au Javascript",
    description: "Présentation du Javascript, le langage de programmation des pages web.",
    keywords: ["js", "liaison", "lier", "script"],
    group: "notes"
}

const script = 
`...

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre de page</title>

    <!-- Fichier CSS -->
    <!-- ... -->
    
    <!-- Fichier JS -->
    <script type="module" src="/js/nom-de-fichier.js"></script>
</head>

...`;

export default function Page() {
    return <>
        <section>
            <h2>Javascript</h2>
            <p>
                Javascript est le langage de programmation des pages web. Il nous permet de rendre les pages web plus dynamiques en
                ajoutant du code qui s&apos;exécute lorsque l&apos;utilisateur interagit avec la page. Par exemple, nous pouvons 
                utiliser Javascript pour afficher des messages d&apos;erreur lorsque l&apos;utilisateur remplit un formulaire, pour 
                afficher des images en diaporama, pour détecter le clic d&apos;un bouton et beaucoup plus.
            </p>
        </section>

        <section>
            <h2>Création d&apos;un fichier Javascript</h2>
            <p>
                Pour créer un fichier Javascript, vous pouvez le faire comme pour un fichier HTML.
            </p>
            <ul>
                <li>
                    En créant un fichier texte dont vous renommez l&apos;extension à <IC>.js</IC> dans votre explorateur de fichier.
                </li>
                <li>
                    En créant un fichier <IC>.js</IC> directement à partir de votre éditeur de code.
                </li>
            </ul>
            <p>
                Peu importe de quelle façon vous créez le fichier, vous devez le mettre dans le dossier <IC>js</IC> de votre 
                projet Web. Cela nous permettra de garder notre code de façon plus organisée.
            </p>
            <FileExplorer>
                <Folder name="nom-du-projet">
                    <Folder name="assets"></Folder>
                    <Folder name="css"></Folder>
                    <Folder name="js" highlight></Folder>
                    <File name="index.html"></File>
                </Folder>
            </FileExplorer>
        </section>

        <section>
            <h2>Lier un fichier Javascript</h2>
            <p>
                Une fois votre fichier Javascript est créé, nous ne pourrons pas immédiatement écrire du code dedans. En effet, il va falloir 
                d&apos;abords indiquer à notre page HTML d&apos;utiliser ce nouveau fichier <IC>.js</IC>. Pour ce faire, rendez vous dans le fichier 
                HTML que vous voulez lier avec votre nouveau fichier Javascript et ajouter la balise <IC>&lt;script&gt;</IC> dans la 
                balise <IC>&lt;head&gt;</IC> de la page.
            </p>
            <CodeBlock language="html">{script}</CodeBlock>
            <dl>
                <dt><IC>type=&quot;module&quot;</IC></dt>
                <dd>
                    Indique que le fichier Javascript que nous voulons lier est un module. Tous vos fichiers Javascript devraient être
                    des modules pour des raisons de performance, de sécurité et maintenance.
                </dd>
                <dt><IC>src</IC></dt>
                <dd>
                    Indique le chemin vers le fichier Javascript que nous désirons lier. Nous utiliserons généralement un chemin relatif 
                    qui pointe dans notre dossier <IC>js</IC>.
                </dd>
            </dl>
            <p>
                Dans les pages suivantes, nous verrons comment écrire le code Javascript pour permettre à notre site web de devenir plus
                interactif avec nos utilisateurs.
            </p>
        </section>
    </>
}