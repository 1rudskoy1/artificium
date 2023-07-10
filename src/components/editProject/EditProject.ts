import {ArtComponent} from '../../core/ArtComponent';
import {$} from '../../core/Dom';
import {createNewElement} from '../../core/utils';
import {editProjectTemplate} from './editProjectTemplate';
import {users} from '../../redux/users';
export class EditProject extends ArtComponent {
    static className = 'manage-edit';
    constructor($root:any, options:any) {
      super($root, {
        name: 'manage-edit',
        listeners: ['click'],
        ...options,
      });
    }
    prepare() {
    }
    toHTML() {
      return editProjectTemplate();
    }
    init() {
      super.init();
      const edit = document.querySelector<HTMLElement>('.manage-edit');
      this.emitter.subscribe('edit-open', (data:any) => {
        edit.style.display = 'block';
      });
      const invates = document.querySelectorAll('.invates-user');
      invates.forEach((invate:any) => {
        invate.querySelector('.invates-user__close').addEventListener('click', (e:any) => {
          invate.remove();
        });
      });
      const field = document.querySelector('.invates-field');
      field.addEventListener('input', () => {
        const usersOpen = document.querySelector<HTMLElement>('.users-open');
        usersOpen.style.display = 'block';
        usersOpen.innerHTML = '';
        const myArray = users.filter(function( obj ) {
          const regexp = new RegExp(field.innerHTML, 'gi');
          const value:any = field.innerHTML;
          console.log(value.length);
          if (value[0] === '@') {
            console.log('value: @');
            return obj.nick.match(regexp);
          } else {
            return obj.name.match(regexp);
          }
        });
        if (myArray) {
          myArray.forEach((item) => {
            createNewUser(usersOpen, item);
          });
        }
      });
      field.addEventListener('blur', () => {
        const usersOpen = document.querySelector<HTMLElement>('.users-open');
        (usersOpen as HTMLElement).style.display = 'none';
      })
    }
    onClick(e:any) {
      if (e.target.classList.contains('blur') || $(e.target).getAtrr('data-role') == 'close') {
        const edit = document.querySelector<HTMLElement>('.manage-edit');
        edit.style.display = 'none';
      }
      if ($(e.target).getAtrr('data-action') === 'add-invates-users') {
        const users = document.querySelectorAll('.invates-user');
        if (users.length) {
          users.forEach((user) => {
            createUser(user);
          });
          const container = document.querySelector('.invates-field');
          container.innerHTML = '';
        }
      }
    }
}

function createUser(divContainer:Element) {
  const allUsers = document.querySelector('[data-role = "containerUsers"]');
  const insertBef = document.querySelector('[data-action="add-users"]');
  const container:HTMLElement = createNewElement('div', 'manage-user', ``);
  const userLogoContainer = createNewElement('div', 'menu-user-logo', ``);
  userLogoContainer.classList.add('manage-user-logo');
  const srcImg:HTMLImageElement = divContainer.querySelector('.invates-user__logo');
  const userLogo = createNewElement('img', 'menu-user__img', `src=${srcImg.src}`);
  userLogo.classList.add('manage-user-logo__img');
  userLogoContainer.append(userLogo);

  const menuUser = createNewElement('div', 'menu-user-name', ``);
  menuUser.classList.add('manage-user-name');
  const name:HTMLImageElement = divContainer.querySelector('.invates-user__text');
  const menuUserName = createNewElement('h4', 'menu-user-name__head', ``, `${name.innerHTML}`);
  menuUserName.classList.add('manage-user-name__head');
  const menuUserMembers = createNewElement('div', 'menu-user-name__members', ``, '???');
  menuUserMembers.classList.add('manage-user-name__members');
  menuUser.append(menuUserName);
  menuUser.append(menuUserMembers);
  userLogoContainer.append(menuUser);
  const btn = createNewElement('button', 'manage-user__btn', ``, 'Viewer');
  btn.classList.add('manage-user__btn_viewer');
  container.append(userLogoContainer);
  container.append(btn);
  console.log(allUsers, insertBef);
  allUsers.insertBefore(container, insertBef);
}

function createNewUser(usersOpen:Element, array:any) {
  const container:HTMLElement = createNewElement('div', 'manage-user', ``);
  const userLogoContainer = createNewElement('div', 'menu-user-logo', ``);
  userLogoContainer.classList.add('manage-user-logo');
  const userLogo = createNewElement('img', 'menu-user__img', `src=${array.logo}`);
  userLogo.classList.add('manage-user-logo__img');
  userLogoContainer.append(userLogo);

  const menuUser = createNewElement('div', 'menu-user-name', ``);
  menuUser.classList.add('manage-user-name');
  const menuUserName = createNewElement('h4', 'menu-user-name__head', ``, `${array.name}`);
  menuUserName.classList.add('manage-user-name__head');
  const menuUserMembers = createNewElement('div', 'menu-user-name__members', ``, `${array.nick}`);
  menuUserMembers.classList.add('manage-user-name__members');
  menuUser.append(menuUserName);
  menuUser.append(menuUserMembers);
  userLogoContainer.append(menuUser);
  container.append(userLogoContainer);
  usersOpen.append(container);
}