import React, {Component} from 'react'
import 'bootstrap-css-only'

import NewComment from './NewComment'
import Comments from'./Comments'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NewComment/>
        <Comments/>
      </div>
    );
  }
}

export default App
