import React, { Component } from 'react';
import { MDBBtn, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class Stats extends Component {
  constructor(props) {
    super();

    this.state = {
      modal: false,
      mistakeListString: props.isMistakeStrings,
      agreeStrings: props.isAgreeStrings,
      nextStep: props.nextStep,
    }
  }

  toggle = () => {
    this.setState({
      modal: this.state.modal ? false : true,
    });
  }

  playContinue = () => {
    this.toggle();
    this.state.nextStep();
  }

  render() {
    const { mistakeListString, agreeStrings } = this.state;

    const mistakeList = mistakeListString.map((string, index) =>
      <MDBListGroupItem key={ index }>{ string }</MDBListGroupItem>
    );

    const agreeList = agreeStrings.map((string, index) =>
      <MDBListGroupItem key={ index }>{ string }</MDBListGroupItem>
    );
    return (
      <React.Fragment>
        <MDBBtn
          className="btn btn-outline-white btn-md"
          onClick={ () => this.toggle() }
        >
          Результат
        </MDBBtn>
        <MDBModal
          isOpen={ this.state.modal }
          toggle={ () => this.toggle() }
          size="lg"
        >
          <MDBModalHeader
            toggle={ () => this.toggle() }
          >
            Результат игры
          </MDBModalHeader>
          <MDBRow>
            <MDBCol className="col-12 text-left">
              <strong>
                Я не знаю
              </strong>
            </MDBCol>
          </MDBRow>
          <MDBModalBody>
            <MDBListGroup>
              { mistakeList }
            </MDBListGroup>
          </MDBModalBody>
          <MDBRow>
            <MDBCol className="col-12 text-left">
              <strong>
                Я знаю
              </strong>
            </MDBCol>
          </MDBRow>
          <MDBModalBody>
            <MDBListGroup>
              { agreeList }
            </MDBListGroup>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="primary"
              onClick={ () => this.toggle() }
            >
              Закрыть
            </MDBBtn>
            <MDBBtn
              color="primary"
              onClick={ this.playContinue }
            >
              Продолжить
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default Stats;
