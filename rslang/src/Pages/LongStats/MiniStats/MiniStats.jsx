import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import MiniStatsItem from '../MiniStatsItem/MiniStatsItem';

const MiniStats = ({ count }) => {
	const elems = count.map((item) => {
		const { timestamp, newWords } = item;
		return (
			<MiniStatsItem
<<<<<<< HEAD
<<<<<<< HEAD
			key={timestamp}
=======
>>>>>>> mini stats test
=======
			key={timestamp}
>>>>>>> fix: key
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
=======
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
>>>>>>> mini stats test

export default MiniStats;  