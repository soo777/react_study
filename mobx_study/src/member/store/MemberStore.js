import {observable, action, computed} from 'mobx';
import memberRepository from '../repository/memberRepository';

export default class MemberStore{

    @observable
    member;

    @observable
    members = [];

    @observable
    name_input ='';

    @action
    findAllMembers(){
        this.members =  memberRepository.findAllMembers();
    }

    @action
    changeNameInput(name){
        this.name_input = name;
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