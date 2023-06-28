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
    prepare() {}
    toHTML(date:any) {
      return toolbarTemplate();
    }
    init() {
      super.init();
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
      }
    }
}