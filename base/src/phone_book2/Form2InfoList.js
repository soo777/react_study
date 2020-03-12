import React, { Component } from 'react';
import Form2Info from './Form2Info';

class Form2InfoList extends Component{

    render(){
        const {data, onRemove, onUpdate} = this.props;
        const list = data.map(
            book => (<Form2Info
                        key={book.id}
                        book={book}
                        onRemove={onRemove} 
                        onUpdate={onUpdate}
                    />)
        )
        return(
            <div>{list}</div>
        )
    }

}
export default Form2InfoList;