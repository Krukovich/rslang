import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'

class App extends Component {
  
  render() {
console.log('app', this.props)
    return (
      <Layout>
        
        <Quiz quiz={this.props.quiz}/>
      </Layout>
    )
  }
}

export default App
