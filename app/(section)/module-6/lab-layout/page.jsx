import Image from 'next/image';
import Color from '@/components/Color';
import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

import css1 from '@/public/img/css-choco-1.jpg';
import css2 from '@/public/img/css-choco-2.jpg';
import css3 from '@/public/img/css-choco-3.jpg';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Mise en page",
    description: "Présentation du laboratoire sur la mise en page avec l'affichage en flex.",
    keywords: ["css", "flex", "layout", "display"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Écrivez le code CSS permettant de styler la page HTML distribué pour reproduire la page web affiché ci-dessous en 
                respectant les critères suivants:
            </p>
            <ul>
                <li>
                    Les couleurs utilisées sont: <Color value="#eddfca" />, <Color value="#301c15" />, <Color value="#4f3126" /> et <Color value="#fff" />.
                </li>
                <li>
                    Les polices de caractère peuvent être trouvé sur Google Fonts. Pour les titres, on utilise <a href="https://fonts.google.com/specimen/Neuton" target="_blank">Neuton</a> et 
                    pour le menu de navigation, c&apos;est <a href="https://fonts.google.com/specimen/Lato" target="_blank">Lato</a>.
                </li>
                <li>
                    Les espacements peuvent être approximatifs, mais essayez d&apos;être le plus similaire possible à l&apos;image ci-dessous.
                </li>
                <li>
                    La largeur maximale des carte est de <IC>25rem</IC>.
                </li>
                <li>
                    Le wrapper dans le <IC>&lt;main&gt;</IC> a une taille maximale entre <IC>52rem</IC> et <IC>78rem</IC>.
                </li>
                <li>
                    Le footer est bien poussé en bas de l&apos;écran, même sur les grands écrans. Vous pouvez dézoomé la page web pour 
                    tester ceci.
                </li>
                <li>
                    Pour changer la couleur et le style des liens, assurez-vous de mettre le CSS dans un sélecteur qui pointe 
                    directement sur la balise <IC>&lt;a&gt;</IC>.
                </li>
            </ul>
        </section>

        <section>
            <h2>Image à reproduire</h2>
            <section>
                <h3>Sur grand écran</h3>
                <Image src={css1} alt="Image à reproduire en CSS - Grand écran" />
            </section>

            <section>
                <h3>Sur petit écran</h3>
                <Image src={css2} alt="Image à reproduire en CSS - Petit écran - Partie 1" />
                <Image src={css3} alt="Image à reproduire en CSS - Petit écran - Partie 2" />
            </section>
        </section>

        <section>
            <h2>Fichiers</h2>
            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/choco-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/choco-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}