function chatTop() {
  return `
  <div class="chat-top">
        <div class="chat-top-name">
            <h2 class="chat-top-name__header">Orbital Oddysey</h2>
            <span class="chat-top-name__text">Marketing Campaign for a new TV series Launch</span>
        </div>
        <div class="chat-top">
            <div class="access-users access-users-chat">
                <img src="./img/Avatar.png" alt="avatar"
                    class="access-users__img access-users-chat__img">
                <img src="./img/Avatar-1.png" alt="avatar"
                    class="access-users__img access-users-chat__img">
                <img src="./img/Avatar-2.png" alt="avatar"
                    class="access-users__img access-users-chat__img">
                <img src="./img/Avatar-3.png" alt="avatar"
                    class="access-users__img access-users-chat__img">
                <img src="./img/Avatar-4.png" alt="avatar"
                    class="access-users__img access-users-chat__img">
                <img src="./img/Avatar-5.png" alt="avatar"
                    class="access-users__img access-users-chat__img">
                <div class="access-users__count"></div>
            </div>
            <div class="chat-top-icon">
                <img class="chat-top-icon__share" src="./img/share.svg" alt="">
                <span class="chat-top-icon__text">Share</span>
            </div>
            <div class="chat-top-icon">
                <img class="chat-top-icon__edit" src="./img/edit.svg" alt="">
            </div>
        </div>
    </div>
  `;
}

function chatTopTwo() {
  return `
  <div class="chat-top chat-top-two">
    <div class="chat-top-items">
        <div class="chat-top-item chat-top-item-active">
            <img class="chat-icon" src="./img/artificium.svg" alt="">
            <h5 class="chat-top-item__head">Artificium</h5>
        </div>
        <div class="chat-top-item">
            <img class="chat-icon" src="./img/comment-circle.svg" alt="">
            <h5 class="chat-top-item__head">Chat</h5>
        </div>
        <div class="chat-top-item">
            <img class="chat-icon" src="./img/folder.svg" alt="">
            <h5 class="chat-top-item__head">Library</h5>
        </div>
    </div>
  </div>
  
  `;
}

function chatInput() {
  return `
  <div class="chat-input">
    <img class="chat-input__icon" src="./img/micro.svg" alt="">
    <input type="text" class="chat-input__send"
        placeholder="You can ask me anything! I am here to help.">
    <div class="chat-input-icons">
        <img class="chat-input__icon" src="./img/telegram.svg" alt="">
        <img class="chat-input__icon chat-top-icon__edit" src="./img/pin.svg" alt="">
    </div>
</div>
  
  `;
}
export function chatTemplate() {
  return `
  ${chatTop()}
  ${chatTopTwo()}
        <div class="chat-fild">
            <div class ="send-items">
                <div class= "send-item">
                    <div class="send-user">
                        <div class = "send-user-wrap"> 
                            <img class = "send-user__logo" src="./img/Avatar-1.png"/>
                            <div class = "send-user__name">Ryan Lee</div>
                            <span class = "send-user__time">just now </span>
                            <img class = "send-user__copy" src="./img/copy-icon.svg"/>
                        </div>
                    </div>
                    <div class="send-text"> Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔</div> 
                </div> 
                <div class= "send-item">
                    <div class="send-user">
                        <div class = "send-user-wrap"> 
                            <img class = "send-user__logo" src="./img/Avatar-1.png"/>
                            <div class = "send-user__name">Ryan Lee</div>
                            <span class = "send-user__time">just now </span>
                            <img class = "send-user__copy" src="./img/copy-icon.svg"/>
                        </div>
                    </div>
                    <div class="send-text"> Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔</div> 
                </div>
                <div class= "send-item">
                    <div class="send-user">
                        <div class = "send-user-wrap"> 
                            <img class = "send-user__logo" src="./img/Avatar-1.png"/>
                            <div class = "send-user__name">Ryan Lee</div>
                            <span class = "send-user__time">just now </span>
                            <img class = "send-user__copy" src="./img/copy-icon.svg"/>
                        </div>
                    </div>
                    <div class="send-text"> Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔</div> 
                </div>
                <div class= "send-item">
                    <div class="send-user">
                        <div class = "send-user-wrap"> 
                            <img class = "send-user__logo" src="./img/Avatar-1.png"/>
                            <div class = "send-user__name">Ryan Lee</div>
                            <span class = "send-user__time">just now </span>
                            <img class = "send-user__copy" src="./img/copy-icon.svg"/>
                        </div>
                    </div>
                    <div class="send-text"> Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔</div> 
                </div>
                <div class= "send-item">
                    <div class="send-user">
                        <div class = "send-user-wrap"> 
                            <img class = "send-user__logo" src="./img/Avatar-1.png"/>
                            <div class = "send-user__name">Ryan Lee</div>
                            <span class = "send-user__time">just now </span>
                            <img class = "send-user__copy" src="./img/copy-icon.svg"/>
                        </div>
                    </div>
                    <div class="send-text"> Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔</div> 
                </div>
                <div class= "send-item">
                    <div class="send-user">
                        <div class = "send-user-wrap"> 
                            <img class = "send-user__logo" src="./img/Avatar-1.png"/>
                            <div class = "send-user__name">Ryan Lee</div>
                            <span class = "send-user__time">just now </span>
                            <img class = "send-user__copy" src="./img/copy-icon.svg"/>
                        </div>
                    </div>
                    <div class="send-text"> Actually, I think I really like Cosmic Voyager. Maybe we could stick with that name and work on designing a more realistic concept art? 🤔</div> 
                </div>
            </div> 
            <div class="chat-offer">
                <h2 class="chat-offer__header offer__header">Innovation Starter Pack</h2>
                <p class="chat-offer__text offer__text">Kickstart your innovation process with our
                    comprehensive
                    selection
                    of predefined prompts.</p>
            </div>
            <div class="chat-options">
                <div class="chat-option">
                    <img class="chat-option__icon" src="./img/comment-circle.svg" alt="">
                    <h3 class="chat-option__header">Creative Assets</h3>
                    <div class="options">
                        <div class="option">
                            <h6 class="option__head">UI wireframe</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Brochure design</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Social media</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Brand guidelines</h6>
                        </div>
                    </div>
                </div>
                <div class="chat-option">
                    <img class="chat-option__icon" src="./img/code.svg" alt="">
                    <h3 class="chat-option__header">Developer Tools</h3>
                    <div class="options">
                        <div class="option">
                            <h6 class="option__head">API Integration</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Test automation</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">DB optimization</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Code review</h6>
                        </div>
                    </div>
                </div>
                <div class="chat-option">
                    <img class="chat-option__icon" src="./img/pencil.svg" alt="">
                    <h3 class="chat-option__header">Content Creation</h3>
                    <div class="options">
                        <div class="option">
                            <h6 class="option__head">Product description</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">E-mail copy</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Whitepaper</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Press release</h6>
                        </div>
                    </div>
                </div>
                <div class="chat-option">
                    <img class="chat-option__icon" src="./img/bulb.svg" alt="">
                    <h3 class="chat-option__header">Idea Generation</h3>
                    <div class="options">
                        <div class="option">
                            <h6 class="option__head">Brainstorming</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Brochure design</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Trend analysis</h6>
                        </div>
                        <div class="option">
                            <h6 class="option__head">Social media posts</h6>
                        </div>
                    </div>
                </div>
            </div>
            ${chatInput()}
        </div>
  
  `;
}