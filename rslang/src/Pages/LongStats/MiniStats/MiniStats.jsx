import React from 'react';
import MiniStatsItem from '../MiniStatsItem/MiniStatsItem';

const MiniStats = ({ count }) => {
	const elems = count.map((item) => {
		const { timestamp, newWords } = item;
		return (
			<MiniStatsItem
<<<<<<< HEAD
			key={timestamp}
=======
<<<<<<< HEAD
<<<<<<< HEAD
			key={timestamp}
=======
>>>>>>> mini stats test
=======
			key={timestamp}
>>>>>>> fix: key
>>>>>>> fix: key
				timestamp={timestamp}
				newWords={newWords} />
		)
	});
	return (<ul>{elems}</ul>)
}

export default MiniStats;  