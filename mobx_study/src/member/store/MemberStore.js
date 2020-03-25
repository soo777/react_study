import {observable, action, computed} from 'mobx';
import memberRepository from '../repository/memberRepository';

export default class MemberStore{

    @observable
    member;

    @observable
    members = [];

    @observable
    name_input ='';

    @observable
    name ='';

    @observable
    department ='department';

    @action
    findAllMembers(){
        this.members =  memberRepository.findAllMembers();
    }

    @action
    changeName(name){
        this.name_input = name;
    }

    @action
    changeNameForm(name){
        this.name = name;
    }

    @action
    changeDepartmentForm(department){
        console.log(department);
        this.department = department;
    }

    @action
    addMember(name, department){
        console.log('add member');
        console.log(name);
        console.log(department);
        this.members = memberRepository.addMember(name, department, this.members);
    }

    @action
    findByName(name){
        this.members = memberRepository.findByName(name, this.members);
    }

    @action
    deleteMember(data) {
        this.members = memberRepository.deleteMember(data, this.members);
    }
}

// export default new MemberStore();