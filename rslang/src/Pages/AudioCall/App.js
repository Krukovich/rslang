import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Layout>
              <Quiz quiz={this.props.quiz} />
            </Layout>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
