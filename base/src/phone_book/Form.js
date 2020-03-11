import React, { Component } from 'react';
import PhoneInfoList from './PhoneInfoList';

class Form extends Component{

    // constructor(props){
    //     super(props);
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleCreate(this.props.name, this.props.tel_no);
        this.setState({
            name : '',
            tel_no : ''
        })
    }

    render(){
        const {name, tel_no, handleName, book, onRemove, onUpdate} = this.props;

        return(
            <>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input value={name} name="name" onChange={handleName}/>
                        <input value={tel_no} name="tel_no" onChange={handleName}></input>
                        <button type="submit">add</button>
                    </form>
                    <PhoneInfoList 
                        data={book}
                        onRemove={onRemove}
                        onUpdate={onUpdate}
                    />
                </div>
                {/* <div>
                    {name} {tel_no}
                </div>
                <div>
                    {JSON.stringify(book)}
                </div> */}

            </>
        );
    }

}

export default Form;