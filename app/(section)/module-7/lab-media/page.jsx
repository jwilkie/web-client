import Image from 'next/image';
import Color from '@/components/Color';
import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

import css1 from '@/public/img/css-ski-1.jpg';
import css2 from '@/public/img/css-ski-2.jpg';
import css3 from '@/public/img/css-ski-3.jpg';
import css4 from '@/public/img/css-ski-4.jpg';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Media queries et autres",
    description: "Présentation du laboratoire sur l'utilisation des media queries, des transformation et des transitions.",
    keywords: ["css", "media", "transform", "transition"],
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
                    Les couleurs utilisées sont: <Color value="#292955" />, <Color value="#3f5aa3" />, <Color value="#5394d1" /> et <Color value="#fff" />.
                </li>
                <li>
                    La police de caractère utilisé peut être trouvé sur Google Fonts. On 
                    utilise <a href="https://fonts.google.com/noto/specimen/Noto+Sans" target="_blank">Noto Sans</a> pour tout 
                    le site web.
                </li>
                <li>
                    Les espacements peuvent être approximatifs, mais essayez d&apos;être le plus similaire possible à 
                    l&apos;image ci-dessous.
                </li>
                <li>
                    La hauteur du header est fixe à <IC>25rem</IC>.
                </li>
                <li>
                    La hauteur et largeur des images dans la gallerie est de <IC>10rem</IC>.
                </li>
                <li>
                    La largeur du <IC>&gt;aside&lt;</IC> est de <IC>15rem</IC>. Il est possible que vous ayez à utiliser la 
                    propriété <IC>min-width</IC>.
                </li>
                <li>
                    Pour éviter de déformer les images, vous pouvez utiliser la propriété <IC>object-fit: cover;</IC>.
                </li>
                <li>
                    L&apos;ombre autour du titre peut être accompli à l&apos;aide la propriété <IC>text-shadow</IC>.
                </li>
                <li>
                    Les changements d&apos;interface se font à une taille de navigateur de <IC>45rem</IC> et <IC>70rem</IC>.
                </li>
                <li>
                    Le footer est bien poussé en bas de l&apos;écran, même sur les grands écrans. Vous pouvez dézoomé la page web pour 
                    tester ceci.
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
                <h3>Sur moyen écran</h3>
                <Image src={css2} alt="Image à reproduire en CSS - Moeyn écran" />
            </section>

            <section>
                <h3>Sur petit écran</h3>
                <Image src={css3} alt="Image à reproduire en CSS - Petit écran - Partie 1" style={{marginBottom: 0}} />
                <Image src={css4} alt="Image à reproduire en CSS - Petit écran - Partie 2" style={{marginTop: 0}} />
            </section>
        </section>

        <section>
            <h2>Fichiers</h2>
            <p>
                Si vous voulez faire l&apos;exercice dans son entier, démarrez avec le fichier <IC>distribué.zip</IC>. Si vous voulez 
                simplement faire l&apos;exercice pour le matériel vu dans ce module, démarrer avec le 
                fichier <IC>distribué-partiel.zip</IC>.
            </p>
            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/ski-distribué.zip">distribué.zip</File>
                <File fileName="distribué-partiel.zip" path="/labs/ski-distribué-partiel.zip">distribué-partiel.zip</File>
                <File fileName="solution.zip" path="/labs/ski-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}