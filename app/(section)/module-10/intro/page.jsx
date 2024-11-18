import IC from '@/components/InlineCode';

import dom from '@/public/img/dom.drawio.svg'
import Image from 'next/image';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction au DOM",
    description: "Présentation du concept général du DOM, le modèle objet de document, qui représente la structure d'une page web en mémoire.",
    keywords: ["js", "document", "objet", "structure", "arborescence", "noeuds", "éléments"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>L&apos;arbre des éléments HTML</h2>
            <p>
                Le DOM, pour &quot;Document Object Model&quot; est une structure de données qui contient l&apos;ensemble des éléments 
                HTML d&apos;une page web. C&apos;est essentiellement un arbre, où chaque élément HTML est un noeud qui contient des 
                attributs et potentiellement d&apos;autres éléments HTML enfants.
            </p>
            <p>
                La représentation d&apos;une page web par le DOM peut ressembler à ceci:
            </p>
            <Image src={dom} alt="Exemple d'arbre DOM" />
            <p>
                On appelle ce genre de structure un arbre, car chaque élément est relié à un autre par des liens de parenté, similaire
                à un arbre généalogique. Dans le schémas, on peut aussi le voir comme un arbre à l&apos;envers ou comme les racines
                d&apos;une plante ou d&apos;un arbre.
            </p>
        </section>

        <section>
            <h2>Parcourir et modifier l&apos;arbre</h2>
            <p>
                Le DOM est accessible dans le Javascript à travers l&apos;objet <IC>document</IC>. Cet objet est la racine de 
                l&apos;arbre, et il nous permettra de parcourir et manipuler les éléments HTML de la page. Lorsqu&apos;on veut 
                accéder à un élément de l&apos;arbre, nous devons toujours le trouver en partant de la racine, soit 
                l&apos;objet <IC>document</IC>. De la même manière, si nous voulons ajouter un élément à la page, nous devrons
                trouver le noeud parent où nous voulons ajouter l&apos;élément (en partant de la racine) et ensuite ajouter 
                l&apos;élément voulu à ce noeud.
            </p>
            <p>
                Chaque noeud de l&apos;arbre est aussi un objet Javascript. Celui-ci contient, bien entendu, une liste des 
                éléments enfants qu&apos;il contient, mais aussi des méthodes et des propriétés pour accéder et modifier ces
                attributs, son style CSS ou encore y programmer des événements. Dans ce module, nous verrons comment utiliser
                ces éléments pour accéder à notre page web et la modifier.
            </p>
        </section>
    </>
}