import axios from "axios";


class LectureRepository{

    findAllLecture(){
        return axios.post('/api/lecture/list')
                .then(({data}) => data); 
    }
}

export default new LectureRepository();