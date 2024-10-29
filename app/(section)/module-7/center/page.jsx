import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Centrer avec les transformations",
    description: "Présentation d'une technique pour centrer un élément dans un autre autant verticalement que horizontalement avec le positionnement et les transformations.",
    keywords: ["css", "position", "absolute", "transform", "translate"],
    group: "hack"
}

const centrerHtml = 
`<div class="conteneur">
    <img src="/web-client/img/nature.jpg" alt="Nature à l'automne">
    <div class="centrer">Texte centré dans l'image</div>
</div>`;

const centrerCss = 
`.conteneur {
    /* Position relative pour contenir l'élément absolue */
    position: relative;
}

.conteneur img {
    width: 100%;
}
    
.conteneur .centrer {
    /* Position absolue et translation pour centrer  */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Problème et solution</h2>
            <p>
                Centrer un élément en HTML et CSS peut être fait de multitudes de façon. Les techniques basées sur 
                le <IC>text-align</IC>, le <IC>margin</IC> et la disposition <IC>flex</IC> sont toutes très utilent, mais elles 
                sont plus difficile à utiliser lorsque nous voulons superposer des éléments. Dans ce genre de cas, une technique 
                utilisant un mix du <IC>position</IC> et du <IC>transform</IC>.
            </p>
            <WebExample>
                <Code language="html">{centrerHtml}</Code>
                <Code language="css">{centrerCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Explication</h2>
            <p>
                Dans cette méthode pour centrer, la position absolue est utilisé pour mettre un élément par dessus un autre. On 
                pourrait croire que de mettre le <IC>top</IC> et <IC>left</IC> à <IC>50%</IC> centre l&apos;élément, mais ce n&apos;est 
                pas le cas. En effet, ces propriétés vont plutôt centrer le coin en haut à gauche de l&apos;élément au centre. Il 
                faut donc décaler l&apos;élément vers le haut et la gauche pour complètement le centrer. C&apos;est ici que la 
                propriété <IC>transform</IC> nous aide.
            </p>
            <p>
                La propriété <IC>transform</IC> est particulière dans le fait que lorsqu&apos;on utilise des pourcentage comme unité 
                de mesure, au lieu d&apos;être un pourcentage du parent, elle compte le pourcentage de l&apos;élément lui-même. Dans ce 
                cas-ci, on décale donc l&apos;élément de la moitié de sa largeur vers la gauche et la moitié de sa hauteur vers le 
                haut.
            </p>
        </section>
    </>
}