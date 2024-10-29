import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Transformation",
    description: "Présentation des règles CSS pour effectuer des transformations géométriques complexes sur des éléments HTML.",
    keywords: ["css", "transform", "translate", "scale", "skew", "rotate"],
    group: "notes"
}

const syntax = 
`.selecteur {
    transform: fonction-transformation();
}`;

const syntaxMulti = 
`.selecteur {
    transform: transformation1() transformation2() transformation3();
}`;

const html = 
`<div class="container">
    <div class="boite">
        <div class="transform"></div>
    </div>
</div>`;

const css = 
`.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
}

.boite {
    width: 5rem;
    height: 5rem;
    border: 2px dashed #a00;
}
    
.transform {
    height: 100%;
    background-color: #f44;
    transition: transform .5s;
}`;

const translate = 
`.translation {
    transform: translate(2rem, 1rem);
}`;

const translateHidden = 
`.boite:hover .transform {
    transform: translate(2rem, 1rem);
}`;

const scale = 
`.homothetie {
    transform: scale(1.5, .5);
}`;

const scaleHidden = 
`.boite:hover .transform {
    transform: scale(1.5, .5);
}`;

const scaleMirror = 
`.mirroir {
    transform: scale(-.5, 1.5);
}`;

const scaleMirrorHidden = 
`.boite:hover .transform {
    transform: scale(-.5, 1.5);
}`;

const rotate = 
`.rotation {
    transform: rotate(45deg);
}`;

const rotateHidden = 
`.boite:hover .transform {
    transform: rotate(45deg);
}`;

const skew = 
`.deformation {
    transform: skew(-30deg, 0);
}`;

const skewHidden = 
`.boite:hover .transform {
    transform: skew(-30deg, 0);
}`;

const multiple = 
`.multiple {
    transform: translate(4rem, -1rem) rotate(30deg);
}`;

const multipleHidden = 
`.boite:hover .transform {
    transform: translate(4rem, -1rem) rotate(30deg);
}`;

const origin = 
`.transformation {
    transform: rotate(135deg);
}

.origine {
    transform-origin: top left;
}`;

const originHtml = 
`<div class="titles">
    <div>Origine au milieu</div>
    <div>Origine en haut à gauche</div>
</div>
<div class="container">
    <div class="boite">
        <div class="transform"></div>
        <div class="dot"></div>
    </div>
    <div class="boite origin">
        <div class="transform"></div>
        <div class="dot"></div>
    </div>
</div>`;

const originCss = 
`.titles {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.titles div {
    width: 5rem;
    text-align: center;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 10rem;
}

.boite {
    position: relative;
    width: 5rem;
    height: 5rem;
    border: 2px dashed #a00;
}
    
.transform {
    height: 100%;
    background-color: #f44;
    transition: transform .5s;
}
    
.boite:hover .transform {
    transform: rotate(135deg);
}
    
.origin .transform {
    transform-origin: top left;
}
    
.dot {
    position: absolute;
    left: 50%;
    top: 50%;
    width: .75rem;
    height: .75rem;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #a44;
}

.origin .dot {
    left: 0;
    top: 0;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Les transformations sont un moyen de changer la forme et la position des éléments HTML à partir d&apos;opération 
                géométrique sans modifier le flux normal de la page Web. Elles sont utiles pour créer des effets visuels 
                intéressant, entres autres si utilisé conjointement avec les transitions ou les animations pour déplacer ou 
                modifier des éléments de façon agréable à l&apos;écran. Dans ce document, nous survolerons les transformations de 
                base que CSS nous permet de faire.
            </p>
            <p>
                Les transformations utilisent des calculs mathématiques matriciels pour générer les modifications. Par 
                conséquant, ces transformations sont généralement calculé par le processeur graphique de votre ordinateur (GPU) 
                puisque celui-ci est plus performant que votre processeur régulier pour ce type d&apos;opération.
            </p>
        </section>

        <section>
            <h2>Syntaxe</h2>
            <p>
                La syntaxe de base d&apos;une transformation est la suivante:
            </p>
            <CodeBlock language="css">{syntax}</CodeBlock>
            <p>
                Il est aussi possible d&apos;appliquer plusieurs transformation géométrique. Pour ce faire, nous devons simplement 
                indiquer chaque fonction de transformation, les unes après les autres, directement dans la 
                propriété <IC>transform</IC>.
            </p>
            <CodeBlock language="css">{syntaxMulti}</CodeBlock>
            <p>
                Il existe plusieurs fonctions de transformations déjà intégré dans les navigateurs. Nous utiliserons 
                majoritairement ces fonctions déjà établies, mais il est possible de créer nos propres transformation avec de 
                bonnes connaissanses en mathématique. Dans cette page, nous verrons comment utiliser les fonctions existantes 
                que vous utiliserez le plus souvent. 
            </p>
            <ColoredBox title="À noter: ">
                Pour visualiser la transformation dans cette page, déplacer votre souris sur les exemples. Ceux-ci s&apos;animeront 
                pour vous montrer la transformation.
            </ColoredBox>
        </section>

        <section>
            <h2>Translation</h2>
            <p>
                La fonction <IC>translate(x, y)</IC> indique une translation en X et Y. Les unités de mesure accepté pour cette 
                transformation sont les même que les unités de distance habituelle, comme le <IC>px</IC>, le <IC>em</IC>, 
                le <IC>%</IC> ou autre.
            </p>
            <WebExample>
                <Code language="html" display={false}>{html}</Code>
                <Code language="css" display={false}>{css}</Code>
                <Code language="css" display={false}>{translateHidden}</Code>
                <Code language="css">{translate}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Homothétie</h2>
            <p>
                La fonction <IC>scale(x, y)</IC> indique une mise à l&apos;échelle (homothétie) en X et Y qui aggrandie, rétricie ou 
                crée un effet mirroir. Il n&apos;y a pas d&apos;unité de mesure pour cette fonction. La valeur 1 indique que l&apos;on garde la 
                même taille et la valeur 0 indique une taille de zéro, donc inexistante. Ainsi, si la valeur est entre 0 et 1, 
                on a un rapetissement et si la valeur est plus grande que 1, on a un agrandissement. Si la valeur est négative, 
                il y aura un effet mirroir.
            </p>
            <WebExample>
                <Code language="html" display={false}>{html}</Code>
                <Code language="css" display={false}>{css}</Code>
                <Code language="css" display={false}>{scaleHidden}</Code>
                <Code language="css">{scale}</Code>
            </WebExample>
            <WebExample>
                <Code language="html" display={false}>{html}</Code>
                <Code language="css" display={false}>{css}</Code>
                <Code language="css" display={false}>{scaleMirrorHidden}</Code>
                <Code language="css">{scaleMirror}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Rotation</h2>
            <p>
                La fonction <IC>rotate(angle)</IC> indique une rotation de l&apos;élément d&apos;un certain angle. L&apos;angle sera 
                généralement défini en degrés (<IC>deg</IC>) ou en radians (<IC>rad</IC>).
            </p>
            <WebExample>
                <Code language="html" display={false}>{html}</Code>
                <Code language="css" display={false}>{css}</Code>
                <Code language="css" display={false}>{rotateHidden}</Code>
                <Code language="css">{rotate}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Déformation</h2>
            <p>
                La fonction <IC>skew(x, y)</IC> indique une distorsion oblique de l&apos;élément d&apos;un certain angle en X et en Y. 
                Les angles spécifiés doivent utiliser les mêmes unités de mesure que dans la fonction de rotation, soit le 
                degrés (<IC>deg</IC>) ou le radians (<IC>rad</IC>).
            </p>
            <WebExample>
                <Code language="html" display={false}>{html}</Code>
                <Code language="css" display={false}>{css}</Code>
                <Code language="css" display={false}>{skewHidden}</Code>
                <Code language="css">{skew}</Code>
            </WebExample>
        </section>
        
        <section>
            <h2>Transformation multiples</h2>
            <p>
                Il est possible de combiner plusieurs fonctions de transformation. Il suffit simplement des les enchaîner les 
                unes après les autres dans la propriété <IC>transform</IC>.
            </p>
            <WebExample>
                <Code language="html" display={false}>{html}</Code>
                <Code language="css" display={false}>{css}</Code>
                <Code language="css" display={false}>{multipleHidden}</Code>
                <Code language="css">{multiple}</Code>
            </WebExample>
            <ColoredBox title="Attention: ">
                L&apos;ordre des transformations est très importante. Une translation suivie d&apos;une rotation ne donne pas le même 
                résultat qu&apos;une rotation suivie d&apos;une translation!
            </ColoredBox>
        </section>

        <section>
            <h2>Origine de transformation</h2>
            <p>
                Par défaut, les transformations se font à partir du centre de l&apos;élément sur lequel nous appliquons la 
                transformation. Il est toutefois possible d&apos;appliquer la tranformation à partir d&apos;un autre point dans l&apos;élément 
                à l&apos;aide de de la propriété <IC>transform‑origin</IC>. Vous pouvez en apprendre davantage en consultant le lien 
                suivant:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin" target="_blank">
                    MDN - transform-origin
                </a>
            </p>
            <WebExample>
                <Code language="html" display={false}>{originHtml}</Code>
                <Code language="css" display={false}>{originCss}</Code>
                <Code language="css">{origin}</Code>
            </WebExample>
        </section>
    </>
}