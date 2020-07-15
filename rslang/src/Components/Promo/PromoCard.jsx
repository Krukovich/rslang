import { Link } from 'react-router-dom';
import React from 'react';
import './PromoCard.scss'
export const PromoCard = (props) => {
  return (
    <div className="card PromoCard mb-3 col-12" >
      <div className="card-header font-weight-bold">
        {props.cardTitle}
      </div>
      <div className="card-body PromoCard-Body">
        <div className="d-flex flex-column mb-2 flex-sm-row col-12">
          <div className={'PromoCard-Img mb-2 col-sm-4 col-xl-3 ' + props.classN}></div>
          <p className=" col-sm-8 card-text pl-2 col-xl-9 PromoCard-Text">
            {props.cardText}
          </p>
        </div>
        <Link to={props.link} className="btn btn-primary">{props.btnText}</Link>
      </div>
    </div>
  )
}