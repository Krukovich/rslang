import React, { useState } from 'react';
import { MDBBtn, MDBModal, MDBTooltip, MDBModalBody, MDBModalHeader } from 'mdbreact';

const Translate = ({ stringTranslate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <MDBTooltip placement="bottom">
      <MDBBtn
        color="white"
        onClick={ () => setIsOpen(true) }
      >
        <img src="https://img.icons8.com/nolan/24/google-translate.png" alt="icon" />
      </MDBBtn>
        <div>Translate play string</div>
      </MDBTooltip>
      <MDBModal isOpen={ isOpen } toggle={ () => setIsOpen(true) } side position="top-right">
        <MDBModalHeader toggle={ () => setIsOpen(false) }>Translate</MDBModalHeader>
        <MDBModalBody>
          { stringTranslate }
        </MDBModalBody>
      </MDBModal>
    </React.Fragment>
  );
}

export default Translate;
