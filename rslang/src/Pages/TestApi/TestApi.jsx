import React, { Component } from "react";
import { connect } from "react-redux";

import {
  setNewUserWordsByWordId,
  updateUserWordsByWordId,
} from "../../Store/Actions";

class TestApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsObj: {
        wordId: "5e9f5ee35eb9e72bc21af70c",
        word: {
          difficulty: "weak",
          optional: { testFieldString: "prod", testFieldBoolean: true },
        },
      },
    };
  }

  componentDidMount() {
    //получить в редакс инфу как при старте приложения
  }

  render() {
    return (
      <div className="Sprint container mt-5">
        <div className="row">
          <button onClick={() => console.log(this.props.store)}>
            get all store
          </button>
          <button onClick={() => console.log(this.props.allUserWords)}>
            get all allUserWords
          </button>
          <button onClick={() => console.log(this.props.lastAddWord)}>
            get lastAddWord
          </button>
          <textarea
            onChange={(e) =>
              this.setState({
                wordsObj: { wordId: e.target.value },
                ...this.state.wordsObj,
              })
            }
            placeholder="wordId"
          ></textarea>
          <p value={this.state.wordsObj.wordId}>{this.state.wordsObj.wordId}</p>
          <button
            onClick={() =>
              this.props.setNewUserWordsByWordId(this.state.wordsObj)
            }
          >
            add new words in redux
          </button>
          <button
            onClick={() =>
              this.props.updateUserWordsByWordId(this.state.wordsObj)
            }
          >
            update words in redux
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  console.log("redux state", store);
  return {
    lastAddWord: store.appSettings.lastAddWord,
    allUserWords: store.appSettings.allUserWords,
    store: store.appSettings,
  };
}

const mapActionToProps = {
  setNewUserWordsByWordId,
  updateUserWordsByWordId,
};

export default connect(mapStateToProps, mapActionToProps)(TestApi);
