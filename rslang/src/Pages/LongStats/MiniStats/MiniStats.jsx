import React from "react";
import MiniStatsItem from "../MiniStatsItem/MiniStatsItem";

const MiniStats = ({ stats, miniGame }) => {
  console.log("minigame naim in component", miniGame, stats, stats[miniGame]);
  const elems = [];

  for (let timestamp in stats[miniGame]) {
    if (timestamp !== "0") {
      elems.push(
        <MiniStatsItem
          key={timestamp}
          timestamp={+timestamp}
          newWords={stats[miniGame][timestamp]}
        />
      );
    }
  }

  return <ul>{elems}</ul>;
};
// const MiniStats = ({ count }) => {
// 	const elems = count.map((item) => {
// 		const timestamp = Object.keys(item)[0];
// 		const newWords = item[timestamp];
// 		return (
// 			<MiniStatsItem
// 			key={timestamp}
// 				timestamp={timestamp}
// 				newWords={newWords} />
// 		)
// 	});
// 	return (<ul>{elems}</ul>)
// }

export default MiniStats;
