import Image from 'next/image';
import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import { WebExample, Code } from '@/components/WebExample'; 

import color from '@/public/img/color.svg';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Couleurs",
    description: "Présentation du système de couleur en informatique et dans le CSS.",
    keywords: ["css", "couleur", "texte", "fond", "background"],
    group: "notes"
}

const textHtml = 
`<p>
    Lorem ipsum accumsan nibh. Fusce condimentum tincidunt aliquet. 
    Nam aliquam pulvinar purus, in porta est. Proin rhoncus dolor 
    et velit placerat fermentum. Interdum et malesuada fames ac ante 
    ipsum primis in faucibus. Etiam mollis varius gravida.
</p>`;

const textCss = 
`p {
    color: #00F;
}`;

const bgHtml = 
`<ul>
    <li class="surligner">Élément 1</li>
    <li>Élément 2</li>
    <li class="surligner">Élément 3</li>
</ul>`;

const bgCss = 
`li.surligner {
    background-color: rgb(128, 13, 13);
    color: #ffffff;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Encodage des couleurs</h2>
            <p>
                En informatique, les couleurs fonctionne en mélangeant une valeur de rouge, de vert et de bleu. Ces valeurs, que nous 
                appelerons &quot;canaux&quot;, sont généralement un nombre entier qui doit être entre 0 et 255 inclusivement. 
                Si nous spécifions une couleur ayant 0 dans tous ces canaux, la couleur résultante sera noir. Si la valeur dans tous les 
                canaux est de 255, alors nous avons la couleur blanche. Si nous mettons 255 dans le canal rouge, mais 0 dans le canal 
                vert et bleu, nous aurons une couleur rouge. En donnant des valeurs à nos 3 canaux, nous sommes en mesure d&apos;utiliser 
                plus de 16 millions de couleurs. 
            </p>
            <Image src={color} alt="Démonstrations des canaux de couleur" />
            <p>
                Il existe de nombreux standard pour spécifier les 3 canaux d&apos;une couleur. En CSS, nous avons l&apos;embarras du choix. Voici 
                une liste non exhaustive de façons de définir une couleur en CSS:
            </p>
            <dl>
                <dt>Hexadécimal</dt>
                <dd>
                    Vous avez probablement déjà vu ce genre de code en ligne. Chaque canal de couleur est représenté un nombre 
                    hexadécimal à 2 chiffres. Puisqu&apos;il y a 3 canaux, nous avons donc 6 chiffres hexadécimal.
                    <div>
                        Ex: <IC>#F78F20</IC>
                    </div>
                </dd>

                <dt>Hexadécimal court</dt>
                <dd>
                    C&apos;est une façon plus courte de définir une couleur hexdécimal. Essentiellement, nous utilisons uniquement des 
                    valeurs de 0 à 16 pour chaque canal. Bien que cela nous permette de raccourcir notre code, cela diminue de beaucoup 
                    les possibilités de couleurs. En effet, en utilisant cette méthode, nous avons accès à seulement 4096 couleurs 
                    différentes au lieu des 16 millions disponibles pour votre ordinateur.
                    <div>
                        Ex: <IC>#000</IC>
                    </div>
                </dd>

                <dt>RGB</dt>
                <dd>
                    C&apos;est une façon facile de définir la valeur des canaux rouge, vert et bleu respectivement avec une valeur entre 
                    0 et 255.
                    <div>
                        Ex: <IC>rgb(255, 90, 130)</IC>
                    </div>
                </dd>

                <dt>RGBA</dt>
                <dd>
                    C&apos;est le même principe que le RGB, mais en ajoutant un quatrième canal que nous appelerons le canal &quot;alpha&quot;. 
                    Ce canal représente la transparence de la couleur. La valeur du canal alpha est un nombre à virgule entre 0 et 1. À 0, 
                    la couleur est complètement transparente et à 1 la couleur est complètement opaque.
                    <div>
                        Ex: <IC>rgba(123, 25, 242, 0.7)</IC>, <IC>rgba(30, 30, 30, .4)</IC>
                    </div>
                </dd>

                <dt>Nom de couleur</dt>
                <dd>
                    Certaines couleurs ont un nom. Pour ces couleurs, il est possible de spécifier le nom de la couleur directement. 
                    <div>
                        Ex: <IC>crimson</IC>, <IC>mediumspringgreen</IC>
                    </div>
                    <p>
                        Vous pouvez trouver la liste des couleurs ayant un nom au lien suivant:
                    </p>
                    <p>
                        <a href="https://www.w3schools.com/colors/colors_hex.asp" target="_blank">
                            W3School - Named Colors by HEX Value
                        </a>
                    </p>
                </dd>
            </dl>
            <p>
                Parmis tous ces choix, lequel est le meilleur? En général, pour des raisons de performance, le meilleur choix est 
                généralement le plus petit. Nous allons donc favoriser le format hexadécimal et hexadécimal court.
            </p>
        </section>

        <section>
            <h2>Couleur de texte</h2>
            <p>
                Pour modifier la couleur du texte, nous devons changer la valeur de la propriété <IC>color</IC> d&apos;un élément pour y 
                mettre la couleur de notre choix. Pour changer la couleur du texte de tous les paragraphes d&apos;une page Web en bleu, 
                nous utiliserons une feuille de style similaire à celle-ci.
            </p>
            <WebExample title="Changer la couleur du texte en CSS">
                <Code language="html">{textHtml}</Code>
                <Code language="css">{textCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Couleur de fond</h2>
            <p>
                Pour modifier la couleur du fond d&apos;un élément HTML, nous utiliserons la propriété <IC>background‑color</IC>. Cette propriété 
                s&apos;utilise de la même façon que pour la couleur du texte.
            </p>
            <WebExample title="Changer la couleur de fond en CSS">
                <Code language="html">{bgHtml}</Code>
                <Code language="css">{bgCss}</Code>
            </WebExample>
            <ColoredBox title="À noter: ">
                Comme vous pouvez le remarquer, il est aussi possible de combiner plusieurs proprités à l&apos;intérieur de la même feuille 
                de style. Dans l&apos;exemple ci-dessus, nous utilisons <IC>color</IC> et <IC>background‑color</IC> en même temps.
            </ColoredBox>
        </section>
    </>
}