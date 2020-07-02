import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MiniBtn from '../MiniBtn/MiniBtn';

const BtnsBar = ({ items, showStats }) => {

    const elements = items.map((item) => {
        const { id, label } = item;
        return (
            <div key={id}>
                <MiniBtn  {...label}
                    showStats={() => showStats(id)} />
                <span>{label}</span>
            </div>
        )
    });
    return (<ButtonGroup vertical size="lg">{elements}</ButtonGroup>)
}

export default BtnsBar;

