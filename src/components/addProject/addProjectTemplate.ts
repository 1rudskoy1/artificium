export function addProjectTemplate() {
  return `
    <div class = "blur"></div>
    <div class="manage-top">
        <h3 class="manage-top__header">Add Project</h3>
        <img class="manage-top__close" src="./img/close.svg" alt="" data-role = "close">
    </div>
    <div class="manage-invates manage-invates-add">
        <div class="invates-field invates-field">
           <input placeholder = "Name Project" class = "invates-field__input" data-role = "add-input"/>
        </div>
        <button class="btn manage-invates__btn" data-role="add-project">Create</button>
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