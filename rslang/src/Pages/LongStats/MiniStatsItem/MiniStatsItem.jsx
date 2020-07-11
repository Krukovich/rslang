import React from 'react';

const MiniStatsItem = ({ timestamp, newWords }) => {
	const day = new Date(timestamp).toString().slice(4, 15);
    return(
<<<<<<< HEAD
        <li className="d-flex justify-content-around">
=======
        <li className="d-flex justify-content-around miniStats-elem">
>>>>>>> ed1e6808e9abb5e8fef19623e484c6e4c59e3d8b
					<span>Дата игры: {day}</span>
					<span>Счет: {newWords}</span>
        </li>
    )
}

export default MiniStatsItem;