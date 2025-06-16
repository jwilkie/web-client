import { DownloadBlock, File } from '@/components/DownloadBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Créateur de cartes d'affaires",
    description: "Présentation du laboratoire sur la création de cartes d'affaires en Javascript qui travaillera avec les évènements et les propriétés DOM.",
    keywords: ["js", "console", "javascript", "value", "input", "style", "event"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>

            <p>
                À partir du code distribué ci-dessous, créer un fichier Javascript lié à la page d'accueil du site web qui 
                permettra, lors de la soumission du formulaire, de modifier le contenue et les couleurs de la carte d'affaires
                affichée en fonction des valeurs entrées. Vous devez respecter les éléments suivants:
            </p>
            <ul>
                <li>
                    Changer le texte du nom de l'entreprise, l'adresse courriel, le numéro de téléphone et le nom complet dans 
                    la carte d'affaires lorsque le formulaire est soumis.
                </li>
                <li>
                    Changer les 2 bandes de couleur de la carte d'affaires en fonction des couleurs entrées dans le formulaire
                    lorsque le formulaire est soumis.
                </li>
                <li>
                    Valider que tous les champs du formulaire sont remplis avant de changer la carte d'affaires. Si un champ
                    n'est pas rempli, afficher un message d'erreur à l'utilisateur ou mettez le champ en rouge.
                </li>
                <li>
                    (optionnel) Valider que le champ de courriel est valide avant de changer la carte d'affaires. Vous pouvez 
                    utiliser les expressions régulières (regex) pour faire cette validation.
                </li>
                <li>
                    (optionnel) Valider que le numéro de téléphone est valide avant de changer la carte d'affaires. Vous pouvez 
                    utiliser les expressions régulières (regex) pour faire cette validation.
                </li>
            </ul>
        </section>

        <section>
            <h2>Solution</h2>
            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/carte-affaire-distribué.zip">distribué.zip</File>
                <File fileName="solution.zip" path="/labs/carte-affaire-solution.zip">solution.zip</File>
            </DownloadBlock>
        </section>
    </>
}
