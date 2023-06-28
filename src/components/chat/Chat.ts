import {ArtComponent} from '../../core/ArtComponent';
import {chatTemplate} from './chatTemplate';
import {$} from '../../core/Dom';
import {createNewElement} from '../../core/utils';
export class Chat extends ArtComponent {
    static className = 'chat';
    constructor($root:any, options:any) {
      super($root, {
        name: 'Toolbar',
        listeners: ['click', 'keyup', 'dblclick'],
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
    onDblclick(e:any) {
      const $target = $(e.target);
      if ($target.getAtrr('data-edit')) {
        const target = $(`.chat-top-name__${$target.getAtrr('data-edit')}`);
        console.log(target);
        const input = createNewElement('input', `chat-top-name__${$target.getAtrr('data-edit')}`, '');
        
        input.classList.add(`chat-top-name__${$target.getAtrr('data-edit')}_input`);

        (input as HTMLInputElement).value = target.$el.innerHTML;
        target.$el.parentNode.insertBefore(input, target.$el.nextSibling);
        input.focus();
        target.$el.style.display = 'none';

        input.onblur = () => {
          target.$el.style.display = 'block';
          target.$el.innerHTML = (input as HTMLInputElement).value;
          input.remove();
        }
      }
    }
    onKeyup(e:any) {
      const input = $(e.target);
      e = window.event;
      if (input.getAtrr('data-action') == 'input-chat') {
        if (e.code == 'Enter' && input.getValue() !== '') {
          const sendItem = createNewElement('div', 'send-item', '');
          const sendItemFlex = createNewElement('div', 'send-user-wrap', '');
          const sendUser = createNewElement('div', 'send-user', '');
          const logo = createNewElement('img', 'send-user__logo', 'src=./img/Avatar-1.png');
          const name = createNewElement('div', 'send-user__name', '', 'Ryan Lee');
          const time = createNewElement('span', 'send-user__time', '', 'just now');
          const copyImg = createNewElement('img', 'send-user__copy', 'src=./img/copy-icon.svg');
          const text = createNewElement('div', 'send-text', '', input.getValue());

          sendItem.append(sendUser);
          sendItemFlex.append(logo);
          sendItemFlex.append(name);
          sendItemFlex.append(time);
          sendItemFlex.append(copyImg);
          sendUser.append(sendItemFlex);
          sendUser.append(text);

          document.querySelector('.send-items').append(sendItem);
        }
      }
    }
}