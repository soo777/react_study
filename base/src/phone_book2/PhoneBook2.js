import React, { Component } from 'react';
import Form2 from './Form2';

class PhoneBook extends Component {

    id = 1
    constructor(props){
        super(props);
        this.state = {
            name : '',
            phone : '',
            book : [
                {
                    id : 0,
                    name : 'soo',
                    phone : '1111'
                }
            ]
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleCreate = (name, phone) => {
        const { book } = this.state;
        this.setState({
        book : book.concat({id:this.id++, name, phone})
        })
    }

    handleRemove = (id) => {
        const {book} = this.state;
        this.setState({
            book : book.filter(book => book.id !== id)
        })
    }

    handleUpdate = (id, data) => {
        const {book} = this.state;
        this.setState({
            book: book.map(
                book => id === book.id ? {...book, ...data} : book
            )
        })
    }

    render(){
        const {name, phone, book} = this.state;
        return(
            <Form2
                name={name}
                phone={phone}
                book={book}
                handleInput={this.handleInput}
                handleCreate={this.handleCreate}
                handleRemove={this.handleRemove}
                handleUpdate={this.handleUpdate}
            />
        )
    }

}

export default PhoneBook;