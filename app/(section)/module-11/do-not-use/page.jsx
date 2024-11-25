import IC from '@/components/InlineCode';
import OverflowContainer from '@/components/OverflowContainer';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Javascript à ne pas utiliser",
    description: "Présentation des éléments Javascript à ne jamais utiliser.",
    keywords: ["js", "do not use", "alert", "confirm", "equality", "égalité", "undefined", "var"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Mauvaises pratiques</h2>
            <p>
                Javascript est un langage très flexible, mais qui est prompt à créer du code spaghetti difficile à maintenir si on ne fait pas 
                attention. Dans cette veine de pensée, il y a des éléments de Javascript que vous ne devriez jamais utiliser. Certains puisqu&apos;ils
                sont obsolètes, d&apos;autres puisqu&apos;ils sont dangereux et d&apos;autres encore puisqu&apos;ils ont mauvaise connotation dans 
                la communauté de développeurs.
            </p>
            <p>
                Voici une liste de quelques éléments de Javascript que vous ne devriez jamais utiliser:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Élément</th>
                            <th>Utilité</th>
                            <th>Raison pour ne pas l&apos;utiliser</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><IC>alert()</IC></td>
                            <td>Popup de notification</td>
                            <td>Impossible à styler avec le CSS et mauvaise connotation dans le web. Préférer créer nos propres modals avec CSS.</td>
                        </tr>
                        <tr>
                            <td><IC>confirm()</IC></td>
                            <td>Popup de confirmation</td>
                            <td>Impossible à styler avec le CSS et mauvaise connotation dans le web. Préférer créer nos propres modals avec CSS.</td>
                        </tr>
                        <tr>
                            <td><IC>==</IC> et <IC>!=</IC></td>
                            <td>Égalité et inégalité</td>
                            <td>Préférer toujours utiliser <IC>===</IC> et <IC>!==</IC> pour éviter les problèmes de conversion.</td>
                        </tr>
                        <tr>
                            <td>Mettre des variables dans l&apos;objet <IC>window</IC></td>
                            <td>Accéder à des variables globales</td>
                            <td>Préférer toujours utiliser des imports et des exports pour éviter les problèmes de portée.</td>
                        </tr>
                        <tr>
                            <td><IC>var</IC></td>
                            <td>Déclaration de variable</td>
                            <td>Préférer toujours utiliser <IC>let</IC> ou <IC>const</IC> pour éviter les problèmes de portée.</td>
                        </tr>
                        <tr>
                            <td><IC>undefined</IC></td>
                            <td>Indiquer une valeur inexistante</td>
                            <td>Préférer toujours utiliser <IC>null</IC> pour indiquer une valeur inexistante.</td>
                        </tr>
                        <tr>
                            <td><IC>require()</IC></td>
                            <td>Importer un module avec CommonJS</td>
                            <td>Préférer toujours utiliser les imports ES6 au lieu de CommonJS pour importer des modules.</td>
                        </tr>
                        <tr>
                            <td>Élément deprecated et obsolète</td>
                            <td colSpan={2}>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features" target="_blank">
                                    MDN - Deprecated and obsolete features
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
        </section>
    </>
}