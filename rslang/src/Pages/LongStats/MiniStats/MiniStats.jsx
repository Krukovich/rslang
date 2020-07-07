import React from 'react';
<<<<<<< HEAD
import MiniStatsItem from '../MiniStatsItem/MiniStatsItem';

const MiniStats = ({ count }) => {
	const elems = count.map((item) => {
		const { timestamp, newWords } = item;
		return (
			<MiniStatsItem
<<<<<<< HEAD
			key={timestamp}
=======
>>>>>>> mini stats test
				timestamp={timestamp}
				newWords={newWords} />
		)
	});
	return (<ul>{elems}</ul>)
}
=======

const MiniStats = ({ count }) => {
    return(
      <p>{count}</p>
    )
  }
>>>>>>> mini stats from redux

export default MiniStats;  