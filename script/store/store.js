export class store {
  constructor() {
    this.changeListeners = [];
  }
  subscribe(callBackFunction){
    this.changeListeners.push(callBackFunction);
  }
  unsubscribe(callBackFunction){
    this.changeListeners = this.changeListeners.filter(listener => listener!== callBackFunction);
  }
  publish(){
    this.changeListeners.forEach(changeListener => changeListener());
  }
}

