import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Superposition des éléments",
    description: "Présentation du positionnement, une propriété CSS pour mettre des éléments les uns par dessus les autres.",
    keywords: ["css", "position", "static", "relative", "absolute", "fixed", "sticky"],
    group: "notes"
}

const staticHtml = 
`<p> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aperiam. 
    Quibusdam eius quod sit fuga nulla ipsam officia accusantium minus nam, 
    repellat nostrum quisquam a animi ea. Sunt, cum incidunt.
</p>
<span class="position">Bonjour!</span>`;

const staticCss = 
`.position {
    position: static;
    padding: .5rem;
    background-color: #ccc;
    color: #b22;

    /* Ne fait rien */
    top: 10rem;
}`;

const relativeHtml = 
`<p> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aperiam. 
    Quibusdam eius quod sit fuga nulla ipsam officia accusantium minus nam, 
    repellat nostrum quisquam a animi ea. Sunt, cum incidunt.
</p>
<span class="position">Bonjour!</span>`;

const relativeCss = 
`.position {
    position: relative;
    padding: .5rem;
    background-color: #ccc;
    color: #b22;

    top: -1rem;
    left: 3rem;
}`;

const absoluteHtml = 
`<div class="conteneur">
    <div class="boite rouge">
        Je suis placé en position absolue dans le bas à gauche de la page
    </div>
    <div class="boite bleu">
        Je suis placé dans le flux normal de la page
    </div>
</div>`;

const absoluteCss = 
`.conteneur {
    position: relative;
    height: 8em;
    border: 4px solid #666;
}

.boite {
    padding: 1rem;
    width: 10em;
    color: #fff;
}

.boite.rouge {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #a00;
}

.boite.bleu {
    background-color: #00a;
}`;

const absolute2Html = 
`<div class="conteneur">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
        dolore fuga sapiente sit unde ullam, non, laudantium, repellendus 
        doloribus labore facere? Error dolore sint et veniam quod laudantium 
        velit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque, harum enim maxime ad ipsam debitis porro voluptatum unde nisi 
        nihil exercitationem expedita minus sed delectus fugit soluta facilis 
        laborum. Molestias? Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Maiores dolore fuga sapiente sit unde ullam, non, laudantium, 
        repellendus doloribus labore facere? Error dolore sint et veniam quod 
        laudantium velit illum. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Eaque, harum enim maxime ad ipsam debitis porro 
        voluptatum unde nisi nihil exercitationem expedita minus sed delectus 
        fugit soluta facilis laborum. Molestias?
    </p>
    <div class="boite"></div>
</div>`;

const absolute2Css = 
`.conteneur {
    position: relative;
}

.boite {
    padding: 2rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background-color: #a00;
}`;

const fixedHtml = 
`<div>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
        dolore fuga sapiente sit unde ullam, non, laudantium, repellendus 
        doloribus labore facere? Error dolore sint et veniam quod laudantium 
        velit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque, harum enim maxime ad ipsam debitis porro voluptatum unde nisi 
        nihil exercitationem expedita minus sed delectus fugit soluta facilis 
        laborum. Molestias? Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Maiores dolore fuga sapiente sit unde ullam, non, laudantium, 
        repellendus doloribus labore facere? Error dolore sint et veniam quod 
        laudantium velit illum. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Eaque, harum enim maxime ad ipsam debitis porro 
        voluptatum unde nisi nihil exercitationem expedita minus sed delectus 
        fugit soluta facilis laborum. Molestias?
    </p>
    <div class="boite"></div>
</div>`;

const fixedCss = 
`.boite {
    max-width: 10rem;
    width: 100%;
    height: 5rem;
    background-color: #0a0;

    position: fixed;
    right: 50%;
    top: 2rem;
}`;

const fixedCssHidden = 
`body > div {
    height: 10rem;
    overflow-y: scroll;
}

body > div p {
    max-width: 20rem;
    margin: 0 auto;
}`;

const stickyHtml = 
`<div>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
        dolore fuga sapiente sit unde ullam, non, laudantium, repellendus 
        doloribus labore facere?
    </p>
    <div class="sticky">Sticky</div>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
        dolore fuga sapiente sit unde ullam, non, laudantium, repellendus 
        doloribus labore facere? Error dolore sint et veniam quod laudantium 
        velit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque, harum enim maxime ad ipsam debitis porro voluptatum unde nisi 
        nihil exercitationem expedita minus sed delectus fugit soluta facilis 
        laborum. Molestias? Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Maiores dolore fuga sapiente sit unde ullam, non, laudantium, 
        repellendus doloribus labore facere? Error dolore sint et veniam quod 
        laudantium velit illum. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Eaque, harum enim maxime ad ipsam debitis porro 
        voluptatum unde nisi nihil exercitationem expedita minus sed delectus 
        fugit soluta facilis laborum. Molestias?
    </p>
</div>`;

const stickyCss = 
`.sticky {
    padding: .5rem;
    border: 2px solid #666;
    background-color: #ddd;

    position: sticky;
    top: 0;
}`;

const stickyCssHidden = 
`body > div {
    height: 10rem;
    overflow-y: scroll;
}

body > div p, .sticky {
    box-sizing: border-box;
    max-width: 20rem;
    margin: 0 auto;
}`;

const stackHtml = 
`<div class="boite dessus">Dessus</div>
<div class="boite milieu">Milieu</div>
<div class="boite dessous">Dessous</div>`;

const stackCss = 
`.boite {
    position: absolute;
    text-align: center;
    font-weight: bold;
    height: 6em;
}

.boite.dessous {
    top: 1rem;
    left: 40%;
    right: 40%;
    background-color: #777;

    z-index: 1;
}

.boite.milieu {
    top: 3rem;
    left: 42%;
    right: 42%;
    background-color: #999;

    z-index: 2;
}

.boite.dessus {
    top: 5rem;
    left: 44%;
    right: 44%;
    background-color: #bbb;
    
    z-index: 3;
}`;

const stackCssHidden = 
`body {
    height: 10rem;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Positionnement</h2>
            <p>
                Lorsque nous voulons mettre des éléments les uns par dessus les autres en CSS, nous devons immédiatement penser 
                à la propriété <IC>position</IC>. Cette prorpriété permet de faire de nombreuses choses, mais principalement 
                permettre de superposer des éléments ou de les aligner par rapport à d&apos;autres éléments. Il ne faut pas confondre 
                cette propriété avec la propriété display, qui elle change la méthode d&apos;affichage d&apos;un élément.
            </p>
            <p>
                Il existe 5 méthodes de positionnement:
            </p>
            <ul>
                <li>
                    <IC>static</IC>
                </li>
                <li>
                    <IC>relative</IC>
                </li>
                <li>
                    <IC>absolute</IC>
                </li>
                <li>
                    <IC>fixed</IC>
                </li>
                <li>
                    <IC>sticky</IC>
                </li>
            </ul>
            <p>
                La plupart des méthodes de positionnement utilise les 
                propriétés <IC>top</IC>, <IC>right</IC>, <IC>bottom</IC> et <IC>left</IC> pour déplacer l&apos;élément dans la page 
                web en fonction du côté spécifié. Ces propriétés accepte une valeur ayant n&apos;importe quel unité de mesure de 
                distance. On favorisera toutefois les <IC>rem</IC> et <IC>px</IC> comme d&apos;habitude.
            </p>
            <ColoredBox title="Attention: ">
                L&apos;utilisation de la propriété <IC>position</IC> doit uniquement être utilisé pour déplacer un élément par 
                rapport à un autre ou pour mettre des éléments un par dessus l&apos;autre. Il ne doit en aucun cas être utilisé 
                pour faire la mise en page. Pour la mise en page, veuillez utiliser <IC>display: flex;</IC>
            </ColoredBox>
        </section>

        <section>
            <h2>Position statique</h2>
            <p>
                La position <IC>static</IC> est le mode de positionnement par défaut. Ce positionnement ne fait rien de spécial. 
                Il assure simplement que les éléments suivent le flux normal de la page. Puisque c&apos;est la valeur par défaut, 
                vous aurez très rarement besoin de spécifier cette valeur. Dans ce mode de positionnement, les 
                propriétés <IC>top</IC>, <IC>right</IC>, <IC>bottom</IC> et <IC>left</IC> ne font rien.
            </p>
            <WebExample>
                <Code language="html">{staticHtml}</Code>
                <Code language="css">{staticCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Position relative</h2>
            <p>
                La position <IC>relative</IC> permet de déplacer un élément par rapport à sa position originale dans le flux de 
                la page Web à l&apos;aide des propriétés <IC>top</IC>, <IC>right</IC>, <IC>bottom</IC> et <IC>left</IC>. Un côté 
                étonnement intéressant du mode d&apos;affichage relatif est que si les propriétés de déplacement ne sont pas 
                spécifié, l&apos;élément garde sa place normale dans le flux de la page.
            </p>
            <WebExample>
                <Code language="html">{relativeHtml}</Code>
                <Code language="css">{relativeCss}</Code>
            </WebExample>
            <p>
                Dans l&apos;exemple ci-dessus, on déplace l&apos;élément <IC>.position</IC> de <IC>3rem</IC> à partir de sa gauche. Nous 
                le déplaçons aussi de <IC>-1rem</IC> à partir de son haut, ce qui veut dire qu&apos;on le déplace vers le haut à 
                partir de son haut. Une valeur positive aurait poussée l&apos;élément vers le bas. Dans un 
                positionnement <IC>relative</IC>, une valeur de <IC>top: -1rem;</IC> et <IC>bottom: 1rem;</IC> équivaut au même 
                déplacement.
            </p>
        </section>

        <section>
            <h2>Position absolue</h2>
            <p>
                Le mode de positionnement <IC>absolute</IC> permet de déplacer un élément dans la page web par rapport à son 
                premier parent le plus proche qui a un positionnement autre que <IC>static</IC>. Puisque tous les éléments d&apos;une 
                page web ont par défaut un mode de positionnement statique, on l&apos;utilisera donc conjointement avec des 
                conteneurs qui ont un positionnement <IC>relative</IC>.
            </p>
            <p>
                Si aucun des parents d&apos;un élément ayant un positionnement <IC>absolute</IC> n&apos;a de position autre 
                que <IC>static</IC>, cet élément sera positionné par rapport au <IC>&lt;body&gt;</IC> de la page, ce qui n&apos;est 
                généralement pas voulu. 
            </p>
            <WebExample>
                <Code language="html">{absoluteHtml}</Code>
                <Code language="css">{absoluteCss}</Code>
            </WebExample>
            <p>
                L&apos;exemple ci-dessus apporte son lot d&apos;information:
            </p>
            <ul>
                <li>
                    On peut remarquer que le <IC>&lt;div&gt;</IC> bleu se place automatiquement en haut à gauche du conteneur et 
                    ce, même s&apos;il était placé après la boîte rouge. C&apos;est parce que les éléments en position absolue sortent du 
                    flux naturel d&apos;une page web et laissent ainsi leur place aux autres éléments.
                </li>
                <li>
                    Comme mentionné ci-dessus, les éléments en position <IC>absolute</IC> sortent du flux naturel de la page. 
                    Ils sont donc positionné par dessus les éléments de base de votre page. Si vous rétrécissez la fenêtre de 
                    votre navigateur, vous verrez donc que la boîte rouge ira se poser par dessus la boîte bleu.
                </li>
                <li>
                    On voit que les propriétés <IC>bottom</IC> et <IC>right</IC> représente les côtés côté du conteneur. En 
                    mettant une valeur de <IC>bottom: 0;</IC> on indique que l&apos;on place l&apos;élément absolue au bas de son 
                    conteneur relatif.
                </li>
            </ul>
            <ColoredBox title="Attention: ">
                Bien que l&apos;on utilise souvent la position absolue pour placer un élément relativement à un conteneur, il faut 
                faire attention. Puisque l&apos;élément est à l&apos;extérieur du flux de la page et apparaît par dessus les autres 
                éléments, il est possible de cacher de l&apos;information importante, ce que vous ne voulez jamais faire.
            </ColoredBox>
            <WebExample>
                <Code language="html">{absolute2Html}</Code>
                <Code language="css">{absolute2Css}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Poistion fixe</h2>
            <p>
                Si vous désirez positionner un élément par rapport à la fenêtre de votre navigateur, vous utiliserez le mode de 
                positionnement <IC>fixed</IC>. Ce mode de positionnement est similaire au positionnement <IC>absolute</IC>, mais 
                au lieu de placer l&apos;élément en fonction d&apos;un conteneur, l&apos;élément est positionné en fonction de la fenêtre du 
                navigateur web. L&apos;élément affecté reste donc à la même place dans l&apos;écran même quand on fait défiler la page.
            </p>
            <WebExample>
                <Code language="html">{fixedHtml}</Code>
                <Code language="css">{fixedCss}</Code>
                <Code language="css" display={false}>{fixedCssHidden}</Code>
            </WebExample>
            <p>
                Comme pour la position absolue, puisque la position fixe se met par dessus d&apos;autres élément de votre page, il 
                faut s&apos;assurer de ne pas cacher d&apos;éléments importants dans la page. Pour cette raison, il est de moins en moins 
                fréquent de voir ce type de positionnement dans les sites web plus moderne.
            </p>
        </section>

        <section>
            <h2>Positionnement collant</h2>
            <p>
                La position <IC>sticky</IC> permet d&apos;avoir un mixe entre le positionnement <IC>relative</IC> et <IC>fixed</IC>. 
                Il permet à l&apos;élément de rester à sa place dans la page jusqu&apos;à ce que le défilement de la page atteigne une 
                certaine valeur. Après ça, il utilise le positionnement fixed. 
            </p>
            <p>
                Il peut être pratique pour des menus qui défile sur la page ou pour des boutons pour remonter en haut de la 
                page, mais ne vois autrement pas beaucoup d&apos;utilisation. Il est difficile à utiliser. Je vous suggère donc de 
                faire attention si vous croyez en avoir besoin.
            </p>
            <WebExample>
                <Code language="html">{stickyHtml}</Code>
                <Code language="css">{stickyCss}</Code>
                <Code language="css" display={false}>{stickyCssHidden}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Chevauchementa</h2>
            <p>
                Si vous jouez un peu avec les positionnements autre que <IC>static</IC>, vous rencontrerez probablement des 
                chevauchements entre les éléments HTML. Il arrive parfois que le chevauchement ne se fasse pas de la façon que 
                vous voulez. Par exemple, un élément pourrait apparaître en dessous d&apos;un autre alors que vous voulez qu&apos;il 
                apparaîsse au-dessus. Dans ce cas, la propriété <IC>z‑index</IC> vous permet de définir un ordre de priorité 
                pour l&apos;affichage. Plus le <IC>z‑index</IC> est grand, plus il va apparaître au-dessus des autres éléments. Le 
                contraire est aussi valide. Un petit <IC>z‑index</IC> affichera les éléments en dessous des autres.
            </p>
            <WebExample>
                <Code language="html">{stackHtml}</Code>
                <Code language="css">{stackCss}</Code>
                <Code language="css">{stackCssHidden}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                <p>
                    Le calcul de la position par le <IC>z-index</IC> est plus complexe que ce qu&apos;elle en a l&apos;air. Si vous avez des 
                    problèmes de chevauchement qui ne se règle pas, je vous conseille d&apos;aller lire sur le &quot;Stacking Context&quot;.
                    Vous pouvez en apprendre d&apos;avantage ici:
                </p>
                <p>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context" target="_blank">
                        MDN - Stacking context
                    </a>
                </p>
            </ColoredBox>
        </section>
    </>
}