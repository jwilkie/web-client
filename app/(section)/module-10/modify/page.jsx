import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Modification du DOM",
    description: "Présentation des fonctions pour modifier le DOM, comme ajouter des attributs à un élément HTML, changer son contenu ou encore modifier ses classes CSS.",
    keywords: ["js", "classList", "innerText", "innerHTML", "attribut", "style"],
    group: "notes"
}

const texteHtml = 
`<form id="form-nom">
    <input type="text" name="nom">
    <input type="submit" value="Envoyer">
    <span id="erreur"></span>
</form>`;

const texteJs =
`// Chercher les éléments dans le HTML
const formNom = document.getElementById('form-nom');
const erreur = document.getElementById('erreur');

// Fonction pour envoyer le formulaire
function envoyerFormulaire(event) {
    event.preventDefault();

    // Si le formulaire est vide, afficher une erreur
    if(formNom.nom.value === '') {
        erreur.innerText = 'Le nom ne peut pas être vide!';
    }
    else {
        erreur.innerText = '';
    }
}

// Ajouter un événement au formulaire
formNom.addEventListener('submit', envoyerFormulaire);`;

const classHtml =
`<input type="button" value="Changer la couleur" id="bouton-couleur">
<div id="conteneur" class="rouge"></div>`;

const classCss =
`#conteneur {
    height: 5rem;
}
    
.rouge {
    background-color: #a00;
}
    
.bleu {
    background-color: #00a;
}`;

const classJs = 
`// Chercher les éléments dans le HTML
const boutonCouleur = document.getElementById('bouton-couleur');
const conteneur = document.getElementById('conteneur');

// Fonction pour changer la couleur
function changerCouleur() {
    if(conteneur.classList.contains('rouge')) {
        // Si le conteneur est rouge, le changer en bleu
        conteneur.classList.remove('rouge');
        conteneur.classList.add('bleu');
    }
    else{
        // Si le conteneur est bleu, le changer en rouge
        conteneur.classList.remove('bleu');
        conteneur.classList.add('rouge');
    }
}

// Ajouter un événement au bouton
boutonCouleur.addEventListener('click', changerCouleur);`;

const styleHtml =
`<input type="button" value="Changer la couleur" id="bouton-couleur">
<div 
    id="conteneur" 
    class="rouge" 
    style="background-color:rgb(170, 0, 0); height: 5rem">
</div>`;

const styleJs =
`// Chercher les éléments dans le HTML
const boutonCouleur = document.getElementById('bouton-couleur');
const conteneur = document.getElementById('conteneur');

// Fonction pour changer la couleur
function changerCouleur() {
    if(conteneur.style.backgroundColor === 'rgb(170, 0, 0)') {
        // Si le conteneur est rouge, le changer en bleu
        conteneur.style.backgroundColor = '#00a';
    }
    else{
        // Si le conteneur est bleu, le changer en rouge
        conteneur.style.backgroundColor = '#a00';
    }
}

// Ajouter un événement au bouton
boutonCouleur.addEventListener('click', changerCouleur);`;

const attrHtml =
`<p>Changer la destination du lien:</p>
<form id="form-destination">
    <label>
        Google
        <input type="radio" name="destinationLien" value="https://google.com" checked>
    </label>
    <label>
        Youtube
        <input type="radio" name="destinationLien" value="https://youtube.com">
    </label>
    <label>
        Page d'accueil
        <input type="radio" name="destinationLien" value="/">
    </label>
    <input type="submit" value="changer">
</form>
<a href="https://google.com" target="_blank" id="lien">Lien avec destination variable</a>`;

const attrJs =
`// Chercher les éléments dans le HTML
const formDestination = document.getElementById('form-destination');
const lien = document.getElementById('lien');

// Fonction pour changer la destination du lien
function changerDestination(event) {
    event.preventDefault();
    
    lien.href = formDestination.destinationLien.value;
}
    
// Ajouter un événement au formulaire
formDestination.addEventListener('submit', changerDestination);`;


export default function Page() {
    return <>
        <section>
            <h2>Modifier un élément</h2>
            <p>
                Modifier un élément HTML est assez simple une fois que vous avez recherché l&apos;élément que vous souhaitez changer.
                Il suffit simplement de changer les bonnes propriétés de l&apos;élément pour obtenir le résultat voulu. Le problème,
                c&apos;est qu&apos;il y a un très grand nombre de propriétés que vous pouvez changer et que certains éléments HTML
                ont des propriétés différentes ou spécifiques à leur type.
            </p>
            <p>
                Dans cette page, nous allons voir les propriétés les plus courantes que vous pouvez changer sur un élément HTML.
            </p>
        </section>

        <section>
            <h2>Modifier le texte</h2>
            <p>
                Pour modifier le texte d&apos;un élément HTML, la propriété à changer est <IC>innerText</IC>. Cette propriété contient
                le texte affiché à l&apos;écran par l&apos;élément. À l'aide de cette propriété, nous pouvons lire et changer le texte
                d&apos;un élément. Voici un exemple:
            </p>
            <WebExample>
                <Code language="html">{texteHtml}</Code>
                <Code language="js">{texteJs}</Code>
            </WebExample>
            <ColoredBox title="À noter">
                Vous remarquerez ici l'&apos;utilisation de la fonction <IC>preventDefault()</IC>. En exécutant cette fonction, nous 
                nous assurons que le formulaire ne rafraîchira pas la page lorsqu&apos;il est soumis.
            </ColoredBox>
        </section>

        <section>
            <h2>Modifier le CSS</h2>
            <p>
                Pour modifier le style CSS d&apos;un élément HTML, nous utiliserons généralement la propriété <IC>classList</IC>. 
                Cette propriété contient une liste des classes CSS appliquées à l&apos;élément et nous permet d&apos;en ajouter et
                d&apos;en retirer avec les méthodes <IC>add</IC> et <IC>remove</IC>. Nous pouvons aussi regarder si une classe est
                déjà appliquée avec la méthode <IC>contains</IC>. Voici un exemple:
            </p>
            <WebExample>
                <Code language="html">{classHtml}</Code>
                <Code language="css">{classCss}</Code>
                <Code language="js">{classJs}</Code>
            </WebExample>
            <p>
                Il est aussi possible de modifier directement le style CSS d&apos;un élément avec la propriété <IC>style</IC>. Cette
                propriété contient toutes les propriétés CSS modifiable de l&apos;élément et peut nous être utile dans certain cas 
                puisqu&apos;elle n&apos;utilise pas de classe CSS. Cette méthode est cependant moins recommandée, pour les raisons 
                suivantes:
            </p>
            <ul>
                <li>
                    Cette méthode mélange HTML, CSS et Javascript et peut devenir difficile à maintenir.
                </li>
                <li>
                    Les unités de mesure (comme <IC>px</IC> ou <IC>rem</IC>) doivent être ajoutées manuellement et ne sont pas
                    garantie de ne pas être changées par le navigateur.
                </li>
                <li>
                    Les propriétés CSS qui sont ajouté de cette manière peuvent entrer en conflit avec les classes CSS déjà
                    appliquées à l&apos;élément.
                </li>
            </ul>
            <p>
                Voici tout de même à quoi ressemblerait l&apos;exemple précédent avec la propriété <IC>style</IC>:
            </p>
            <WebExample>
                <Code language="html">{styleHtml}</Code>
                <Code language="js">{styleJs}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Modifier les attributs</h2>
            <p>
                Pour modifier les attributs d&apos;un élément HTML, nous utiliserons généralement simplement le nom de la propriété.
                Par exemple, pour modifier l&apos;attribut <IC>href</IC> d&apos;un lien, nous utiliserons la propriété <IC>href</IC>
                en Javascript. Pareil pour la source d&apos;une image (<IC>src</IC>), le texte alternatif d&apos;une image 
                (<IC>alt</IC>), la valeur d&apos;un champ de formulaire (<IC>value</IC>), l&apos;état d&apos;une case à cocher 
                (<IC>checked</IC>), etc. Voici un exemple:
            </p>
            <WebExample>
                <Code language="html">{attrHtml}</Code>
                <Code language="js">{attrJs}</Code>
            </WebExample>
            <p>
                Vous pouvez trouver une liste des différents attributs que vous pouvez modifier sur les pages de documentation 
                suivantes:
            </p>
            <ul>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement" target="_blank">
                        MDN - HTMLElement
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement" target="_blank">
                        MDN - HTMLFormElement
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement" target="_blank">
                        MDN - HTMLInputElement
                    </a>
                </li>
            </ul>
        </section>
    </>
}