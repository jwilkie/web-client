import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import { WebExample, Code } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Styler les listes",
    description: "Présentation des différentes propriétés CSS pour styler les listes ordonnées ou non ordonnées.",
    keywords: ["css", "ul", "ol", "li", "marqueur", "puce"],
    group: "notes"
}

const typeHtml = 
`<ul>
    <li>Bonjour</li>
    <li>Salut</li>
    <li>Allo</li>
</ul>

<ol>
    <li>Faire ceci</li>
    <li>Faire cela</li>
    <li>Faire autre chose</li>
</ol>`;

const typeCss = 
`ul {
    list-style-type: square;
}
    
ol {
    list-style-type: lower-alpha;
}`;

const typeCssHidden = 
`body {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
    
ul, ol {
    padding: 0;
}`;

const imageHtml = 
`<ul>
    <li>Bulbasaur</li>
    <li>Ivysaur</li>
    <li>Venosaur</li>
</ul>`;

const imageCss = 
`ul {
    list-style-image: url('/web-client/img/pokeball.svg');
}`;

const posHtml = 
`<ul class="outside">
    <li>Camion</li>
    <li>Train</li>
    <li>Avion</li>
</ul>

<ul class="inside">
    <li>Camion</li>
    <li>Train</li>
    <li>Avion</li>
</ul>`;

const posCss = 
`.outside {
    list-style-position: outside;
}

.inside {
    list-style-position: inside;
}`;

const posCssHidden = 
`body {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
    
ul {
    background-color: #a8e6b8;
}
    
li {
    background-color: #c8d0e8;
}`;

const styleHtml = 
`<ul>
    <li>Charmander</li>
    <li>Charmeleon</li>
    <li>Charizard</li>
</ul>`;

const styleCss = 
`ul {
    list-style: disc inside url('/web-client/img/pokeball.svg');
}`;

export default function Page() {
    return <>
        <section>
            <h2>Type de marqueur</h2>
            <p>
                Le marqueur est la puce ou le nombre qui est utilisé pour identifier chaque élément dans une liste ordonnée ou 
                non ordonnée. Pour chaque type de liste, on peut changer ce marqueur pour y mettre autre chose. On pourrait 
                effectivement changer la puce pour y mettre un carré au lieu d&apos;un cercle ou encore numéroté une liste ordonnée 
                avec des lettres au lieu des chiffres.
            </p>
            <p>
                Pour y arriver, nous utiliserons la propriété CSS <IC>list-style-type</IC>.
            </p>
            <WebExample>
                <Code language="html">{typeHtml}</Code>
                <Code language="css">{typeCss}</Code>
                <Code language="css" display={false}>{typeCssHidden}</Code>
            </WebExample>
            <ColoredBox title="À noter: ">
                Si vous désirez ne pas afficher de marqueurs, vous pouvez utiliser la valeur <IC>none</IC>. Cette valeur est 
                très pratique dans les listes où les marqueurs ne sont pas utilent, comme dans plusieurs menu de navigation ou 
                dans une liste hautement stylé.
            </ColoredBox>
            <p>
                Pour voir la liste complète des valeurs disponibles, vous pouvez consulter le site web suivant:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type" target="_blank">
                    MDN - list-style-type
                </a>
            </p>
        </section>

        <section>
            <h2>Image comme marqueur</h2>
            <p>
                Pour les balises <IC>&lt;ul&gt;</IC>, il est parfois voulu de mettre une image au lieu de mettre l&apos;une des puces 
                typiques du navigateur. Pour ce faire, nous utiliserons la propriété CSS <IC>list-style-image</IC>.
            </p>
            <WebExample>
                <Code language="html">{imageHtml}</Code>
                <Code language="css">{imageCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Position du marqueur</h2>
            <p>
                Par défaut, les marqueurs dans une liste se retrouve à l&apos;extérieur de la balise <IC>&lt;li&gt;</IC>. Il sont par 
                défaut placé dans le padding de la balise <IC>&lt;ul&gt;</IC> ou <IC>&lt;ol&gt;</IC>. Nous pouvons toutefois 
                changer ce comportement par défaut avec le propriété <IC>list‑style‑position</IC>.
            </p>
            <p>
                Les 2 valeurs acceptées sont <IC>outside</IC> (valeur par défaut) ou <IC>inside</IC>. La valeur inside rend le 
                marqueur plus facile à déplacer, mais complique l&apos;alignement du texte si celui-ci s&apos;étire sur plusieurs lignes.
            </p>
            <WebExample>
                <Code language="html">{posHtml}</Code>
                <Code language="css">{posCss}</Code>
                <Code language="css" display={false}>{posCssHidden}</Code>
            </WebExample>
            <ColoredBox title="À noter">
                Dans l&apos;exemple ci-dessus, la zone verte est le padding du <IC>&lt;ul&gt;</IC> et la zone bleu est le contenu 
                    du <IC>&lt;li&gt;</IC>.
            </ColoredBox>
        </section>

        <section>
            <h2>Propriété tout-en-un</h2>
            <p>
                En général, en CSS, il existe une propriété tout-en-un pour configurer différents types d&apos;élément. C&apos;est le cas 
                des listes. Il existe donc une propriété nous permettant de spécifier le type, l&apos;image et la position du 
                marqueur dans une seule et même ligne de CSS. Cette propriété est <IC>list-style</IC>.
            </p>
            <p>
                Voici comment l&apos;utiliser:
            </p>
            <WebExample>
                <Code language="html">{styleHtml}</Code>
                <Code language="css">{styleCss}</Code>
            </WebExample>
            <p>
                Vous pouvez avoir plus d&apos;information sur cette propriété ici:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style" target="_blank">
                    MDN - list-style
                </a>
            </p>
        </section>
    </>
}