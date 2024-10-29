import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode';
import { Code, WebExample } from '@/components/WebExample';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Media queries",
    description: "Présentation des medias queries, une façon de mettre des règles CSS en fonction de la taille de l'écran du navigateur.",
    keywords: ["css", "media", "min-width"],
    group: "notes"
}

const mediaHtml = 
`<div class="boite"></div>`;

const mediaCss = 
`.boite {
    background-color: #ccc;
    height: 3em;
}

@media (min-width: 35rem){
    .boite {
        background-color: #333;
    }
}`;

const mediaMultiHtml = 
`<div class="conteneur">
    <div class="petit">Petit</div>
    <div class="moyen">Moyen</div>
    <div class="grand">Grand</div>
</div>`;

const mediaMultiCss = 
`.conteneur {
    display: flex;
    height: 3rem;
}
    
.petit, .moyen, .grand {
    width: 100%;
    border: 1px solid #000;
    background-color: #ddd;
    text-align: center;
}
    
.petit {
    background-color: #a3bce3;
}
    
@media(min-width: 35rem) {
    .moyen {
        background-color: #a3bce3;
    }
}
    
@media(min-width: 55rem) {
    .grand {
        background-color: #a3bce3;
    }
}`;

export default function Page() {
    return <>
        <section>
            <h2>Appareil mobile</h2>
            <p>
                Selon de nombreuses sources en ligne, nos sites Web sont maintenant vu autant, sinon même plus, sur appareil 
                mobile que sur ordinateur de bureau. Ce changement majeur de navigation sur l&apos;Internet nous oblige, nous les 
                développeurs, à nous adapter à nos consommateurs ainsi qu&apos;à nos clients. Même si nous sommes habitué à 
                travailler et à naviguer l&apos;Internet sur un ordinateur (puisquer c&apos;est notre travail), cela n&apos;est généralement 
                pas le cas de nos clients.
            </p>
            <p>
                Pour s&apos;assurer que votre design fonctionne sur appareil mobile et sur grand écran, les programmeurs ont deux 
                approche: &quot;mobile-first&quot; et &quot;desktop-first&quot;. Le concept est de développer l&apos;interface graphique pour appareil 
                mobile ou écran de bureau en premier et graduellement convertir l&apos;interface à l&apos;autre. Dans le cadre de ce 
                cours, je vous recommande d&apos;utiliser l&apos;approche &quot;mobile-first&quot; puisqu&apos;elle est un peu plus simple lorsqu&apos;on 
                débute en CSS. Ceci étant dit, vous verrez qu&apos;avec l&apos;expérience, les deux approches se mélangeront un peu.
            </p>
        </section>

        <section>
            <h2>Design réactif ou adaptatif</h2>
            <p>
                Le design réactif (responsive design) est le concept où le visuel de notre site web est fluide et pourra 
                facilement changer en fonction de la taille de l&apos;écran. Un design réactif nous permet d&apos;avoir un site web qui 
                réagi différemment sur un petit écran comme un téléphone cellulaire ou sur un grand écran comme un écran de 
                bureau. Bien entendu, toutes les tailles d&apos;écran entre les 2 sont aussi supporté.
            </p>
            <p>
                Le design adaptatif est similaire au design reactif, mais va forcer le site web à s&apos;afficher de la même façon 
                selon certains intervals de grandeur d&apos;écran. Typiquement, on y trouve 3 intervalles, soit un pour téléphone 
                mobile, un pour les tablettes et un autre pour les écran de bureau. Le design adaptatif est une façon 
                intéressante de réfléchir à son site web, surtout pour les artistes graphiques, mais est moins intéressant du 
                côté développement.
            </p>
            <p>
                Dans le cadre de ce cours, nous utiliserons principalement le design réactif.
            </p>
        </section>

        <section>
            <h2>Briser notre page en fonction de sa taille</h2>
            <p>
                En web, nous dirons que notre page se &quot;brise&quot; lorsque des changements majeurs seront mis de l&apos;avant lorsque la 
                taille du navigateur change. Dans notre CSS, nous utiliserons des conditions pour exécuter du CSS uniquement si 
                la taille de l&apos;écran est plus grande (ou plus petite) qu&apos;un certaine taille. Ces conditions seront ajouté à 
                l&apos;aide de la règle <IC>@media</IC>, que l&apos;on appelle aussi <strong>media queries</strong>.
            </p>
            <p>
                Les règles <IC>@media</IC> nous permettent d&apos;exécuter du code CSS dépendant de plusieurs conditions, comme si 
                la page est visualisé pour l&apos;impression, en couleur ou non, selon quelle orientation ou plusieurs autres. 
                Toutefois, nous l&apos;utiliserons majoritairement pour exécuter du code CSS en fonction de la taille de l&apos;écran.
            </p>
            <WebExample>
                <Code language="html">{mediaHtml}</Code>
                <Code language="css">{mediaCss}</Code>
            </WebExample>
            <p>
                Dans l&apos;exemple ci-dessus, l&apos;instruction <IC>@media</IC> indique que le code s&apos;exécute uniquement si l&apos;écran est 
                plus grand que <IC>35rem</IC>. Essentiellement, la couleur par défaut de la boîte qui est <IC>#ccc</IC> sera 
                remplacer par <IC>#333</IC> lorsque la taille du navigateur est plus grande que <IC>35rem</IC>.
            </p>
        </section>

        <section>
            <h2>Briser la page plusieurs fois</h2>
            <p>
                Il est possible de mettre plusieurs règles <IC>@media</IC> dans le même fichier CSS. Cela nous permet 
                d&apos;effectuer plusieurs brisures dans notre page et d&apos;exécuter du CSS.
            </p>
            <WebExample>
                <Code language="html">{mediaMultiHtml}</Code>
                <Code language="css">{mediaMultiCss}</Code>
            </WebExample>
            <p>
                Comme vous pouvez le constater dans l&apos;exemple ci-dessus, le code par défaut est le code qui est nécessaire pour 
                être exécuté sur petit écran. Le code dans les <IC>@media</IC> indiquera les changements à faire lorsque 
                l&apos;interface s&apos;aggrandit. On voit donc que notre approche ici est &quot;mobile-first&quot;. Le contraire est possible à 
                l&apos;aide de <IC>max-width</IC> au lieu de <IC>min-width</IC> dans les <IC>@media</IC>, mais cette approche est 
                généralement plus difficile à bien coder.
            </p>
            <ColoredBox title="Attention:">
                Assurez-vous de mettre les <IC>@media</IC> dans le bon ordre. Du plus petit au plus grand pour 
                le <IC>min-width</IC> avec l&apos;approche &quot;mobile-first&quot; et du plus grand au plus petit pour 
                le <IC>max-width</IC> l&apos;approche &quot;desktop-first&quot;. Autrement, des règles CSS pourraient en écraser d&apos;autres.
            </ColoredBox>
        </section>
    </>
}