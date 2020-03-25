import data from './data';

class MemberRepository{

    findAllMembers(){
        console.log(data);
        // return ['All', ...new Set(data.map(member => member.name))];
        return data;
    }

    findByName(name, members){
        if(name === ''){
            return data;
        }
        return members.filter(data => data.name == name);
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

    addMember(name, department, members){
        console.log(data);
        return members.concat({...members, name:name, department:department, empNumber:'1234'});
    }
}

export default new MemberRepository();

