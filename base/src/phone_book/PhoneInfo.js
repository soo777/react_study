import React, { Component } from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name : '이름',
            tel_no : '010-0000-1111',
            id: 0
        }
    }

    render(){
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        const {
            name, tel_no, id
        } = this.props.info

        return(
            <div style={style}>
                <div>{id}</div>
                <div><b>{name}</b></div>
                <div>{tel_no}</div>
            </div>
        )
    }
}

export default PhoneInfo;