
import redstar from "../../assets/redStar.svg";
import greystar from "../../assets/greyStar.svg";

/* Pour l'affichage des avis sur les logements */
const Rating = ({ rating }) => {
  	const stars = [1, 2, 3, 4, 5];

  	return (
		<div className="product__content__right__rate">
		{stars.map((star) => 
			rating >= star ? (
			<img key={star.toString()} className="product__content__right__rate__icon" src={redstar} alt="Evaluation du logement" />
			) : (
			<img key={star.toString()} className="product__content__right__rate__icon" src={greystar} alt="Evaluation du logement" />
			)
		)}
		</div>
  	);
};

export default Rating;