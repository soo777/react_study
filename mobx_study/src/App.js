import React, {Component} from 'react';
import { observer, inject } from "mobx-react";

@inject("yourstore")
@observer
class App extends Component {
  render() {
    return (
      <div>
        <div>value = {this.props.yourstore.yourStore}</div>
        <div>
          <button onClick={this.props.yourstore.changeToWorld}>
            Change to world
          </button>
        </div>
      </div>
    );
  }
}

export default App;
