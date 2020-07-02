import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';

import { imageRender } from '../../service';
import Button from './Components/Buttons/Button.jsx';
import GroupButtons from './Components/GroupButtons/GroupButtons.jsx';
import RestartButton from './Components/Buttons/RestartButton.jsx';
import PlayGame from './Components/Buttons/PlayGame.jsx';

const mapStateToProps = (state) => {
  return {

  }
}

class SpeakIt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: 'images/enjoy_small.png',
      translate: 'Перевод',
      words: JSON.parse(localStorage.startWords).slice(0, 12),
    }
  }

  setImageSrc = (src) => {
    this.setState({ imageSrc: imageRender(src) });
  }
  
  setTranslateWord = (word) => {
    this.setState({ translate: word });
  }

  renderWordButton = () => {
    const { words } = this.state; 
    return words.map((item) => {
      return (
        <div class="col-6 col-sm-6 col-md-3 mt-2">
          <Button
            word={ item }
            insertWordImageSrc={ this.setImageSrc }
            setTranslateWord={ this.setTranslateWord }
          />
        </div>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <section className="main mt-5" id="main">
          <div className="container">
            <div className="row">
              <div className="col-4 mt-5">
                <GroupButtons />
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center mt-2">
                <img
                  className="img-fluid"
                  src={ this.state.imageSrc }
                />
              </div>
              <div className="col-12">
                <div className="alert alert-info mt-2 text-center" role="alert">
                  <span id="translate">
                    { this.state.translate }
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="container">
                <div className="col-12 mt-2 d-flex justify-content-center">
                  <form>
                    <div className="form-row">
                      <div className="col-2">
                        <FontAwesomeIcon icon={ faMicrophoneAlt } />
                      </div>
                      <div className="col-10">
                        <input type="text" className="form-control" id="form-control" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              { this.renderWordButton() }
            </div>
            <div className="row">
              <div className="col-12 col-md-3 mt-2 mb-5">
                <RestartButton />
              </div>
              <div className="col-12 col-md-6 mt-2 mb-5">
                <PlayGame />
              </div>
              <div className="col-12 col-md-3 mt-2 mb-5">
                <button type="button" className="btn btn-info w-100" data-toggle="modal" data-target="#result">
                  Results
                </button>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(SpeakIt);
