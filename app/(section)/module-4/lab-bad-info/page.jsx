import Image from 'next/image';
import Color from '@/components/Color';
import IC from '@/components/InlineCode';
import ColoredBox from '@/components/ColoredBox';
import { DownloadBlock, File } from '@/components/DownloadBlock';

import css1 from '@/public/img/css-bad-info.jpg';
import css2 from '@/public/img/css-bad-histoire-1.jpg';
import css3 from '@/public/img/css-bad-histoire-2.jpg';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Reproduction de style",
    description: "Présentation du laboratoire sur la reproduction de style CSS de base à partir d'une image.",
    keywords: ["css", "html", "reproduction", "badminton"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <p>
                Écrivez le code HTML et CSS permettant de reproduire la page web affiché ci-dessous en suivant les étapes suivantes:
            </p>
            <ol>
                <li>
                    Créer la structure de base d&apos;un projet web.
                </li>
                <li>
                    Créez 2 pages, soit <IC>index.html</IC> et <IC>histoire.html</IC> avec la structure HTML nécessaire en fonction 
                    de l&apos;image ci-dessous.
                </li>
                <li>
                    Créer un fichier CSS et lier le à tous vos fichiers HTML.
                </li>
                <li>
                    Styliser les pages Web pour qu&apos;elle ressemble à l&apos;image ci-dessous.
                    <ul>
                        <li>
                            Les couleurs utilisées sont: <Color value="#000" />, <Color value="#fff" /> et <Color value="#2b4a2d" />.
                        </li>
                        <li>
                            Les images utilisées sont disponible dans les fichiers distribués ci-dessous.
                        </li>
                    </ul>
                </li>
            </ol>
            <ColoredBox title="À noter: ">
                Si vous ne voulez pas faire le HTML de ce projet, vous pouvez aussi démarrer le projet à partir du 
                fichier <IC>distribué.zip</IC> qui est fourni dans la section des téléchargements plus bas.
            </ColoredBox>
        </section>

        <section>
            <h2>Image à reproduire</h2>
            <section>
                <h3>Page d&apos;accueil</h3>
                <Image src={css1} alt="Image à reproduire en HTML" />
            </section>

            <section>
                <h3>Page d&apos;histoire</h3>
                <Image src={css2} alt="Image à reproduire en HTML" />
                <Image src={css3} alt="Image à reproduire en HTML" />
            </section>
        </section>

        <section>
            <h2>Solution</h2>
            <DownloadBlock>
                <File fileName="intro.jpg" path="/labs/lab-badminton-intro.jpg">intro.jpg</File>
                <File fileName="histoire-1.jpg" path="/labs/lab-badminton-histoire-1.jpg">histoire-1.jpg</File>
                <File fileName="histoire-2.jpg" path="/labs/lab-badminton-histoire-2.jpg">histoire-2.jpg</File>
                <File fileName="distribué.zip" path="/labs/lab-badminton-info-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/lab-badminton-info-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}