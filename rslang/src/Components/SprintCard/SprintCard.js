import React from 'react';
import './SprintCard.scss';
import { Button } from 'react-bootstrap';

const SprintCard = (props) => {
    return (
        <div className="Sprint-Card SprintCard card border-primary rounded mt-2 p-3 w-100">
            <div className="SprintCard-Body card-body">
                <h5 className="SprintCard-Title card-title text-center mt-4 mb-4">{props.eng}</h5>
                <h6 className="SprintCard-Subtitle card-subtitle mb-5 text-muted text-center">{props.rus}</h6>
                <div className="SprintCard-Footer card-footer p-3 d-flex justify-content-between">
                    <Button onClick={props.onclick} variant='success' className="SprintCard-Button_success">
                        <span>Yes</span>
                        <div className="SprintCard-Button_prompt">
                            <div></div>
                            <div></div>
                        </div>
                    </Button>
                    <Button onClick={props.onclick} variant='danger' className="SprintCard-Button_wrong">
                        <span>No</span>
                        <div className="SprintCard-Button_prompt">
                            <div></div>
                            <div></div>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SprintCard