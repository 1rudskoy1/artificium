import {ArtComponent} from '../../core/ArtComponent';
import {chatTemplate} from './chatTemplate';
import {$} from '../../core/Dom';
export class Chat extends ArtComponent {
    static className = 'chat';
    constructor($root:any, options:any) {
      super($root, {
        name: 'Toolbar',
        listeners: ['click'],
        ...options,
      });
    }
    prepare() {}
    toHTML(date:any) {
      return chatTemplate();
    }
    init() {
      super.init();
    }
    onClick(e:any) {
      const parent = $($(e.target).parent());
      if (parent.containClass('chat-top-item')) {
        document.querySelector('.chat-top-item-active').classList.remove('chat-top-item-active');
        parent.$el.classList.add('chat-top-item-active');
      }
    }
}