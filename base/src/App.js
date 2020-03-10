import React, { Component } from 'react';
// import './App.css';

// import Counter from './counter/Counter';
import PhoneBook from './phone_book/PhoneBook';

class App extends Component {
  render() {
    return(
      <div>
        
        {/* <Counter name="value"/> */}
        <PhoneBook/>
      </div>
    )
  };
}

export default App;
