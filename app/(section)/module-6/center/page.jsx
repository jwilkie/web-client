import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Centrer avec flex",
    description: "Présentation d'une technique pour centrer un élément dans un autre autant verticalement que horizontalement.",
    keywords: ["css", "flex", "center", "align-items", "justify-content"],
    group: "hack"
}

const centerHtml =
`<div class="conteneur">
    <div class="centrer">
        Je suis au centre!
    </div>
</div>`;

const centerCss =
`.conteneur {
    /* Conteneur d'une certaine hauteur */
    height: 10rem;

    /* Technique pour centrer */
    display: flex;
    align-items: center;
    justify-content: center;
}`;

const centerCssHidden = 
`.conteneur {
    border: 3px solid #000;
    background-color: #ddd;
}

.centrer {
    padding: 1rem;
    border: 3px solid #633027;
    background-color: #e8aa8e;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Problème et solution</h2>
            <p>
                Nous avons déjà vu comment centrer un élément horizontalement dans un conteneur à l&apos;aide de la technique 
                du <IC>margin: 0 auto;</IC>. Toutefois, si nous désirons aussi centrer un élément verticalement, cette technique 
                ne nous sera pas utile. Nous utiliserons donc une technique qui utilise la disposition flex.
            </p>
            <p>
                La technique est simple: utiliser les propriétés <IC>align-items</IC> et <IC>justify-content</IC> pour forcer 
                un élément au centre d&apos;un autre. Voici comment faire:
            </p>
            <WebExample>
                <Code language="html">{centerHtml}</Code>
                <Code language="css">{centerCss}</Code>
                <Code language="css" display={false}>{centerCssHidden}</Code>
            </WebExample>
            <ColoredBox title="À noter: ">
                Pour que cette technique fonctionne, assurez-vous que votre conteneur a une hauteur plus grande que le contenu.
                Il ne sert à rien de centrer un contenu verticalement si celui-ci a la même hauteur que conteneur.
            </ColoredBox>
        </section>
    </>
}