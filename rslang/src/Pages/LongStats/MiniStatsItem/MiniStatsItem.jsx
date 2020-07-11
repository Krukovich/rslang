import React from 'react';

const MiniStatsItem = ({ timestamp, newWords }) => {
	const day = new Date(timestamp).toString().slice(4, 15);
    return(
        <li className="d-flex justify-content-around miniStats-elem">
					<span>Дата игры: {day}</span>
					<span>Счет: {newWords}</span>
        </li>
    )
}

export default MiniStatsItem;