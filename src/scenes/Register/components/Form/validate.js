const validate = values => {
  const errors = {};

  const requiredFields = [
    'email',
    'username',
    'password',
    'confirm_password',
    'term'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values['password'] !== values['confirm_password'] &&
    values['confirm_password']
  ) {
    errors['confirm_password'] = 'Password is not match!';
  }

  return errors;
};

export default validate;
