import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Mettre le footer en bas",
    description: "Présentation d'une technique CSS pour forcer le footer en bas de la page lorsque le contenu n'est pas assez grand.",
    keywords: ["css", "footer", "espace", "flex", "bas", "bottom"],
    group: "hack"
}

const footerExHtml =
`<header>
    <h1>Titre du site web</h1>
</header>

<main>
    Très petit contenu
</main>

<footer>
    &copy; Jonathan Wilkie
</footer>`;

const footerExCss =
`body {
    height: 20rem;
}

header, footer {
    padding: 1rem;
    background-color: #9ec3ff;
}

main {
    padding: 1rem;
}

h1 {
    margin: 0;
}`;

const footerHtml =
`<header>
    <h1>Titre du site web</h1>
</header>

<main>
    Très petit contenu
</main>

<footer>
    &copy; Jonathan Wilkie
</footer>`;

const footerCss =
`body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
    
main {
    flex: 1;
}`;

const footerCssHidden = 
`body {
    box-sizing: border-box;
    height: 20rem;
}

header, footer {
    padding: 1rem;
    background-color: #9ec3ff;
}

h1 {
    margin: 0;
}

main {
    padding: 1rem;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Problème</h2>
            <p>
                Lorsque le contenu d&apos;une page n&apos;est pas très volumineux, on fini souvent avec le problème suivant:
            </p>
            <WebExample>
                <Code language="html" display={false}>{footerExHtml}</Code>
                <Code language="css" display={false}>{footerExCss}</Code>
            </WebExample>
            <p>
                Comme vous pouvez le constater, le footer du site web remonte puisqu&apos;il n&apos;y a pas assez de contenu dans le main 
                pour le pousser au bas de la page. Ce n&apos;est pas très beau et on va vouloir régler ce problème.
            </p>
        </section>

        <section>
            <h2>Solution</h2>
            <p>
                La technique présenté ici pour pousser le footer au bas de l&apos;écran utilise la disposition flex. Le but est de 
                redistribué l&apos;espace vide qui est en bas de la page et de le mettre à la fin du <IC>&lt;main&gt;</IC>. Voici comment 
                faire:
            </p>
            <WebExample>
                <Code language="html">{footerHtml}</Code>
                <Code language="css">{footerCss}</Code>
                <Code language="css" display={false}>{footerCssHidden}</Code>
            </WebExample>
            <p>
                Cette technique fonctionne de façon intéressante:
            </p>
            <ol>
                <li>
                    On place le <IC>&lt;header&gt;</IC>, <IC>&lt;main&gt;</IC> et <IC>&lt;footer&gt</IC>; sur un axe flex vertical.
                </li>
                <li>
                    On s&apos;assure que le body prends toute la page avec la propriété <IC>min-height: 100vh;</IC>.
                </li>
                <li>
                    On redistribue l&apos;espace du bas de la page à la fin du main avec la propriété <IC>flex: 1;</IC>
                </li>
            </ol>
        </section>

        <section>
            <h2>Gestion de l&apos;espace vide</h2>
            <p>
                La gestion de l&apos;espace vide dans une disposition flex est complexe et ne sera pas présenté dans ce cours. 
                Toutefois, si le sujet vous intéresse, ce sont les 
                propriétés <IC>flex-growth</IC>, <IC>flex-shrink</IC> et <IC>flex-basis</IC> qui contrôle le tout. 
            </p>
            <p>
                Dans notre cas, nous utilisons la propriété <IC>flex</IC> qui est un raccourci de ces 3 propriétés pour mettre 
                le <IC>flex-growth</IC> de notre <IC>&lt;main&gt;</IC> à <IC>1</IC>, ce qui lui fait prendre tout l&apos;espace 
                vide disponible et pousse, par conséquant, le <IC>&lt;footer&gt</IC> en bas de l&apos;écran.
            </p>
        </section>
    </>
}