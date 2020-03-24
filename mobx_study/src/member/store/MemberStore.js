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
    department ='department';

    @action
    findAllMembers(){
        this.members =  memberRepository.findAllMembers();
    }

    @action
    changeNameInput(name){
        this.name_input = name;
    }

    @action
    changeDepartmentInput(department){
        this.department = department;
    }

    @action
    addMember(){
        console.log('add member');
    }

    @action
    findByName(name){
        this.members = memberRepository.findByName(name);
    }

    @action
    deleteMember(data) {
        this.members = memberRepository.deleteMember(data, this.members);
    }
}

// export default new MemberStore();