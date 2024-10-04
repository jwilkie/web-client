import IC from '@/components/InlineCode';
import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Google Font",
    description: "Présentation de Google Font pour choisir des polices de caractère différente et éviter les problèmes de polices non disponible pour certains systèmes d'exploitation.",
    keywords: ["css", "fonts", "google", "police", "caractère"],
    group: "notes"
}

const embed = 
`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Poppins:wght@100;700&display=swap" rel="stylesheet">`;

const family = 
`h1 {
    font-family: "Poppins", sans-serif;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Problématique</h2>
            <p>
                L&apos;incompatibilité entre les navigateurs est un problème fréquent lors de l&apos;utilisation de polices de caractère 
                sur les pages web. Certaines polices peuvent s&apos;afficher différemment ou pas du tout selon le navigateur ou le 
                système d&apos;exploitation utilisé. Cela peut entraîner des variations de style et de lisibilité, nuisant ainsi à 
                l&apos;esthétique du site et à l&apos;expérience utilisateur.
            </p>
            <p>
                Pour pallier ce problème, il est recommandé d&apos;utiliser des polices web standardisées et disponible en ligne, 
                telles que celles disponibles via Google Fonts ou Adobe Fonts. Ces bibliothèques offrent une large gamme de 
                polices optimisées pour le web, garantissant une meilleure compatibilité entre les navigateurs.
            </p>
            <p>
                Dans cette page, nous introduirons Google Font.
            </p>
        </section>

        <section>
            <h2>Comment l&apos;utiliser</h2>
            <p>
                Pour utiliser Google Font correctement, suivez les étapes suivantes:
            </p>
            <ol>
                <li>
                    Choisir les polices de caractère.
                    <ol>
                        <li>
                            Visitez <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>.
                        </li>
                        <li>
                            Parcourez les polices disponibles.
                        </li>
                        <li>
                            Sélectionnez la police qui vous plaît en cliquant dessus.
                        </li>
                    </ol>
                </li>
                <li>
                    Sélectionner les styles
                    <ol>
                        <li>
                            Une fois sur la page de la police, vous pouvez choisir les styles (normal, italique, gras, etc.) 
                            que vous souhaitez utiliser.
                        </li>
                        <li>
                            Ne choisissez que les styles dont vous avez besoin pour garder votre site web optimisé.
                        </li>
                    </ol>
                </li>
                <li>
                    Obtenir le code d&apos;intégration
                    <ol>
                        <li>
                            Une fois toutes les polices voulues choisies, vous pouvez cliquer sur une icône pour ouvrir les 
                            polices et styles sélectionnés.
                        </li>
                        <li>
                            À ce nouvel endroit, vous devriez être capable d&apos;aller chercher le &quot;embed code&quot;. Il 
                            ressemble généralement à ceci:
                            <CodeBlock language="html">{embed}</CodeBlock>
                        </li>
                        <li>
                            Ajouter ce code dans le <IC>&lt;head&gt;</IC> de votre HTML, avant l&apos;intégration de vos fichiers 
                            CSS.
                        </li>
                    </ol>
                </li>
                <li>
                    Utiliser la police
                    <ol>
                        <li>
                            Dans le CSS, à l&apos;endroit où vous voulez, ajouter la propriété <IC>font-family</IC> avec les polices 
                            de caractère choisies. Cela ressemblera généralement à ceci:
                            <CodeBlock language="css">{family}</CodeBlock>
                        </li>
                        <li>
                            Des exemples d&apos;utilisation sont généralement disponible sur Google Fonts.
                        </li>
                    </ol>
                </li>
            </ol>

            <ColoredBox title="Attention: ">
                Les étapes ci-dessus sont décrite de façon générale. Le site web de Google Fonts a changé de nombreuses fois au 
                travers des années et il se peux que vous aillez à performer des actions légèrement différentes. 
            </ColoredBox>
        </section>
    </>
}