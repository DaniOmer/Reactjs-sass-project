import { useState } from 'react'

import arrowDown from "../../assets/arrowDown.svg";


/* Pour gérer l'état Ouvert/Fermé d'autre composant */
function Collapse ({ categorie, title, content }) {

    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <section className={`${categorie}__informations__card`} >
            <header className={`${categorie}__informations__card__title`}  onClick={() => setIsOpen(false)}>
                <h1>{title}</h1>
                <img src={ arrowDown } alt="Bouton menu déroulant" />
            </header>
            <article className={`${categorie}__informations__card__info`}  id="open">
                <p>{ content }</p>
            </article>
        </section>
    ) : (
        <section className={`${categorie}__informations__card`}>
            <header className={`${categorie}__informations__card__title`} onClick={() => setIsOpen(true)}>
                    <h1>{title}</h1>
                    <img src={ arrowDown } alt="Bouton menu déroulant" id="close" />
            </header>
         </section>
    )
}

export default Collapse
