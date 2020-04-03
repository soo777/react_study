import {observable, action, toJS} from 'mobx';
import lectureRepository from '../repository/LectureRepository';
import * as autoBind from 'auto-bind';

class LectureStore{
    constructor(){
        autoBind(this); 
    }

    @observable
    lectureName;

    @observable
    lecture;

    @observable
    lectureList = [];

    @observable
    oriLectureList = [];

    @action
    findAllLecture(){
        lectureRepository.findAllLecture().then(data => {
            // console.log(data);
            console.log(data.data.object.data)
            this.lectureList = data.data.object.data;
            this.oriLectureList = data.data.object.data;
        });
    }

    @action
    findByLectureName(){
        console.log(this.lectureName);

        this.lectureList = lectureRepository.findByLectureName(this.lectureList, this.lectureName, this.oriLectureList);
    }

    @action
    changeLectureName(name){
        this.lectureName = name;
    }

    @action
    deleteLecture(lecture){
        lectureRepository.deleteLecture(lecture).then(data => {
            this.lectureList = data.data.object.data;
            this.oriLectureList = data.data.object.data;
        });
    }
}

export default LectureStore;
