import IC from '@/components/InlineCode';
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Unité de mesure",
    description: "Présentation des 2 types d'unités de mesure en CSS et de leurs différentes sortes.",
    keywords: ["css", "absolue", "relative"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Type d&apos;unités</h2>
            <p>
                Il existe 2 sortent d&apos;unités de mesures en CSS, soit les unités de mesures absolues et les unités de mesures
                relative. Nous utiliserons ces unités de mesures majoritairement dans les propriétés CSS permettant de modifier
                la taille ou l&apos;espacement des éléments HTML. Si la page suivante ne satisfait pas votre curiosité sur les unités
                possible en CSS, vous pouvez trouver plus d&apos;information sur la page web suivante:
            </p>
            <p>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units" target="_blank">
                    MDN- Values and units
                </a>
            </p>
        </section>

        <section>
            <h2>Unités relatives</h2>
            <p>
                Une unité de mesure relative est toujours dépendante d&apos;une autre mesure. C&apos;est généralement le type d&apos;unités de
                mesures que nous utiliserons dans nos pages Web. Il existe de nombreuses unitées de mesures relatives et elles
                ne sont pas toutes relatives aux mêmes choses. Voici donc une liste de ces unités de mesure ainsi que de ce
                qu&apos;elle dépende.
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Unité</th>
                            <th>Définition</th>
                            <th>Utilisation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>em</td>
                            <td>
                                Mesure relative en fonction de la taille courante de la police de caractères. 1em est donc plus 
                                grand sur un titre que sur paragraphe par défaut.
                            </td>
                            <td>Utile pour la taille du texte.</td>
                        </tr>
                        <tr>
                            <td>rem</td>
                            <td>
                                Mesure relative en fonction de la taille de base de la police de caractères. En général, 1em est 
                                équivalent à 16px.
                            </td>
                            <td>
                                Utile pour les margins, padding, les grosses bordures, les dimensions d&apos;un élément ou la taille du texte.
                            </td>
                        </tr>
                        <tr>
                            <td>%</td>
                            <td>
                                Mesure relative en fonction de la valeur du parent. 50% indique la moitié de la valeur de la 
                                propriété du parent.
                            </td>
                            <td>
                                Utile pour les les dimensions d&apos;un élément.
                            </td>
                        </tr>
                        <tr>
                            <td>vw</td>
                            <td>
                                Mesure relative en fonction de la largeur du navigateur. C&apos;est un pourcentage, donc 25vw indique 
                                25% de la largeur du navigateur.
                            </td>
                            <td>
                                Utile pour la largeur d&apos;un élément.
                            </td>
                        </tr>
                        <tr>
                            <td>vh</td>
                            <td>
                                Mesure relative en fonction de la hauteur du navigateur. C&apos;est un pourcentage, donc 75vh indique 
                                75% de la hauteur du navigateur.
                            </td>
                            <td>
                                Utile pour la hauteur d&apos;un élément.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>

        <section>
            <h2>Unités absolue</h2>
            <p>
                Une unité de mesures absolue ne dépend de rien. Elle spécifie une taille très spécifique à l&apos;écran. Bien que
                nous les utilisions de temps en temps, il n&apos;est pas vraiment recommander de les utiliser puisque aujourd&apos;hui,
                les tailles d&apos;écrans varient beaucoup. En effet, si vous utilisez une taille absolue sur un écran d&apos;ordinateur
                ou sur un téléphone cellulaire, une marge de 30 pixels peut être très différente. Voici tout de même quelques
                unités de mesures absolues:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Unité</th>
                            <th>Définition</th>
                            <th>Utilisation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>px</td>
                            <td>Mesure en pixel</td>
                            <td>Utile pour les fines bordures ou toute valeur inférieure à 5px.</td>
                        </tr>
                        <tr>
                            <td>mm</td>
                            <td>Mesure en millimètre</td>
                            <td>Utilisé pour l&apos;impression de page web sur papier.</td>
                        </tr>
                        <tr>
                            <td>cm</td>
                            <td>Mesure en centimètre</td>
                            <td>Utilisé pour l&apos;impression de page web sur papier.</td>
                        </tr>
                        <tr>
                            <td>in</td>
                            <td>Mesure en pouces</td>
                            <td>Utilisé pour l&apos;impression de page web sur papier.</td>
                        </tr>
                        <tr>
                            <td>pt</td>
                            <td>Mesure en points</td>
                            <td>Utilisé pour l&apos;impression de page web sur papier.</td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>
        
        <section>
            <h2>Unités les plus fréquente</h2>
            <p>
                Bien qu&apos;il y ait de nombreuses unités de mesures, nous utiliseront généralement toujours les quelques mêmes. 
                Certaines unités de mesure seront pratiquement jamais utilisé. C&apos;est le cas 
                du <IC>mm</IC>, <IC>cm</IC>, <IC>in</IC> et <IC>pt</IC> puisqu&apos;ils sont majoritairement utilisé pour 
                l&apos;impression. Parmi les autres, on utilisera majoritairement le <IC>px</IC> et le <IC>rem</IC>. Pour les très 
                petites valeurs, on utilise le <IC>px</IC>. Autrement, on préfèrera le <IC>rem</IC>.
            </p>
            <p>
                Les autres unités de mesure vont voir leur apparition dans quelques techniques de CSS, mais ne sont pas si 
                fréquente.
            </p>
        </section>
    </>
}