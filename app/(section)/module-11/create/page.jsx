import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Création d'élément HTML",
    description: "Présentation des fonctions pour créer des éléments HTML et les ajouter à la page à l'aide du Javascript.",
    keywords: ["js", "document", "createElement", "appendChild"],
    group: "notes"
}

const modify =
`div.innerText = 'Bonjour le monde!';
div.classList.add('important');`;

const addHtml =
`<ul id="liste">
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
<button id="bouton-ajouter">Ajouter un élément</button>`;

const addJs =
`const liste = document.getElementById('liste');
const boutonAjouter = document.getElementById('bouton-ajouter');

function incrementeListe() {
    // Créer le nouvel élément
    const nouvelElement = document.createElement('li');

    // Chercher le nombre à ajouter comme texte
    nouvelElement.innerText = liste.children.length + 1;

    // Ajouter l'élément à la liste
    liste.appendChild(nouvelElement);
}
    
boutonAjouter.addEventListener('click', incrementeListe);`;

const removeHtml =
`<div class="boite">
    1
    <input type="button" value="Retirer">
</div>
<div class="boite">
    2
    <input type="button" value="Retirer">
</div>
<div class="boite">
    3
    <input type="button" value="Retirer">
</div>`;

const removeCss =
`body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
}

.boite {
    padding: .5rem;
    border: 1px solid #000;
}`;

const removeJs =
`// Chercher tous les boutons
const inputs = document.querySelectorAll('.boite input');

// Fonction pour retirer une boîte
function removeBoite(event) {
    // Chercher la boîte, le parent du bouton
    const boite = event.currentTarget.parentElement

    // Retirer la boîte de la page
    boite.remove();
}

// Ajouter l'événement à tous les boutons
for(const input of inputs) {
    input.addEventListener('click', removeBoite);
}`;

export default function Page() {
    return <>
        <section>
            <h2>Créer un élément HTML</h2>
            <p>
                Pour créer un élément HTML, nous devons utiliser la méthode <IC>document.createElement</IC>. Cette méthode prend en 
                argument le nom de la balise de l&apos;élément que nous voulons créer. Nous pouvons l&apos;utiliser de la façon 
                suivante:
            </p>
            <CodeBlock language="js">{`const div = document.createElement('div');`}</CodeBlock>
            <p>
                Une fois l&apos;élément créé, il n&apos;est pas encore visible sur la page. Il est simplement en mémoire dans le 
                Javascript. C&apos;est d&apos;ailleurs pour cela que nous devons le stocker dans une variable. Autrement, nous ne
                pourrons pas y accéder pour le modifier ou l&apos;ajouter à la page.
            </p>
            <p>
                Un élément HTML en mémoire réagit de la même manière qu&apos;un élément dans la page, mise à part qu&apos;il n&apos;est
                pas affiché. Nous pouvons donc modifier les attributs, les styles et les événements de cet élément avant de 
                l&apos;ajouter à la page.
            </p>
            <CodeBlock language="js">{modify}</CodeBlock>
        </section>

        <section>
            <h2>Ajouter un élément à la page</h2>
            <p>
                Pour ajouter un élément à la page, nous devons le rattacher à un élément déjà existant. Pour cela, nous utilisons 
                la fonction <IC>appendChild</IC>. Cette méthode s&apos;exécute sur l&apos;élément dans lequel nous voulons ajouter 
                notre nouvel élément et prend en argument l&apos;élément que nous voulons. 
            </p>
            <p>
                Voici un exemple:
            </p>
            <WebExample>
                <Code language="html">{addHtml}</Code>
                <Code language="js">{addJs}</Code>
            </WebExample>
            <ColoredBox title="À noter">
                Vous noterez l&apos;utilisation de la propriété <IC>children</IC> de l&apos;élément <IC>liste</IC> dans l&apos;exemple
                ci-dessus. Cette propriété est un tableau contenant tous les éléments enfants de l&apos;élément. Cela nous permet de
                savoir combien d&apos;éléments sont déjà dans la liste, mais aussi de les parcourir si nous en avons besoin.
            </ColoredBox>
        </section>

        <section>
            <h2>Retirer un élément</h2>
            <p>
                Pour retirer un élément de la page, nous utiliserons la fonction <IC>remove()</IC> sur l&apos;élément que nous 
                voulons retirer. Cette méthode est très simple à utiliser, car elle ne prend aucun argument. 
            </p>
            <p>
                Voici un exemple:
            </p>
            <WebExample>
                <Code language="html">{removeHtml}</Code>
                <Code language="css" display={false}>{removeCss}</Code>
                <Code language="js">{removeJs}</Code>
            </WebExample>
            <ColoredBox title="À noter">
                Dans cet exemple, nous utilisons la propriété <IC>parentElement</IC>. Cette propriété retourne l&apos;élément parent
                de l&apos;élément sur lequel elle est appelée. Cela nous permet de retrouver l&apos;élément qui contient le bouton,
                dans ce cas-ci, le <IC>&lt;div&gt;</IC> parent que nous voulons supprimer.
            </ColoredBox>
        </section>
    </>
}