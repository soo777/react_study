import data from './data';

class MemberRepository{

    findAllMembers(){
        return ['All', ...new Set(data.map(member => member.name))];
    }
}

export default new MemberRepository();

