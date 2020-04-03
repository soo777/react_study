import axios from "axios";
import {toJS} from 'mobx';


class LectureRepository{

    findAllLecture = async () =>  {
        let data = await axios.post('/api/lecture/list');
        return data;
    }

    findByLectureName(lectureList, lectureName, oriLectureList){
        console.log(lectureList);
        
        if(lectureName == undefined || lectureName == ''){
            return oriLectureList;
        }

        return lectureList.filter(data => data.lectureName == lectureName);
    }

    deleteLecture = async (lecture) => {
        let data = await axios.post('/api/lecture/deleteCourse', null, {
            params: {
                no: parseInt(lecture.no)
            }
        });
        return data;
    }
}

export default new LectureRepository();