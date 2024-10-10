import IC from '@/components/InlineCode';
import OverflowContainer from '@/components/OverflowContainer';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Disposition flex",
    description: "Présentation du mode d'affichage flex pour mettre des éléments les uns à côté des autres.",
    keywords: ["css", "display", "flexbox", "côté", "side", "flex-direction", "align-items", "justify-content", "flex-wrap", "gap"],
    group: "notes"
}

const flexHtml = 
`<div class="conteneur-flex">
    <div class="boite">Élément Flex 1</div>
    <div class="boite">Élément Flex 2</div>
    <div class="boite">Élément Flex 3</div>
    <div class="boite">Élément Flex 4</div>
</div>`;

const flexCss = 
`.conteneur-flex {
    display: flex;
    background-color: #CCC;
}

.boite {
    margin: 1rem;
    padding: 1rem;
    background-color: #333;
    color: #EEE;
}`;

const axeHtml = 
`<div class="conteneur">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <div class="texte">Axe</div>
    <div class="axe"></div>
    <div class="fleche"></div>
</div>`;

const axeCss = 
`.conteneur {
    display: flex;
    position: relative;
    background-color: #CCC;
}

.conteneur span {
    position: relative;
    margin: 1rem;
    padding: 1rem;
    color: #EEE;
    background-color: #333;
    z-index: 2;
}

.axe {
    position: absolute;
    border-bottom: 4px solid #900;
    left: 0;
    right: 0;
    top: 50%;
    width: calc(100% - 1.2rem);
    transform: translateY(-50%);
    z-index: 1;
}
    
.fleche {
    position: absolute;
    height: 0;
    border-left: 1.2rem solid #900;
    border-top: 1.2rem solid transparent;
    border-bottom: 1.2rem solid transparent;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
    
.texte {
    position: absolute;
    color: #900;
    right: 2rem;
    bottom: 50%;
}`;

const columnHtml = 
`<div class="conteneur-flex">
    <div class="boite">Élément Flex 1</div>
    <div class="boite">Élément Flex 2</div>
    <div class="boite">Élément Flex 3</div>
    <div class="boite">Élément Flex 4</div>
</div>`;

const columnCss = 
`.conteneur-flex {
    display: flex;
    flex-direction: column;
    background-color: #CCC;
}

.boite {
    margin: 5px;
    padding: .5rem;
    background-color: #333;
    color: #EEE;
}`;

const wrapHtml = 
`<div class="conteneur-flex">
    <div class="boite">Élément Flex très long 1</div>
    <div class="boite">Élément Flex très long 2</div>
    <div class="boite">Élément Flex très long 3</div>
    <div class="boite">Élément Flex très long 4</div>
    <div class="boite">Élément Flex très long 5</div>
    <div class="boite">Élément Flex très long 6</div>
</div>`;

const wrapCss = 
`.conteneur-flex {
    display: flex;
    flex-wrap: wrap;
    background-color: #CCC;
}

.boite {
    margin: 5px;
    padding: .5rem;
    background-color: #333;
    color: #EEE;
}`;

const gapHtml = 
`<div class="conteneur-flex">
    <div class="boite">Élément Flex 1</div>
    <div class="boite">Élément Flex 2</div>
    <div class="boite">Élément Flex 3</div>
    <div class="boite">Élément Flex 4</div>
</div>`;

const gapCss = 
`.conteneur-flex {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #CCC;
}

.boite {
    padding: .5rem;
    background-color: #333;
    color: #EEE;
}`;

const alignExHtml = 
`<div class="conteneur-flex">
    <div class="boite">Élément Flex</div>
    <div class="boite">Élément Flex qui est beaucoup, beaucoup plus grand</div>
    <div class="boite">Élément Flex</div>
    <div class="boite">Élément Flex</div>
</div>`;

const alignExCss = 
`.conteneur-flex {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #CCC;
}

.boite {
    width: 6rem;
    padding: .5rem;
    background-color: #333;
    color: #EEE;
}`;

const alignEx2Html = 
`<div class="conteneur-flex">
    <div class="boite">Élément Flex</div>
    <div class="boite">Élément Flex qui est beaucoup, beaucoup plus grand</div>
    <div class="boite">Élément Flex</div>
    <div class="boite">Élément Flex</div>
</div>`;

const alignEx2Css = 
`.conteneur-flex {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: #CCC;
}

.boite {
    width: 6rem;
    padding: .5rem;
    background-color: #333;
    color: #EEE;
}`;

const alignHtml = 
`<div>
    <p class="title"><span>align-items: flex-start;</span></p>
    <div class="conteneur start">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="texte">Axe</div><div class="axe"></div><div class="fleche"></div>
    </div>
</div>

<div>
    <p class="title"><span>align-items: flex-end;</span></p>
    <div class="conteneur end">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="texte">Axe</div><div class="axe"></div><div class="fleche"></div>
    </div>
</div>

<div>
    <p class="title"><span>align-items: center;</span></p>
    <div class="conteneur center">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="texte">Axe</div><div class="axe"></div><div class="fleche"></div>
    </div>
</div>

<div>
    <p class="title"><span>align-items: baseline;</span></p>
    <div class="conteneur baseline">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="texte">Axe</div><div class="axe"></div><div class="fleche"></div>
    </div>
</div>

<div>
    <p class="title"><span>align-items: stretch;</span></p>
    <div class="conteneur stretch">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="texte">Axe</div><div class="axe"></div><div class="fleche"></div>
    </div>
</div>`;

const alignCss = 
`body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.title {
    font-family: monospace;
    font-size: 1.1rem;
}

.title span {
    padding: .5rem;
    background-color: #ccc;
}

.conteneur {
    display: flex;
    gap: 1rem;
    position: relative;
    padding: 5px;
    background-color: #CCC;
}

.start {
    align-items: flex-start;
}

.end {
    align-items: flex-end;
}

.center {
    align-items: center;
}

.baseline {
    align-items: baseline;
}

.stretch {
    align-items: stretch;
}

.conteneur span {
    position: relative;
    width: 2rem;
    background-color: #333;
    z-index: 2;
}
    
.conteneur span:nth-child(1) {
    height: 1rem;
}
    
.conteneur span:nth-child(2) {
    height: 3rem;
}
    
.conteneur span:nth-child(3) {
    height: 2rem;
}
    
.conteneur span:nth-child(4) {
    height: 1.5rem;
}
    
.conteneur span:nth-child(5) {
    height: 2.5rem;
}

.conteneur.stretch span:not(:nth-child(2)) {
    height: auto;
}
    
.axe {
    position: absolute;
    border-bottom: 4px solid #900;
    left: 0;
    right: 0;
    top: 50%;
    width: calc(100% - 1.2rem);
    transform: translateY(-50%);
    z-index: 1;
}
    
.fleche {
    position: absolute;
    height: 0;
    border-left: 1.2rem solid #900;
    border-top: 1.2rem solid transparent;
    border-bottom: 1.2rem solid transparent;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
    
.texte {
    position: absolute;
    color: #900;
    right: 2rem;
    bottom: 50%;
}`;

const justifyExHtml = 
`<div class="conteneur-flex">
    <div class="boite">1</div>
    <div class="boite">2</div>
    <div class="boite">3</div>
    <div class="boite">4</div>
</div>`;

const justifyExCss = 
`.conteneur-flex {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #CCC;
}

.boite {
    padding: 1rem;
    background-color: #333;
    color: #EEE;
}
    
.conteneur-flex::after {
    content: 'Espace vide sur l\\'axe';
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid #900;
    color: #900;
}`;

const justifyEx2Html = 
`<div class="conteneur-flex">
    <div class="boite">1</div>
    <div class="boite">2</div>
    <div class="boite">3</div>
    <div class="boite">4</div>
</div>`;

const justifyEx2Css = 
`.conteneur-flex {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 1rem;
    background-color: #CCC;
}

.boite {
    padding: 1rem;
    background-color: #333;
    color: #EEE;
}`;

const justifyEx2CssHidden = 
`.conteneur-flex::before {
    content: 'Espace vide sur l\\'axe';
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid #900;
    color: #900;
}`;

const justifyHtml = 
`<div>
    <p class="title"><span>justify-content: flex-start;</span></p>
    <div class="conteneur start">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="axe"></div>
    </div>
</div>

<div>
    <p class="title"><span>justify-content: flex-end;</span></p>
    <div class="conteneur end">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="axe"></div>
    </div>
</div>

<div>
    <p class="title"><span>justify-content: center;</span></p>
    <div class="conteneur center">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="axe"></div>
    </div>
</div>

<div>
    <p class="title"><span>justify-content: space-between;</span></p>
    <div class="conteneur between">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="axe"></div>
    </div>
</div>

<div>
    <p class="title"><span>justify-content: space-around;</span></p>
    <div class="conteneur around">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="axe"></div>
    </div>
</div>

<div>
    <p class="title"><span>justify-content: space-evenly;</span></p>
    <div class="conteneur evenly">
        <span></span><span></span><span></span><span></span><span></span>
        <div class="axe"></div>
    </div>
</div>`;

const justifyCss = 
`body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.title {
    font-family: monospace;
    font-size: 1.1rem;
}

.title span {
    padding: .5rem;
    background-color: #ccc;
}

.conteneur {
    display: flex;
    gap: 1rem;
    position: relative;
    padding: 5px;
    background-color: #CCC;
}

.start {
    justify-content: flex-start;
}

.end {
    justify-content: flex-end;
}

.center {
    justify-content: center;
}

.between {
    justify-content: space-between;
}

.around {
    justify-content: space-around;
}

.evenly {
    justify-content: space-evenly;
}

.conteneur span {
    position: relative;
    padding: 1rem;
    background-color: #333;
    z-index: 2;
}
    
.axe {
    position: absolute;
    border-bottom: 4px solid #900;
    left: 0;
    right: 0;
    top: 50%;
    width: calc(100% - 1.2rem);
    transform: translateY(-50%);
    z-index: 1;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Le mode d&apos;affichage flex est un moyen moderne d&apos;afficher des éléments un à côté de l&apos;autre dans votre page Web. 
                Ils existent et sont standard dans les navigateurs depuis autour des années 2015. Par le passé, il y avait 
                d&apos;autres méthodes pour mettre des éléments un à côté de l&apos;autre, mais ces méthodes étaient plus compliqué et 
                venaient avec beaucoup d&apos;inconvénient. Le flex est venu tout changer pour le mieux. Les flex sont un changement 
                très apprécié des programmeurs web.
            </p>
            <p>
                Nous utiliserons les Flexbox pour toutes sortes de choses. Entre autres, et le plus important, pour afficher des 
                éléments un à côté de l&apos;autre, mais aussi pour afficher des cartes qui peuvent se mettre sur plusieurs lignes, 
                pour centrer un élément autant verticalement qu&apos;horizontalement ou encore pour pousser un <IC>&lt;footer&gt;</IC> au 
                bas de notre page Web.
            </p>
            <p>
                Les flex peuvent être un peu intimidants puisqu&apos;ils nécessitent beaucoup de propriétés CSS pour se configurer. 
                Si vous les maîtrisez, ils sont toutefois très facile à utiliser et facileront énormément votre travail.
            </p>
        </section>
        
        <section>
            <h2>Changement d&apos;affichage</h2>
            <p>
                Pour afficher des éléments à la manière de flex, nous utiliserons la propriété <IC>display: flex</IC>. Il faut 
                comprendre que c&apos;est le <strong>conteneur</strong> des éléments que vous voulez placer un à côté de l&apos;autre qui 
                doit être spécifié en flex. En mettant le conteneur en flex, il modifiera l&apos;affichage de ses éléments enfants. 
                Ceci est différent des types d&apos;affichage conventionnel commme <IC>inline</IC> ou <IC>block</IC> qui affecte 
                l&apos;élément spécifié directement.
            </p>
            <WebExample>
                <Code language="html">{flexHtml}</Code>
                <Code language="css">{flexCss}</Code>
            </WebExample>
            <p>
                Dans l&apos;exemple ci-dessus, vous noterez que seulement le conteneur est marqué comme <IC>flex</IC>. L&apos;affichage 
                du conteneur force tous les éléments à l&apos;intérieur à être placés les uns à côté des autres et ce, malgré leur 
                propre mode d&apos;affichage. Bref, même si les boîtes à l&apos;intérieur du conteneur sont affiché en <IC>block</IC>, le 
                fait que leur conteneur est en <IC>flex</IC> les forcera les à changer leur affichage.
            </p>
            <p>
                Il est aussi important de noter qu&apos;autrement, le conteneur en <IC>flex</IC> fonctionne comme un affichage 
                en <IC>block</IC>.
            </p>
        </section>

        <section>
            <h2>Axe d&apos;Affichage</h2>
            <p>
                Les flex sont une façon d&apos;afficher les éléments sur un axe. Par défaut, l&apos;axe est de gauche à droite. C&apos;est pour 
                cette raison que les éléments se retrouvent les uns à côté des autres de gauche à droite.
            </p>
            <WebExample>
                <Code language="html" display={false}>{axeHtml}</Code>
                <Code language="css" display={false}>{axeCss}</Code>
            </WebExample>
            <p>
                L&apos;axe n&apos;est pas obligé d&apos;être de gauche à droite. Nous pouvons le manipuler dans 3 autres directions 
                différentes, soit de droite à gauche, de haut en bas et de bas en haut. Pour ce faire, nous utiliserons la 
                propriété <IC>flex-direction</IC> sur le conteneur qui est en flex.
            </p>
            <WebExample>
                <Code language="html">{columnHtml}</Code>
                <Code language="css">{columnCss}</Code>
            </WebExample>
            <p>
                Voici un tableau des valeurs disponible pour la propriété <IC>flex-direction</IC>:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Valeur</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><IC>row</IC> (valeur var défaut)</td>
                            <td>Axe de gauche à droite</td>
                        </tr>
                        <tr>
                            <td><IC>column</IC></td>
                            <td>Axe de haut en bas</td>
                        </tr>
                        <tr>
                            <td><IC>row-reverse</IC></td>
                            <td>Axe de droite à gauche</td>
                        </tr>
                        <tr>
                            <td><IC>column-reverse</IC></td>
                            <td>Axe de bas en haut</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Axe multiligne</h2>
            <p>
                Par défaut l&apos;axe d&apos;un conteneur flex ne s&apos;étire pas sur plusieurs ligne comme du texte. Bref, si vous remplissez 
                l&apos;axe complètement avec des éléments et qu&apos;ils débordent de l&apos;axe, ceux-ci risquent d&apos;avoir un comportement très 
                bizarre, comme se compresser ou déborder à l&apos;extérieur de l&apos;axe. Nous voulons toujours éviter ce genre de 
                comportement de débordement lorsque nous faisons du CSS. Pour résoudre ce problème, nous avons 2 solutions 
                possibles:
            </p>
            <ul>
                <li>Enlever des éléments sur l&apos;axe et les mettre ailleurs pour que l&apos;affichage soit correct.</li>
                <li>Forcer l&apos;axe à pouvoir se mettre sur plusieurs lignes, comme le texte.</li>
            </ul>
            <p>
                Pour forcer l&apos;axe à ce mettre sur plusieurs lignes, nous utiliserons la propriété et la 
                valeur <IC>flex-wrap: wrap;</IC>.
            </p>
            <WebExample>
                <Code language="html">{wrapHtml}</Code>
                <Code language="css">{wrapCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Espacement</h2>
            <p>
                Jusqu&apos;à présent, pour mettre de l&apos;espace entre nos éléments dans notre conteneur flex, nous avons ajouté un 
                margin à nos élément. Il est toutefois possible de définir cet espace à l&apos;aide de la propriété <IC>gap</IC> du 
                conteneur flex. Cette propriété permet de définir l&apos;espace entre les éléments à l&apos;intérieur d&apos;un conteneur flex, 
                ce qui peut remplacer le margin. À vous de voir lequel vous préférez utiliser dans vos flex, mais 
                le <IC>gap</IC> nous permet définitivement quelques options supplémentaires.
            </p>
            <WebExample>
                <Code language="html">{gapHtml}</Code>
                <Code language="css">{gapCss}</Code>
            </WebExample>
            <p>
                Une option supplémentaire que le <IC>gap</IC> nous permet de faire par rapport au <IC>margin</IC> est démontré 
                ci-dessus. Il nous permet de contrôler l&apos;espacement entre les éléments et l&apos;espacement entre les éléments et le 
                conteneur de façon indépendante en l&apos;utilisant avec le <IC>padding</IC>.
            </p>
        </section>

        <section>
            <h2>Alignement sur l&apos;axe</h2>
            <p>
                Il arrive très fréquement que les éléments à l&apos;intérieur d&apos;un conteneur flex n&apos;aient pas tous la même hauteur. 
                Lorsque c&apos;est le cas, on observera un comportement particulier de ces éléments:
            </p>
            <WebExample>
                <Code language="html" display={false}>{alignExHtml}</Code>
                <Code language="css" display={false}>{alignExCss}</Code>
            </WebExample>
            <p>
                Dans l&apos;exemple ci-dessus, vous noterez que les éléments moins haut s&apos;étire pour prendre toute l&apos;espace en 
                dessous d&apos;eux. C&apos;est parce par défaut, l&apos;alignement des éléments en CSS est en <IC>stretch</IC>. Il est 
                toutefois possible de changer ce comportement avec la propriété <IC>align-items</IC>.
            </p>
            <WebExample>
                <Code language="html">{alignEx2Html}</Code>
                <Code language="css">{alignEx2Css}</Code>
            </WebExample>
            <p>
                La propriété <IC>align-items</IC> se mets directement sur le conteneur flex. Elle contrôlera comment les 
                éléments s&apos;aligne sur l&apos;axe les uns par rapport aux autres. Dans l&apos;exemple ci-dessus, on le spécifie 
                à <IC>center</IC>, ce qui aligne au centre tous les éléments les uns par rapport aux autres.
            </p>
            <p>
                Voici un liste des différents alignements disponibles avec un exemple pour mieux le visualiser:
            </p>
            <WebExample>
                <Code language="html" display={false}>{alignHtml}</Code>
                <Code language="css" display={false}>{alignCss}</Code>
            </WebExample>
        </section>
        
        <section>
            <h2>Gérer l&apos;espace vide</h2>
            <p>
                Lorsque nous mettons des éléments sur un axe dans un flex, il peut arriver que nous ne mettions pas beaucoup 
                d&apos;éléments et que l&apos;axe se retrouve avec beaucoup d&apos;espace vide vers sa fin.
            </p>
            <WebExample>
                <Code language="html" display={false}>{justifyExHtml}</Code>
                <Code language="css" display={false}>{justifyExCss}</Code>
            </WebExample>
            <p>
                Par défaut, l&apos;espace vide se retrouve toujours à la fin de l&apos;axe, mais il est possible de déplacer cet espace 
                vide et même de le répartir à plusieurs endroits sur l&apos;axe. Pour ce faire, nous utiliserons la 
                propriété <IC>justify-content</IC> de la façon suivante:
            </p>
            <WebExample>
                <Code language="html">{justifyEx2Html}</Code>
                <Code language="css">{justifyEx2Css}</Code>
                <Code language="css" display={false}>{justifyEx2CssHidden}</Code>
            </WebExample>
            <p>
                La propriété <IC>justify-content</IC> se mets directement sur le conteneur flex. Elle contrôlera comment l&apos;espace 
                sur l&apos;axe flex est disposé. Dans l&apos;exemple ci-dessus, on justifie les éléments à la fin de l&apos;axe, ce qui force 
                l&apos;espace à se retrouver au début de l&apos;axe.
            </p>
            <p>
                La valeur par défaut du <IC>justify-content</IC> est <IC>flex-start</IC>. Voici un liste des différentes 
                justifications disponibles avec un exemple pour mieux le visualiser: 
            </p>
            <WebExample>
                <Code language="html" display={false}>{justifyHtml}</Code>
                <Code language="css" display={false}>{justifyCss}</Code>
            </WebExample>
        </section>

        <section>
            <h2>Autres ressources</h2>
            <p>
                Il existe de nombreuses autres fonctions des flex. Il est en effet entre autre possible de changer l&apos;ordre ou 
                la taille des éléments dans un conteneur flex sans même modifier le HTML. Je ne couvrirai pas ces situations 
                ici, mais si cela vous intéresse, vous pourrez aller faire quelques recherches sur le Web. Autrement, si les 
                flex restent un mystère pour vous ou si vous désirez simplement approfondir ou solidifier vos connaissances, je 
                vous suggère fortement les ressources suivantes:
            </p>
            <ul>
                <li>
                    <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/CSS" target="_blank">
                        CSS-TRICKS - CSS Flexbox Layout Guide
                    </a>
                </li>
                <li>
                    <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/CSS" target="_blank">
                        MDN - Les concepts de base pour flexbox
                    </a>
                </li>
                <li>
                    <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" target="_blank">
                        MDN - Flexbox
                    </a>
                </li>
            </ul>
        </section>
    </>
}