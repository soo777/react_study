import React, {Component} from 'react';
import Form2InfoList from './Form2InfoList';

class Form2 extends Component {

    handleSubmit =(e) => {
        e.preventDefault();
        this.props.handleCreate(this.props.name, this.props.phone);
        this.setState({
            name : '',
            tel_no : ''
        })
    }

    render(){
        const { name, phone, book, handleInput, handleRemove, handleUpdate } = this.props;


        return(
            <div>
                <div>
                    <h1>PhoneBook2</h1>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input name='name' value={name} placeholder='이름' onChange={handleInput}/>
                        <input name='phone' value={phone} placeholder='전화번호' onChange={handleInput}/>
                        <button type='submit'>추가</button>
                    </form>
                </div>
                <div>
                    {/* {JSON.stringify(book)} */}
                    <Form2InfoList
                       data={book}
                       onRemove={handleRemove}
                       onUpdate={handleUpdate}
                    />
                </div>
            </div>
        )
    }

}
export default Form2;