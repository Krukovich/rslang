import React from 'react';
import MiniStatsItem from '../MiniStatsItem/MiniStatsItem';

const MiniStats = ({ count }) => {
	const elems = count.map((item) => {
		const timestamp = Object.keys(item)[0];
		const newWords = item[timestamp];
		return (
			<MiniStatsItem
			key={timestamp}
				timestamp={timestamp}
				newWords={newWords} />
		)
	});
	return (<ul>{elems}</ul>)
}

export default MiniStats;
