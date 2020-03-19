import data from './data';

class MemberRepository{

    findAllMembers(){
        console.log(data);
        // return ['All', ...new Set(data.map(member => member.name))];
        return data;
    }

    findByName(name){
        if(name === ''){
            return data;
        }
        return data.filter(data => data.name == name);
    }
}

export default new MemberRepository();

