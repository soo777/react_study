import {observable, action, computed} from 'mobx';
import mebmerRepository from '../repository/memberRepository';

export  default class MemberStore{

    @observable
    member;

    @action
    findAllMembers(){
        this.member =  mebmerRepository.findAllMembers();
    }
}

// export default new MemberStore();