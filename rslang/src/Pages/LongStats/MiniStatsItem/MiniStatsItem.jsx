import React from "react";
import { Translation } from 'react-i18next';

const MiniStatsItem = ({ timestamp, newWords }) => {
  const day = new Date(+timestamp).toString().slice(4, 15);
  return (
    <li className="d-flex justify-content-around miniStats-elem">
      <span>
        {<Translation>
          {
            (t) => <>{t('stats.11')}</>
          }
        </Translation>}
        {day}</span>
      <span>
        {<Translation>
          {
            (t) => <>{t('stats.12')}</>
          }
        </Translation>}
        {newWords}</span>
    </li>
  );
};

export default MiniStatsItem;
