import {data} from './../../redux/data';
function toolbarProjects() {
  const projects:any = data.projects;
  let htmlProjects:string = '';
  for (const key in projects) {
    if (key !== undefined) {
      htmlProjects += `<li class="menu-user-list__item"><img
    class="menu-user-list__icon" src="${projects[key].logo}" alt=""> ${key}</li>`;
    }
  }
  return htmlProjects;
}
export function toolbarTemplate() {
  return `
                    <div class="menu-user">
                        <div class="menu-user-list menu-user-logo">
                            <img class="menu-user__img" src="./img/Avatar-1.png" alt="User">
                            <div class="menu-user-name">
                                <h4 class="menu-user-name__head">Intellisys</h4>
                                <div class="menu-user-name__members"><span
                                        class="menu-user-name__members_count">12</span>
                                    members</div>
                            </div>
                        </div>
                        <div class="menu-user-list">
                            <h3 class="menu-user-list__header">GENERAL</h3>
                            <li class="menu-user-list__item"><img class="menu-user-list__icon chat-icon"
                                    src="./img/search.svg" alt=""> Search</li>
                            <li class="menu-user-list__item "><img class="menu-user-list__icon"
                                    src="./img/credit-card.svg" alt=""> Billing</li>
                        </div>
                        <div class="menu-user-list" data-wrap="list-menu">
                            <h3 class="menu-user-list__header">PROJECTS</h3>
                            ${toolbarProjects()}
                            <li class="menu-user-list__item menu-user-list__item_add"><img
                                    class="menu-user-list__icon menu-user-list__icon_add" src="./img/plus-circle.svg"
                                    alt=""> Add new project</li>
                        </div>
                    </div>
                    <div class="user-bottom menu-user-list__item-active">
                        <img class="user-bottom__logo" src="./img/Avatar-1.png" alt="Your User">
                        <div class="user-bottom-text">
                            <h5 class="user-bottom-text__name menu-user-name__head">Ryan Lee</h5>
                            <span class="user-bottom-text__status menu-user-name__members">Premium</span>
                        </div>
                        <img class="user-bottom-text__setting" src="./img/cog.svg" alt="Setting ">
                    </div>
  
  `;
}