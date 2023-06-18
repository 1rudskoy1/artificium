import {capitalize} from './utils';

export class DomListener {
  $root:any;
  listeners:any;
  name:any;
  shorProto:any;
  constructor($root:any, listeners:any) {
    console.log(this);
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDOMListeners() {
    this.listeners.forEach((listener:any) => {
      const method:any = getMethodName(listener);
      this.shorProto = Object.getPrototypeOf(this)[method];
      if (!this.shorProto) {
        throw new Error(`Method ${method} is not implemented in ${this.name || ''} Component`);
      }
      this.shorProto = this.shorProto.bind(this);
      this.$root.on(listener, this.shorProto);
    });
  }
  removeDOMListeners() {
    this.listeners.forEach((listener:any) => {
      this.$root.off(listener, this.shorProto);
    });
  }
}
function getMethodName(eventName:string) {
  return 'on' + capitalize(eventName);
}