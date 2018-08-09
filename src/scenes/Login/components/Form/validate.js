const validate = values => {
  const errors = {};

  const requiredFields = ['user_id', 'password'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

export default validate;
