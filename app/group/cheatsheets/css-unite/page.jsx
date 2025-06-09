import CardLayout from '@/components/CardLayout';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Aide-mémoire - Unité CSS",
    description: "Aide-mémoire permettant de voir l'ensemble des unités de mesure ou valeurs CSS vue dans ce cours.",
    keywords: ["css", "cheat", "sheet", "revision", "unité", "mesure", "valeur"],
    group: "cheatsheets"
}

const cards = [
    {
        title: 'rem',
        content: <p>
            Unité relative à la taille de la police de l'élément racine (<IC>&lt;html&gt;</IC>). Généralement équivalent à environ 16 pixels par défaut.
        </p>
    },
    {
        title: 'px',
        content: <p>
            Unité absolue en pixels. Généralement la plus petite unité de mesure utilisée en CSS.
        </p>
    },
    {
        title: '%',
        content: <p>
            Unité relative au parent de l'élément. Par exemple, <IC>width:&nbsp;50%</IC> signifie que l'élément prendra 50% de la largeur de son parent.
        </p>
    },
    {
        title: 'vw',
        content: <p>
            Unité relative à la largeur de la fenêtre d'affichage. <IC>1vw</IC> équivaut à 1% de la largeur de la fenêtre.
        </p>
    },
    {
        title: 'vh',
        content: <p>
            Unité relative à la hauteur de la fenêtre d'affichage. <IC>1vh</IC> équivaut à 1% de la hauteur de la fenêtre.
        </p>
    },
    {
        title: 'em',
        content: <p>
            Unité relative à la taille de la police dans le conteneur courant. <IC>1em</IC> est donc plus grand dans un titre que dans un paragraphe par défaut.
        </p>
    },
    {
        title: '#000000',
        content: <p>
            Valeur hexadécimale pour définir une couleur. Les 2 premiers caractères représentent le rouge, les 2 suivants le vert et les 2 derniers le bleu. 
        </p>
    },
    {
        title: '#000', 
        content: <p>
            Valeur hexadécimale abrégée pour définir une couleur. Chaque lettre/chiffre corresponde à une valeur de rouge, vert ou bleu dans l'ordre.
        </p>
    },
    {
        title: 'rgb(0, 0, 0)',
        content: <p>
            Valeur RGB pour définir une couleur. Les trois nombres représentent les valeurs de rouge, vert et bleu respectivement.
        </p>
    },
    {
        title: 'rgba(0, 0, 0, 1)',
        content: <p>
            Valeur RGBA pour définir une couleur avec transparence. Le quatrième nombre représente l'opacité (1 étant opaque et 0 transparent).
        </p>
    },
    {
        title: 'hsl(0, 100%, 50%)',
        content: <p>
            Valeur HSL pour définir une couleur en termes de teinte, saturation et luminosité.
        </p>
    },
    {
        title: 'hsla(0, 100%, 50%, 1)',
        content: <p>
            Valeur HSLA pour définir une couleur avec transparence en utilisant la teinte, saturation et luminosité.
        </p>
    },
    {
        title: 'deg',
        content: <p>
            Un angle, en degré, souvent utilisée dans les transformations CSS. Par exemple, <IC>transform:&nbsp;rotate(45deg)</IC> fait pivoter un élément de 45 degrés.
        </p>
    },
    {
        title: 'rad',
        content: <p>
            Un angle, en radians, utilisé dans les transformations CSS. Par exemple, <IC>transform:&nbsp;rotate(0.785rad)</IC> fait pivoter un élément d'environ 45 degrés.
        </p>
    },
    {
        title: 's',
        content: <p>
            Unité de temps en secondes, souvent utilisée pour les transitions et animations CSS. Par exemple, <IC>transition:&nbsp;all&nbsp;0.5s</IC> signifie que la transition prendra 0.5 seconde.
        </p>
    },
    {
        title: 'ms',
        content: <p>
            Unité de temps en millisecondes, souvent utilisée pour les transitions et animations CSS. Par exemple, <IC>transition:&nbsp;all&nbsp;500ms</IC> signifie que la transition prendra 500 millisecondes (0.5 seconde).
        </p>
    },
    {
        title: 'calc()',
        content: <p>
            Fonction pour effectuer des calculs CSS. Par exemple, <IC>width:&nbsp;calc(100%&nbsp;&#8209;&nbsp;20px)</IC>. Le calcul peut inclure des unités différentes et même 
            des <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/calc-keyword" target="_blank">constantes</a>.
        </p>
    },
    {
        title: 'url()',
        content: <p>
            Fonction pour définir une URL, souvent utilisée pour les images de fond. Par exemple, <IC>background-image:&nbsp;url('image.jpg')</IC>.
        </p>
    }
];

export default function Page() {
    return <CardLayout cards={cards} />
}