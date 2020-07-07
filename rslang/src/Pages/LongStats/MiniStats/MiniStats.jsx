import React from 'react';
import MiniStatsItem from '../MiniStatsItem/MiniStatsItem';

const MiniStats = ({ count }) => {
	const elems = count.map((item) => {
		const { timestamp, newWords } = item;
		return (
			<MiniStatsItem
				timestamp={timestamp}
				newWords={newWords} />
		)
	});
	return (<ul>{elems}</ul>)
}

export default MiniStats;  