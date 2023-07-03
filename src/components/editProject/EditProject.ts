import {ArtComponent} from '../../core/ArtComponent';
import {editProjectTemplate} from './editProjectTemplate';

export class EditProject extends ArtComponent {
    static className = 'manage-edit';
    constructor($root:any, options:any) {
      super($root, {
        name: 'manage-edit',
        listeners: ['click'],
        ...options,
      });
    }
    prepare() {}
    toHTML() {
      return editProjectTemplate();
    }
    init() {
      super.init();
    }
    onClick() {

    }
}