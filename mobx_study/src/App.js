import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import { Button } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import MemberListContainer from './member/container/MemberListContainer';
import LectureListContainer from './lecture/container/LectureListContainer';

@inject("yourstore")
@observer
class App extends Component {
  render() {
    return (
      <>
        {/* <div>
          <div>value = {this.props.yourstore.yourStore}</div>
          <div>
            <button onClick={this.props.yourstore.changeToWorld}>
              Change to world
            </button>
            <Button>Click Click</Button>
          </div>
        </div> */}
        {/* <div>
          <MemberListContainer/>
        </div> */}
        <div>
          <LectureListContainer/>
        </div>
      </>
    );
  }
}

export default App;
