import React, { Component } from 'react';
import Form from './Form';

class PhoneBook extends Component {

    id = 1
    constructor(props){
        super(props);
        this.state = {
            name : '',
            tel_no : '',
            book : [
                {
                    id : 0,
                    name : 'soo',
                    tel_no : '1234'
                }
            ]
        }
    }

    handleName = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleCreate = (name, tel_no) => {
        const { book } = this.state;
        this.setState({
            book: book.concat({id: this.id++, name, tel_no })
        })
    }
    

    render(){
        const {name, tel_no, book} = this.state;

        return(
            <>
                <div>
                    <h1>Phone Book</h1>
                </div>
                <div>
                    <Form 
                        name={name}
                        tel_no={tel_no}
                        handleName={this.handleName}
                        book={book}
                        handleCreate={this.handleCreate}
                    />
                </div>
            </>
        );
    }
}

export default PhoneBook;