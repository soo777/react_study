import React, { Component } from 'react';
import {observer, inject } from 'mobx-react';
import { List, Table, Label, Menu, Icon, Input, Button } from 'semantic-ui-react';
import AddModal from '../view/AddModal';

@inject("memberStore")
@observer
class MemeberListContainer extends Component {

    componentDidMount(){
        this.props.memberStore.findAllMembers();
        this.addMember = this.props.memberStore.addMember();
    }

    addMember = () => {
        console.log('a');
        // this.props.memberStore.addMember();
    }
    
    render(){
        const {memberStore} = this.props;

        const tableStyle ={
            width: '50%'
        };

        const changeNameInput = (e) => {
            console.log(e.target.value);
        
            memberStore.changeNameInput(e.target.value);
        };

        const changeDepartmentInput = (e) => {
            console.log(e.target.value);
        
            memberStore.changeDepartmentInput(e.target.value);
        };

        const findByName = () => {
            console.log(memberStore.name_input);

            memberStore.findByName(memberStore.name_input);
        }

        const deleteMember = (member) => {
            memberStore.deleteMember(member);
        }

        const table = memberStore.members.map(member =>
            <Table.Row key={member.name}>
                <Table.Cell>{member.empNumber}</Table.Cell>
                <Table.Cell>{member.name}</Table.Cell>
                <Table.Cell>{member.department}</Table.Cell>
                <Table.Cell><Button onClick={() =>
                    deleteMember(member)
                }>Delete</Button></Table.Cell>
            </Table.Row>
        )

        return(
            <div>
                <Input placeholder='Name...' onChange={changeNameInput} />
                <Button onClick={findByName}>Search</Button>
                <AddModal
                    name={memberStore.name_input}
                    department={memberStore.department}
                    changeNameInput={changeNameInput}
                    changeDepartmentInput={changeDepartmentInput}
                    addMember={this.addMember}
                />
                <div>
                    {memberStore.name_input}
                </div>

                <div>
                    <Table celled style={tableStyle}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>EmpNumber</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Department</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {table}
                        </Table.Body>

                        {/* <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                            </Table.HeaderCell>
                        </Table.Row>
                        </Table.Footer> */}
                    </Table>
                </div>
            </div>
        )
    }

}

export default MemeberListContainer;