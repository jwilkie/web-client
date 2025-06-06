import CardLayout from '@/components/CardLayout';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Aide-mémoire - HTML",
    description: "Aide-mémoire permettant de voir et comprendre l'ensemble des balises HTML vues dans ce cours en un coup d'oeil.",
    keywords: ["html", "cheat", "sheet", "revision", "balises"],
    group: "cheatsheets"
}

const cards = [
    {
        title: '<html>',
        content: <p>
            Englobe l'ensemble du code HTML. Contient un attribut <IC>lang</IC> pour indiquer la langue de la page.
        </p>
    },
    {
        title: '<head>',
        content: <p>
            Contient les métadonnées de la page, comme son titre, ainsi que les liens vers les fichiers CSS et Javascript à charger. Elle doit être placée dans la balise <IC>html</IC>, avant la balise <IC>body</IC>.
        </p>
    },
    {
        title: '<body>',
        content: <p>
            Contient le contenu visible de la page, comme les entêtes, paragraphes, images, liens, etc. Elle doit être placée dans la balise <IC>html</IC>, après la balise <IC>head</IC>.
        </p>
    },
    {
        title: '<title>',
        content: <p>
            Contient le titre de la page, qui s'affiche dans l'onglet du navigateur. Elle doit être placée dans la balise <IC>head</IC>.
        </p>
    },
    {
        title: '<meta>',
        content: <p>
            Contient des métadonnées sur la page, comme son encodage, sa description, ses mots-clés, etc. Elle doit être placée dans la balise <IC>head</IC>. Pour l'instant, vous pouvez simplement garder celles qui sont autogénéré, mais vous aurez à en ajouter d'autres plus tard.
        </p>
    },
    {
        title: '<!-- -->',
        content: <p>
            Commentaires HTML. Ils ne sont pas affichés dans le navigateur et sont utilisés pour ajouter des notes ou des explications dans le code.
        </p>
    },
    {
        title: '<strong>',
        content: <p>
            Met en évidence un texte important. Il est généralement affiché en gras par défaut, mais on peut le changer à l'aide du CSS.
        </p>
    },
    {
        title: '<h1> à <h6>',
        content: <p>
            Un titres, où <IC>h1</IC> est le titre principal de la page et <IC>h6</IC> est le titre le moins important. Elles sont utilisées pour structurer le contenu de la page. Assurez-vous que ces balises sont utilisées dans le bon ordre, sans sauter de niveaux.
        </p>
    },
    {
        title: '<p>',
        content: <p>
            Un paragraphe. Elle est utilisée pour structurer le texte en paragraphes. Elle peut contenir du texte, des liens, des images, etc.
        </p>
    },
    {
        title: '<ul>',
        content: <p>
            Une liste non ordonnée. Elle est utilisée pour créer des listes à puces. Elle doit contenir des balises <IC>li</IC> pour chaque élément de la liste.
        </p>
    },
    {
        title: '<ol>',
        content: <p>
            Une liste ordonnée. Elle est utilisée pour créer des listes numérotées. Elle doit contenir des balises <IC>li</IC> pour chaque élément de la liste.
        </p>
    },
    {
        title: '<li>',
        content: <p>
            Un élément de liste. Elle est utilisée à l'intérieur des balises <IC>ul</IC> ou <IC>ol</IC> pour définir un élément dans la liste.
        </p>
    },
    {
        title: '<dl>',
        content: <p>
            Une liste de définitions. Elle est utilisée pour créer des listes de termes et leurs définitions. Elle doit contenir des balises <IC>dt</IC> et <IC>dd</IC>.
        </p>
    },
    {
        title: '<dt>',
        content: <p>
            Un terme dans une liste de définitions. Elle est utilisée à l'intérieur de la balise <IC>dl</IC> pour définir un terme.
        </p>
    },
    {
        title: '<dd>',
        content: <p>
            La définition d'un terme dans une liste de définitions. Elle est utilisée à l'intérieur de la balise <IC>dl</IC> pour fournir la définition du terme défini par la balise <IC>dt</IC>.
        </p>
    },
    {
        title: '<header>',
        content: <p>
            L'entête d'une page ou d'une section de page. Elle contiendra souvent le titre de la page, le logo et le menu de navigation. Assurez-vous de ne pas la confondre avec la balise <IC>head</IC>.
        </p>
    },
    {
        title: '<footer>',
        content: <p>
            Le pied de page d'une page ou d'une section de page. Elle contiendra souvent des informations de copyright, des liens vers les documents légaux, ainsi que des liens vers les réseaux sociaux.
        </p>
    },
    {
        title: '<main>',
        content: <p>
            Contient le contenu principal de la page. On y mettra le texte, les images et tout autre contenu qui est propre à la page.
        </p>
    },
    {
        title: '<nav>',
        content: <p>
            Le menu de navigation. Il contient une liste de liens vers les différentes sections de la page ou du site. On le voit souvent dans le <IC>header</IC>, mais il peut aussi être ailleurs.
        </p>
    },
    {
        title: '<section>',
        content: <p>
            Une section de la page. Elle est utilisée pour regrouper des contenus liés entre eux et créer des sections distinctes dans la page. Elle doit commencer par une balise <IC>h1</IC> à <IC>h6</IC> pour être valide et accessible.
        </p>
    },
    {
        title: '<article>',
        content: <p>
            Un article indépendant. Il est utilisé pour représenter un contenu autonome, comme un article de blog ou une nouvelle.
        </p>
    },
    {
        title: '<aside>',
        content: <p>
            Un contenu secondaire ou complémentaire à la page principale. Il est souvent utilisé pour afficher des informations supplémentaires, comme des liens vers d'autres articles ou des publicités ou encore pour faire une barre de navigation sur le côté de la page..
        </p>
    },
    {
        title: '<a>',
        content: <p>
            Balise de lien. Elle est utilisée pour créer des liens vers d'autres pages ou ressources. Elle doit contenir un attribut <IC>href</IC> pour indiquer l'URL de la ressource liée.
        </p>
    },
    {
        title: '<img>',
        content: <p>
            Balise d'image. Elle est utilisée pour afficher des images sur la page. Elle doit contenir un attribut <IC>src</IC> pour indiquer l'URL de l'image et un attribut <IC>alt</IC> pour fournir une description de l'image.
        </p>
    },
    {
        title: '<audio>',
        content: <p>
            Balise audio. Elle est utilisée pour intégrer des fichiers audio dans la page. Elle contiendra généralement une balise <IC>source</IC> pour indiquer le fichier audio à lire, ainsi que des attributs comme <IC>controls</IC> pour afficher les contrôles de lecture.
        </p>
    },
    {
        title: '<video>',
        content: <p>
            Balise vidéo. Elle est utilisée pour intégrer des fichiers vidéo dans la page. Elle contiendra généralement une balise <IC>source</IC> pour indiquer le fichier vidéo à lire, ainsi que des attributs comme <IC>controls</IC> pour afficher les contrôles de lecture.
        </p>
    },
    {
        title: '<source>',
        content: <p>
            Source pour les balises <IC>audio</IC> et <IC>video</IC>. Elle est utilisée pour indiquer le fichier audio ou vidéo à lire. Elle doit contenir un attribut <IC>src</IC> pour indiquer l'URL du fichier et un attribut <IC>type</IC> pour indiquer le type de fichier.
        </p>
    },
    {
        title: '<table>',
        content: <p>
            Une table de données. Elle est utilisée pour afficher des données sous forme de tableau. Elle contiendra des balises <IC>thead</IC>, <IC>tbody</IC> et <IC>tfoot</IC> pour structurer le tableau, ainsi que des balises <IC>tr</IC>, <IC>th</IC> et <IC>td</IC> pour les lignes et les cellules.
        </p>
    },
    {
        title: '<thead>',
        content: <p>
            L'en-tête d'un tableau. Elle est utilisée pour définir les rangées d'entête. Elle doit contenir des balises <IC>tr</IC> et <IC>th</IC> pour les lignes et les cellules d'entête.
        </p>
    },
    {
        title: '<tbody>',
        content: <p>
            Le contenu principal d'un tableau. Il doit contenir des balises <IC>tr</IC> et <IC>td</IC> pour les lignes et les cellules de données.
        </p>
    },
    {
        title: '<tfoot>',
        content: <p>
            Le bas d'un tableau. Elle définit les lignes de conclusion ou de sommaire dans une table, comme des totaux. Elle doit contenir des balises <IC>tr</IC> et <IC>td</IC>.
        </p>
    },
    {
        title: '<tr>',
        content: <p>
            Une ligne dans une table. Elle est utilisée à l'intérieur des balises <IC>thead</IC>, <IC>tbody</IC> ou <IC>tfoot</IC> pour définir une ligne de la table.
        </p>
    },
    {
        title: '<th>',
        content: <p>
            Une cellule d'entête dans une table. Elle est utilisée à l'intérieur de la balise <IC>tr</IC> dans le <IC>thead</IC> pour définir une cellule d'entête de colonne.
        </p>
    },
    {
        title: '<td>',
        content: <p>
            Une cellule de données dans une table. Elle est utilisée à l'intérieur des balises <IC>tr</IC> partout dans le tableau, sauf dans le <IC>thead</IC>.
        </p>
    },
    {
        title: '<form>',
        content: <p>
            Un formulaire. Il regroupe les balises d'entrée <IC>input</IC>, <IC>textarea</IC> ou <IC>select</IC> et les balises d'information comme les <IC>label</IC> qui forme un formulaire à soumettre.
        </p>
    },
    {
        title: '<input>',
        content: <p>
            Un champ de saisie qu'on utilise pour collecter des données de l'utilisateur. Il doit contenir un attribut <IC>type</IC> pour indiquer le type de champ parmi 
            les <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#input_types" target="_blank">champs valide</a>.
        </p>
    },
    {
        title: '<textarea>',
        content: <p>
            Un champ de saisie de texte multiligne qu'on utilise pour collecter du texte plus long que ce qu'un champ <IC>input</IC> peut contenir.
        </p>
    },
    {
        title: '<select>',
        content: <p>
            Une liste déroulante qu'on utilise pour permettre à l'utilisateur de choisir une ou plusieurs options parmi une liste prédéfinie. Elle doit contenir des balises <IC>option</IC> pour chaque option disponible.
        </p>
    },
    {
        title: '<option>',
        content: <p>
            Une option dans une liste déroulante. Elle est utilisée à l'intérieur de la balise <IC>select</IC> pour définir une option disponible à l'utilisateur.
        </p>
    },
    {
        title: '<label>',
        content: <p>
            Un libellé pour un champ de saisie. Il est utilisée pour associer un texte descriptif à un champ de saisie <IC>input</IC>, <IC>textarea</IC> ou <IC>select</IC>. Dans un formulaire, chaque champ devrait avoir un libellé pour être accessible.
        </p>
    },
    {
        title: '<button>',
        content: <p>
            Un bouton cliquable qu'on utilise pour soumettre un formulaire ou déclencher une action. Il peut contenir du texte, des images ou d'autres éléments.
        </p>
    },
    {
        title: '<fieldset>',
        content: <p>
            Un groupe de champs de saisie dans un formulaire. On l'utilise souvent pour sectionner les grands formulaires. Elle peut contenir une balise <IC>legend</IC> pour fournir un titre au groupe.
        </p>
    },
    {
        title: '<legend>',
        content: <p>
            Le titre d'un groupe de champs. Elle est utilisée à l'intérieur de la balise <IC>fieldset</IC> pour fournir un titre au groupe de champs.
        </p>
    },
    {
        title: '<figure>',
        content: <p>
            Une figure, comme une image ou un graphique avec du texte associé. Elle est utilisée pour regrouper une image et sa légende. Elle va généralement contenir une balise <IC>figcaption</IC> pour fournir une description de l'image.
        </p>
    },
    {
        title: '<figcaption>',
        content: <p>
            La légende ou texte associé à une image, schémas ou figure. Elle est utilisée pour fournir une description de l'image ou du graphique contenu dans la balise <IC>figure</IC>.
        </p>
    },
    {
        title: '<details>',
        content: <p>
            Une section qui peut être développée ou réduite. Elle est utilisée pour afficher des informations supplémentaires qui ne sont pas immédiatement visibles, comme une FAQ, des instructions supplémentaires ou des <em>spoilers</em>. Elle doit contenir une balise <IC>summary</IC> pour fournir un résumé de la section.
        </p>
    },
    {
        title: '<summary>',
        content: <p>
            Le résumé ou titre d'une section développable. Elle est utilisée à l'intérieur de la balise <IC>details</IC> pour fournir un titre ou un résumé de la section.
        </p>
    },
    {
        title: '<time>',
        content: <p>
            Une date ou une heure. Elle est utilisée pour indiquer une date ou une heure spécifique, comme la date de publication d'un article ou l'heure d'un événement. Elle doit contenir un attribut <IC>datetime</IC> pour indiquer la date ou l'heure dans 
            un <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time#valid_datetime_values" target="_blank">format accepté</a>.
        </p>
    },
    {
        title: '<kbd>',
        content: <p>
            Une entrée au clavier. Elle est utilisée pour indiquer une touche, comme <kbd>A</kbd> ou encore <kbd>Échap</kbd>, ou une combinaison de touches à utiliser, comme <kbd>Ctrl + C</kbd> pour copier.
        </p>
    },
    {
        title: '<blockquote>',
        content: <p>
            Une citation. Elle est utilisée pour afficher une citation ou un extrait de texte provenant d'une autre source. Elle peut contenir une balise <IC>cite</IC> pour indiquer la source de la citation.
        </p>
    },
    {
        title: '<cite>',
        content: <p>
            La source d'une citation. Elle est utilisée à l'intérieur de la balise <IC>blockquote</IC> pour indiquer la source de la citation ou de l'extrait de texte.
        </p>
    },
    {
        title: '<code>',
        content: <p>
            Un code de programmation informatique. Elle est utilisée pour afficher du code source ou des extraits de code dans le texte. Elle est beaucoup utilisé dans ce site web.
        </p>
    },
    {
        title: '<pre>',
        content: <p>
            Un texte préformaté. Elle est utilisée pour afficher du texte avec une mise en forme préservée, comme des espaces et des sauts de ligne. Elle est souvent utilisée conjointement à la balise <IC>code</IC> pour afficher du code source ou des extraits de code.
        </p>
    },
    {
        title: '<iframe>',
        content: <p>
            Un cadre intégré. Elle est utilisée pour intégrer une autre page web ou un contenu externe dans la page actuelle.
        </p>
    },
    {
        title: '<div>',
        content: <p>
            Une division ou un conteneur générique. Elle est utilisée pour regrouper des éléments et appliquer des styles ou des scripts à un groupe d'éléments. Elle n'a pas de signification sémantique particulière, mais elle est très utile pour la mise en page.
        </p>
    },
    {
        title: '<span>',
        content: <p>
            Un conteneur de texte générique. Elle est utilisée pour regrouper des éléments en ligne et appliquer des styles ou des scripts à un groupe d'éléments. Elle n'a pas de signification sémantique particulière, mais elle est très utile pour la mise en forme du texte.
        </p>
    },
    {
        title: '<link>',
        content: <p>
            Un lien vers une ressource externe, comme une feuille de style CSS. Elle est utilisée dans la balise <IC>head</IC> pour lier des fichiers de CSS à la page.
        </p>
    },
    {
        title: '<script>',
        content: <p>
            Un script à charger dans la page. Elle est utilisée pour inclure du code JavaScript dans la page. On le place dans la balise <IC>head</IC>.
        </p>
    }
]

export default function Page() {
    return <CardLayout cards={cards} />
}