function logo() {
  return `
    <div class="logo">
        <img class="logo__img" src="img/Logo.svg" alt="logo">
    </div>`;
}
function underText() {
  return `
  <div class="offer">
        <h1 class="offer__header">Let's get <span class="offer__header_liner"> creative!</span></h1>
        <p class="offer__text">Log in to Artificium to start creating magic.</p>
    </div>
  `;
}

function form() {
  return `
  <div class="auth-form-wrap-input">
    <input type="email" name="email" class="auth-form__input" placeholder="Email">
    </div>
    <div class="auth-form-wrap-input">
    <input type="password" name="password" class="auth-form__input" placeholder="Password">
    </div>
    <div class="auth-form-check flex">
    <div class="checkbox flex">
        <input type="checkbox" class="checkbox__check">

        <p class="checkbox__text">Remember me</p>
    </div>
    <a class="text-forgot">Forgot Password?</a>
</div>
<button class="btn" type="submit">Log in</button>
  `;
}

function opinionAuth() {
  return `
  <span class="opinion-auth__text">or continue with</span>
        <div class="opinion-auth-btns flex">
        <button class="opinion-auth-btns__button">Google Account</button>
        <button class="opinion-auth-btns__button opinion-auth-btns__button_apple">Apple Account</button>
    </div>
  `;
}

function authBackground() {
  return `
    <img class="authorization-background__img" src="img/Illustration.png" alt="bacground">
  `;
}
export function formAuthTemplate() {
  return `
  <div class="authorization flex">
  <div class="authorization-form">
      ${logo()}
      <div class="form flex">
          ${underText()}
          <form action="" class="auth-form">
             ${form()}
          </form>
      </div>
      <div class="opinion-auth">
          ${opinionAuth()}
      </div>
      <div class="dont">
          <p class="dont__text">Don't have an account? <span class="dont__text_sign text-forgot">Sign
                  Up</span></p>
      </div>
  </div>
  <div class="authorization-background">
    ${authBackground()}
  </div>
</div>`;
}