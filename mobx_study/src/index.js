import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "mobx-react";
import YourStore from "./stores/YourStore";
import MemberStore from './member/store/MemberStore';
import LectureStore from './lecture/store/LectureStore';

const yourstore = new YourStore();
const memberstore = new MemberStore();
const lecturestore = new LectureStore();

const RenderComponent = () => (
    <Provider 
      yourstore={yourstore}
      memberStore={memberstore}
      lectureStore={lecturestore}
    >
      <App />
    </Provider>
  );

ReactDOM.render(<RenderComponent />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
