import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import { imageRender } from '../../../../service';

import './Slider.scss';

const Slider = ({ words }) => {
  const slider = words.map((word) => {
    return(
      <Carousel.Item key={ word.id }>
        <img
          className="d-block w-100"
          src={ imageRender(word.image) }
          alt="word"
        />
        <Carousel.Caption>
          <h3 className="Word">
            { word.word }
          </h3>
          <p className="WordTranslate">
            { word.wordTranslate }
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return(
    <React.Fragment>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-6 mt-5">
          <Slider>
            { slider }
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Slider;
