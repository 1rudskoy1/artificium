import {DomListener} from './DomListener';
export class ArtComponent extends DomListener {
  name:any;
  storeSub:any;
  unsubscribers:any;
  emitter:any;
  constructor($root:Object, options:any) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.emitter = options.emitter;
    this.prepare();
  }
  prepare() {
  }
  toHTML(date:any = {}) {
    return '';
  }
  init() {
    this.initDOMListeners();
  }
  destroy() {
    this.removeDOMListeners();
    // this.unsubscribers.forEach((unsub:any) => unsub());
    // this.storeSub.unsubscribe();
  }
}