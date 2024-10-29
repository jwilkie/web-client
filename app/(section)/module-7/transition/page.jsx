import CodeBlock from '@/components/CodeBlock';
import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Transitions",
    description: "Présentation des règles CSS de transition, permettant d'animer des éléments à l'écran lorsque leur CSS est changé.",
    keywords: ["css", "transition", "timing", "ease"],
    group: "notes"
}

const syntax = 
`.selecteur {
    transition: propriete duree timing delais
}`;

const css = 
`.ligne {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 3rem;
    padding: 0 4rem;
    border: 2px dashed #a00;
    text-align: center;
}

.ligne:hover .curseur {
    left: calc(100% - 3rem);
}
    
.curseur {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 3rem;
    background-color: #f44;
}`;

const linearHtml = 
`<div class="ligne">
    Je vais toujours à la même vitesse.
    <div class="curseur"></div>
</div>`;

const linear = 
`.curseur {
    transition: all 1s linear;
}`;

const easeHtml = 
`<div class="ligne">
    Je commence lentement, je vais vite au milieu et je fini lentement.
    <div class="curseur"></div>
</div>`;

const ease = 
`.curseur {
    transition: all 1s ease;
}`;

const easeinHtml = 
`<div class="ligne">
    Je commence lentement et je fini vite.
    <div class="curseur"></div>
</div>`;

const easein = 
`.curseur {
    transition: all 1s ease-in;
}`;

const easeinoutHtml = 
`<div class="ligne">
    Je commence vraiment lentement, je vais vraiment vite au milieu et je fini vraiment lentement.
    <div class="curseur"></div>
</div>`;

const easeinout = 
`.curseur {
    transition: all 1s ease-in-out;
}`;

const easeoutHtml = 
`<div class="ligne">
    Je commence vite et je fini lentement.
    <div class="curseur"></div>
</div>`;

const easeout = 
`.curseur {
    transition: all 1s ease-out;
}`;

const limiteHtml =
`<div class="conteneur">
    <div class="boite">
        <span class="limite">😢</span>
    </div>
    <div class="boite">
        <span class="alternative">😁</span>
    </div>
</div>`;

const limiteCss =
`.conteneur {
    display: flex;
    justify-content: space-evenly;
}

.boite {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    background-color: #ddd;
    font-size: 2rem;
}

.limite {
    display: none;
    transition: all 1s ease;
}

.boite:hover .limite {
    display: block;
}

.alternative {
    opacity: 0;
    transition: all 1s ease;
}

.boite:hover .alternative {
    opacity: 1;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Les transitions sont un moyen simple d&apos;animer les éléments de nos pages Web lorsque nous activons des règles 
                CSS. Les transitions nous permettent essentiellement d&apos;animer n&apos;importe quelle propriété CSS lorsque sa valeur 
                change, ce qui nous permet de rendre notre site Web plus beau et de plaire aux designers graphiques. Elles sont 
                donc un supplément intéressant à vos pages Web.
            </p>
        </section>

        <section>
            <h2>Syntaxe</h2>
            <p>
                La syntaxe de base d&apos;une transition est assez simple. Vous n&apos;avez qu&apos;à utiliser le code ci-dessous, mais en 
                modifiant les <IC>propriete</IC>, <IC>duree</IC>, <IC>timing</IC> et <IC>delai</IC> par les valeurs dont que 
                vous désirez.
            </p>
            <CodeBlock language="css">{syntax}</CodeBlock>
            <dl>
                <dt>Propriété</dt>
                <dd>
                    Dans la syntaxe ci-dessus, vous devez remplacer <IC>propriete</IC> par la propriété sur laquelle vous voulez 
                    appliquer la transition. Cela vous permet d&apos;avoir une transition sur certaines propriétés, mais pas sur 
                    d&apos;autres. Il est aussi possible d&apos;utiliser le mot-clé <IC>all</IC> pour avoir une transition sur toutes les 
                    propriétés en même temps. Dans le même style, vous pouvez mettre <IC>none</IC> pour indiquer de ne plus 
                    faire de transition.
                </dd>

                <dt>Durée</dt>
                <dd>
                    Dans la syntaxe ci-dessus, vous devez remplacer <IC>duree</IC> par la durée totale de la transition. C&apos;est 
                    donc essentiellement la longueur de l&apos;animation. Celle-ci doit être spécifié avec une unité de mesure soit 
                    en secondes (<IC>s</IC>) ou en millisecondes (<IC>ms</IC>).
                </dd>

                <dt>Fonction de timing</dt>
                <dd>
                    Dans la syntaxe ci-dessus, vous devez remplacer <IC>timing</IC> par le nom de la fonction de timing que vous 
                    voulez utiliser. Une fonction de timing est indique à quelle vitesse exécuter notre animation en fonction du 
                    temps. Il est possible de définir ses propres fonctions ici, mais nous utiliserons généralement celle de 
                    base qui nous sont fournie par le navigateur.
                </dd>

                <dt>Délai</dt>
                <dd>
                    Dans la syntaxe ci-dessus, vous devez remplacer <IC>delai</IC> par le délais avant que la transition 
                    démarre. Comme pour la durée, nous avons besoin d&apos;une valeur en secondes (<IC>s</IC>) ou en millisecondes 
                    (<IC>ms</IC>).
                </dd>
            </dl>
        </section>

        <section>
            <h2>Fonction de timing</h2>
            <p>
                Les navigateurs Web nous offrent des fonctions de timing pour nous simplifier la tâche dans nos transitions. 
                Pour utiliser une de ces fonctions, nous avons uniquement besoin de spécifier son nom. Voici donc un exemple de 
                chacune des fonctions de timing prédéfinies par les navigateurs:
            </p>
            <h3>linear</h3>
            <WebExample>
                <Code language="css" display={false}>{css}</Code>
                <Code language="html" display={false}>{linearHtml}</Code>
                <Code language="css">{linear}</Code>
            </WebExample>

            <h3>ease</h3>
            <WebExample>
                <Code language="css" display={false}>{css}</Code>
                <Code language="html" display={false}>{easeHtml}</Code>
                <Code language="css">{ease}</Code>
            </WebExample>

            <h3>ease-in</h3>
            <WebExample>
                <Code language="css" display={false}>{css}</Code>
                <Code language="html" display={false}>{easeinHtml}</Code>
                <Code language="css">{easein}</Code>
            </WebExample>

            <h3>ease-in-out</h3>
            <WebExample>
                <Code language="css" display={false}>{css}</Code>
                <Code language="html" display={false}>{easeinoutHtml}</Code>
                <Code language="css">{easeinout}</Code>
            </WebExample>

            <h3>ease-out</h3>
            <WebExample>
                <Code language="css" display={false}>{css}</Code>
                <Code language="html" display={false}>{easeoutHtml}</Code>
                <Code language="css">{easeout}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Limites</h2>
            <p>
                Bien que les transitions sont très pratiques, elles ont tout de même quelques limites. Une des plus connue est 
                que les transitions ne fonctionnent pas avec la propriété <IC>display</IC>. Bref, si vous avez un changement 
                d&apos;affichage, aucune transition ne fonctionnera sur l&apos;élément, même si cette transition serait valide.
            </p>
            <p>
                Si nous voulons afficher ou cacher un élément avec des transitions, vous devrez utiliser des trucs différents 
                que de mettre un <IC>display: none;</IC>. Les propriétés <IC>opacity</IC> et <IC>visibility</IC> peuvent 
                toutefois être des options intéressantes.
            </p>
            <WebExample>
                <Code language="html">{limiteHtml}</Code>
                <Code language="css">{limiteCss}</Code>
            </WebExample>
        </section>
    </>
}