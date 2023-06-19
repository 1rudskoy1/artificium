import {$} from '../../core/Dom';
export class Art {
  components:any;
  subscriber:any;
  constructor(options:any) {
    this.components = options.components || [];
  }
  getRoot() {
    const $root = $.create('div', 'container');
    this.components = this.components.map((Component:any) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el, {
      });
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