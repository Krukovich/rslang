import React, { Component } from 'react';
import { Translation } from 'react-i18next';
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
      <MDBListGroupItem key={index}>{string}</MDBListGroupItem>
    );

    const agreeList = agreeStrings.map((string, index) =>
      <MDBListGroupItem key={index}>{string}</MDBListGroupItem>
    );
    return (
      <React.Fragment>
        <MDBBtn
          className="btn btn-outline-white btn-md"
          onClick={() => this.toggle()}
        >
          {<Translation>
            {
              (t) => <>{t('englishPuzzle.9')}</>
            }
          </Translation>}
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal}
          toggle={() => this.toggle()}
          size="lg"
        >
          <MDBModalHeader
            toggle={() => this.toggle()}
          >
            {<Translation>
              {
                (t) => <>{t('englishPuzzle.9')}</>
              }
            </Translation>}
          </MDBModalHeader>
          <MDBRow>
            <MDBCol className="col-12 text-left">
              <strong>
                {<Translation>
                  {
                    (t) => <>{t('englishPuzzle.10')}</>
                  }
                </Translation>}
              </strong>
            </MDBCol>
          </MDBRow>
          <MDBModalBody>
            <MDBListGroup>
              {mistakeList}
            </MDBListGroup>
          </MDBModalBody>
          <MDBRow>
            <MDBCol className="col-12 text-left">
              <strong>
                {<Translation>
                  {
                    (t) => <>{t('englishPuzzle.11')}</>
                  }
                </Translation>}
              </strong>
            </MDBCol>
          </MDBRow>
          <MDBModalBody>
            <MDBListGroup>
              {agreeList}
            </MDBListGroup>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="primary"
              onClick={() => this.toggle()}
            >
              {<Translation>
                {
                  (t) => <>{t('englishPuzzle.12')}</>
                }
              </Translation>}
            </MDBBtn>
            <MDBBtn
              color="primary"
              onClick={this.playContinue}
            >
              {<Translation>
                {
                  (t) => <>{t('englishPuzzle.8')}</>
                }
              </Translation>}
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </React.Fragment>
    );
  }
}

export default Stats;
