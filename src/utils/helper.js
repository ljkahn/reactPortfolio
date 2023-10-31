export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if( !re.test(String(email).toLowerCase()) ) return 'Email is not valid';
  return '' // indicate no errors
};

export function validateName(name) {

  if( !name ) return 'Name is not valid';
  return '' // indicate no errors
};


// export {validateEmail, validateName};

