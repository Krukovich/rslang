import React from 'react';
import { Link } from 'react-router-dom';
import { Translation } from 'react-i18next';


export const GamesCard = (props)=>{
  return(
    <div className="col-sm-6 mb-3" >
    <div className="card">
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{props.gameTitle}</h5>
        <p className="card-text mb-2">{props.gameDescription}</p>
        <Link  to={props.gameLink} className="btn btn-primary">
          {
            <Translation>
              {
                (t) => <>{t('promo.13')}</>
              }
            </Translation>
          }
        </Link>
      </div>
    </div>
  </div>
  )
}