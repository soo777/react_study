import React, { Component } from 'react';
import {observer, inject } from 'mobx-react';
import { List, Table, Label, Menu, Icon, Input, Button } from 'semantic-ui-react';

@inject("memberStore")
@observer
class MemeberListContainer extends Component {

    componentDidMount(){
        this.props.memberStore.findAllMembers();
    }
    
    render(){
        const {memberStore} = this.props;

        const tableStyle ={
            width: '50%'
        };

        // const a = memberStore.members;
        // console.log(a);

        const changeNameInput = (e) => {
            console.log(e.target.value);
        
            memberStore.changeNameInput(e.target.value);
        };

        const findByName = () => {
            console.log(memberStore.name_input);

            memberStore.findByName(memberStore.name_input);
        }

        const deleteMember = (member) => {
            memberStore.deleteMember(member);
        }
 
        const memberList = memberStore.members.map( member=> 
            <List.Item key={member.name}>         
                <List.Header>
                    {member.name}
                    <br/>
                    {member.department}
                    <br/>
                    <br/>
                </List.Header>
            </List.Item>
        )

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
                {/* <div>1</div> */}
                <List>
                    {/* {memberList} */}
                </List>

                <Input placeholder='Name...' onChange={changeNameInput} />
                <Button onClick={findByName}>Search</Button>
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