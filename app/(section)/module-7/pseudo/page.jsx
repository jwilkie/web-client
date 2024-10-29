import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Pseudo classe",
    description: "Présentation des pseudo classe, des sélecteurs CSS conditionnel qui nous permettent de sélectionner des éléments HTML dépendant de leur état.",
    keywords: ["css", "media", "min-width"],
    group: "notes"
}

const hoverHtml =
`<div class="conteneur"></div>`;

const hoverCss =
`.conteneur {
    width: 5rem;
    height: 5rem;
    background-color: #a00;
}
    
.conteneur:hover {
    background-color: #f77;
}`;

const activeHtml =
`<div class="conteneur"></div>`;

const activeCss =
`.conteneur {
    width: 5rem;
    height: 5rem;
    background-color: #00a;
}
    
.conteneur:active {
    background-color: #77f;
}`;

const checkedHtml =
`<input type="checkbox" class="case-coche">`;

const checkedCss =
`.case-coche {
    margin-left: 0;
}
    
.case-coche:checked {
    margin-left: 5rem;
}`;

const disabledHtml =
`<input type="text" value="Désactivé" disabled class="boite-texte">`;

const disabledCss =
`.boite-texte:disabled {
    border: 3px solid #777;
}`;

const firstlastHtml =
`<ul class="liste">
    <li>Premier</li>
    <li>Deuxième</li>
    <li>Troisième</li>
    <li>Quatrième</li>
    <li>Cinquième</li>
</ul>`;

const firstlastCss =
`.liste li:first-child {
    background-color: #f77;
}
    
.liste li:last-child {
    background-color: #77f;
}`;

const notHtml =
`<ul class="liste">
    <li>Premier</li>
    <li>Deuxième</li>
    <li>Troisième</li>
    <li>Quatrième</li>
    <li>Cinquième</li>
</ul>`;

const notCss =
`.liste li:not(:first-child):not(:last-child) {
    background-color: #7f7;
}`;

export default function Page() {
    return <>
        <section>
            <h2>État du HTML</h2>
            <p>
                Un élément HTML peut se trouver dans plusieurs états et cet état peut changer lors de son interaction avec 
                l&apos;utilisateur et ce, même si aucun Javascript n&apos;est utilisé. Un exemple simple est la case à coché, 
                le <IC>&lt;input&nbsp;type=&quot;checkbox&quot;&gt;</IC>. Ce genre de balise HTML à un état interne pour 
                indiquer si la case est cochée ou non. Plusieurs autres états existes, tel que si un lien a déjà été visité ou  
                non, si la souris est en train de survoler un élément, si un élément est le premier de son parent et plusieurs 
                autres.
            </p>
            <p>
                En CSS, nous pouvons mettre appliquer des règles CSS sur ces états. Essentiellement, mettre du CSS uniquement si 
                l&apos;état d&apos;un élément HTML a une valeur particulière. Pour ce faire, nous utiliserons les pseudo-classes. 
                Les pseudo-classes sont des sélecteurs CSS qui début toujours par le symbole <IC>:</IC>. La page 
                ci-dessous fera une démonstration des pseudo-classes les plus typique, mais vous pouvez trouver la liste 
                complète ici:
            </p>
            <p>
                <a href="https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes">MDN - Pseudo-classes</a>
            </p>
        </section>

        <section>
            <h2>Survol de souris</h2>
            <p>
                Applique du CSS si l&apos;élément est survolé par la souris.
            </p>
            <WebExample>
                <Code language="html">{hoverHtml}</Code>
                <Code language="css">{hoverCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Clique de souris</h2>
            <p>
                Applique du CSS si l&apos;élément est présentement cliqué par la souris.
            </p>
            <WebExample>
                <Code language="html">{activeHtml}</Code>
                <Code language="css">{activeCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Case coché</h2>
            <p>
                Applique du CSS si l&apos;élément est une case à coché ou un bouton radio qui est coché.
            </p>
            <WebExample>
                <Code language="html">{checkedHtml}</Code>
                <Code language="css">{checkedCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Input désactivé</h2>
            <p>
                Applique du CSS si l&apos;élément est un input qui a la propriété <IC>disabled</IC>.
            </p>
            <WebExample>
                <Code language="html">{disabledHtml}</Code>
                <Code language="css">{disabledCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Premier ou dernier élément</h2>
            <p>
                Applique du CSS si l&apos;élément est le premier ou le dernier dans son parent.
            </p>
            <WebExample>
                <Code language="html">{firstlastHtml}</Code>
                <Code language="css">{firstlastCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Inverser la sélection</h2>
            <p>
                Applique du CSS si l&apos;élément ne respecte pas la condition interne.
            </p>
            <WebExample>
                <Code language="html">{notHtml}</Code>
                <Code language="css">{notCss}</Code>
            </WebExample>
        </section>
    </>
}