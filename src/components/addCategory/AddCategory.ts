import {ArtComponent} from '../../core/ArtComponent';
import {$} from '../../core/Dom';
import {addCategoryTemplate} from './addCategoryTemplate';
import {data} from '../../redux/data';
import {createNewElement} from '../../core/utils';

export class AddCategory extends ArtComponent {
    static className = 'manage-add';
    addImg:string | ArrayBuffer;
    constructor($root:any, options:any) {
      super($root, {
        name: 'manage-top',
        listeners: ['click'],
        ...options,
      });
    }
    prepare() {}
    toHTML() {
      return addCategoryTemplate();
    }
    init() {
      super.init();
      const add = <HTMLElement>(document.querySelector<HTMLElement>('[data-edit="window"]').parentNode);
      this.emitter.subscribe('add-open:category', (data:any) => {
        add.style.display = 'block';
      });
    }
    onClick(e:any) {
      const edit = <HTMLElement>(document.querySelector<HTMLElement>('[data-edit="window"]').parentNode);
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
                e.target.append(createNewElement('img', 'chat-icon', `src=${reader.result}`));
                this.addImg = reader.result;
            });
          }
        };
      }
      if ($(e.target).getAtrr('data-role') == 'add-category') {
        const value:string = document.querySelector<HTMLInputElement>('[data-role = "add-input-category"]').value;
        const header:string = document.querySelector<HTMLInputElement>('[data-edit="header"]').innerHTML;
        console.log('value');
        if (value.length > 3) {
          const proj:{}= {
            name: value,
            logo: `./img/${this.addImg}`,
          };
          data.projects[header].category.push(proj);
          this.emitter.emit('add-category', data);
          edit.style.display = 'none';
        }
      }
    }
}