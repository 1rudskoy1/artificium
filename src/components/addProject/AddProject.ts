import {ArtComponent} from '../../core/ArtComponent';
import {$} from '../../core/Dom';
import {addProjectTemplate} from './addProjectTemplate';
import {data} from '../../redux/data';

export class AddProject extends ArtComponent {
    static className = 'manage-add';
    constructor($root:any, options:any) {
      super($root, {
        name: 'add-project',
        listeners: ['click'],
        ...options,
      });
    }
    prepare() {}
    toHTML() {
      return addProjectTemplate();
    }
    init() {
      super.init();
      const add = document.querySelector<HTMLElement>('.manage-add');
      this.emitter.subscribe('add-open', (data:any) => {
        add.style.display = 'block';
      });
    }
    onClick(e:any) {
      console.log(e.target);
      if (e.target.classList.contains('blur') || $(e.target).getAtrr('data-role') == 'close') {
        const edit = document.querySelector<HTMLElement>('.manage-add');
        edit.style.display = 'none';
      }
      if ($(e.target).getAtrr('data-role') == 'add-project') {
        const value = document.querySelector<HTMLInputElement>('[data-role = "add-input"]').value;
        console.log(data.projects);
        if (value.length > 3) {
        //   data.projects.unshift(`'${value}': {
        //     logo: './img/triangle.svg',
        //     category: [],
        //   }`);
        //   this.emitter.emit('add-proj', '');
        }
      }
    }
}