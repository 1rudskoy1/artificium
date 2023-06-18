import {ArtComponent} from '../../core/ArtComponent';
import {formAuthTemplate} from './formAuth.template';
// import {$} from '../../core/Dom';
export class FormAuth extends ArtComponent {
    static className = 'auth';
    constructor($root:any, options:any) {
      super($root, {
        name: 'Toolbar',
        listeners: ['click'],
        ...options,
      });
    }
    prepare() {}
    toHTML() {
      return formAuthTemplate();
    }
    init() {
      super.init();
    }
    onClick(e:any) {
      console.log(e.target);
    }
}