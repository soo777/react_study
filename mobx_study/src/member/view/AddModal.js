import React, { Component } from 'react';
import {Button, Modal} from 'semantic-ui-react';
import AddForm from './AddForm';

class AddModal extends Component {

    constructor(props){
        super(props);
    }
    
    render(){
        const {name, department, changeNameInput, changeDepartmentInput, addMember} = this.props;
        return(
            <Modal
                trigger={<Button>Add</Button>}
                header='Add'
                content={
                    <AddForm
                        name={name}
                        department={department}
                        changeNameInput={changeNameInput}
                        changeDepartmentInput={changeDepartmentInput}
                    />
                    }
                actions={[{ key: 'done', content: 'Done', positive: true, onClick: () => {addMember(name, department)}}]}
            />
        )
    }


}

export default AddModal;