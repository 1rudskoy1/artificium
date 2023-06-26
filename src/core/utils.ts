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