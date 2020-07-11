import React from 'react';
import { Link } from 'react-router-dom';


export const GamesCard = (props)=>{
  return(
    <div class="col-sm-6 mb-3" >
    <div class="card">
      <div class="card-body">
        <h5 class="card-title font-weight-bold">{props.gameTitle}</h5>
        <p class="card-text mb-2">{props.gameDescription}</p>
        <Link  to={props.gameLink} className="btn btn-primary">Играть</Link>
      </div>
    </div>
  </div>
  )
}