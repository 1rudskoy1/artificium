export class Emitter {
  listeners:any;
  constructor() {
    this.listeners = {};
  }
  emit(eventName:string, ...args:any) {
    if (!Array.isArray(this.listeners[eventName])) {
      return false;
    }
    this.listeners[eventName].forEach((listener: any) => {
      listener(...args);
    });
  }

  subscribe(event:string, fn:any) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event].filter((listener: any) => listener !== fn);
    };
  }
}