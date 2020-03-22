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

    deleteMember(data, members){
        return members.filter(members => members.name != data.name);
        // const index = data.findIndex((data) => {
        //     console.log(data.name);
        //     return data.name == member.name;
        // });

        // console.log(index);

        // return data.splice(index,1);
    }
}

export default new MemberRepository();

