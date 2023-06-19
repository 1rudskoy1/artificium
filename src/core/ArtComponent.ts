import {DomListener} from './DomListener';
export class ArtComponent extends DomListener {
  name:any;
  storeSub:any;
  unsubscribers:any;
  constructor($root:Object, options:any) {
    super($root, options.listeners);
    console.log(options, 'root');
    this.name = options.name || '';
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
    this.unsubscribers.forEach((unsub:any) => unsub());
    this.storeSub.unsubscribe();
  }
}