import {$} from '../../core/Dom';
import {Emitter} from '../../core/Emitter';
export class Art {
  components:any;
  subscriber:any;
  emitter:any;
  constructor(options:any) {
    this.components = options.components || [];
    this.emitter = new Emitter();
  }
  getRoot() {
    const $root = $.create('div', 'container');
    const comOptions = {
      emitter: this.emitter,
    };
    this.components = this.components.map((Component:any) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el, comOptions);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }
  init() {
    this.components.forEach((component:any) => {
      component.init();
    });
  }
  destroy() {
    // this.subscriber.unsubscribeFromStore();
    this.components.forEach((component:any) => component.destroy());
  }
}