import {observable, action, computed} from 'mobx';
import lectureRepository from '../repository/LectureRepository';

class LectureStore{

    @observable
    lecture;

    @observable
    lectureList = [];

    @action
    findAllLecture(){
        this.lectureList =  lectureRepository.findAllLecture();
        console.log(this.lectureList);

    }
}

export default LectureStore;
