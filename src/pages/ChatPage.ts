import {Art} from '../components/Art/Art';
import {Chat} from '../components/chat/Chat';
import {Toolbar} from '../components/toolbar/Toolbar';
// import {$} from '../core/Dom';
import {Page} from '../core/Page';

export class ChatPage extends Page {
  storeSub:any;
  art: any;
  constructor(param = '') {
    super(param);
    this.storeSub = null;
  }
  getRoot() {
    this.art = new Art({
      components: [Toolbar, Chat],
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