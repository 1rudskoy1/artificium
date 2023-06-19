export function capitalize(string:string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validationFilds(data:Object) {
  let error = '';
  Object.values(data).forEach((item:string, index) => {
    if (item.length < 6) {
      error = Object.keys(data)[index];
    }
  });
  return error;
}