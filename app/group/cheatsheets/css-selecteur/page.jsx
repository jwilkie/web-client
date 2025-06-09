import CardLayout from '@/components/CardLayout';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Aide-mémoire - Sélecteur CSS",
    description: "Aide-mémoire permettant de voir l'ensemble des sélecteurs CSS vue dans ce cours.",
    keywords: ["css", "cheat", "sheet", "revision", "sélecteur"],
    group: "cheatsheets"
}

const cards = [
    {
        title: 'balise',
        content: <p>
            Sélectionne les éléments par leur nom de balise. Par exemple, <IC>header&nbsp;{'{...}'}</IC> sélectionne toutes les balises <IC>{'<header>'}</IC>.
        </p>
    }, 
    {
        title: '#id',
        content: <p>
            Sélectionne un élément par son identifiant unique <IC>id</IC> défini dans le HTML. On utilise le symbole <IC>#</IC> suivi de l'identifiant. Par exemple, <IC>#mon&#8209;id&nbsp;{'{...}'}</IC> sélectionne l'élément avec <IC>id="mon&#8209;id"</IC>.
        </p>
    },
    {
        title: '.classe',
        content: <p>
            Sélectionne les éléments par leur classe. On utilise le symbole <IC>.</IC> suivi du nom de la classe. Par exemple, <IC>.ma&#8209;classe&nbsp;{'{...}'}</IC> sélectionne tous les éléments avec la classe <IC>class="ma&#8209;classe"</IC>.
        </p>
    },
    {
        title: '[attribut]',
        content: <p>
            Sélectionne les éléments qui possèdent un attribut spécifique. Par exemple, <IC>input[type="text"]&nbsp;{'{...}'}</IC> sélectionne tous les éléments <IC>&lt;input&gt;</IC> avec l'attribut <IC>type="text"</IC>.
        </p>
    },
    {
        title: 'combinaison',
        content: <p>
            Sélectionne les éléments en combinant plusieurs sélecteurs. Par exemple, <IC>header#mon&#8209;id&nbsp;{'{...}'}</IC> sélectionne un élément <IC>&lt;header&gt;</IC> avec le <IC>id="mon&#8209;id"</IC>. On doit mettre les sélecteurs les uns à la suite des autres sans espace.
        </p>
    },
    {
        title: 'imbrication',
        content: <p>
            Sélectionne les éléments en fonction de leur position dans la hiérarchie du document. Par exemple, <IC>header&nbsp;nav&nbsp;.active</IC> sélectionne les éléments avec la classe <IC>class="active"</IC> qui sont des descendants d'un élément <IC>&lt;nav&gt;</IC> qui lui-même est un descendant d'un élément <IC>&lt;header&gt;</IC>.
        </p>
    },
    {
        title: 'multiple',
        content: <p>
            Sélectionne plusieurs éléments en utilisant une virgule pour séparer les sélecteurs. Par exemple, <IC>header, footer&nbsp;{'{...}'}</IC> sélectionne tous les éléments <IC>&lt;header&gt;</IC> et <IC>&lt;footer&gt;</IC>.
        </p>
    },
    {
        title: ':hover',
        content: <p>
            Sélecteur conditionnel qui s'applique lorsque l'utilisateur survole un élément avec la souris. Par exemple, <IC>button:hover&nbsp;{'{...}'}</IC> applique le style aux boutons lorsque la souris est au-dessus.
        </p>
    },
    {
        title: ':active',
        content: <p>
            Sélecteur conditionnel qui s'applique lorsque l'utilisateur clique sur un élément. Par exemple, <IC>button:active&nbsp;{'{...}'}</IC> applique le style aux boutons pendant qu'ils sont cliqués.
        </p>
    },
    {
        title: ':checked',
        content: <p>
            Sélecteur conditionnel qui s'applique aux éléments de formulaire qui sont cochés, comme les cases à cocher ou les boutons radio. Par exemple, <IC>input[type="checkbox"]:checked&nbsp;{'{...}'}</IC> sélectionne les cases à cocher qui sont cochées.
        </p>
    },
    {
        title: ':disabled',
        content: <p>
            Sélecteur conditionnel qui s'applique aux éléments de formulaire qui sont désactivés. Par exemple, <IC>input:disabled&nbsp;{'{...}'}</IC> sélectionne les champs de saisie qui sont désactivés.
        </p>
    },
    {
        title: ':first-child',
        content: <p>
            Sélectionne uniquement l'élément s'il est le premier enfant d'un conteneur. Par exemple, <IC>ul&nbsp;li:first-child&nbsp;{'{...}'}</IC> sélectionne le premier élément de liste dans une liste non ordonnée.
        </p>
    },
    {
        title: ':last-child',
        content: <p>
            Sélectionne uniquement l'élément s'il est le dernier enfant d'un conteneur. Par exemple, <IC>ul&nbsp;li:last-child&nbsp;{'{...}'}</IC> sélectionne le dernier élément de liste dans une liste non ordonnée.
        </p>
    },
    {
        title: ':not',
        content: <p>
            Sélectionne l'inverse du sélecteur spécifié entre paranthèse. Par exemple, <IC>div:not(.exemple)&nbsp;{'{...}'}</IC> sélectionne tous les éléments <IC>&lt;div&gt;</IC> qui n'ont pas la classe <IC>class="exemple"</IC>.
        </p>
    }
];

export default function Page() {
    return <CardLayout cards={cards} />
}