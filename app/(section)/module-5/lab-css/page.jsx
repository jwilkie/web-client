import Image from 'next/image';
import Color from '@/components/Color';
import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

import css1 from '@/public/img/css-brique-1.jpg';
import css2 from '@/public/img/css-brique-2.jpg';
import css3 from '@/public/img/css-brique-3.jpg';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Information sur les briques",
    description: "Présentation du laboratoire sur le stylage d'un menu de navigation ainsi que d'une page contenant du texte et un tableau.",
    keywords: ["css", "table", "list", "text", "reproduction"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Écrivez le code CSS permettant de styler la page HTML distribué pour reproduire la page web affiché ci-dessous en 
                suivant les étapes suivantes:
            </p>
            <ol>
                <li>
                    Créer un fichier CSS dans le projet et lier le au fichier HTML.
                </li>
                <li>
                    Styliser les pages Web pour qu&apos;elle ressemble à l&apos;image ci-dessous.
                    <ul>
                        <li>
                            Les couleurs utilisées sont: <Color value="#000" />, <Color value="#fff" />, <Color value="#ffd502" /> et <Color value="#da291c" />.
                        </li>
                        <li>
                            Les polices de caractère peuvent être trouvé sur Google Fonts. Pour les titres, on utilise <a href="https://fonts.google.com/specimen/Kanit" target="_blank">Kanit</a> et 
                            pour le texte régulier, c'est <a href="https://fonts.google.com/specimen/Roboto" target="_blank">Roboto</a>.
                        </li>
                        <li>
                            Les espacements peuvent être approximatifs, mais essayez d'être le plus similaire possible à l'image ci-dessous.
                        </li>
                        <li>
                            La largeur du <IC>&lt;h1&gt;</IC> est de <IC>15rem</IC>.
                        </li>
                        <li>
                            Notez bien l'alignement du texte dans les <IC>&lt;th&gt;</IC>.
                        </li>
                    </ul>
                </li>
            </ol>
        </section>

        <section>
            <h2>Image à reproduire</h2>
            <section>
                <h3>Page d&apos;accueil</h3>
                <Image src={css1} alt="Image à reproduire en CSS - Partie 1" />
                <Image src={css2} alt="Image à reproduire en CSS - Partie 2" />
                <Image src={css3} alt="Image à reproduire en CSS - Partie 3" />
            </section>
        </section>

        <section>
            <h2>Fichiers</h2>
            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/brique-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/brique-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}