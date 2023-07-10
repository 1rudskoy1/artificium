import {ArtComponent} from '../../core/ArtComponent';
import {$} from '../../core/Dom';
import {addProjectTemplate} from './addProjectTemplate';
import {data} from '../../redux/data';
import {createNewElement} from '../../core/utils';

export class AddProject extends ArtComponent {
    static className = 'manage-add';
    addImg:string | ArrayBuffer;
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
      const edit = document.querySelector<HTMLElement>('.manage-add');
      if (e.target.classList.contains('blur') || $(e.target).getAtrr('data-role') == 'close') {
        edit.style.display = 'none';
      }
      if ($(e.target).getAtrr('data-role') == 'projectImgPrev') {
        const fileInput = (document.querySelector('[data-role="privateProjectImg"]') as HTMLInputElement);
        fileInput.click();
        fileInput.onchange = () => {
          const file = fileInput.files;
          if (file) {
            const reader = new FileReader();
              reader.readAsDataURL(file[0]);
              reader.addEventListener('load', () => {
                e.target.innerHTML = '';
                e.target.append(createNewElement('img', 'manage-invates-img__img', `src=${reader.result}`));
                console.log(reader.result);
                this.addImg = reader.result;
            });
          }
        };
      }
      if ($(e.target).getAtrr('data-role') == 'add-project') {
        const value:string = document.querySelector<HTMLInputElement>('[data-role = "add-input"]').value;
        if (value.length > 3) {
          const proj:{}= {
            logo: this.addImg,
            category: [],
          };
          data.projects[value] = proj;
          this.emitter.emit('add-proj', proj);
          edit.style.display = 'none';
        }
      }
    }
}