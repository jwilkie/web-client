import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Débogage",
    description: "Présentation des outils de débogage et la console en Javascript dans vos navigateurs web.",
    keywords: ["js", "debug", "console", "breakpoint", "watch"],
    group: "notes"
}

const comment =
`// Ceci est un commentaire en ligne

/*
    Ceci est un commentaire multiligne
    qui s'étendre sur plusieurs lignes
*/`;    

const log = 
`if(pointDeVie <= 0) {
    console.log('Le joueur est éliminé');
}
else {
    console.log('Le joueur a encore ' + pointDeVie + 'points de vie');
}`;

export default function Page() {
    return <>
        <section>
            <h2>Commentaires</h2>
            <p>
                Les commentaires en Javascript sont des portions de texte qui sont ignorées par l&apos;engin exécutant le code. Ils sont
                utilisés pour documenter le code ou expliquer des portions de code. Comme en Java et en C#, les commentaires en sont 
                fait avec <IC>//</IC> pour les commentaires en ligne et <IC>/* */</IC> pour les commentaires multilignes. Voici un exemple:
            </p>
            <CodeBlock language="js">{comment}</CodeBlock>
            <p>
                Il existe aussi une autre sorte de commentaire, soit le commentaire de documentation. On utilisera généralement ce type de 
                commentaire avec les fonctions et les objets. Nous verrons donc comment les créer dans un module subséquant.
            </p>
        </section>

        <section>
            <h2>Console</h2>
            <p>
                La console est un outil de débogage qui est disponible dans tous les navigateurs web. Elle permet d&apos;afficher des messages
                de débogage qui peuvent nous aider à comprendre ce qui se passe dans notre code. Pour afficher un message dans la console,
                nous utiliserons la fonction <IC>console.log()</IC>. Voici un exemple:
            </p>
            <CodeBlock language="js">{log}</CodeBlock>
            <p>
                Pour voir ce message dans votre navigateurs, vous devrez ouvrir la console de débogage. Pour ce faire, vous devez ouvrir 
                les outils de développement de votre navigateur. Voici quelques façons de le faire: 
            </p>
            <ul>
                <li>Appuyer sur <kbd>F12</kbd>.</li>
                <li>Appuyer sur <kbd>Ctrl</kbd> + <kbd>Maj</kbd> + <kbd>I</kbd>.</li>
                <li>
                    Aller dans le menu du navigateur, dans &quot;Plus d&apos;outils&quot; et finalement dans &quot;Outils de développement&quot;
                </li>
                <li>
                    Clic droit sur la page, puis sélectionner &quot;Inspecter&quot; ou &quot;Inspecter l&apos;élément&quot;.
                </li>
            </ul>
            <p>
                Une fois les outils de développement ouverts, vous devrez vous rendre dans l&apos;onglet &quot;Console&quot; pour voir les messages de
                débogage. Vous pourrez aussi voir les erreurs qui se produisent dans votre code.
            </p>
            <p>
                L&apos;utilisation de la console est probablement le meilleur outil de débogage que vous pouvez utiliser. Bien que simple, cet 
                outil vous permet de voir les valeurs des variables, tester que le code s&apos;exécute et afficher les erreurs qui se produisent.
                Apprennez à l&apos;utiliser et vous serez en mesure de résoudre la plupart des problèmes que vous rencontrerez.
            </p>
        </section>

        <section>
            <h2>Débogueur</h2>
            <p>
                Dans les outils de développement de votre navigateur, vous trouverez aussi un onglet nommé &quot;Sources&quot;. Cet onglet vous permet
                de voir le code Javascript qui est exécuter par le navigateur web. Vous pourrez par la suite y ajouter des points d&apos;arrêt,
                des espions et voir les valeurs des variables en temps réel. Cet outil est très puissant et peut vous permettre de résoudre
                des problèmes plus complexes.
            </p>
            <p>
                Nous ne verrons pas comment utiliser cet outil dans ce cours, mais sachez qu&apos;il est disponible pour vous aider si vous 
                prenez le temps de l&apos;apprendre.
            </p>
        </section>
    </>
}