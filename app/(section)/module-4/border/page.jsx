import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import { WebExample, Code } from '@/components/WebExample'; 

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Bordures",
    description: "Présentation de la propriété CSS permettant de modifier les bodures d'un élément HTML.",
    keywords: ["css", "border", "bordure", "style", "épaisseur"],
    group: "notes"
}

const borderHtml = 
`<p class="solide"> Bordure solide </p>
<p class="point"> Bordure point </p>
<p class="tiret"> Bordure tiret </p>
<p class="double"> Bordure double </p>
<p class="groove"> Bordure 3D (1) </p>
<p class="ridge"> Bordure 3D (2) </p>
<p class="inset"> Bordure 3D (3) </p>
<p class="outset"> Bordure 3D (4) </p>`;

const borderCss = 
`p.solide {
    border: 3px solid #000;
}

p.point {
    border: 3px dotted #000;
}

p.tiret {
    border: 3px dashed #000;
}

p.double {
    border: 3px double #000;
}

p.groove {
    border: 5px groove #999;
}

p.ridge {
    border: 5px ridge #999;
}

p.inset {
    border: 5px inset #999;
}

p.outset {
    border: 5px outset #999;
}`;

const borderFunkyHtml = 
`<p class="speciale"> Bordure &quot;spéciale&quot; </p>`;

const borderFunkyCss = 
`.speciale {
    border-top: 2px solid #F00;
    border-right: 4px groove #0F0;
    border-bottom: 6px dashed #EE0;
    border-left: 8px dotted #00F;
}`;

const borderUnderlineHtml =
`<h1 class="souligner">Beau titre souligné</h1>`;

const borderUnderlineCss =
`.souligner {
    border-bottom: 2px solid #000;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Propriétés d&apos;une bordure</h2>
            <p>
                La bordure d&apos;un élémemt HTML possède toujours 3 propriétés distinctes, soit son épaisseur, son style et sa couleur.
            </p>
            <dl>
                <dt>Épaisseur</dt>
                <dd>
                    C&apos;est essentiellement la taille de la bordure. On lui donnera une taille en pixel (<IC>px</IC>) pour le moment.
                </dd>

                <dt>Style</dt>
                <dd>
                    C&apos;est le format visuel de la bordure. Il existe plusieurs formats, en voici la liste:
                    <ul>
                        <li>
                            <IC>none</IC> / <IC>hidden</IC> : Aucune bordure visible
                        </li>
                        <li>
                            <IC>dotted</IC> : Bordure pointillé
                        </li>
                        <li>
                            <IC>dashed</IC> : Bordure en tirets
                        </li>
                        <li>
                            <IC>solid</IC> : Bordure normale
                        </li>
                        <li>
                            <IC>double</IC> : Bordure double
                        </li>
                        <li>
                            <IC>groove</IC> / <IC>ridge</IC> : Bordure 3D
                        </li>
                        <li>
                            <IC>inset</IC> / <IC>outset</IC> : Autre bordure 3D
                        </li>
                    </ul>
                </dd>

                <dt>Couleur</dt>
                <dd>
                    La couleur de la bordure. Vous pouvez utiliser les formats des couleurs que nous avons vu précédement ici.
                </dd>
            </dl>
        </section>

        <section>
            <h2>Propriété générique</h2>
            <p>
                Pour spécifier une bordure à un élément, vous utiliserez généralement la propriété <IC>border</IC>. Avec cette 
                propriété, nous pouvons spécifier l&apos;épaisseur, le style et la couleur de la bordure dans la même propriété.
            </p>
            <WebExample title="Ajout de bordure sur des éléments HTML">
                <Code language="html">{borderHtml}</Code>
                <Code language="css">{borderCss}</Code>
            </WebExample>
            <ColoredBox title="À noter: ">
                Il existe d&apos;autres façons de manipuler les bordures, comme avec les 
                propriétés <IC>border‑width</IC>, <IC>border‑style</IC> et <IC>border‑color</IC>. Il est effectivement possible de manipuler 
                l&apos;épaisseur, le style et la couleur des bordures indépendamment avec ces propriétés. Nous préfèrerons toutefois utiliser la 
                propriété <IC>border</IC> puisqu&apos;elle est plus courte à écrire.
            </ColoredBox>
        </section>

        <section>
            <h2>Bordures séparées</h2>
            <p>
                Il est possible d&apos;utiliser les 
                propriétés <IC>border‑top</IC>, <IC>border‑right</IC>, <IC>border‑bottom</IC> et <IC>border‑right</IC> pour modifier la 
                bordure d&apos;un côté spécifique d&apos;un élément. Il est donc possible de mettre une bordure différente à chaque côté de notre 
                élément.
            </p>
            <WebExample title="Bordure différente de chaque côté d'un élément HTML">
                <Code language="html">{borderFunkyHtml}</Code>
                <Code language="css">{borderFunkyCss}</Code>
                <Code language="css" display={false}>{'.speciale { margin: 1rem; padding: 1rem; }'}</Code>
            </WebExample>
            <p>
                Il est aussi possible de mettre une seule bordure avec ces propriétés, ce qui est souvent désiré par les designers 
                graphique.
            </p>
            <WebExample title="Bordure pour un effet de soulignement">
                <Code language="html">{borderUnderlineHtml}</Code>
                <Code language="css">{borderUnderlineCss}</Code>
            </WebExample>
        </section>
    </>
}