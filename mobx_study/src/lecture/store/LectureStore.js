import {observable, action, toJS} from 'mobx';
import lectureRepository from '../repository/LectureRepository';
import * as autoBind from 'auto-bind';

class LectureStore{
    constructor(){
        autoBind(this); 
    }

    @observable
    lecture;

    @observable
    lectureList = [];

    @action
    findAllLecture(){
        lectureRepository.findAllLecture().then(data => {
            console.log(data);
            console.log(data.data.object.data)
            this.lectureList = data.data.object.data;
        });
    }
}

export default LectureStore;
