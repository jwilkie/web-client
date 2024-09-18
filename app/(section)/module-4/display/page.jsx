import IC from '@/components/InlineCode';
import { WebExample, Code } from '@/components/WebExample'; 

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Mode d'affichage",
    description: "Présentation des types d'affichage les plus utilisé en HTML et CSS et de comment les modifier.",
    keywords: ["css", "display", "inline", "block", "none", "flex", "grid"],
    group: "notes"
}

const displayHtml = 
`Du texte qui ne sera pas à la gauche de l'image.

<img src="/web-client/img/weedle.webp" alt="Un weedle">

Du texte qui ne sera pas à la droite de l'image.`;

const displayCss = 
`img {
    display: block;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Types d&apos;affichage</h2>
            <p>
                Il existe différents types d&apos;affichage en HTML et CSS. Nous en avons déjà couvert 2, soit l&apos;affichage en ligne et l&apos;affichage 
                en bloc, qui sont généralement les 2 types d&apos;affichage par défaut du HTML. Il existe toutefois de nombreux autres types d&apos;affichage et 
                CSS nous permettra de les manipuler facilement. 
            </p>
            <p>
                Voici une courte liste des types d&apos;affichage que vous utiliserez dans ce cours:
            </p>
            <dl>
                <dt><IC>inline</IC></dt>
                <dd>
                    L&apos;affichage en ligne. Les éléments utilisant cet affichage suive le flux du texte dans la page Web.
                </dd>

                <dt><IC>block</IC></dt>
                <dd>
                    L&apos;affichage en bloc. Les éléments utilisant cet affichage prennent par défaut tout l&apos;espace en largeur.
                </dd>
                
                <dt><IC>none</IC></dt>
                <dd>
                    L&apos;affichage vide. Ce type d&apos;affiche indique que l&apos;élément ne doit pas être visible. On l&apos;utilise beaucoup avec de 
                    l&apos;intéraction, comme pour cacher des menus si nous cliquons sur un bouton.
                </dd>
                
                <dt><IC>flex</IC></dt>
                <dd>
                    L&apos;affichage flexible en boîte. C&apos;est un type d&apos;affichage plus récent et très pratique pour les sites web qui s&apos;affiche 
                    bien sur ordinateur ou sur mobile. Nous verrons comment utiliser ce type d&apos;affichage plus tard.
                </dd>
                
                <dt><IC>grid</IC></dt>
                <dd>
                    L&apos;affichage en grille. C&apos;est un type d&apos;affichage plus récent très pratique pour organiser un site Web sous la forme d&apos;une grille. 
                    Nous ne verrons pas comment utiliser ce type d&apos;affichage dans le cours puisqu&apos;il est très complexe, mais il est il vaut la peine 
                    d&apos;être appris.
                </dd>
            </dl>
        </section>

        <section>
            <h2>Propriété CSS</h2>
            <p>
                Si vous voulez changer le type d&apos;affichage d&apos;un élément, vous utiliserez la propriété CSS <IC>display</IC>. Vous pouvez 
                ensuite mettre l&apos;un des type d&apos;affichage ci-dessus comme valeur. Dans l&apos;exemple suivant, nous stylons une image pour
                changer son affichage en bloc, ce qui ne l&apos;alignera plus avec le texte puisque son affichage ne sera plus en ligne.
            </p>
            <WebExample title="Ajout de bordure sur des éléments HTML">
                <Code language="html">{displayHtml}</Code>
                <Code language="css">{displayCss}</Code>
                <Code language="css" display={false}>{'img {width:100%; max-width:10rem; margin: 1rem 0;}'}</Code>
            </WebExample>
        </section>
    </>
}