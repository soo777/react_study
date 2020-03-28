import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject("lectureStore")
@observer
class LectureListContainer extends Component {

    componentDidMount(){

    }

    render(){
        return(

            <div>
                Lecture
            </div>

        );
    }
}

export default LectureListContainer;