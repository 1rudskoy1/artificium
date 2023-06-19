import {Art} from '../components/Art/Art';
import {FormAuth} from '../components/formAuth/FormAuth';
// import {$} from '../core/Dom';
import {Page} from '../core/Page';

export class AuthPage extends Page {
  storeSub:any;
  art: any;
  constructor(param = '') {
    super(param);
    this.storeSub = null;
  }
  getRoot() {
    this.art = new Art({
      components: [FormAuth],
    });
    return this.art.getRoot();
  }
  afterRender() {
    this.art.init();
  }
  destroy() {
    this.art.destroy();
    this.storeSub.unsubscibe();
  }
}