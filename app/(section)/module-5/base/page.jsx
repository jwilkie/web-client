import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "CSS de base",
    description: "Présentation du concept de CSS de base des navigateurs et des solutions existantes pour remédier aux potentiels problèmes.",
    keywords: ["css", "reset", "normalize", "sanitize"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Disparité entre les navigateurs</h2>
            <p>
                Par le passé, les navigateurs web n'étaient aucunement standardisé. Chaque navigateur avait son propre CSS par 
                défaut dans leurs pages, ce qui nous obligeait à mettre beaucoup de CSS pour corriger les styles différents par 
                défaut. Aujourd'hui, la plupart des navigateurs sont relativement standardisé, mais il arrive encore de voir 
                quelques minimes différences, ce qui simplifie notre tâche.
            </p>
            <p>
                Il existe de nombreuse solution à ce problème. La première solution, et la plus simple, est  de corriger les 
                quelques erreurs par nous-même lorsque nous les voyons. Les différences entre les navigateurs n'existe preque 
                plus et par conséquant, nous auront que très rarement des différences à corriger.
            </p>
            <p>
                La deuxième solution consiste à utiliser un fichier CSS de réinitialisation. Ces fichiers vont lancer du code 
                CSS pour automatiquement corriger les différences majeures des navigateurs web de diverse façon. Cette approche 
                a toutefois un coût: Elle rend votre site web un peu moins performant lors de l'exécution du CSS. Elle est 
                toutefois facile à utiliser. Vous n'avez qu'à mettre un fichier CSS dans votre projet web et le lier à votre 
                fichier HTML.
            </p>
        </section>

        <section>
            <h2>Types de fichiers de réinitialisation</h2>
            <p>
                Voici une liste de quelques fichiers CSS de réinitialisation que vous pouvez utiliser si vous désirez utiliser 
                cette approche:
            </p>
            <dl>
                <dt>Normalize.css</dt>
                <dd>
                    <p>
                        Un fichier qui se base sur le principe de simplement corriger le minimum pour être le plus petit et le plus 
                        efficace possible. Ce fichier va corriger les différences connues entre les navigateurs pour leur donner le 
                        même style de base en utilisant le moins de code CSS possible.    
                    </p>
                    <p>
                        <a href="https://necolas.github.io/normalize.css/" target="_blank">Normalize.css</a>
                    </p>
                </dd>

                <dt>sanitize.css</dt>
                <dd>
                    <p>
                        Un fichier qui est construit à partir de Normalize.css, mais où de nombreuses autres fonctionnalités de 
                        base un peu bizarre du CSS ont été modifié. On y retrouvera entre autre le changement de l'utilisation 
                        du <IC>box-sizing</IC> par défaut et quelques autres correctifs sur des choix douteux par défaut du CSS.
                        Ce fichier est toutefois beaucoup plus volumineux et moins performant, surtout si certains correctifs 
                        ne vous sont pas utile. 
                    </p>
                    <p>
                        <a href="https://csstools.github.io/sanitize.css/" target="_blank">sanitize.css</a>
                    </p>
                </dd>

                <dt>reset.css</dt>
                <dd>
                    <p>
                        Un fichier qui réduit le CSS par défaut du navigateur èa zéro. Ce fichier CSS va littéralement enlever 
                        tout CSS par défaut des navigateurs. Le texte des titres auront donc la même taille que celui des 
                        paragraphes et tous les éléments qui ont du padding ou margin par défaut le verront mis èa zéro. Cette 
                        approche est faite par un minuscule fichier CSS, mais qui cause de nombreux traitement pour le 
                        navigateur lorsqu'il doit faire ses calculs pour utiliser le CSS.
                    </p>
                    <p>
                        <a href="https://meyerweb.com/eric/tools/css/reset/" target="_blank">reset.css</a>
                    </p>
                </dd>
            </dl>
        </section>

        <section>
            <h2>Utiliser un fichier de réinitialisation</h2>
            <p>
                Utiliser un fichier de réinitialisation est simple. Vous n'avez qu'à suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Télécharger le fichier de réinitialisation voulu.
                </li>
                <li>
                    Mettre le fichier de réinitialisation dans le dossier <IC>csc</IC> de votre projet.
                </li>
                <li>
                    Lier le fichier de réinitialisation avec le HTML en utilisant la balise <IC>&lt;link&gt;</IC>. Par exemple:
                    <CodeBlock language="html">{'<link rel="stylesheet" href="/css/normalize.css">'}</CodeBlock>
                </li>
            </ol>
            <ColoredBox title="Attention:">
                Lorsque vous utilisez un fichier de réinitialisation, assurez-vous toujours qu'il est le premier chargé dans 
                votre page web. Autrement, il est possible que celui-ci écrase votre propre CSS, créant des problèmes difficile 
                à détecter dans votre code.
            </ColoredBox>
        </section>
    </>
}