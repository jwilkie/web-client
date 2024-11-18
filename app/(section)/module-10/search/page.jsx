import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Rechercher des éléments dans le HTML",
    description: "Présentation des différentes fonctions pour accéder aux éléments HTML dans le Javascript.",
    keywords: ["js", "document", "getElementById", "querySelector", "querySelectorAll"],
    group: "notes"
}

const byIdHtml = 
`<form>
    <div id="form-erreur">
        Il y a une erreur
    </div>
</form>`;

const byIdJs = 
`const formErreur = document.getElementById('form-erreur');`;

const byCSSHtml = 
`<nav>
    <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/produits" class="actif">Produits</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>`;

const byCSSJs = 
`const lienActif = document.querySelector('nav a.actif');
const lienInactif = document.querySelector('nav a:not(.actif)');`;

const allHtml = 
`<div id="question1">
    Comment trouvez-vous ce cours?
    <label>
        Aucunement intéressant
        <input type="radio">
    </label>
    <label>
        Intéressant
        <input type="radio">
    </label>
    <label>
        Très intéressant
        <input type="radio">
    </label>
</div>`;

const allJs = 
`const radios = document.querySelectorAll('#question1 input');

for(const radio of radios) {
    // ...
}`;

export default function Page() {
    return <>
        <section>
            <h2>Recherche</h2>
            <p>
                Si vous voulez avoir accès à un élément HTML dans votre code Javascript, vous devez tout d&apos;abords le rechercher 
                dans l&apos;arbre du DOM à partir de sa racine, soit l&apos;object <IC>document</IC>. Cette recherche est 
                obligatoire. On ne peut pas accéder directement à un élément de l&apos;arbre. Heureusement, les navigateurs nous 
                simplifient la tâche en nous offrant un ensemble de fonctionnalités pour y arriver.
            </p>
            <p>
                Une fois l&apos;élément recherché et trouvé, on pourra le stocker dans une variable pour y accéder plus facilement
                et éviter d&apos;avoir à le rechercher à chaque fois. Ce sera plus performant et le code sera plus lisible.
            </p>
            <p>
                Il existe plusieurs fonctions pour faire nos recherches dans le HTML. Nous verrons les plus utile dans cette page.
            </p>
        </section>

        <section>
            <h2>Recherche par identifiant</h2>
            <p>
                La recherche d&apos;un élément par son identifiant est la plus rapide et la plus simple. La méthode est facile à
                utiliser:
            </p>
            <ol>
                <li>
                    On ajoute un identifiant <IC>id</IC> à l&apos;élément que l&apos;on veut rechercher dans le HTML.
                </li>
                <li>
                    On utilise la méthode <IC>getElementById</IC> de l&apos;objet <IC>document</IC> pour le retrouver dans le 
                    Javascript.
                </li>
            </ol>
            <p>
                Voici un exemple:
            </p>	
            <CodeBlock language="html">{byIdHtml}</CodeBlock>
            <CodeBlock language="js">{byIdJs}</CodeBlock>
            <p>
                Dans l&apos;exemple ci-dessus, on recherche l&apos;élément avec l&apos;identifiant <IC>form-erreur</IC> dans le
                HTML et on le stocke dans la variable <IC>formErreur</IC>. On pourra ensuite accéder directement à cet élément
                avec cette variable.
            </p>
            <ColoredBox title="Attention:">
                Il est important de comprendre que l&apos;identifiant <IC>id</IC> doit être unique dans la page. Si vous avez
                plusieurs éléments avec le même identifiant, le HTML n&apos;est pas valide et la 
                méthode <IC>getElementById</IC> retournera uniquement le premier élément.
            </ColoredBox>
        </section>

        <section>
            <h2>Recherche par sélecteur CSS</h2>
            <p>
                Lorsque vous ne pouvez pas utiliser un identifiant pour rechercher un élément, ou simplement parce que vous ne 
                voulez pas polluer votre HTML avec une énorme quantité d&apos;identifiants, vous pouvez utiliser les sélecteurs CSS
                pour faire vos recherches. Pour ce faire, on utilise la fonction <IC>querySelector</IC>, qui appartient elle aussi à
                l&apos;objet <IC>document</IC>. Cette fonction prends en paramètre un sélecteur CSS et retourne le premier élément
                qui réponds à ce sélecteur.
            </p>
            <p>
                Voici un exemple:
            </p>
            <CodeBlock language="html">{byCSSHtml}</CodeBlock>
            <CodeBlock language="js">{byCSSJs}</CodeBlock>
            <p>
                Dans cet exemple, on recherche le lien qui est actif dans la barre de navigation. On utilise donc un sélecteur CSS 
                dans la fonction <IC>querySelector</IC> pour trouver l&apos;élément en question. On voit aussi que l&apos;on 
                essaie de trouver les liens qui ne sont pas actifs avec le sélecteur <IC>:not(.actif)</IC>. Il est 
                important de noter que la fonction <IC>querySelector</IC> retourne uniquement le premier élément qui correspond au
                sélecteur. Dans ce cas-ci, seul le premier lien sera retourné et stocké dans la variable.
            </p>
            <ColoredBox title="À noter">
                Dans les derniers exemples, nous utilisons ici le mot-clé <IC>const</IC> pour déclarer nos variables. À première vue, 
                on pourrait croire que c&apos;est parce que l&apos;on ne modifiera pas ces éléments HTML, mais ce n&apos;est pas 
                nécessairement le cas. On utilise ici <IC>const</IC> pour dire que la variable ne peut pas être réassignée. 
                Cependant, on peut toujours modifier l&apos;objet HTML lui-même en modifiant ses propriétés qui elles, ne sont 
                pas constantes.
            </ColoredBox>
        </section>

        <section>
            <h2>Recherche de plusieurs éléments</h2>
            <p>
                Si vous voulez rechercher plusieurs éléments dans votre page web, la façon la plus simple est d&apos;utiliser la
                fonction <IC>querySelectorAll</IC>. Cette fonction prends en paramètre un sélecteur CSS, tout comme la 
                fonction <IC>querySelector</IC>, mais elle retournera un tableau de tous les éléments qui correspondent au
                sélecteur CSS au lieu de seulement le premier.
            </p>
            <p>
                Voici un exemple:
            </p>
            <CodeBlock language="html">{allHtml}</CodeBlock>
            <CodeBlock language="js">{allJs}</CodeBlock>
            <p>
                Dans cet exemple, on recherche tous les boutons radio de la question 1 et on les stocke dans un tableau, ce que 
                la fonction <IC>querySelectorAll</IC> retourne fait. Si nous voulons par la suite effectuer des opérations sur
                tous ces éléments, nous devons les parcourir un par un avec une boucle.
            </p>
        </section>
    </>
}