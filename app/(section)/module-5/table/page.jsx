import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import { WebExample, Code } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Styler les tableaux",
    description: "Présentation des différentes propriétés CSS pour styler les tableaux.",
    keywords: ["css", "table", "caption", "collapse", "espacement"],
    group: "notes"
}

const collapseHtml = 
`<table class="seperate">
    <caption>Seperate</caption>
    <tr> <td>1x1</td><td>1x2</td><td>1x2</td> </tr>
    <tr> <td>2x1</td><td>2x2</td><td>2x2</td> </tr>
    <tr> <td>3x1</td><td>3x2</td><td>3x2</td> </tr>
</table>

<table class="collapse">
    <caption>Collapse</caption>
    <tr> <td>1x1</td><td>1x2</td><td>1x2</td> </tr>
    <tr> <td>2x1</td><td>2x2</td><td>2x2</td> </tr>
    <tr> <td>3x1</td><td>3x2</td><td>3x2</td> </tr>
</table>`;

const collapseCss = 
`table, td {
    border: 1px solid #000;
}

.seperate {
    border-collapse: seperate;
}

.collapse {
    border-collapse: collapse;
}`;

const spacingHtml = 
`<table class="une-valeur">
    <caption>Une valeur</caption>
    <tr> <td>1x1</td><td>1x2</td><td>1x2</td> </tr>
    <tr> <td>2x1</td><td>2x2</td><td>2x2</td> </tr>
    <tr> <td>3x1</td><td>3x2</td><td>3x2</td> </tr>
</table>

<table class="deux-valeurs">
    <caption>Deux valeurs</caption>
    <tr> <td>1x1</td><td>1x2</td><td>1x2</td> </tr>
    <tr> <td>2x1</td><td>2x2</td><td>2x2</td> </tr>
    <tr> <td>3x1</td><td>3x2</td><td>3x2</td> </tr>
</table>`;

const spacingCss = 
`table, td {
    border: 1px solid #000;
}

.une-valeur {
    border-spacing: 1rem;
}

.deux-valeurs {
    border-spacing: 2rem 1rem;
}`;

const captionHtml = 
`<table class="haut">
    <caption>En haut</caption>
    <tr> <td>1x1</td><td>1x2</td><td>1x2</td> </tr>
    <tr> <td>2x1</td><td>2x2</td><td>2x2</td> </tr>
    <tr> <td>3x1</td><td>3x2</td><td>3x2</td> </tr>
</table>

<table class="bas">
    <caption>En bas</caption>
    <tr> <td>1x1</td><td>1x2</td><td>1x2</td> </tr>
    <tr> <td>2x1</td><td>2x2</td><td>2x2</td> </tr>
    <tr> <td>3x1</td><td>3x2</td><td>3x2</td> </tr>
</table>`;

const captionCss = 
`.haut {
    caption-side: top;
}

.bas {
    caption-side: bottom;
}`;

const cssHidden = 
`body {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
}
    
table, td {
    border: 1px solid #000;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Fusionner les bordures</h2>
            <p>
                Si nous ajoutons des bordures aux cellules d'un tableau, nous verrons que chaque cellule aura sa propre bordure. 
                Dans plusieurs cas, on voudra fusionner ces bordures pour empêcher un dédoublement des bordures entre les 
                cellules. Pour ce faire, nous utiliserons la propriété <IC>border-collapse</IC>.
            </p>
            <p>
                Cette propriété accepte 2 valeurs, soit <IC>seperate</IC> (valeur par défaut) et <IC>collapse</IC>. Voici un 
                exemple:
            </p>
            <WebExample>
                <Code language="html">{collapseHtml}</Code>
                <Code language="css">{collapseCss}</Code>
                <Code language="css" display={false}>{cssHidden}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Espacement</h2>
            <p>
                Les cellules <IC>&lt;td&gt;</IC> et <IC>&lt;th&gt;</IC> ne fonctionne pas de la même façon qu'un élément 
                régulier dans une page web. En effet, la propriété <IC>margin</IC> n'a aucun effet sur eux. Si vous voulez 
                mettre de l'espacement entre les cellules d'un tableau, vous devez plutôt utiliser la 
                propriété <IC>border-spacing</IC>.
            </p>
            <p>
                Cette propriété peut s'utiliser avec une valeur pour définir l'espacement de tous les côtés ou avec deux valeurs 
                pour définir l'espacement gauche/droite et l'espacement haut/bas séparément. On l'utilise de la façon suivante:
            </p>
            <WebExample>
                <Code language="html">{spacingHtml}</Code>
                <Code language="css">{spacingCss}</Code>
                <Code language="css" display={false}>{cssHidden}</Code>
            </WebExample>
            <ColoredBox title="À noter">
                Bien que le margin ne fonctionne pas dans un tableau, le padding, lui, est disponible. Bref, si vous voulez 
                mettre de l'espacement à l'intérieur d'une cellule, vous pouvez le faire avec la propriété <IC>padding</IC>.
            </ColoredBox>
            <ColoredBox title="Attention">
                La propriété <IC>border-spacing</IC> peut uniquement fonctionner si les bordures du tableau sont séparé. Bref, 
                si vous tentez de mettre un <IC>border-spacing</IC> sur un tableau qui a le <IC>border-collapse</IC> à la 
                valeur <IC>collapse</IC>, il ne se passera rien.
            </ColoredBox>
        </section>

        <section>
            <h2>Position du titre</h2>
            <p>
                Le titre ou la légende d'un tableau se retrouve dans la balise <IC>&lt;caption&gt;</IC>. Cette balise doit 
                toujours être la première dans un <IC>&lt;table&gt;</IC> si elle est présente et s'affiche toujours en haut du 
                tableau par défaut. Il est toutefois possible de déplacer ce titre en dessous du tableau à l'aide de la 
                propriété <IC>caption-side</IC>.
            </p>
            <p>
                Cette propriété accepte seulement 2 valeurs différentes, soit <IC>top</IC> (valeur par défaut) 
                ou <IC>bottom</IC>. Voici comment l'utiliser:
            </p>
            <WebExample>
                <Code language="html">{captionHtml}</Code>
                <Code language="css">{captionCss}</Code>
                <Code language="css" display={false}>{cssHidden}</Code>
            </WebExample>
        </section>
    </>
}