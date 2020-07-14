import React from "react";
import MiniStatsItem from "../MiniStatsItem/MiniStatsItem";

const MiniStats = ({ stats, miniGame }) => {
  const elems = [];
  if (!stats[miniGame]) return <p className="d-flex justify-content-around miniStats-elem">Данных пока нет</p>

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

export default MiniStats;
