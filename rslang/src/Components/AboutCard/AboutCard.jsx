import React from 'react';
import './AboutCard.scss';
import { Translation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import git from '../../Pages/AboutPage/assets/git.png';

const AboutCard = (props) => {
    return (
        <div className="AboutCard card" style={{ width: '18rem' }}>
            <div className={"AboutCard-Image card-img-top " + props.pic} />
            <div className="card-body">
                <h5 className="card-title">
                    {<Translation>
                        {
                            (t) => <>{t(props.name)}</>
                        }
                    </Translation>}
                </h5>
                <p className="AboutCard-Text card-text">
                    {<Translation>
                        {
                            (t) => <>{t(props.description)}</>
                        }
                    </Translation>}
                </p>
                <div className="AboutCard-Footer card-footer mt-2">
                    <a className="AboutCard-Git mr-2" href={props.href[0]} target="_blank">
                        <img src={git} />
                    </a>
                    <a className="AboutCard-Cv" href={props.href[1]} target="_blank">
                        <FontAwesomeIcon icon={faIdCard} color={'white'} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutCard
