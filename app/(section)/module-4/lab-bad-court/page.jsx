import Image from 'next/image';
import IC from '@/components/InlineCode';
import { DownloadBlock, File } from '@/components/DownloadBlock';

import badCourt from '@/public/img/css-bad-court.jpg';
import Color from '@/components/Color';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Tailles et bordures",
    description: "Présentation du laboratoire sur l'utilisation des tailles et bordures en reproduisant une image en HTML et CSS.",
    keywords: ["html", "css", "reproduction", "tableau", "badminton", "terrain", "court"],
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
                    Créer un tableau en HTML similaire à celui ci-dessous.
                    <ul>
                        <li>
                            Le tableau doit avoir 7 rangées et 4 colonnes.
                        </li>
                        <li>
                            Le tableau doit avoir un <IC>&lt;caption&gt;</IC>.
                        </li>
                        <li>
                            Certaines cellules du tableau doivent être fusionnées.
                        </li>
                    </ul>
                </li>
                <li>
                    Créer un fichier CSS et lier le à votre fichier HTML.
                </li>
                <li>
                    Styliser la page Web et la tableau pour qu&apos;elle ressemble à l&apos;image ci-dessous.
                    <ul>
                        <li>
                            Les couleurs utilisées sont: <Color value="#29302d" />, <Color value="#ffffff" /> et <Color value="#698062" />.
                        </li>
                        <li>
                            Les tailles n&apos;ont pas besoin d&apos;être exacte.
                        </li>
                    </ul>
                </li>
            </ol>
        </section>

        <section>
            <h2>Image à reproduire</h2>
            <Image src={badCourt} alt="Image à reproduire en HTML et CSS" />
        </section>

        <section>
            <h2>Solution</h2>
            <DownloadBlock>
                <File fileName="solution.zip" path="/labs/lab-terrain-badminton-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}