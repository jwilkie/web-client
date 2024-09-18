import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import { WebExample, Code } from '@/components/WebExample'; 

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Centrer un élément horizontalement",
    description: "Présentation d'un truc CSS pour centrer un élément en bloc dans son conteneur.",
    keywords: ["css", "display", "block", "centrer", "center"],
    group: "hack"
}

const displayHtml = 
`<header>
    <h1 class="centrer">Titre de la page</h1>
    <p class="centrer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis 
        condimentum massa mi, nec euismod est tempor nec. Suspendisse 
        finibus interdum luctus.
    </p>
<header>`;

const displayCss = 
`.centrer {
    width: 200px;
    margin: 0 auto;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Centrer avec le margin</h2>
            <p>
                Centrer un élément en CSS est généralement un peu difficile. Bien que cela semble simple, il y a plusieurs variables 
                qui peuvent faire changer la méthode utilisé pour centrer un élément. Si vous voulez centrer un élément horizontalement,
                la technique du margin à <IC>auto</IC> peut vous être utile.
            </p>
            <WebExample title="Ajout de bordure sur des éléments HTML">
                <Code language="html">{displayHtml}</Code>
                <Code language="css">{displayCss}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                La technique expliqué ci-dessus fonctionne uniquement si l&apos;élément que le veut centrer et son parent sont affiché en bloc 
                et que l&apos;élément que l&apos;on veut centrer possède une largeur fixe défini par la propriété <IC>width</IC>. Il est donc 
                possible que vous ayez à changer le type de certains éléments avec la propriété <IC>display</IC> pour que le tout fonctionne.
            </ColoredBox>
        </section>
        
        <section>
            <h2>Margin automatique</h2>
            <p>
                Lorsque nous utilisons la propriété <IC>margin</IC> en CSS, nous pouvons lui donner des valeurs particulière. L&apos;une de 
                ces valeurs est <IC>auto</IC>. Une valeur <IC>auto</IC> de margin veut dire que la marge prendra le restant de l&apos;espace 
                disponible de son conteneur. C&apos;est donc grace à cette valeur que la technique pour centrer fonctionne. Si on mets la valeur du 
                margin à gauche et à droite à <IC>auto</IC>, le margin se sépare l&apos;espace restant, centrant l&apos;élément au milieu. Pour 
                que cette valeur fonctionne, il faut toutefois répondre à 2 critères:
            </p>
            <ul>
                <li>
                    L&apos;élément sur lequel on met le margin et son parent doivent être affiché en <IC>block</IC>.
                </li>
                <li>
                    L&apos;élément sur lequel on met le margin doit avoir une largeur fixe, donc un <IC>width</IC> défini dans le CSS.
                </li>
            </ul>
            <p>
                Lorsqu&apos;on veut centrer un élément avec la technique ci-dessus, il faut donc respecter ces 2 critères.
            </p>
        </section>
    </>
}