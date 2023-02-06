import './card.scss'

import { Link } from 'react-router-dom'
import { logements } from '../../data/logements'

/* Permet de générer les cartes des logements */
function Card () {
    return (
        <section className='logements'>
			<div className='logements__list'>
				{logements.map(({ id, cover, title }) =>
					<article key={id} className='logements__list__content'>
						<Link to={`/logement?id=${id}`}>
							<div className="logements__list__content__bg"></div>
							<img className='logements__list__content__cover' src={cover} alt={`Logement ${title}`} />
							<p className="logements__list__content__name">{title}</p>
						</Link>
					</article>
				)}
			</div>
		</section>
    )
}

export default Card
