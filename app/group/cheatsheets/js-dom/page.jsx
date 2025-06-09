import CardLayout from '@/components/CardLayout';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Aide-mémoire - Javascript avec DOM",
    description: "Aide-mémoire permettant de voir et comprendre les différentes fonctions de manipulation du DOM.",
    keywords: ["js", "cheat", "sheet", "revision", "dom"],
    group: "cheatsheets"
}

const cards = [
    {
        title: 'document.getElementById()',
        content: <p>
            Sélectionne un élément du DOM par son identifiant unique (<IC>id</IC>) dans le HTML et le retourne.
        </p>
    },
    {
        title: 'document.querySelector()',
        content: <p>
            Sélectionne le premier élément du DOM qui correspond au sélecteur CSS passé en paramètre dans une chaîne de caractère. 
        </p>
    },
    {
        title: 'document.querySelectorAll()',
        content: <p>
            Sélectionne tous les éléments du DOM qui correspondent au sélecteur CSS passé en paramètre dans une chaîne de caractère et les retourne dans une forme de tableau.
        </p>
    },
    {
        title: 'element.addEventListener()',
        content: <p>
            Permet d'ajouter un listener d'événement à un élément du DOM. Il prend en paramètre le type d'événement (comme <IC>click</IC>) dans une chaîne de caractère et une fonction de rappel qui sera exécutée lorsque l'événement se produira.
        </p>
    },
    {
        title: 'element.removeEventListener()',
        content: <p>
            Permet de retirer un listener d'événement d'un élément du DOM. Il prend en paramètre le type d'événement (comme <IC>click</IC>) dans une chaîne de caractère et la fonction de rappel qui a été utilisée pour l'ajouter.
        </p>
    },
    {
        title: 'element.innerText',
        content: <p>
            Propriété qui permet de lire ou modifier le texte à l'intérieur d'un élément du DOM. 
        </p>
    },
    {
        title: 'element.classList.add()',
        content: <p>
            Méthode qui permet d'ajouter une ou plusieurs classes CSS à un élément du DOM. Elle prend en paramètre le nom de la classe (ou des classes) à ajouter dans une chaîne de caractère.
        </p>
    },
    {
        title: 'element.classList.remove()',
        content: <p>
            Méthode qui permet de retirer une ou plusieurs classes CSS d'un élément du DOM. Elle prend en paramètre le nom de la classe (ou des classes) à retirer dans une chaîne de caractère.
        </p>
    },
    {
        title: 'element.classList.toggle()',
        content: <p>
            Méthode qui permet d'ajouter ou de retirer une classe CSS d'un élément du DOM. Si la classe est déjà présente, elle est retirée, sinon elle est ajoutée. Elle prend en paramètre le nom de la classe à basculer dans une chaîne de caractère.
        </p>
    },
    {
        title: 'element.attribute',
        content: <p>
            La majorité des attributs des éléments HTML peuvent être accédés ou modifiés directement via la propriété de l'élément dans le Javascript. Par exemple, pour lire ou modifier l'attribut <IC>src</IC> d'une image, on peut utiliser <IC>image.src</IC>.
        </p>
    },
    {
        title: 'document.createElement()',
        content: <p>
            Méthode qui permet de créer un nouvel élément du DOM. Elle prend en paramètre le nom de l'élément à créer dans une chaîne de caractère, par exemple <IC>document.createElement("div")</IC> pour créer un nouveau <IC>&lt;div&gt;</IC>.
        </p>
    },
    {
        title: 'element.appendChild()',
        content: <p>
            Méthode qui permet d'ajouter un nouvel élément comme enfant d'un autre élément dans le DOM. Elle prend en paramètre l'élément à ajouter. Les éléments sont toujours ajoutés à la fin de l'élément parent.
        </p>
    },
    {
        title: 'element.remove()',
        content: <p>
            Méthode qui permet de retirer un élément du DOM. Elle n'a pas besoin de paramètre et supprime l'élément sur lequel elle est appelée.
        </p>    
    }
];

export default function Page() {
    return <CardLayout cards={cards} />
}