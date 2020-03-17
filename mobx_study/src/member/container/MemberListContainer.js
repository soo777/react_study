import React, { Component } from 'react';
import {observer, inject } from 'mobx-react';

@inject("memberStore")
@observer
class MemeberListContainer extends Component {

    componentDidMount(){
        // this.props.memberstore.findAllMembers();
        this.props.memberStore.findAllMembers();
    }


}

export default MemeberListContainer;