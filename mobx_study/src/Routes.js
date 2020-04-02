import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Aladin from './router/Aladin';
import LionKing from './router/LionKing';
import SpiderMan from './router/SpiderMan';
import Header from './router/Header';

export default () => {

    return(
        <Router>
            <Header />
            <Route path="/aladin" component={Aladin}/>
            <Route path="/lionking" component={LionKing}/>
            <Route path="/spiderman" component={SpiderMan}/>
        </Router>
    )

}

