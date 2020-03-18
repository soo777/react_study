import React, { Component } from 'react';
import {observer, inject } from 'mobx-react';
import { List, Table, Label, Menu, Icon } from 'semantic-ui-react';

@inject("memberStore")
@observer
class MemeberListContainer extends Component {

    componentDidMount(){
        this.props.memberStore.findAllMembers();
    }

    render(){
        const {memberStore} = this.props;
        const a = memberStore.members;
        console.log(a);

        const tableStyle ={
            width: '50%'
        };
        
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

        const tr = memberStore.members.map(member =>
            <Table.Row key={member.name}>
                <Table.Cell>{member.empNumber}</Table.Cell>
                <Table.Cell>{member.name}</Table.Cell>
                <Table.Cell>{member.department}</Table.Cell>
            </Table.Row>
        )

        return(
            <div>
                {/* <div>1</div> */}
                <List>
                    {memberList}
                </List>

                <div>
                    <Table celled style={tableStyle}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>EmpNumber</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Department</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {tr}
                            {/* <Table.Row>
                                <Table.Cell>Cell1</Table.Cell>
                                <Table.Cell>Cell2</Table.Cell>
                                <Table.Cell>Cell3</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                                <Table.Cell>Cell</Table.Cell>
                            </Table.Row> */}
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