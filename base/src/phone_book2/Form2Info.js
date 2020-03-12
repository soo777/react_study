import React, {Component} from 'react';

class Form2Info extends Component{

    state = {
        editing : false,
        name : '',
        phone: ''
    }

    handleRemove = () => {
        const{book, onRemove} = this.props;
        onRemove(book.id);
    }

    handdleToggleEdit = () => {
        const { editing } = this.state;
        this.setState({editing:!editing});
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name] : value
        })
    }

    componentDidUpdate(prevProps, prevState){
        const {book, onUpdate} = this.props;
        if(!prevState.editing && this.state.editing){
            this.setState({
                name : this.state.name,
                phone: this.state.phone
            })
        }
    }

    render(){
        const { name, phone, id } = this.props.book;
        const {editing} = this.state;

        const style={
            border : '1px solid black',
            padding : '8px',
            margin : '8px'
        }

        if(editing) {
            return(
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name ="name"
                            placeholder="이름"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input  
                            value={this.state.phone}
                            name ="phone"
                            placeholder="전화번호"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handdleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            )
        }

        return(
            <div style={style}>
                <div>{id}</div>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handdleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        );
    }


}
export default Form2Info;