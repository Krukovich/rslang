import { Link } from 'react-router-dom';
import React from 'react';
export const PromoCard = (props) => {
  return (
    <div class="card mb-3">
      <div class="card-header font-weight-bold">
        {props.cardTitle}
      </div>
      <div class="card-body">
        <div className="con d-flex flex-column mb-2 flex-sm-row">
          <div className={'PromoCard-Img ' + props.classN}></div>
          <p class="card-text pl-2">
            {props.cardText}
          </p>
        </div>
        <Link to={props.link} className="btn btn-primary">{props.btnText}</Link>
      </div>
    </div>
  )
}