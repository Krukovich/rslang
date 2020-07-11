import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdbreact";

import { GAME_LEVEL } from '../../../../constant';

import './gameLevel.scss';

const GameLevel = () => {
  return (
    <MDBListGroup style={{ width: "5rem" }} className="game-level">
      { GAME_LEVEL.map((item, index) => {
        return (
          <MDBListGroupItem className="d-flex justify-content-center">
            <MDBBadge
              className="level-point"
              color="secondary"
              pills
              key={ index }
            >
              { item }
            </MDBBadge>
          </MDBListGroupItem>
        );
      }) }
    </MDBListGroup>
  );
};

export default GameLevel;
