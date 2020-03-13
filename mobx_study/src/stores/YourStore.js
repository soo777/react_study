import { observable, action } from 'mobx';

export default class YourStore {
  @observable yourStore = 'hello';

  @action changeStoreValue = (value) => {
    this.yourStore = value;
  };
  @action changeToWorld = () => {
  	this.yourStore = "World";
  }
}