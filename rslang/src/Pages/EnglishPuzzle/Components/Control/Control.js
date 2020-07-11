import React from "react";
import { MDBTooltip, MDBBtn, MDBBtnGroup, MDBCol, MDBRow } from "mdbreact";

import Translate from '../Translate/Translate';
import { playExampleSound } from '../../../../service';

import '../Control/control.scss';

const Control = ({ src, stringTranslate }) => {
  
  return (
    <MDBRow className="control-panel">
      <MDBCol xl="4" md="12">
        <div className="btn-toolbar mt-5" role="toolbar">
          <MDBBtnGroup className="mr-2">
            <MDBTooltip placement="bottom">
              <MDBBtn
                color="white lighten-2"
                onClick={ () => playExampleSound(src) }
              >
                <img src="https://img.icons8.com/nolan/24/low-volume.png" alt="icon" />
              </MDBBtn>
              <div>Play example sound</div>
            </MDBTooltip>
            <Translate
              stringTranslate={ stringTranslate }
            />
          </MDBBtnGroup>
        </div>
      </MDBCol>
    </MDBRow>
  )
}

export default Control;
