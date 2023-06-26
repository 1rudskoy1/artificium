import {ArtComponent} from '../../core/ArtComponent';
import {toolbarTemplate} from './toolbar.template';
// import {$} from '../../core/Dom';
export class Toolbar extends ArtComponent {
    static className = 'menu';
    constructor($root:any, options:any) {
      super($root, {
        name: 'Toolbar',
        listeners: ['click'],
        ...options,
      });
    }
    prepare() {}
    toHTML(date:any) {
      return toolbarTemplate();
    }
    init() {
      super.init();
    }
    onInput(e:any) {
    }
    onClick(e:any) {
    }
}