import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { playExampleSound } from '../../../service'

const PlayBtn = ({ src }) => {
    return (
        <button type="button" className="btn mr-2" onClick={ () => playExampleSound(src) }><span><FontAwesomeIcon icon={ faPlayCircle } /></span></button>
    )
}

export default PlayBtn
