import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Élément à gauche et à droite",
    description: "Présentation d'une technique CSS pour mettre un élément à gauche et à droite de la page séparé par un espace vide.",
    keywords: ["css", "right", "left", "space", "between"],
    group: "hack"
}

const rightLeftHtml =
`<div class="conteneur">
    <div class="gauche">
        Je suis à gauche
    </div>
    <div class="droite">
        Je suis à droite
    </div>
</div>`;

const rightLeftCss =
`.conteneur {
    /* Technique pour aligner à droite et à gauche */
    display: flex;
    justify-content: space-between;
}`;

const rightLeftCssHidden = 
`.conteneur {
    border: 3px solid #000;
    height: 10rem;
}

.droite, .gauche {
    display: flex;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
}

.droite {
    background-color: #a7b2ed;
}
    
.gauche {
    background-color: #ffb4f4;
}`;

const headerHtml =
`<header class="conteneur">
    <!-- Premier élément du conteneur -->
    <div class="gauche">
        <img src="/web-client/img/weedle.webp" alt="Logo de site web" />
        <h1>Les insectes</h1>
    </div>

    <!-- Deuxième élément du conteneur -->
    <nav>
        <ul>
            <li><a href="javascript:;">Accueil</a></li>
            <li><a href="javascript:;">À propos</a></li>
            <li><a href="javascript:;">Contact</a></li>
        </ul>
    </nav>
</header>`;

const headerCss =
`.conteneur {
    /* Technique pour aligner à droite et à gauche */
    display: flex;
    justify-content: space-between;
}`;

const headerCssHidden = 
`.conteneur {
    align-items: center;
    padding: 1rem;
    background-color: #94e3a3;
}

.gauche, nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
}

.gauche img {
    width: 3rem;
    height: auto;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Problème et solution</h2>
            <p>
                Il arrive fréquement dans les designs de page web que l&apos;on veuille placer un élément à gauche et un autre à 
                droite de la page. Ces éléments doivent être alignés l&apos;un par rapport à l&apos;autre, mais séparés par un espace 
                vide. Ce genre de design posait d&apos;énormes problèmes dans le passé, mais aujourd&apos;hui il existe des solutions
                CSS qui permettent de le faire facilement avec les mode d&apos;affichage <IC>flex</IC> et <IC>grid</IC>.
            </p>
            <p>
                La technique que nous allons utiliser ici utilise la disposition <IC>flex</IC>. Nous utiliserons la 
                propriété <IC>justify-content</IC> avec la valeur <IC>space-between</IC> pour mettre de l&apos;espace entre 2 
                éléments.
            </p>
            <WebExample>
                <Code language="html">{rightLeftHtml}</Code>
                <Code language="css">{rightLeftCss}</Code>
                <Code language="css" display={false}>{rightLeftCssHidden}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Mise en garde</h2>
            <p>
                La technique vu ci-dessus fonctionne très bien, mais elle a une petite contrainte: le conteneur doit contenir 
                exactement 2 éléments enfants direct. Si vous avez plus d&apos;éléments enfants, l&apos;affichage ne sera pas celui
                voulu. Pour palier à ce problème, je vous conseille d&apos;encapsuler vos éléments dans un autre conteneur, comme 
                un <IC>&lt;div&gt;</IC>, pour vous assurer que le conteneur principal n&apos;a que 2 enfants.
            </p>
            <p>
                Voici un exemple:
            </p>
            <WebExample>
                <Code language="html">{headerHtml}</Code>
                <Code language="css">{headerCss}</Code>
                <Code language="css" display={false}>{headerCssHidden}</Code>
            </WebExample>
        </section>
    </>
}