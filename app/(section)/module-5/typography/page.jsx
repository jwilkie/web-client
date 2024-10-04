import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import { WebExample, Code } from '@/components/WebExample';
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Typographie",
    description: "Présentation des différentes propriétés CSS pour styler le texte, comme manipuler sa police, sa taille et son format.",
    keywords: ["aligner", "décoration", "souligner", "rayer", "transformation", "majuscule", "minuscule", "capitalize", "small-cap", "weight", "gras", "italique"],
    group: "notes"
}

const alignHtml = 
`<p class="gauche">À gauche</p>
<p class="droite">À droite</p>
<p class="centrer">Au centre</p>
<p class="justifier">
    Du texte justifier ne fonctionne pas vraiment s'il ne contient pas assez de textes. Lorem ipsum dolor sit amet 
    consectetur, adipisicing elit. Rerum velit, eligendi officia sed quia vero itaque beatae quis, nulla eaque voluptas 
    soluta fuga doloribus laudantium maiores nemo quidem eius saepe!
</p>`;

const alignCss = 
`.gauche {
    text-align: left;
}

.droite {
    text-align: right;
}

.centrer {
    text-align: center;
}

.justifier {
    text-align: justify;
}`;

const decorationHtml = 
`<p class="souligne">Soulignement</p>
<p class="raye">Texte rayé</p>
<p class="surligne">Surlignement</p>`;

const decorationCss = 
`.souligne {
    text-decoration: underline
}

.raye {
    text-decoration: line-through #F00;
}

.surligne {
    text-decoration: overline dotted #2e7dd1;
}`;

const transformHtml = 
`<p class="maj">Je suis en majuscule</p>
<p class="min">Je suis en MINUSCULE</p>
<p class="cap">Toutes les premières lettres sont en majuscules</p>`;

const transformCss = 
`.maj {
    text-transform: uppercase;
}

.min {
    text-transform: lowercase;
}

.cap {
    text-transform: capitalize;
}`;

const variantHtml = 
`<p class="petite-maj">J'utilise les petites majuscules</p>`;

const variantCss = 
`.petite-maj {
    font-variant: small-caps;
}`;

const sizeHtml = 
`<p class="petit">Un texte écrit tout petit</p>
<p class="normal">Un texte de taille normale</p>
<p class="grand">Un texte écrit en grand</p>`;

const sizeCss = 
`.petit {
    font-size: .6rem;
}

.normal {
    font-size: 1rem;
}
    
.grand {
    font-size: 2rem;
}`;

const weightHtml = 
`<p class="normal">Un texte normal</p>
<p class="gras">Un texte en gras</p>
<p class="gras2">Un autre texte en gras</p>`;

const weightCss = 
`.normal {
    font-weight: normal;
}

.gras {
    font-weight: bold;
}
    
.gras2 {
    font-weight: 700;
}`;

const styleHtml = 
`<p class="italique">Un texte en italique</p>
<p class="oblique">Un texte en oblique</p>`;

const styleCss = 
`.italique {
    font-style: italic;
}

.oblique {
    font-style: oblique;
}`;

const familyHtml = 
`<h1>Un titre important</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum 
    voluptatibus commodi, animi ab  recusandae quia officiis sed perferendis 
    corporis, eveniet ratione, in nam sapiente eos voluptate facilis ipsa 
    eaque vero.
</p>
<p class="comic">
    Ne JAMAIS utiliser comic sans pour du texte dans un site Web 
    (ou pour votre CV)
</p>`;

const familyCss = 
`h1 {
    font-family: "Arial", sans-serif;
}

p {
    font-family: "Trebuchet MS", sans-serif;
}

.comic {
    font-family: "Comic Sans MS", cursive;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Alignement du texte</h2>
            <p>
                Par défaut, dans le navigateur web, le texte est aligné à la gauche. Nous pouvons changer ce comportement à 
                l'aide de la propriété <IC>text-align</IC>. Cette propriété accepte les valeurs <IC>left</IC>, <IC>right</IC>, <IC>center</IC> et <IC>justify</IC>.
            </p>
            <WebExample>
                <Code language="html">{alignHtml}</Code>
                <Code language="css">{alignCss}</Code>
            </WebExample>
            <ColoredBox title="À noter">
                Cette propriété doit se mettre sur le conteneur du texte et ce conteneur doit avoir un affichage 
                en <IC>block</IC>. Si ces conditions ne sont pas respecté, l'alignement a de forte chance de ne pas fonctionner.
            </ColoredBox>
        </section>

        <section>
            <h2>Taille du texte</h2>
            <p>
                Pour changer la taille du texte, c'est la propriété <IC>font-size</IC> que nous utiliserons. Cette propriété 
                nécessite une taille que l'on spécifiera généralement en <IC>rem</IC>.
            </p>
            <p>
                Voici comment l'utiliser:
            </p>
            <WebExample>
                <Code language="html">{sizeHtml}</Code>
                <Code language="css">{sizeCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Poids du texte</h2>
            <p>
                Le poids du texte est un concept particulier. En gros, cela indique si le texte est en gras ou non. C'est 
                toutefois un peu plus complexe. Le poid du texte varie entre les valeurs de 100 jusqu'à 900. Un texte normal 
                est écrit dans un poids de 400 et un texte en gras dans un poids de 700. Certaines polices de caractères 
                permettent d'avoir des poids plus grand pour un texte encore plus en gras ou des valeurs plus petites pour un 
                texte plus mince que le normal.
            </p>
            <p>
                Sauf indication contraire par un artiste graphique, vous utiliserez généralement seulement les valeurs 400 et 
                700 qui ont un mot-clé en CSS, soit <IC>normal</IC> et <IC>bold</IC>. Voici comment les utiliser:
            </p>
            <WebExample>
                <Code language="html">{weightHtml}</Code>
                <Code language="css">{weightCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Style du texte</h2>
            <p>
                Le style du texte est essentiellement lorsque nous voulons mettre le texte en italique. POur ce faire, nous 
                utiliserons la propriété <IC>font-style</IC>. Il y a toutefois plusieurs façon différente de mettre en italique, 
                soit en utilisant la valeur <IC>italic</IC> ou la valeur <IC>oblique</IC>.
            </p>
            <WebExample>
                <Code language="html">{styleHtml}</Code>
                <Code language="css">{styleCss}</Code>
            </WebExample>
            <ColoredBox title="À noter: ">
                En règle général, les artiste graphique préfèreront que vous utilisiez la valeur <IC>italic</IC> puisque 
                celle-ci préserve la belle structure d'une police de caractère. Toutefois, cette approche nécessite généralement 
                plus de chargement au démarrage de la page web, ce qui peut causer des problèmes sur les pages plus lourde. Dans 
                ce genre de cas, la valeur <IC>oblique</IC> est une meilleure solution puisqu'elle calcule l'angle du texte 
                mathématiquement à l'affichage de la page, ce qui est étonnement souvent plus rapide.
            </ColoredBox>
        </section>
        
        <section>
            <h2>Décoration du texte</h2>
            <p>
                En CSS, on nomme &quot;décoration&quot; tout utilisation de trait (ligne) au travers du texte. On compte donc le 
                soulignement, le surlignement et la rayure comme des décorations. Pour arriver à ce résultat, nous utilisons la 
                propriété <IC>text-decoration</IC> qui nous permet de spécifier quel position de ligne nous voulons, son style ainsi 
                que sa couleur.
            </p>
            <p>
                Voici un exemple:
            </p>
            <WebExample>
                <Code language="html">{decorationHtml}</Code>
                <Code language="css">{decorationCss}</Code>
            </WebExample>
            <p>
                Comme vous pouvez le voir dans l'exemple ci-dessus, il n'est pas obligatoire de spécifier chaque valeur de la 
                décoration. Il est possible de simplement spécifier la position du trait ou encore simplement la position et la 
                couleur.
            </p>
            <p>
                Pour ce qui est de la position de la ligne et de son style, voici les valeurs qui sont acceptées:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Position de la ligne</th>
                            <th>Style de la ligne</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>none</td>
                            <td>solid</td>
                        </tr>
                        <tr>
                            <td>underline</td>
                            <td>double</td>
                        </tr>
                        <tr>
                            <td>overline</td>
                            <td>dotted</td>
                        </tr>
                        <tr>
                            <td>line-through</td>
                            <td>dashed</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>wavy</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Transformation du texte</h2>
            <p>
                En CSS, on parlera de transformation du texte lorsque l'on change partiellement ou complètement la casse du 
                texte. Bref, si on désire forcer le texte en maujuscule ou en minuscule avec le CSS, nous utiliserons la 
                propriété <IC>text-transform</IC>.
            </p>
            <p>
                Cette propriété peut recevoir les valeurs <IC>uppercase</IC>, <IC>lowercase</IC> ou <IC>capitalize</IC>. Cette 
                dernière valeur met la première lettre de chaque mot en majuscule.
            </p>
            <WebExample>
                <Code language="html">{transformHtml}</Code>
                <Code language="css">{transformCss}</Code>
            </WebExample>
            <p>
                Un contexte similaire consiste à utiliser des petites majuscules pour les lettres minuscules. Il est parfois 
                possible que les artistes graphiques les ajoutent dans leurs designs et que vous ayez à les utiliser. Dans ce 
                cas-ci, on utilise plutôt la propriété <IC>font-variant</IC>.
            </p>
            <WebExample>
                <Code language="html">{variantHtml}</Code>
                <Code language="css">{variantCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Police de caractère</h2>
            <p>
                La police de caractère est le style graphique dans lequel votre texte est affiché. On utilise la 
                propriété <IC>font‑family</IC> pour définir une liste prioritaire de polices de caractères que nous voulons 
                utiliser. Il est important de définir des familles de polices plus générique dans votre liste de priorités pour 
                ainsi avoir une autre police pour l'affichage si votre police la plus prioritaire ne fonctionne pas.
            </p>
            <p>
                Voici une liste des polices génériques disponible dans les navigateurs Web. Vous devez toujours en mettre une comme 
                &quot;fallback&quot; dans votre liste de police de caractères lorsque vous utilisez la propriété <IC>font‑family</IC>.
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Police générique</th>
                            <th>Définition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>serif</td>
                            <td>Police de caractère avec <a href="https://fr.wikipedia.org/wiki/Empattement_(typographie)" target="_blank">empattement</a></td>
                        </tr>
                        <tr>
                            <td>sans-serif</td>
                            <td>Police de caractères sans empattement</td>
                        </tr>
                        <tr>
                            <td>monospace</td>
                            <td>Police dont tous les caractères ont la même largeur</td>
                        </tr>
                        <tr>
                            <td>cursive</td>
                            <td>Police simulant une écriture à la main</td>
                        </tr>
                        <tr>
                            <td>fantasy</td>
                            <td>Police de caractères décorative</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <ColoredBox title="Attention">
                Les polices de caractères varient énormément entre les systèmes d'exploitation. Par exemple, certaines polices de 
                caractère sont installées par défaut sur Windows, mais pas sur Mac ou Linux. Cela peut nous causer d'énormes 
                problèmes si nous essayons d'utiliser une police de caractère qui n'existe pas sur un système. Pour éviter ce 
                genre de situation, il est impératif que vous spécifiez une police de caractère plus génériques dans votre liste 
                de police.
            </ColoredBox>
            <p>
                Voici un exemple de l'utilisation de la propriété <IC>font-family</IC>:
            </p>
            <WebExample>
                <Code language="html">{familyHtml}</Code>
                <Code language="css">{familyCss}</Code>
            </WebExample>
        </section>
    </>
}