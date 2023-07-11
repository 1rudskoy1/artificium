import {ArtComponent} from '../../core/ArtComponent';
import {chatTemplate} from './chatTemplate';
import {$} from '../../core/Dom';
import {createNewElement, timeFormat} from '../../core/utils';
import {data} from '../../redux/data';
export class Chat extends ArtComponent {

    static className = 'chat';
    blah: HTMLElement[];
    currentChat: string
    constructor($root:any, options:any) {
      super($root, {
        name: 'Chat',
        listeners: ['click', 'keyup', 'dblclick'],
        ...options,
      });
    }
    prepare() {}
    toHTML(date:string) {
      return chatTemplate(date);
    }
    init() {
      super.init();
      this.emitter.subscribe('switch-chat', (data:string) => {
        this.currentChat = data;
        this.$root.html(this.toHTML(data));
      });
    }
    onClick(e:any) {
      const parent = $($(e.target).parent());
      if (parent.containClass('chat-top-item')) {
        document.querySelector('.chat-top-item-active').classList.remove('chat-top-item-active');
        parent.$el.classList.add('chat-top-item-active');
      }
      if($(e.target).getAtrr('data-action') === 'copy') {
        const text = $(parent.parent()).parent().querySelector('.send-text').innerHTML;
        navigator.clipboard.writeText(text).then(() => {
          const warm = $("[data-action='warm-text']");
          warm.add('warm-text-animated');
          setTimeout(() => {
            warm.remove('warm-text-animated')
          }, 500);
        });
      }

      if($($(e.target).parent()).getAtrr('data-action') === 'edit-chat-name') {
        this.emitter.emit('edit-open', '');
      }
      // if($(e.target).getAtrr('data-action') === 'add-category') {
      //   this.emitter.emit('add-open:category', '');
      // }

      if($(e.target).getAtrr('data-action') === 'file-send') {
        const fileInpute = (document.querySelector('#chat-input')  as HTMLInputElement);
        const wrapImages = (document.querySelector('.preview-imgs') as HTMLInputElement);
        fileInpute.click();
        fileInpute.onchange = evt => {
          const files = fileInpute.files;
          if (files) {
            let htmls: any[];
            htmls = [];
            for(let i = 0; files.length > i; i++) {
              const reader = new FileReader();
              reader.readAsDataURL(files[i]);
              reader.addEventListener('load', () => {
                htmls.push(createNewElement('img', 'wrap-images__img', `src=${reader.result}`));
                wrapImages.append(createNewElement('img', 'preview-imgs__img', `src=${reader.result}`));
                this.blah = htmls;
            });
            }
              
          }
        }
      }
    }
    onDblclick(e:any) {
      const $target = $(e.target);
      if ($target.getAtrr('data-edit')) {
        const target = $(`.chat-top-name__${$target.getAtrr('data-edit')}`);
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
      const wrapPrev = (document.querySelector('.preview-imgs') as HTMLInputElement);
      let now:any = new Date;
      now = now.getTime();
      e = window.event;
      if (input.getAtrr('data-action') == 'input-chat') {
        if (e.code == 'Enter' && input.getValue() !== '') {
          let wrapImages;
          const sendItem = createNewElement('div', 'send-item', '');
          const sendItemFlex = createNewElement('div', 'send-user-wrap', '');
          const sendUser = createNewElement('div', 'send-user', '');
          const logo = createNewElement('img', 'send-user__logo', 'src=./img/Avatar-1.png');
          const name = createNewElement('div', 'send-user__name', '', 'Ryan Lee');
          const time = createNewElement('span', 'send-user__time', '', timeFormat(false, now));
          const copyImg = createNewElement('img', 'send-user__copy', 'src=./img/copy-icon.svg');
          copyImg.setAttribute('data-action', 'copy');
          const text = createNewElement('div', 'send-text', '', input.getValue());
          sendItem.append(sendUser);
          sendItemFlex.append(logo);
          sendItemFlex.append(name);
          sendItemFlex.append(time);
          sendItemFlex.append(copyImg);
          sendUser.append(sendItemFlex);
          sendUser.append(text);

          if(this.blah) {
            wrapImages = createNewElement('div', 'wrap-images', '');
            for(let i = 0; this.blah.length > i; i++) {
              wrapImages.append(this.blah[i]);
            }
            sendItem.append(wrapImages);
          }
          document.querySelector('.send-items').append(sendItem);
          const cur = Object.keys(data.projects)[0];
          data.projects[this.currentChat || cur].category[0].chat.Iuser.push({time:now, content: input.$el.value, images: this.blah, dateUser: {name: 'Inna Chan', logo: './img/Avatar-2.png'}});
          input.$el.value = '';
          wrapPrev.innerHTML ='';
        }
      }
    }

}