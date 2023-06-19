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
<button class="btn" type="button" data-action='form-button'>Log in</button>
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

function authBackground(date:number = 1) {
  console.log(date, 'Game');
  return `
  <img class="authorization-background__img" src="img/${date == 1 ? 'Illustration.png' : 'Illustration-auth.jpg' }" alt="background">
    ${date != 1 ? authBackgroundText() : ''}
  `;
}

function authBackgroundText() {
  return `<div class="authorization-background-offer">
  <h3 class="authorization-background-offer__head">
      Artificium has been a game-changer for our content creation process.
  </h3>
  <h3 class="authorization-background-offer__head">
      The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
      Lily Patel
  </h3>
  <div class="authorization-background-offer-author">
      <span class="authorization-background-offer-author__name">Lily Patel</span>
      <span class="authorization-background-offer-author__post">CMO at Software House</span>
  </div>
</div>`;
}
export function formAuthTemplate(type:number) {
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
    ${authBackground(type)}
  </div>
</div>`;
}