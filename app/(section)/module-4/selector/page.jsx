import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

const selector = 
`selecteur-css {
    propriété1: valeur1;
    propriété2: valeur2;
    propriété3: valeur3;
}`;

const balise = 
`p {
    ...    
}

header {
    ...
}`;

const idHtml = 
`<p id="nom-identifiant"> Lorem Ipsum </p>`;

const id = 
`#nom-identifiant {
    ...
}`;

const classeHtml =
`<p class="en-gras"> 
    Un paragraphe 
</p>

<a href="https://google.com" class="en-gras"> 
    Un lien 
</a>`;

const classe =
`.en-gras {
    ...
}`;

const classeMultiple = 
`<img src="./img/mon-image.jpg" alt="Belle image" class="petit-format bordure">`;

const combine1 =
`p.en-retrait {
    ...
}`;

const combine2 =
`ul#todo-list {
    ...
}`;

const embed = 
`#principal ul li.important  {
    ...
}`;

const embedHtml = 
`<header>
    <a href="#"> Un lien </a>
    
    <nav>
        <ul>
            <li> <a href="#"> Un autre lien </a> </li>
        </ul>
    </nav>
</header>`;

const embedCss = 
`header a {
    ...
}`;

const multiple =
`footer, p.important, ul li a.en-gras {
    ...
}`;

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Sélecteur CSS de base",
    description: "Présentation des sélecteurs CSS pour appliquer le style sur des éléments HTML spécifiques.",
    keywords: ["css", "sélecteur", "selector", "id", "identifiant", "classe", "tag", "balise"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Format d&apos;une feuille de style</h2>
            <p>
                Le code CSS est basé sur la programmation de feuille de style. Une feuille de style a le format suivant:
            </p>
            <CodeBlock language="css">{selector}</CodeBlock>
            <p>
                Les propriétés et leurs valeurs seront l&apos;intérêt principal de ce cours pendant plusieurs semaines. Ce sont 
                les règles qui définissent le style d&apos;un élément. Par exemple, vous pouvez spécifier la couleur du texte d&apos;un 
                élément avec la propriété <IC>color</IC> et lui donner une valeur comme <IC>red</IC>. Cela donne la 
                règle <IC>color: red</IC>. Toutefois, dans cette section, nous ne verront pas comment styler un élément, mais 
                plutôt comment identifier quel élément nous voulons styler. Nous mettrons donc l&apos;emphase sur les sélecteurs CSS.
            </p>
            <p>
                En CSS, pour sélectionner un certain élément et lui appliquer un style, nous utilisons les sélecteurs CSS. Les 
                sélecteurs CSS sont le texte écrit avant les accolades <IC>{'\{ ... \}'}</IC> dans une feuille de style. Il existe 
                de nombreux sélecteurs et de nombreuses règles pour les faire fonctionner ensemble. Dans cette section, nous verrons 
                comment utiliser les sélecteurs CSS de base.
            </p>
        </section>

        <section>
            <h2>Sélecteur par nom de balise</h2>
            <p>
                Si vous désirez appliquer le même style à toutes les balises d&apos;un certain type, c&apos;est le sélecteur que vous 
                utiliserez. Un sélecteur par nom de balise s&apos;utilise simplement en indiquant le nom de la balise que nous voulons 
                affecter.
            </p>
            <CodeBlock language="css">{balise}</CodeBlock>
        </section>

        <section>
            <h2>Sélecteurs par ID</h2>
            <p>
                Si vous désirer appliquer un style sur un élément très spécifique de votre page Web et que vous ne désirez pas 
                réutiliser ce style pour d&apos;autres éléments, vous voulez plutôt utiliser le sélecteur par ID. Ce sélecteur permet 
                de sélectionner un élément de votre page HTML ayant un attribut ID spécifique.
            </p>
            <CodeBlock language="html">{idHtml}</CodeBlock>
            <p>
                Du côté du CSS, pour utiliser le sélecteur par ID, il suffit simplement de mettre le symbole <IC>#</IC> devant 
                le nom du l&apos;ID que vous voulez viser.
            </p>
            <CodeBlock language="css">{id}</CodeBlock>
        </section>

        <section>
            <h2>Sélecteurs par classe</h2>
            <p>
                Si vous désirez créer un style réutilisable que vous pourrez mettre sur plusieurs éléments, le sélecteur par classe 
                sera votre ami. La réutilisation étant un des concepts de programmation les plus important, c&apos;est probablement le 
                sélecteur que vous utiliserez le plus souvent. Ce sélecteur fonctionne si nous donnons une &quot;classe&quot; à des éléments 
                HTML. Pour ce faire, nous utiliserons l&apos;attribut <IC>class</IC> qui peut être mis sur n&apos;importe quelle balise HTML.
            </p>
            <CodeBlock language="html">{classeHtml}</CodeBlock>
            <p>
                Du côté du CSS, pour sélectionner tous les éléments possèdant une classe, nous pouvons simplement utiliser le 
                point <IC>.</IC> suivi du nom de la classe.
            </p>
            <CodeBlock language="css">{classe}</CodeBlock>
            <p>
                Comme vous pouvez le constater, puisque nous pouvons mettre la même classe sur plusieurs élément, cela rend le 
                style réutilisable. Il est aussi possible de mettre plusieurs classe à un élément HTML simplement en les séparant par 
                des espaces, ce qui nous permet beaucoup de flexibilités.
            </p>
            <CodeBlock language="html">{classeMultiple}</CodeBlock>
        </section>

        <section>
            <h2>Combinaison de sélecteurs</h2>
            <p>
                Il est possible d&apos;être très précis dans nos sélecteurs. Par exemple, si nous voulons sélectionner tous les paragraphes 
                ayant la classe &quot;en-retrait&quot;, nous pouvons utiliser la combinaison de sélecteurs suivante: 
            </p>
            <CodeBlock language="css">{combine1}</CodeBlock>
            <p>
                Il est aussi possible de faire ce genre de combinaison avec les ID de la façon suivante:
            </p>
            <CodeBlock language="css">{combine2}</CodeBlock>
            <ColoredBox title="Attention: ">
                Vous remarquerez qu&apos;il n&apos;y a aucune espace entre le nom de la balise et le nom de la classe ou du ID. Pour utiliser 
                une combinaison de sélecteurs, vous ne devez mettre aucun espace entre les sélecteurs.
            </ColoredBox>
        </section>

        <section>
            <h2>Imbrication de sélecteurs</h2>
            <p>
                Il est possible de spécifier des sélecteurs à l&apos;intérieur d&apos;un autre sélecteur simplement en mettant un espace entre 
                les sélecteurs de la façon suivante:
            </p>
            <CodeBlock language="css">{embed}</CodeBlock>
            <p>
                Dans cet exemple, nous sélectionnons tous les <IC>&lt;li&gt;</IC> ayant la classe <IC>important</IC> et se retrouvant dans 
                un <IC>&lt;ul&gt;</IC> qui se retrouve dans un élément ayant le id <IC>principal</IC>.
            </p>
            <p>
                Il est important de noter que ce type de sélecteur capte les éléments même s&apos;il ne sont pas des enfants direct du sélecteur
                précédant. Voici un exemple:
            </p>
            <CodeBlock language="html">{embedHtml}</CodeBlock>
            <CodeBlock language="css">{embedCss}</CodeBlock>
            <p>
                Dans l&apos;exemple ci-dessus, puisque nous sélectionnons tous les <IC>&lt;a&gt;</IC> à l&apos;intérieur 
                des <IC>&lt;header&gt;</IC>, les 2 <IC>&lt;a&gt;</IC> seront visé. En effet, même si le deuxième <IC>&lt;a&gt;</IC> n&apos;est 
                pas directement à l&apos;intérieur du <IC>&lt;header&gt;</IC>, il est quand même à l&apos;intérieur de celui-ci.
            </p>
        </section>

        <section>
            <h2>Multiples sélecteurs</h2>
            <p>
                Si vous désirez appliquer les mêmes règles CSS à plusieurs éléments, il est possible de le faire en utilisant la 
                virgule <IC>,</IC>.
            </p>
            <CodeBlock language="css">{multiple}</CodeBlock>
            <p>
                Dans l&apos;exemple ci-dessus, les règles contenu entre les accolades sont donc appliqué aux 
                balises <IC>&lt;footer&gt;</IC>, aux balises <IC>&lt;p&gt;</IC> ayant la classe <IC>important</IC> et 
                aux <IC>&lt;a&gt;</IC> ayant la classe <IC>en‑gras</IC> qui se retrouve dans des <IC>&lt;li&gt;</IC> à l&apos;intérieur 
                d&apos;un <IC>&lt;ul&gt;</IC>.
            </p>
        </section>
    </>
}