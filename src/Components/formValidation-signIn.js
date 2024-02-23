const formValidationSignIn = data => {
  let errors = {};
  // Email validation
  if (!data.email || !data.email.trim()) {
    errors.email = 'Please enter email';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Please enter a valid Email';
  }

  if (!data.password || !data.password.trim()) {
    errors.password = 'Please enter password';
  }
  return errors;
};

export default formValidationSignIn;
