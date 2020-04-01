import axios from "axios";
import {toJS} from 'mobx';


class LectureRepository{

    findAllLecture = async () =>  {
        let data = await axios.post('/api/lecture/list');
        return data;
    }
}

export default new LectureRepository();