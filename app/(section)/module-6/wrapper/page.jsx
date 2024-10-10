import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Wrapper",
    description: "Présentation de la technique du Wrapper, une façon de forcer le contenu d'un site web dans un espace plus petit au centre de l'écran.",
    keywords: ["css", "max-width", "margin", "centrer"],
    group: "hack"
}

const wrapperHtml = 
`<section class="wrapper">
    <h2>Un beau titre</h2>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi 
        sint illum officiis! Ipsum expedita repellendus esse vitae ipsa 
        voluptatibus sunt quasi, odit consequuntur. Eius quod nemo saepe, 
        autem natus voluptas.
    </p>
</section>`;

const wrapperCss = 
`.wrapper {
    max-width: 40rem;
    margin: 0 auto;
}`;

const wrapperComplexHtml = 
`<header>
    <div class="wrapper">
        <h1>Titre du site web</h1>
    </div>
</header>

<main>
    <div class="wrapper">
        ...
    </div>
</main>

<footer>
    <div class="wrapper">
        &copy; Jonathan Wilkie
    </div>
</footer>`;

const wrapperComplexCss = 
`header, footer {
    padding: 1rem;
    background-color: #b2ff96;
}

main {
    padding: 1rem;
}

h1 {
    margin: 0;
}

.wrapper {
    max-width: 40rem;
    margin: 0 auto;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Problème et solution</h2>
            <p>
                De plus en plus de très grands écrans sont vendu. Il est possible que vous en ayez un chez vous. Si c&apos;est le 
                cas, vous avez peut-être remarqué que lire un texte ou de l&apos;information sur ce genre d&apos;écran est très difficile 
                si la fenêtre de l&apos;application est en plein écran. En effet, le contenu est tellement étiré de gauche à droite 
                qu&apos;il devient hardue de suivre sur quelle ligne nous sommes rendu et force le lecteur à tourner le cou pour être 
                capable de lire le texte en entier.
            </p>
            <p>
                Pour éviter ce genre de problèmes, la plupart des site web utilise un technique qui s&apos;appelle le 
                &quot;Wrapper&quot;. Cette technique consiste à donner une largeur maximale au contenu de la page et 
                généralement à le centrer avec la technique du margin à <IC>auto</IC>.
            </p>
            <WebExample>
                <Code language="html">{wrapperHtml}</Code>
                <Code language="css">{wrapperCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Solution plus complexe</h2>
            <p>
                Cette technique est très pratique, mais peut parfois rendre le design un peu plus complexe. Par exemple, il est 
                fort probable que vous ayez à mettre un header de couleur jusqu&apos;aux bords de l&apos;écran, mais où le contenu est 
                condensé dans un wrapper. Dans ce genre de cas, vous aurez besoin d&apos;organiser les éléments avec des <IC>&lt;div&gt;</IC>.
            </p>
            
            <WebExample>
                <Code language="html">{wrapperComplexHtml}</Code>
                <Code language="css">{wrapperComplexCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Largeur maximale</h2>
            <p>
                La propriété <IC>max-width</IC> est une propriété particulière qui limite un élément pour qu&apos;il ne devienne 
                jamais plus grand qu&apos;une certaine valeur. Cette propriété est très pratique dans les designs fluides où la 
                taille des éléments peut changer en fonction de la taille du navigateur.
            </p>
            <p>
                Il existe d&apos;autres propriétés similaire, comme <IC>min-width</IC>, <IC>min-height</IC> et <IC>max-height</IC>. Ces 
                propriétés ont la même raison d&apos;être que le <IC>max-width</IC>.
            </p>
        </section>
    </>
}