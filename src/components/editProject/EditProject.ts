import {ArtComponent} from '../../core/ArtComponent';
import {$} from '../../core/Dom';
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
      const edit = document.querySelector<HTMLElement>('.manage-edit');
      this.emitter.subscribe('edit-open', (data:any) => {
        edit.style.display = 'block';
      });
    }
    onClick(e:any) {
      if (e.target.classList.contains('blur') || $(e.target).getAtrr('data-role') == 'close') {
        const edit = document.querySelector<HTMLElement>('.manage-edit');
        edit.style.display = 'none';
      }
    }
}