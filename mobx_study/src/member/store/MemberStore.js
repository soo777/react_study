import {observable, action, computed} from 'mobx';
import memberRepository from '../repository/memberRepository';

export default class MemberStore{

    @observable
    member;

    @observable
    members = [];

    @action
    findAllMembers(){
        this.members =  memberRepository.findAllMembers();
    }
}

// export default new MemberStore();