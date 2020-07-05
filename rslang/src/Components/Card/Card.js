import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <a href={props.href} className="Card border-primary rounded">
            <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center bg-primary">
                    <div className={"Card-Image " + props.class} style={{ backgroundColor: 'white' }}>
                        <img src={props.pic} className="card-img" ></img>
                    </div>
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
