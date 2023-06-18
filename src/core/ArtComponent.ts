import {DomListener} from './DomListener';
export class ArtComponent extends DomListener {
  name:any;
  storeSub:any;
  unsubscribers:any;
  constructor($root:string, options:any) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.prepare();
  }
  prepare() {
  }
  toHTML() {
    return '';
  }
  init() {
    this.initDOMListeners();
  }
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub:any) => unsub());
    this.storeSub.unsubscribe();
  }
}