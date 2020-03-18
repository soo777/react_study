import data from './data';

class MemberRepository{

    findAllMembers(){
        console.log(data);
        // return ['All', ...new Set(data.map(member => member.name))];
        return data;
    }
}

export default new MemberRepository();

