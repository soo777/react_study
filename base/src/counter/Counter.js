import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            number : 0
        }
    }
    
    plus = () => {
        this.setState({
            number : this.state.number + 1
        });
    }

    minus = () => {
        this.setState({
            number : this.state.number - 1
        })
    }

    render() {
        return(
            <div>
                <h1>Counter</h1>
                    <div>{this.props.name} : {this.state.number} 
                    <button onClick={this.plus}>+</button>
                    <button onClick={this.minus}>-</button>
                </div>
            </div>
        );
    }
}

export default Counter;