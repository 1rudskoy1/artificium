export function capitalize(string:string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validationFilds(data: { email: string; password: string;}) {
  let error = '';
  const pattern = /^\S+@\S+\.\S+$/;

  Object.values(data).forEach((item:string, index) => {
    if (item.length < 6) {
      return error = Object.keys(data)[index];
    }
  });

  if (!data.email.match(pattern)) {
    error = Object.keys(data)[0];
  }
  return error;
}
export function createNewElement(tagName:string, className:string, attr = '', value = '') {
  const tag = document.createElement(tagName);
  tag.classList.add(className);
  if (attr !== '') {
    const attribute = attr.split('=');
    tag.setAttribute(attribute[0], attribute[1]);
  }
  if (value !== '') {
    tag.innerHTML = value;
  }
  return tag;
}
export function clearActive(className:string, node:string) {
  const actives = document.querySelector(node).querySelectorAll('.'+className);
  actives.forEach((active)=> {
    active.classList.remove(className);
  });
}
export function timeFormat(all = true, fixTime: null | number) {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'];
  const date = new Date(fixTime);
  let time;
  const year = date.getFullYear();
  const day = date.getDate();
  const mouth = date.getMonth();
  const hours = date.getHours();
  const minute = date.getMinutes();
  const seconds = date.getSeconds();
  const miliseconds = date.getMilliseconds();
  if (all) {
    time = `${year}:${mouth < 10 ? '0' + (mouth + 1) : mouth + 1}:${day < 10 ? '0' + day : day}:${hours < 10 ? '0' + hours : hours}:${minute < 10 ? '0' + minute : minute}:${seconds}:${miliseconds}`;
  } else {
    time = `${day < 10 ? '0' + day : day} ${monthNames[mouth]}. ${hours < 10 ? '0' + hours : hours}:${minute < 10 ? '0' + minute : minute}`;
  }
  return time;
}