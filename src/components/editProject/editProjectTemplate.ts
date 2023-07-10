export function editProjectTemplate() {
  return `
  <div class = "blur"></div>
  <div class="manage-top">
      <h3 class="manage-top__header">Manage who can view this project</h3>
      <img class="manage-top__close" src="./img/close.svg" alt="" data-role = "close">
  </div>
  <div class="manage-top__text">
      Select which users can access and view this project. Only users with access can view and edit the project.
  </div>
  <div class="manage-invates">
  <div class="users-open">
            <div class="users-open__head">Users</div>
            <div class="manage-users">
                <div class="manage-user">
                    <div class="menu-user-logo manage-user-logo">
                        <img class="menu-user__img manage-user-logo__img" src="./img/Avatar-1.png" alt="User">
                        <div class="menu-user-name manage-user-name">
                            <h4 class="menu-user-name__head manage-user-name__head">You</h4>
                            <div class="menu-user-name__members manage-user-name__members">@zak</div>
                        </div>
                    </div>
                </div>
                <div class="manage-user">
                    <div class="menu-user-logo manage-user-logo">
                        <img class="menu-user__img manage-user-logo__img" src="./img/Avatar-1.png" alt="User">
                        <div class="menu-user-name manage-user-name">
                            <h4 class="menu-user-name__head manage-user-name__head">Mia Park</h4>
                            <div class="menu-user-name__members manage-user-name__members">@Mia</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      <div class="invates-field" contenteditable = 'true'>
          <div class="invates-user">
              <img class="invates-user__logo" src="./img/Avatar-3.png" alt="">
              <span class="invates-user__text">Sophia Zhang</span>
              <img class="invates-user__close" src="./img/close.svg" alt="">
          </div>
          <div class="invates-user">
              <img class="invates-user__logo" src="./img/Avatar-4.png" alt="">
              <span class="invates-user__text">Djord Broun</span>
              <img class="invates-user__close" src="./img/close.svg" alt="">
          </div>
          
      </div>
      <button class="btn manage-invates__btn" data-action = "add-invates-users">Invite</button>
  </div>
  <div class="manage-users" data-role = "containerUsers">
      <div class="manage-user">
          <div class="menu-user-logo manage-user-logo">
              <img class="menu-user__img manage-user-logo__img" src="./img/Avatar-1.png" alt="User">
              <div class="menu-user-name manage-user-name">
                  <h4 class="menu-user-name__head manage-user-name__head">You</h4>
                  <div class="menu-user-name__members manage-user-name__members">@zak</div>
              </div>
          </div>
          <button class="manage-user__btn manage-user__btn_owner">Owner</button>
      </div>
      <div class="manage-user">
          <div class="menu-user-logo manage-user-logo">
              <img class="menu-user__img manage-user-logo__img" src="./img/Avatar-1.png" alt="User">
              <div class="menu-user-name manage-user-name">
                  <h4 class="menu-user-name__head manage-user-name__head">Mia Park</h4>
                  <div class="menu-user-name__members manage-user-name__members">@Mia</div>
              </div>
          </div>
          <button class="manage-user__btn manage-user__btn_editor">Editor</button>
      </div>
      <li class="menu-user-list__item" data-action="add-users"><img
              class="menu-user-list__icon menu-user-list__icon_add" src="./img/plus-circle.svg" alt=""> and 5 more others</li>
  </div>
  <div class="setting-privacy">
      <div class="privacy">
          <h4 class="privacy__header">Anyone with the link</h4>
          <div class="dropdown">
              <button class="dropdown-toggle" type="button">
                  can view
              </button>
              <div class="dropdown-menu">
                  <a class="dropdown-item">Action</a>
                  <a class="dropdown-item">Another action</a>
                  <a class="dropdown-item">Something else here</a>
              </div>
          </div>
      </div>
      <div class='setting-button'>
          <button class="copy-button">
              Copy Link
          </button>
      </div>
  </div>
  `;
}