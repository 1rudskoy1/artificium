!function(){"use strict";var t=function(){function t(t){this.$el="",this.$el="string"==typeof t?document.querySelector(t):t}return t.prototype.html=function(t){return"string"==typeof t?(this.$el.innerHTML=t,this):this.$el.outerHTML.trim()},t.prototype.clear=function(){return this.html(""),this},t.prototype.on=function(t,n){this.$el.addEventListener(t,n)},t.prototype.off=function(t,n){this.$el.removeEventListener(t,n)},t.prototype.append=function(n){return n instanceof t&&(n=n.$el),Element.prototype.append?this.$el.append(n):this.$el.appendChild(n),this},t.prototype.getAtrr=function(t){return this.$el.getAttribute(t)},t.prototype.containClass=function(t){return this.$el.classList.contains(t)},t.prototype.parent=function(){return this.$el.parentNode},t.prototype.add=function(t){return this.$el.classList.add(t)},t.prototype.getValue=function(){return this.$el.value},t}();function n(n){return new t(n)}n.create=function(t,e){void 0===e&&(e="");var o=document.createElement(t);return e&&o.classList.add(e),n(o)};var e=function(){function t(){}return Object.defineProperty(t,"path",{get:function(){return window.location.hash.slice(1)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"param",{get:function(){return t.path.split("/")[1]},enumerable:!1,configurable:!0}),t}(),o=function(){function t(t,e){if(!t)throw new Error("Selector is not provided in Router");this.$placeholder=n(t),this.routes=e,this.page=null,this.changePageHandler=this.changePageHandler.bind(this),this.init()}return t.prototype.init=function(){window.addEventListener("hashchange",this.changePageHandler),this.changePageHandler()},t.prototype.changePageHandler=function(){this.page&&this.page.destroy();var t=e.path.includes("chat")?this.routes.chat:this.routes.auth;this.page=new t(e.param),this.$placeholder.clear(),this.$placeholder.append(this.page.getRoot()),this.page.afterRender()},t.prototype.destroy=function(){window.removeEventListener("hashchange",this.changePageHandler)},t}(),a=function(){function t(t){this.components=t.components||[]}return t.prototype.getRoot=function(){var t=n.create("div","container");return this.components=this.components.map((function(e){var o=n.create("div",e.className),a=new e(o,{});return o.html(a.toHTML()),t.append(o),a})),t},t.prototype.init=function(){this.components.forEach((function(t){t.init()}))},t.prototype.destroy=function(){this.components.forEach((function(t){return t.destroy()}))},t}();function i(t,n,e,o){void 0===e&&(e=""),void 0===o&&(o="");var a=document.createElement(t);if(a.classList.add(n),""!==e){var i=e.split("=");a.setAttribute(i[0],i[1])}return""!==o&&(a.innerHTML=o),a}var s,r=function(){function t(t,n){if(!t)throw new Error("No $root provided for DomListener!");this.$root=t,this.listeners=n}return t.prototype.initDOMListeners=function(){var t=this;this.listeners.forEach((function(n){var e,o="on"+("string"!=typeof(e=n)?"":e.charAt(0).toUpperCase()+e.slice(1));if(t.shorProto=Object.getPrototypeOf(t)[o],!t.shorProto)throw new Error("Method ".concat(o," is not implemented in ").concat(t.name||""," Component"));t.shorProto=t.shorProto.bind(t),t.$root.on(n,t.shorProto)}))},t.prototype.removeDOMListeners=function(){var t=this;this.listeners.forEach((function(n){t.$root.off(n,t.shorProto)}))},t}(),c=(s=function(t,n){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},s(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function e(){this.constructor=t}s(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),l=function(t){function n(n,e){var o=t.call(this,n,e.listeners)||this;return o.name=e.name||"",o.prepare(),o}return c(n,t),n.prototype.prepare=function(){},n.prototype.toHTML=function(t){return void 0===t&&(t={}),""},n.prototype.init=function(){this.initDOMListeners()},n.prototype.destroy=function(){this.removeDOMListeners()},n}(r),u=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),p=function(){return p=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},p.apply(this,arguments)},d=function(t){function e(n,e){return t.call(this,n,p({name:"Toolbar",listeners:["input","click"]},e))||this}return u(e,t),e.prototype.prepare=function(){},e.prototype.toHTML=function(t){return function(t){return'\n  <div class="authorization flex">\n  <div class="authorization-form">\n      '.concat('\n    <div class="logo">\n        <img class="logo__img" src="img/Logo.svg" alt="logo">\n    </div>','\n      <div class="form flex">\n          ').concat('\n  <div class="offer">\n        <h1 class="offer__header">Let\'s get <span class="offer__header_liner"> creative!</span></h1>\n        <p class="offer__text">Log in to Artificium to start creating magic.</p>\n    </div>\n  ','\n          <form action="" class="auth-form">\n             ').concat('\n  <div class="auth-form-wrap-input">\n    <input type="email" name="email" class="auth-form__input" placeholder="Email">\n    </div>\n    <div class="auth-form-wrap-input">\n    <input type="password" name="password" class="auth-form__input" placeholder="Password">\n    </div>\n    <div class="auth-form-check flex">\n    <div class="checkbox flex">\n        <input type="checkbox" class="checkbox__check">\n        <p class="checkbox__text">Remember me</p>\n    </div>\n    <a class="text-forgot">Forgot Password?</a>\n</div>\n<button class="btn" type="button" data-action=\'form-button\'>Log in</button>\n  ','\n          </form>\n      </div>\n      <div class="opinion-auth">\n          ').concat('\n  <span class="opinion-auth__text">or continue with</span>\n        <div class="opinion-auth-btns flex">\n        <button class="opinion-auth-btns__button">Google Account</button>\n        <button class="opinion-auth-btns__button opinion-auth-btns__button_apple">Apple Account</button>\n    </div>\n  ','\n      </div>\n      <div class="dont">\n          <p class="dont__text">Don\'t have an account? <span class="dont__text_sign text-forgot">Sign\n                  Up</span></p>\n      </div>\n  </div>\n  <div class="authorization-background">\n    ').concat((void 0===(n=t)&&(n=1),'\n  <img class="authorization-background__img" src="img/'.concat(1==n?"Illustration.png":"Illustration-auth.jpg",'" alt="background">\n    ').concat(1!=n?'<div class="authorization-background-offer">\n  <h3 class="authorization-background-offer__head">\n      Artificium has been a game-changer for our content creation process.\n  </h3>\n  <h3 class="authorization-background-offer__head">\n      The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.\n      Lily Patel\n  </h3>\n  <div class="authorization-background-offer-author">\n      <span class="authorization-background-offer-author__name">Lily Patel</span>\n      <span class="authorization-background-offer-author__post">CMO at Software House</span>\n  </div>\n</div>':"","\n  ")),"\n  </div>\n</div>");var n}(t)},e.prototype.init=function(){t.prototype.init.call(this)},e.prototype.onInput=function(t){n(t.target)},e.prototype.onClick=function(t){var e=n(t.target);if(n(".checkbox__check"),e.getAtrr("data-action")){document.querySelector(".auth-form__input_error")&&document.querySelector(".auth-form__input_error").classList.remove("auth-form__input_error");var o=function(t){var n="";return Object.values(t).forEach((function(e,o){if(e.length<6)return n=Object.keys(t)[o]})),t.email.match(/^\S+@\S+\.\S+$/)||(n=Object.keys(t)[0]),n}({email:document.querySelector("input[name=email]").value,password:document.querySelector("input[name=password]").value});o.length?document.querySelector("input[name=".concat(o,"]")).classList.add("auth-form__input_error"):window.location.href="#chat"}},e.className="auth",e}(l),h=function(){function t(t){this.params=t}return t.prototype.getRoot=function(){throw new Error('Method "getRoot" should be implemented')},t.prototype.afterRender=function(){},t.prototype.destroy=function(){},t}(),m=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),v=function(t){function n(n){void 0===n&&(n="");var e=t.call(this,n)||this;return e.storeSub=null,e}return m(n,t),n.prototype.getRoot=function(){return this.art=new a({components:[d]}),this.art.getRoot()},n.prototype.afterRender=function(){this.art.init()},n.prototype.destroy=function(){this.art.destroy()},n}(h),_={"Orbital Oddysey":{logo:"./img/triangle.svg",category:[{name:"Artificium",logo:"./img/artificium.svg",chat:{Iuser:[{time:1687973778,content:"Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔"}],User:[{time:1687973788,content:"No"}],dateUser:{name:"Isabella Chen",logo:"./img/Avatar-2.png"}}},{name:"Library",logo:"./img/folder.svg",chat:{Iuser:[{time:1687973778,content:"Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔"}],User:[{time:1687973788,content:"No"}],dateUser:{name:"Isabella Chen",logo:"./img/Avatar-2.png"}}}]},"Digital Product Launch":{logo:"./img/square.svg",category:[{name:"Chat",logo:"./img/comment-circle.svg",chat:{Iuser:[{time:1687973778,content:"Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔"}],User:[{time:1687973788,content:"No"}],dateUser:{name:"Isabella Chen",logo:"./img/Avatar-2.png"}}}]},"Brand Refresh":{logo:"./img/square-1.svg",category:[{name:"Chat",logo:"./img/square-1.svg",chat:{Iuser:[{time:1687973778,content:"Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔"}],User:[{time:1687973788,content:"No"}],dateUser:{name:"Isabella Chen",logo:"./img/Avatar-2.png"}}}]},"Social Media Strategy":{logo:"./img/octagon.svg",category:[{name:"Chat",logo:"./img/octagon.svg",chat:{Iuser:[{time:1687973778,content:"Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔"}],User:[{time:1687973788,content:"No"}],dateUser:{name:"Isabella Chen",logo:"./img/Avatar-2.png"}}}]}};var g=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),f=function(){return f=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},f.apply(this,arguments)},y=function(t){function e(n,e){return t.call(this,n,f({name:"Toolbar",listeners:["click","keyup","dblclick"]},e))||this}return g(e,t),e.prototype.prepare=function(){},e.prototype.toHTML=function(t){return"\n  ".concat('\n  <div class="chat-top">\n        <div class="chat-top-name">\n            <h2 class="chat-top-name__header" data-edit="header">Orbital Oddysey</h2>\n            <span class="chat-top-name__text" data-edit="text">Marketing Campaign for a new TV series Launch</span>\n        </div>\n        <div class="chat-top">\n            <div class="access-users access-users-chat">\n                <img src="./img/Avatar.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-1.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-2.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-3.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-4.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <img src="./img/Avatar-5.png" alt="avatar"\n                    class="access-users__img access-users-chat__img">\n                <div class="access-users__count"></div>\n            </div>\n            <div class="chat-top-icon">\n                <img class="chat-top-icon__share" src="./img/share.svg" alt="">\n                <span class="chat-top-icon__text">Share</span>\n            </div>\n            <div class="chat-top-icon" data-action="edit-chat-name">\n                <img class="chat-top-icon__edit" src="./img/edit.svg" alt="">\n            </div>\n        </div>\n    </div>\n  ',"\n  ").concat(function(){var t=_;t=t["Orbital Oddysey"].category;var n='<div class="chat-top chat-top-two"> <div class="chat-top-items">';for(var e in t)void 0!==e&&(n+='<div class="chat-top-item '.concat("0"==e?"chat-top-item-active":"",'">\n        <img class="chat-icon" src="').concat(t[e].logo,'" alt="">\n        <h5 class="chat-top-item__head">').concat(t[e].name,"</h5>\n    </div>"));return n+"</div></div>"}(),'\n        <div class="chat-fild">\n            <div class ="send-items">\n                <div class= "send-item">\n                    <div class="send-user">\n                        <div class = "send-user-wrap"> \n                            <img class = "send-user__logo" src="./img/Avatar-1.png"/>\n                            <div class = "send-user__name">Ryan Lee</div>\n                            <span class = "send-user__time">just now </span>\n                            <img class = "send-user__copy" src="./img/copy-icon.svg"/>\n                        </div>\n                    </div>\n                    <div class="send-text"> Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔</div> \n                </div>\n                <div class= "send-item">\n                    <div class="send-user">\n                        <div class = "send-user-wrap"> \n                            <img class = "send-user__logo" src="./img/Avatar-2.png"/>\n                            <div class = "send-user__name">Isabella Chen</div>\n                            <span class = "send-user__time">just now </span>\n                            <img class = "send-user__copy" src="./img/copy-icon.svg"/>\n                        </div>\n                    </div>\n                    <div class="send-text">Good point! Let\'s see... How about these names</div> \n                </div>\n            </div> \n            <div class="chat-offer">\n                <h2 class="chat-offer__header offer__header">Innovation Starter Pack</h2>\n                <p class="chat-offer__text offer__text">Kickstart your innovation process with our\n                    comprehensive\n                    selection\n                    of predefined prompts.</p>\n            </div>\n            <div class="chat-options">\n                <div class="chat-option">\n                    <img class="chat-option__icon" src="./img/comment-circle.svg" alt="">\n                    <h3 class="chat-option__header">Creative Assets</h3>\n                    <div class="options">\n                        <div class="option">\n                            <h6 class="option__head">UI wireframe</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Brochure design</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Social media</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Brand guidelines</h6>\n                        </div>\n                    </div>\n                </div>\n                <div class="chat-option">\n                    <img class="chat-option__icon" src="./img/code.svg" alt="">\n                    <h3 class="chat-option__header">Developer Tools</h3>\n                    <div class="options">\n                        <div class="option">\n                            <h6 class="option__head">API Integration</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Test automation</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">DB optimization</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Code review</h6>\n                        </div>\n                    </div>\n                </div>\n                <div class="chat-option">\n                    <img class="chat-option__icon" src="./img/pencil.svg" alt="">\n                    <h3 class="chat-option__header">Content Creation</h3>\n                    <div class="options">\n                        <div class="option">\n                            <h6 class="option__head">Product description</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">E-mail copy</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Whitepaper</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Press release</h6>\n                        </div>\n                    </div>\n                </div>\n                <div class="chat-option">\n                    <img class="chat-option__icon" src="./img/bulb.svg" alt="">\n                    <h3 class="chat-option__header">Idea Generation</h3>\n                    <div class="options">\n                        <div class="option">\n                            <h6 class="option__head">Brainstorming</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Brochure design</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Trend analysis</h6>\n                        </div>\n                        <div class="option">\n                            <h6 class="option__head">Social media posts</h6>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ').concat('\n  <div class="chat-input">\n    <img class="chat-input__icon" src="./img/micro.svg" alt="">\n    <input type="text" class="chat-input__send"\n        placeholder="You can ask me anything! I am here to help." data-action="input-chat">\n    <div class="chat-input-icons">\n        <img class="chat-input__icon" src="./img/telegram.svg" alt="">\n        <img class="chat-input__icon chat-top-icon__edit" src="./img/pin.svg" alt="">\n    </div>\n</div>\n  \n  ',"\n        </div>\n  \n  ")},e.prototype.init=function(){t.prototype.init.call(this)},e.prototype.onClick=function(t){var e=n(n(t.target).parent());e.containClass("chat-top-item")&&(document.querySelector(".chat-top-item-active").classList.remove("chat-top-item-active"),e.$el.classList.add("chat-top-item-active"))},e.prototype.onDblclick=function(t){var e=n(t.target);if(e.getAtrr("data-edit")){var o=n(".chat-top-name__".concat(e.getAtrr("data-edit")));console.log(o);var a=i("input","chat-top-name__".concat(e.getAtrr("data-edit")),"");a.classList.add("chat-top-name__".concat(e.getAtrr("data-edit"),"_input")),a.value=o.$el.innerHTML,o.$el.parentNode.insertBefore(a,o.$el.nextSibling),a.focus(),o.$el.style.display="none",a.onblur=function(){o.$el.style.display="block",o.$el.innerHTML=a.value,a.remove()}}},e.prototype.onKeyup=function(t){var e=n(t.target);if(t=window.event,"input-chat"==e.getAtrr("data-action")&&"Enter"==t.code&&""!==e.getValue()){var o=i("div","send-item",""),a=i("div","send-user-wrap",""),s=i("div","send-user",""),r=i("img","send-user__logo","src=./img/Avatar-1.png"),c=i("div","send-user__name","","Ryan Lee"),l=i("span","send-user__time","","just now"),u=i("img","send-user__copy","src=./img/copy-icon.svg"),p=i("div","send-text","",e.getValue());o.append(s),a.append(r),a.append(c),a.append(l),a.append(u),s.append(a),s.append(p),document.querySelector(".send-items").append(o)}},e.className="chat",e}(l);var b=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),w=function(){return w=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},w.apply(this,arguments)},k=function(t){function e(n,e){return t.call(this,n,w({name:"Toolbar",listeners:["click"]},e))||this}return b(e,t),e.prototype.prepare=function(){},e.prototype.toHTML=function(t){return'\n                    <div class="menu-user">\n                        <div class="menu-user-list menu-user-logo">\n                            <img class="menu-user__img" src="./img/Avatar-1.png" alt="User">\n                            <div class="menu-user-name">\n                                <h4 class="menu-user-name__head">Intellisys</h4>\n                                <div class="menu-user-name__members"><span\n                                        class="menu-user-name__members_count">12</span>\n                                    members</div>\n                            </div>\n                        </div>\n                        <div class="menu-user-list">\n                            <h3 class="menu-user-list__header">GENERAL</h3>\n                            <li class="menu-user-list__item"><img class="menu-user-list__icon chat-icon"\n                                    src="./img/search.svg" alt=""> Search</li>\n                            <li class="menu-user-list__item "><img class="menu-user-list__icon"\n                                    src="./img/credit-card.svg" alt=""> Billing</li>\n                        </div>\n                        <div class="menu-user-list" data-wrap="list-menu">\n                            <h3 class="menu-user-list__header">PROJECTS</h3>\n                            '.concat(function(){var t=_,n="";for(var e in t)void 0!==e&&(n+='<li class="menu-user-list__item"><img\n    class="menu-user-list__icon" src="'.concat(t[e].logo,'" alt=""> ').concat(e,"</li>"));return n}(),'\n                            <li class="menu-user-list__item menu-user-list__item_add"><img\n                                    class="menu-user-list__icon menu-user-list__icon_add" src="./img/plus-circle.svg"\n                                    alt=""> Add new project</li>\n                        </div>\n                    </div>\n                    <div class="user-bottom menu-user-list__item-active">\n                        <img class="user-bottom__logo" src="./img/Avatar-1.png" alt="Your User">\n                        <div class="user-bottom-text">\n                            <h5 class="user-bottom-text__name menu-user-name__head">Ryan Lee</h5>\n                            <span class="user-bottom-text__status menu-user-name__members">Premium</span>\n                        </div>\n                        <img class="user-bottom-text__setting" src="./img/cog.svg" alt="Setting ">\n                    </div>\n  \n  ')},e.prototype.init=function(){t.prototype.init.call(this)},e.prototype.onClick=function(t){var e,o=n(t.target);if(!o.containClass("menu-user-list__item")&&(o=n(o.parent()),!n(o.parent()).getAtrr("data-wrap")))return!1;n(o.parent()).getAtrr("data-wrap")&&(e="menu-user-list__item-active",'[data-wrap="list-menu"]',document.querySelector('[data-wrap="list-menu"]').querySelectorAll("."+e).forEach((function(t){t.classList.remove(e)})),o.add("menu-user-list__item-active"))},e.className="menu",e}(l),O=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();new o("body",{auth:v,chat:function(t){function n(n){void 0===n&&(n="");var e=t.call(this,n)||this;return e.storeSub=null,e}return O(n,t),n.prototype.getRoot=function(){return this.art=new a({components:[k,y]}),this.art.getRoot()},n.prototype.afterRender=function(){this.art.init()},n.prototype.destroy=function(){this.art.destroy(),this.storeSub.unsubscibe()},n}(h)})}();