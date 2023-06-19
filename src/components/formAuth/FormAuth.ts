import {ArtComponent} from '../../core/ArtComponent';
import {formAuthTemplate} from './formAuth.template';
import {$} from '../../core/Dom';
import {validationFilds} from '../../core/utils';
export class FormAuth extends ArtComponent {
    static className = 'auth';
    constructor($root:any, options:any) {
      super($root, {
        name: 'Toolbar',
        listeners: ['input', 'click'],
        ...options,
      });
    }
    prepare() {}
    toHTML(date:any) {
      return formAuthTemplate(date);
    }
    init() {
      super.init();
    }
    onInput(e:any) {
      const $target = $(e.target);
      console.log($target);
    }
    onClick(e:any) {
      const $target = $(e.target);
      if ($target.getAtrr('data-action')) {
        const email = (document.querySelector('input[name=email]') as HTMLInputElement).value;
        const password = (document.querySelector('input[name=password]') as HTMLInputElement).value;
        const error = validationFilds({email, password});
        if(error.length) {
          (document.querySelector(`input[name=${error}]`) as HTMLInputElement).classList.add('auth-form__input_error');
        }
      }
    }
}