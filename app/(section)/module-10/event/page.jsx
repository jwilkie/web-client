import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Ajouter un évènements",
    description: "Présentation des évènements en Javascript, une façon de réagir aux actions de l'utilisateur sur une page web.",
    keywords: ["js", "event", "addEventListener", "click", "input", "submit"],
    group: "notes"
}

const clicHtml =
`<button id="bouton">Cliquez ici</button>`;

const clicJs =
`const bouton = document.getElementById('bouton');

function clicBouton() {
    console.log('Le bouton a été cliqué!');
}

bouton.addEventListener('click', clicBouton);`;

const submitHtml =
`<form id="form-connexion">
    <label> 
        Nom d'utilisateur: 
        <input type="text" name="nom">
    </label>
    <label>
        Mot de passe:
        <input type="password" name="motdepasse">
    </label>
    <input type="submit" value="Connexion">
</form>`;

const submitJs =
`const formConnexion = document.getElementById('form-connexion');

function connexion() {
    console.log('L\\'utilisateur essaie de se connecter!');
    console.log('Nom d\\'utilisateur: ' + formConnexion.nom.value);
    console.log('Mot de passe: ' + formConnexion.motdepasse.value);
}

formConnexion.addEventListener('submit', connexion);`;

const inputHtml =
`<input type="text" id="champ">`;

const inputJs =
`const champ = document.getElementById('champ');

function toucheAppuye() {
    console.log('Une touche a été pressée!');
    console.log('Contenu du champ: ' + champ.value);
}
    
champ.addEventListener('input', toucheAppuye);`;

const keydownHtml =
`<p>Cliquez ici et appuyez sur une touche du clavier</p>`;

const keydownJs =
`function toucheAppuyee(event) {
    console.log('Une touche a été appuyée!');
    console.log('Code de la touche: ' + event.key);
}

document.addEventListener('keydown', toucheAppuyee);`;

export default function Page() {
    return <>
        <section>
            <h2>Évènement</h2>
            <p>
                Un évènement en Javascript est une action qui se produit sur une page web, comme un clic de souris, une pression de
                touche du clavier, la soumission d&apos;un formulaire, la redimension de la fenêtre, le défilement de la page, le 
                démarrage d&apos;une vidéo, le survol d&apos;un élément, le démarrage d&apos;une animation, etc. Comme vous pouvez 
                le constater, il y a une multitude d&apos;évènements qui peuvent se produire sur une page web. Il est même possible
                de créer ses propres évènements personnalisés.
            </p>
            <p>
                Pour nous, les programmeurs, les évènements sont importants, car ils nous permettent de réagir à ces actions de
                l&apos;utilisateur. Par exemple, si l&apos;utilisateur clique sur un bouton, nous pouvons réagir à ce clic en
                exécutant une fonction qui change le contenu de la page ou qui envoie des données dans une base de données. 
                C&apos;est ce qui rend les pages web interactives. Pour y arriver, nous utiliserons le concept de &quot;listener&quot;,
                qui nous permettra de programmer des fonctions qui réagissent à des évènements spécifiques.
            </p>
        </section>

        <section>
            <h2>Réagir à un évènement</h2>
            <p>
                Pour réagir à un évènement, nous utiliserons la fonction <IC>addEventListener</IC>. Cette fonction programme une 
                autre fonction qui sera exécutée lorsqu&apos;un évènement spécifique se produira. La syntaxe de cette fonction est
                la suivante:
            </p>
            <CodeBlock language="js">{`element.addEventListener('nom-evenement', callback);`}</CodeBlock>
            <p>
                Voici les points importants à retenir:
            </p>
            <dl>
                <dt><IC>element</IC></dt>
                <dd>
                    C&apos;est l&apos;élément HTML sur lequel nous voulons écouter l&apos;évènement. Cet élément
                    doit être préalablement trouvé dans le DOM avant de pouvoir lui ajouter un &quot;listener&quot;.
                </dd>

                <dt><IC>nom-evenement</IC></dt>
                <dd>
                    C&apos;est une chaîne de caractères contenant le nom de l&apos;évènement. Cette chaîne est généralement en 
                    minuscule et doit respecter exactement le nom de l&apos;évènement voulu. Dans ce cours, nous utiliserons 
                    majoritairement les évènements <IC>click</IC>, <IC>input</IC>, <IC>submit</IC> et <IC>keydown</IC>.
                    Il en existe toutefois beaucoup plus.
                </dd>

                <dt><IC>callback</IC></dt>
                <dd>
                    C&apos;est la fonction qui sera exécutée lorsque l&apos;évènement se produira. Nous passerons ici la fonction
                    comme une variable. Nous ne mettrons donc pas de parenthèses après le nom de la fonction puisque le but n&apos;est 
                    pas de l&apos;exécuter immédiatement, mais de la programmer pour qu&apos;elle s&apos;exécute plus tard. Il est 
                    aussi possible de passer une fonction anonyme directement au lieu de passer une variable.
                </dd>
            </dl>
        </section>

        <section>
            <h2>Réagir au clic</h2>
            <p>
                Le clic de souris est l&apos;un des évènements les plus courants sur une page web. Il est utilisé pour tout, des
                boutons aux liens en passant par les images et les éléments de formulaire. Pour réagir à un clic, nous devons
                ajouter un &quot;listener&quot; sur l&apos;élément HTML que nous voulons écouter. Voici un exemple:
            </p>
            <WebExample>
                <Code language="html">{clicHtml}</Code>
                <Code language="js">{clicJs}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Réagir à la soumission d&apos;un formulaire</h2>
            <p>
                Un autre évènement très courant est la soumission d&apos;un formulaire. Lorsqu&apos;un utilisateur appuie sur le
                bouton d&apos;envoi d&apos;un formulaire, un évènement de soumission est déclenché. Pour réagir à cet évènement,
                vous pouvez ajouter un code similaire à celui-ci:
            </p>
            <WebExample>
                <Code language="html">{submitHtml}</Code>
                <Code language="js">{submitJs}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Réagir aux touches du clavier</h2>
            <p>
                Il est aussi possible de réagir aux touches du clavier. Si nous voulons réagir aux touches lorsque l&apos;utilisateur
                est en train de taper dans un champ de texte, nous pouvons ajouter un &quot;listener&quot; sur 
                l&apos;évènement <IC>input</IC>. Voici un exemple:
            </p>
            <WebExample>
                <Code language="html">{inputHtml}</Code>
                <Code language="js">{inputJs}</Code>
            </WebExample>
            <p>
                Si nous voulons plutôt réagir à une touche spécifique dans l&apos;ensemble de la page, nous pouvons ajouter un
                &quot;listener&quot; sur l&apos;évènement <IC>keydown</IC>. Puisque nous voulons y réagir partout dans la page,
                nous l&apos;ajouterons à l&apos;objet <IC>document</IC> lui-même.
            </p>
            <WebExample>
                <Code language="html">{keydownHtml}</Code>
                <Code language="js">{keydownJs}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Objet event</h2>
            <p>
                Dans l&apos;exemple précédent, vous noterez que la fonction <IC>toucheAppuyee</IC> prend un paramètre <IC>event</IC>.
                Ce paramètre est en fait un objet qui contient des informations sur l&apos;évènement qui s&apos;est produit, comme la 
                touche qui a été appuyée dans ce cet exemple. Tous les évènements Javascript passent un objet <IC>event</IC> à la 
                fonction qui les écoute. C&apos;est au programmeur de décidé s&apos;il veut utiliser cet objet ou non. Dans cet objet, 
                vous trouverez entres autres les éléments suivants:
            </p>
            <ul>
                <li>
                    <IC>event.currentTarget</IC>: 
                    L&apos;élément HTML sur lequel l&apos;évènement est programmé.
                </li>
                <li>
                    <IC>event.key</IC>:
                    La touche qui a été appuyée si l&apos;évènement est de type <IC>keydown</IC> ou tout autre évènement du clavier.
                </li>
                <li>
                    <IC>event.preventDefault()</IC>:
                    Une fonction qui permet d&apos;annuler le comportement par défaut de l&apos;évènement dans le navigateur. Très 
                    utile pour empêcher un formulaire de rafraîchir la page ou un lien de rediriger l&apos;utilisateur.
                </li>
            </ul>
            <p>
                Pour plus d&apos;information sur cet objet, vous pouvez consulter la ressource ci-dessous:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event" target="_blank">
                    MDN - Event
                </a>
            </p>
        </section>

        <section>
            <h2>Autres évènements</h2>
            <p>
                Il existe une multitude d&apos;autres évènements que vous pouvez écouter sur une page web. si vous voulez en savoir
                plus sur les évènements disponibles, vous pouvez consulter la ressource ci-dessous:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Web/Events" target="_blank">
                    MDN - Event reference
                </a>
            </p>
        </section>
    </>
}