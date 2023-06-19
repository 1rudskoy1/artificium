class Dom {
    $el:any = '';
    constructor(selector:string) {
      this.$el = typeof selector === 'string' ? document.querySelector(selector): selector;
    }
    html(html:string) {
      if (typeof html === 'string') {
        this.$el.innerHTML = html;
        return this;
      }
      return this.$el.outerHTML.trim();
    }
    clear() {
      this.html('');
      return this;
    }
    on(eventType:string, callback:string) {
      this.$el.addEventListener(eventType, callback);
    }
    off(eventType:string, callback:string) {
      this.$el.removeEventListener(eventType, callback);
    }
    append(node:any) {
      if (node instanceof Dom) {
        node = node.$el;
      }
      if (Element.prototype.append) {
        this.$el.append(node);
      } else {
        this.$el.appendChild(node);
      }
      return this;
    }
    getAtrr(attr:string) {
      return this.$el.getAttribute(attr);
    }
    containClass(className:string) {
      return this.$el.classList.contains(className);
    }
}
export function $(selector:string) {
  return new Dom(selector);
}
$.create = (tagName:any, classes = '') =>{
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};