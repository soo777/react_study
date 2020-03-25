import React, { Component } from 'react';
import {Form} from 'semantic-ui-react';

class AddForm extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const formStyle = {padding:'20px'};

        const {name, department, changeNameInput, changeDepartmentInput} = this.props;

        return(
            <>
                <Form style={formStyle}>
                    <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' onChange={changeNameInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Department</label>
                    <input placeholder='Department' onChange={changeDepartmentInput}  />
                    </Form.Field>
                </Form>
            </>
        )
    }
}

export default AddForm;