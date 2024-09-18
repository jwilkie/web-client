import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import { WebExample, Code } from '@/components/WebExample'; 

import styles from './page.module.css'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Gestion de l'espace",
    description: "Présentation du système de boîte en HTML et de la gestion de son espacement.",
    keywords: ["css", "taille", "size", "marge", "margin", "space", "padding"],
    group: "notes"
}

const boxsizing = 
`html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
}`;

const sizeHtml = 
`<p class="boite">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 
    tincidunt ex vitae leo gravida, ut semper nisi sagittis. 
    Maecenas aliquam scelerisque ligula, efficitur bibendum sapien 
    tincidunt at.
</p>`;

const sizeCss = 
`p.boite {
    width: 400px;
    height: 200px;
    background-color: #edb68c;
}`;

const paddingHtml = 
`<input type="button" class="haut" value="Padding en haut">
<input type="button" class="droite" value="Padding à droite">
<input type="button" class="bas" value="Padding en bas">
<input type="button" class="gauche" value="Padding à gauche">
<input type="button" class="partout" value="Padding partout">`;

const paddingCss = 
`input.haut {
    padding-top: 30px;
}

input.droite {
    padding-right: 30px;
}

input.bas {
    padding-bottom: 30px;
}

input.gauche {
    padding-left: 30px;
}

input.partout {
    padding: 30px;
}`;

const paddingSideHtml = 
`<input type="button" class="hautbas" value="Padding haut/bas">
<input type="button" class="droitgauche" value="Padding droite/gauche">`;

const paddingSideCss = 
`input.hautbas {
    padding: 30px 0;
}

input.droitgauche {
    padding: 0 30px;
}`;

const marginHtml =
`<p>Marge en bas:</p>
<input type="button" class="bas" value="Margin en bas">

<p>Marge à gauche:</p>
<input type="button" class="gauche" value="Margin à gauche">

<p>Marge en haut:</p>
<input type="button" class="haut" value="Margin en haut">

<p>Marge à droite</p>
<input type="button" class="droite" value="Margin à droite">
Ceci est un test`;

const marginCss = 
`input.haut {
    margin: 30px 0 0 0;
}

input.droite {
    margin: 0 30px 0 0;
}

input.bas {
    margin: 0 0 30px;
}

input.gauche {
    margin: 0 0 0 30px;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Système de boîtes</h2>
            <p>
                Tous les éléments d&apos;une page HTML sont essentiellement une boîte. À son plus simple, cette boîte a seulement une 
                largeur et une hauteur qui sont très souvent définie par ce que contient la balise et par son type d&apos;affichage. 
                Toutefois, il est possible d&apos;ajouter des marges, des bordures et de l&apos;espacement dans cette boîte, ce qui peut 
                compliquer les choses un peu. La terminologie ici est importante, je vous demande donc de bien comprendre le schémas 
                suivant:
            </p>
            <figure>
                <div className={styles['box-example']}>
                    <div className={styles['box-example-tag'] + ' ' + styles.top}>Margin</div> 
                    <div className={styles['box-example-border']}>
                        <div className={styles['box-example-tag'] + ' ' + styles.top}>Padding</div> 
                        <div className={styles['box-example-content']}>
                            Contenu de la boîte
                        </div> 
                        <div className={styles['box-example-tag'] + ' ' + styles.bottom}>Bordure</div>
                    </div>
                </div>
            </figure>
            <p>
                Un élément HTML ressemble à l&apos;exemple ci-dessus. Il est important de bien comprendre les différentes sections de la 
                boîte.
            </p>
            <dl>
                <dt>Bordure</dt>
                <dd>
                    C&apos;est la bordure de l&apos;élément HTML. Par défaut, le navigateur n&apos;en mets tout simplement pas, mais on peut l&apos;activer 
                    avec du CSS.
                </dd>

                <dt>Padding</dt>
                <dd>
                    C&apos;est l&apos;espacement entre le contenu de la boîte et sa bordure. La majorité des éléments en HTML n&apos;ont pas de padding 
                    par défaut. Il est toutefois possible d&apos;en ajouter avec du CSS.
                </dd>

                <dt>Margin</dt>
                <dd>
                    C&apos;est l&apos;espacement entre la bordure de la boîte et les autres éléments de la page Web. Certains éléments HTML ont 
                    un margin par défaut, comme les <IC>&lt;h?&gt;</IC> ou la balise <IC>&lt;body&gt;</IC>. Il est toutefois possible 
                    d&apos;en ajouter ou de le modifier avec du CSS.
                </dd>
            </dl>
        </section>

        <section>
            <h2>Calcul des boîtes</h2>
            <p>
                Par défaut, le calcul de la taille des boîtes n&apos;est pas très pratique pour nous. En effet, le calcul de base de la 
                taille d&apos;un élément ne comprends pas le padding et la bordure, mais juste le contenu de la boîte. Cela peut compliquer 
                énormément le stylage des différents éléments de votre site web, surtout si nous essayons de mettre des éléments un à 
                côté de l&apos;autre ou un en dedans de l&apos;autre. Nous pouvons toutefois changer la façon dont le calcul est fait avec la 
                propriété CSS <IC>box-sizing</IC>.
            </p>
            <CodeBlock language="css">{boxsizing}</CodeBlock>
            <ColoredBox title="Attention: ">
                Le mode de calcul par défaut risque de vous causer des bogues, des problèmes et plusieurs maux de têtes. Je vous 
                recommande donc d&apos;ajouter le code ci-dessus dans le haut de chacun de vos fichier CSS pour modifier la méthode de 
                calcul par défaut.
            </ColoredBox>
        </section>

        <section>
            <h2>Taille</h2>
            <p>
                Pour modifier la taille d&apos;un élément, vous pouvez utiliser les propriétés CSS <IC>width</IC> et <IC>height</IC> qui 
                modifient respectivement la largeur et la hauteur du contenu de la boîte.
            </p>
            <WebExample title="Modifier la taille d'un élément en CSS">
                <Code language="html">{sizeHtml}</Code>
                <Code language="css">{sizeCss}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                Assurez-vous d&apos;ajouter le code du <IC>box-sizing</IC> à votre fichier CSS. Autrement, si vous modifiez la taille de la 
                boîte, la bordure et le padding ne seront pas considéré dans la taille que vous spécifiez. Le margin n&apos;est jamais 
                considéré dans la taille des boîtes.
            </ColoredBox>
        </section>

        <section>
            <h2>Padding</h2>
            <p>
                Le padding est l&apos;espacement intérieur entre la bordure d&apos;un élément et son contenu. Pour modifier le padding d&apos;un 
                élément HTML, nous utiliserons les propriétés CSS 
                padding, <IC>padding‑top</IC>, <IC>padding‑right</IC>, <IC>padding‑bottom</IC> et <IC>padding‑left</IC>. La première 
                propriété est un raccourci qui permet de spécifier le padding de plusieurs côté à la fois alors que les 4 autres propriétés
                vont uniquement modifier le padding d&apos;un seul côté.
            </p>
            <WebExample title="Modifier le padding d'un élément en CSS">
                <Code language="html">{paddingHtml}</Code>
                <Code language="css">{paddingCss}</Code>
            </WebExample>
            <p>
                Il est aussi possible de modifier le padding à gauche et à droite ou du haut et du bas dans la même 
                propriété <IC>padding</IC> de la façon suivante:
            </p>
            <WebExample title="Modifier le padding d'un élément en CSS en une seule instruction">
                <Code language="html">{paddingSideHtml}</Code>
                <Code language="css">{paddingSideCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Margin</h2>
            <p>
                Le margin est l&apos;espacement autour de la bordure de l&apos;élément. Le margin n&apos;est jamais considéré dans la taille de 
                l&apos;élément. Pour modifier le margin d&apos;un élément HTML, nous utiliserons des propriétés CSS similaire au padding 
                comme <IC>margin</IC>, <IC>margin‑top</IC>, <IC>margin‑right</IC>, <IC>margin‑bottom</IC> et <IC>margin‑left</IC>. 
            </p>
            <WebExample title="Modifier le margin d'un élément en CSS">
                <Code language="html">{marginHtml}</Code>
                <Code language="css">{marginCss}</Code>
            </WebExample>
            <p>
                Les propriétés fonctionnent de la même façon que pour le padding. Vous pouvez donc utiliser la 
                propriété <IC>margin</IC> comme raccourci pour mettre du margin sur multiples côtés.
            </p>
            <ColoredBox title="Attention: ">
                Le margin a des propriétés particulières. Le margin peut, entre autres, se combiner avec le margin d&apos;autres élments 
                dépendant de leur mode d&apos;affichage. De plus, nous pouvons mettre du margin négatif, ce qui semble un peu bizarre.
                Nous ne verrons pas en détail les intriquitées du margin, sachez qu&apos;il peut être un outil puissant si bien utilisé ou 
                une source majeure de problèmes si vous ne faites pas attention.
            </ColoredBox>
        </section>
    </>
}