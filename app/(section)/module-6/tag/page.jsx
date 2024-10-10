import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Balise non sémantique",
    description: "Présentation du span et du div, 2 balises HTML non sémantiques très utile pour le CSS.",
    keywords: ["html", "css", "span", "div", "groupage"],
    group: "notes"
}

const spanHtml = 
`<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit. <span class="rouge">Praesent vitae nulla vel ante</span> eleifend 
    blandit ut in metus. In ut arcu nec enim placerat finibus. Vestibulum 
    malesuada <span class="bleu">augue id gravida semper </span>. Curabitur 
    mattis odio in eros pellentesque fermentum.
</p>`;

const spanCss = 
`.rouge {
    color: #F00;
}

.bleu {
    color: #00F;
}`;

const divHtml = 
`<section>
    <h2>Un titre</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam 
        consequuntur minima quasi ea omnis ullam cupiditate cum, earum libero 
        unde natus hic. Similique, et non! Alias odio sunt facere 
        reprehenderit.
    </p>

    <div class="attention">
        <div>Attention: </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, 
            earum perferendis, placeat in consequatur doloribus aperiam est 
            voluptates eligendi molestiae quia dolorem labore eum distinctio 
            inventore exercitationem voluptatem. Ipsam, quaerat?
        </p>
    </div>
</section>`;

const divCss = 
`.attention {
    padding: .5rem;
    border: 3px solid #a00;
    background-color: #fa7e6e;
}

.attention div {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: .5rem;
}
    
.attention p {
    margin: 0;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Regrouper des éléments</h2>
            <p>
                Il arrive souvent que l&apos;on veuille regrouper des éléments ensemble dans le HTML pour pouvoir mettre du CSS sur 
                e groupe. Bien entendu, lorsque cela est possible, on peut utiliser les balises sémantiques pour arriver à nos 
                besoins. Par exemple, nous pourrions utiliser une balise <IC>&lt;section&gt;</IC> pour regrouper des éléments 
                et y appliquer du CSS. Toutefois, il arrive que les balises sémantiques n&apos;ont pas leur place dans votre 
                groupage d&apos;éléments. Lorsque c&apos;est le cas, nous utilisons plutôt les balises non sémantiques, soit 
                le <IC>&lt;div&gt;</IC> et le <IC>&lt;span&gt;</IC>.
            </p>
        </section>

        <section>
            <h2>Span</h2>
            <p>
                Le <IC>&lt;span&gt;</IC> est une balise qui s&apos;affiche avec le mode <IC>inline</IC> par défaut. Nous l&apos;utilisons donc 
                souvent pour regrouper des éléments inline ou textuel. Même s&apos;il est possible de changer son mode d&apos;affichage 
                avec le CSS, nous l&apos;utiliserons par convention uniquement en affichage <IC>inline</IC>.
            </p>
            <WebExample>
                <Code language="html">{spanHtml}</Code>
                <Code language="css">{spanCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Div</h2>
            <p>
                Le <IC>&lt;div&gt;</IC> est une balise qui s&apos;affiche avec le mode <IC>block</IC> par défaut. On l&apos;utilise donc 
                généralement pour regrouper des éléments sous forme de boîtes. Même s&apos;il est possible de changer son mode 
                d&apos;affichage avec le CSS, nous l&apos;utiliserons par convention uniquement en affichage <IC>block</IC>, <IC>flex</IC> ou 
                encore <IC>grid</IC>.
            </p>
            <p>
                Cette balise est très pratique pour regrouper des éléments ensemble pour y mettre du CSS, comme de la façon 
                suivante:
            </p>
            <WebExample>
                <Code language="html">{divHtml}</Code>
                <Code language="css">{divCss}</Code>
            </WebExample>
        </section>
    </>
}