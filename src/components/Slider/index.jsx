
import { useState } from "react";
import './slider.scss'

import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  /* Fonction appliquée au bouton suivant */
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  /* Fonction appliqué au bouton précédent */
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  
  return (
    <div className="slider">

      {/* Méthode Map pour parcourir le tableau slides et retourner les images */}
      {slides.map((picture, index) => {
        return (
          <div key={index} className={ 
            index === current ? "slide active" : "slide inactive" }>
            
            {index === current && (
              <div>
                <img src={picture} alt="" className="slider__picture" />
                <p className="slider__count">{current + 1}/{length}</p>
              </div> 
            )}
          </div>
        );
      })}
      {length > 1 ? (
        <div>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider__previous__icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slider__next__icon" />
          </div>
          </div>
      ) : null}
    </div>
  );
};

export default Slider;