import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import { Table, Button, Input } from 'semantic-ui-react';
import * as autoBind from 'auto-bind';

@inject("lectureStore")
@observer
class LectureListContainer extends Component {
    constructor(props){
        super(props);

        autoBind(this); 
    }

    componentDidMount(){
        this.props.lectureStore.findAllLecture();
    }

    findByLectureName(){
        this.props.lectureStore.findByLectureName();
    }

    changeLectureName = (e) => {
        console.log(e.target.value);
        this.props.lectureStore.changeLectureName(e.target.value);
    }

    deleteLecture(lecture){
        this.props.lectureStore.deleteLecture(lecture);
    }

    render(){
        const {lectureStore} = this.props;

        const tableStyle ={
            width: '50%'
        };
        
        const table = lectureStore.lectureList.map(lecture =>
            <Table.Row key={lecture.no}>
                <Table.Cell>{lecture.no}</Table.Cell>
                <Table.Cell>{lecture.lectureName}</Table.Cell>
                <Table.Cell>{lecture.grade}</Table.Cell>
                <Table.Cell>{lecture.lectureTime}</Table.Cell>
                <Table.Cell><Button onClick={() =>
                    this.deleteLecture(lecture)
                }>Delete</Button></Table.Cell>
            </Table.Row>
        )
        
        return(
            <>  
                <Input onChange={this.changeLectureName} />
                <Button onClick={this.findByLectureName}>Search</Button>
                <div>
                    <Table celled style={tableStyle}>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>No</Table.HeaderCell>
                            <Table.HeaderCell>LectureName</Table.HeaderCell>
                            <Table.HeaderCell>Grade</Table.HeaderCell>
                            <Table.HeaderCell>Lecture Time</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {table}
                        </Table.Body>
                    </Table>
                </div>
            </>
        );
    }
}

export default LectureListContainer;