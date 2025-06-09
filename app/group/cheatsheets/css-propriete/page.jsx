import CardLayout from '@/components/CardLayout';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Aide-mémoire - Propriétés CSS",
    description: "Aide-mémoire permettant de voir et comprendre l'ensemble des propriétés CSS vues dans ce cours en un coup d'oeil.",
    keywords: ["css", "cheat", "sheet", "revision", "propriété"],
    group: "cheatsheets"
}

const cards = [
    {
        title: 'color',
        content: <p>
            La couleur du texte. Il faut lui passer une valeur de couleur.
        </p>
    },
    {
        title: 'background-color',
        content: <p>
            La couleur de fond d'un élément. Il faut lui passer une valeur de couleur.
        </p>
    },
    {
        title: 'box-sizing: border-box',
        content: <p>
            La façon dont les dimensions d'un élément sont calculées. Avec <IC>border-box</IC>, la largeur et la hauteur 
            incluent le padding et la bordure, ce qui est généralement voulu.
        </p>
    },
    {
        title: 'width',
        content: <p>
            La largeur d'un élément. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'height',
        content: <p>
            La hauteur d'un élément. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'max-width',
        content: <p>
            La largeur maximale d'un élément. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'max-height',
        content: <p>
            La hauteur maximale d'un élément. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'min-width',
        content: <p>
            La largeur minimale d'un élément. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'min-height',
        content: <p>
            La hauteur minimale d'un élément. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'margin',
        content: <p>
            L'espace extérieur autour d'un élément. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'margin: _ _',
        content: <p>
            L'espace extérieur autour d'un élément. Si on lui passe deux valeurs, la première est pour le haut et le 
            bas, la seconde pour la gauche et la droite.
        </p>
    },
    {
        title: 'margin: _ _ _ _',
        content: <p>
            L'espace extérieur autour d'un élément. Si on lui passe quatre valeurs, elles sont respectivement pour le haut, 
            la droite, le bas et la gauche.
        </p>
    },
    {
        title: 'margin-top, margin-right, margin-bottom, margin-left',
        content: <p>
            L'espace extérieur autour d'un élément, mais seulement pour un côté spécifique. Il s'utilise de la même manière que <IC>margin</IC>, 
            mais affecte seulement le côté spécifié. 
        </p>
    },
    {
        title: 'padding',
        content: <p>
            L'espace intérieur entre le contenu et la bordure d'un élément. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'padding: _ _',
        content: <p>
            L'espace intérieur entre le contenu et la bordure d'un élément. Si on lui passe deux valeurs, la première est pour le haut et le 
            bas, la seconde pour la gauche et la droite.
        </p>
    },
    {
        title: 'padding: _ _ _ _',
        content: <p>
            L'espace intérieur entre le contenu et la bordure d'un élément. Si on lui passe quatre valeurs, elles sont respectivement pour le haut, 
            la droite, le bas et la gauche.
        </p>
    },
    {
        title: 'padding-top, padding-right, padding-bottom, padding-left',
        content: <p>
            L'espace intérieur entre le contenu et la bordure d'un élément, mais seulement pour un côté spécifique. Il s'utilise de la même manière que <IC>padding</IC>, 
            mais affecte seulement le côté spécifié. 
        </p>
    },
    {
        title: 'border',
        content: <p>
            La bordure autour d'un élément. Il faut lui passer une valeur de style, d'épaisseur et de couleur de trait une 
            à la suite de l'autre comme ceci: <IC>1px&nbsp;solid&nbsp;#000</IC>. Voici 
            les <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#values" target="_blank">styles de traits acceptés</a>.
        </p>
    },
    {
        title: 'border-top, border-right, border-bottom, border-left',
        content: <p>
            La bordure autour d'un élément, mais seulement pour un côté spécifique. Elle s'utilise de la même manière que <IC>border</IC>, 
            mais affecte seulement le côté spécifié. 
        </p>
    },
    {
        title: 'border-radius',
        content: <p>
            L'arrondi des coins d'un élément. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'display',
        content: <p>
            Le type d'affichage d'un élément. Il faut lui passer une valeur 
            de <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/display#grouped_values" target="_blank">type d'affichage accepté</a>.
        </p>
    },
    {
        title: 'display: none',
        content: <p>
            Spécifie que l'élément ne doit pas être affiché du tout dans la page.
        </p>
    },
    {
        title: 'display: block',
        content: <p>
            Spécifie que l'élément doit être affiché comme un bloc, prenant toute la largeur disponible et commençant sur une nouvelle ligne.
        </p>
    },
    {
        title: 'display: inline',
        content: <p>
            Spécifie que l'élément doit être affiché en ligne, prenant seulement la largeur nécessaire, comme s'il était du texte.
        </p>
    },
    {
        title: 'list-style-type',
        content: <p>
            Le type de puce ou de numérotation pour les listes <IC>ul</IC> ou <IC>ol</IC>. Il faut lui passer une valeur 
            de <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#values" target="_blank">type de liste accepté</a>.
        </p>
    },
    {
        title: 'list-style-image',
        content: <p>
            L'image à utiliser comme puce pour les listes <IC>ul</IC>. Il faut lui passer l'URL de l'image à utiliser ou <IC>none</IC>.
        </p>
    },
    {
        title: 'list-style-position',
        content: <p>
            La position des marqueurs dans les listes <IC>ul</IC> ou <IC>ol</IC>. On peut l'utiliser pour s'aider dans l'alignement des listes. Elle 
            accepte les valeurs <IC>inside</IC> ou <IC>outside</IC>.
        </p>
    },
    {
        title: 'list-style',
        content: <p>
            Une propriété raccourcie pour définir le type de liste, l'image utilisé pour les puces et la position des marqueurs 
            en une seule déclaration. Elle accepte les valeurs <IC>list-style-type</IC>, <IC>list-style-image</IC> et <IC>list-style-position</IC> l'une 
            à la suite de l'autre comme ceci: <IC>disc none outside</IC>.
        </p>
    },
    {
        title: 'border-collapse',
        content: <p>
            La façon dont les bordures des cellules d'un tableau <IC>table</IC> sont affichées. Elle accepte les valeurs <IC>collapse</IC> ou <IC>separate</IC>.
        </p>
    },
    {
        title: 'border-spacing',
        content: <p>
            L'espace entre les bordures des cellules d'un tableau <IC>table</IC> lorsque <IC>border-collapse</IC> est à <IC>separate</IC>. Il faut lui passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'border-spacing: _ _',
        content: <p>
            L'espace entre les bordures des cellules d'un tableau <IC>table</IC> lorsque <IC>border-collapse</IC> est à <IC>separate</IC>. Si on lui passe deux valeurs, la première est pour l'horizontal et la seconde pour le vertical.
        </p>
    },
    {
        title: 'caption-side',
        content: <p>
            La position de la légende d'un <IC>table</IC>. Elle permet de déplacer le <IC>caption</IC> au-dessus ou au-dessous du tableau. Elle accepte donc uniquement les valeurs <IC>top</IC> ou <IC>bottom</IC>.
        </p>
    },
    {
        title: 'text-align',
        content: <p>
            L'alignement du texte à l'intérieur d'un élément. Il faut lui passer une valeur parmi <IC>left</IC>, <IC>right</IC>, <IC>center</IC> ou <IC>justify</IC>.
        </p>
    },
    {
        title: 'font-size',
        content: <p>
            La taille de la police de caractères utilisée pour le texte. Il faut lui passer une unité de mesure de taille. On utilisera typiquement le <IC>rem</IC> ou le <IC>em</IC>.
        </p>
    },
    {
        title: 'weight',
        content: <p>
            Le poids de la police de caractères utilisée pour le texte. Il faut lui passer une valeur parmi <IC>normal</IC>, <IC>bold</IC>, <IC>bolder</IC> ou <IC>lighter</IC>, ou un nombre entre 100 et 900.
        </p>
    },
    {
        title: 'font-style',
        content: <p>
            Le style de la police de caractères utilisée pour le texte. On l'utilise pour mettre le texte en italique. Il faut lui passer une valeur parmi <IC>normal</IC>, <IC>italic</IC> ou <IC>oblique</IC>.
        </p>
    },
    {
        title: 'text-decoration',
        content: <p>
            Les traits décoratifs appliqués au texte. On l'utilise pour souligner, surligner ou barrer le texte. On peut lui passer la position, le style, l'épaisseur et la couleur de la ligne. Les valeurs possible 
            de <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style#values" target="_blank">style de ligne</a> et 
            de <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line#values" target="_blank">position de ligne</a> peuvent 
            être trouvé aux liens correspondants.
        </p>
    },
    {
        title: 'text-transform',
        content: <p>
            La transformation du texte pour le forcer en majuscules, minuscules ou pour seulement mettre la première lettre en majuscule. Il faut lui passer une valeur parmi <IC>uppercase</IC>, <IC>lowercase</IC> ou <IC>capitalize</IC>.
        </p>
    },
    {
        title: 'font-variant',
        content: <p>
            La variante de la police de caractères utilisée pour le texte. On l'utilise pour mettre le texte en "petites majuscules". Si la police de caractères le permet, on peut lui passer la valeur <IC>small-caps</IC>.
        </p>
    },
    {
        title: 'font-family',
        content: <p>
            La famille de la police de caractères utilisée pour le texte. Il faut lui passer le nom de la police de caractères, ou une liste de polices de caractères séparées par des virgules qui seront utilisé dans l'ordre si une police ne peut être chargé. On peut aussi utiliser les valeurs <IC>serif</IC>, <IC>sans-serif</IC>, <IC>monospace</IC>, <IC>cursive</IC> ou <IC>fantasy</IC> qui pointe sur des polices différentes dépendant des systèmes d'exploitation.
        </p>
    },
    {
        title: 'display: flex',
        content: <p>
            Spécifie que l'élément est un conteneur flex, ce qui permet de disposer les éléments enfants les uns à côté des autres.
        </p>
    },
    {
        title: 'flex-direction',
        content: <p>
            La direction dans laquelle les éléments enfants d'un conteneur flex sont disposés. Par défaut, les éléments sont disposés horizontalement de gauche à droite avec la valeur <IC>row</IC>. On peut toutefois aussi utiliser <IC>column</IC> pour mettre les éléments un sous l'autre.
        </p>   
    },
    {
        title: 'flex-wrap',
        content: <p>
            Spécifie si les éléments enfants d'un conteneur flex doivent être regroupés sur une seule ligne ou s'ils peuvent être répartis sur plusieurs lignes. Par défaut, les éléments sont regroupés sur une seule ligne avec la valeur <IC>nowrap</IC>. On peut toutefois aussi utiliser <IC>wrap</IC> pour permettre aux éléments de se répartir sur plusieurs lignes.
        </p>
    },
    {
        title: 'gap',
        content: <p>
            L'espace entre les éléments enfants d'un conteneur flex ou d'une grille. Il faut lui passer une unité de mesure de taille. On peut aussi lui passer deux valeurs, la première pour l'horizontal et la seconde pour le vertical.
        </p>
    },
    {
        title: 'align-items',
        content: <p>
            L'alignement des éléments sur l'axe du conteneur flex. Il faut lui passer une valeur parmi <IC>flex-start</IC>, <IC>flex-end</IC>, <IC>center</IC>, <IC>baseline</IC> ou <IC>stretch</IC>. La disposition flex utilise la valeur <IC>stretch</IC> par défaut.
        </p>
    },
    {
        title: 'justify-content',
        content: <p>
            La gestion de l'espace sur l'axe du conteneur flex. On l'utilise pour déplacer et diviser l'espace vide autour des éléments enfants. Il faut lui passer une valeur parmi <IC>flex-start</IC>, <IC>flex-end</IC>, <IC>center</IC>, <IC>space-between</IC>, <IC>space-around</IC> ou <IC>space-evenly</IC>. La disposition flex utilise la valeur <IC>flex-start</IC> par défaut.
        </p>
    },
    {
        title: 'display: grid',
        content: <p>
            Spécifie que l'élément est un conteneur de grille, ce qui permet de disposer les éléments enfants dans une grille en 2 dimensions.
        </p>
    },
    {
        title: 'position',
        content: <p>
            La façon dont un élément est positionné dans la page. Il faut lui passer une valeur parmi <IC>static</IC>, <IC>relative</IC>, <IC>absolute</IC>, <IC>fixed</IC> ou <IC>sticky</IC>. La position par défaut est <IC>static</IC>.
        </p>
    },
    {
        title: 'position: relative',
        content: <p>
            Spécifie que l'élément est positionné relativement à sa position normale dans le flux de la page. On peut utiliser les propriétés <IC>top</IC>, <IC>right</IC>, <IC>bottom</IC> et <IC>left</IC> pour le déplacer par rapport à sa position normale.
        </p>
    },
    {
        title: 'position: absolute',
        content: <p>
            Spécifie que l'élément est positionné par rapport à son conteneur parent le plus proche qui a une position autre que <IC>static</IC>. On peut utiliser les propriétés <IC>top</IC>, <IC>right</IC>, <IC>bottom</IC> et <IC>left</IC> pour le déplacer par rapport à ce conteneur.
        </p>
    },
    {
        title: 'position: fixed',
        content: <p>
            Spécifie que l'élément est positionné par rapport à la fenêtre du navigateur et ne bouge pas lorsque l'utilisateur fait défiler la page. On peut utiliser les propriétés <IC>top</IC>, <IC>right</IC>, <IC>bottom</IC> et <IC>left</IC> pour le placer à un endroit spécifique de la fenêtre.
        </p>
    },
    {
        title: 'position: sticky',
        content: <p>
            Spécifie que l'élément est positionné de manière relative jusqu'à ce qu'il atteigne une certaine position dans le défilement, après quoi il devient fixe. On peut utiliser les propriétés <IC>top</IC>, <IC>right</IC>, <IC>bottom</IC> et <IC>left</IC> pour définir cette position.
        </p>
    },
    {
        title: 'top, right, bottom, left',
        content: <p>
            Ces propriétés sont utilisées pour déplacer un élément positionné par rapport à sa position normale, à son conteneur parent ou à la fenêtre dépendant de sa valeur de position. Il faut leur passer une unité de mesure de taille.
        </p>
    },
    {
        title: 'z-index',
        content: <p>
            La profondeur d'un élément dans la pile de rendu. On l'utilise pour contrôler quel élément est au-dessus ou en dessous des autres lors de superpositions avec la propriété <IC>position</IC>. Il faut lui passer un nombre entier, positif ou négatif.
        </p>
    },
    {
        title: 'transform',
        content: <p>
            Applique une transformation géométrique à un élément, comme la rotation, la mise à l'échelle ou la translation. On lui passe 
            une <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function" target="_blank">fonction de transformation</a>.
        </p>
    },
    {
        title: 'transform-origin',
        content: <p>
            Définit le point d'origine pour les transformations appliquées à un élément. On utilise souvent les valeurs <IC>center</IC>, <IC>top</IC>, <IC>bottom</IC>, <IC>left</IC> ou <IC>right</IC> pour définir l'origine en X et en Y. On peut aussi lui passer une unité de mesure de taille pour définir l'origine précisément.
        </p>
    },
    {
        title: 'transition',
        content: <p>
            Permet de créer des transitions animé entre les états d'un élément. On lui passe la propriété que l'on veut animer, la durée de l'animation, le délai avant le début de l'animation et la fonction de timing. Par exemple: <IC>color 0.3s ease-in-out</IC>. Vous pouvez trouver 
            la <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition" target="_blank">documentation</a> de cette propriété au lien correspondant.
        </p>
    }
];

export default function Page() {
    return <CardLayout cards={cards} />
}