import {observable, action, computed} from 'mobx';
import {lectureRepository} from '../repository/LectureRepository';

class LectureStore{

    @observable
    lecture;

    @observable
    lectureList = [];


}

export default LectureStore;
