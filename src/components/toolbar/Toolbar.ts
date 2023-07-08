import {ArtComponent} from '../../core/ArtComponent';
import {toolbarTemplate} from './toolbar.template';
import {$} from '../../core/Dom';
import {clearActive} from '../../core/utils';
export class Toolbar extends ArtComponent {
    static className = 'menu';
    constructor($root:any, options:any) {
      super($root, {
        name: 'Toolbar',
        listeners: ['click'],
        ...options,
      });
    }
    toHTML() {
      return toolbarTemplate();
    }
    init() {
      super.init();
      this.emitter.subscribe('add-proj', () => this.$root.html(this.toHTML()));
    }
    onClick(e:any) {
      let $target = $(e.target);
      if (!$target.containClass('menu-user-list__item')) {
        $target = $($target.parent());
        if (!$($target.parent()).getAtrr('data-wrap')) {
          return false;
        }
      }
      if ($($target.parent()).getAtrr('data-wrap') && $target.getAtrr('data-project')) {
        clearActive('menu-user-list__item-active', '[data-wrap="list-menu"]');
        $target.add('menu-user-list__item-active');
        this.emitter.emit('switch-chat', $target.getAtrr('data-project'));
      }
      if ($target.getAtrr('data-action') == 'add-projects') {
        this.emitter.emit('add-open', '');
      }
    }
}