import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <a href={props.href} className="card border-primary rounded mt-2">
            <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center bg-primary">
                    <img className="card-img h-75 w-75" style={{ backgroundColor: 'white' }}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body bg-primary" style={{ color: 'white' }}>
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card
