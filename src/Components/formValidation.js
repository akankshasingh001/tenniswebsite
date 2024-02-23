const formValidation = data => {
  let errors = {};

  if (!data.firstName.trim()) {
    errors.firstName = 'Please enter first name';
  }
  if (!data.lastName.trim()) {
    errors.lastName = 'Please enter last name';
  }
  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Please enter email';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Please enter a valid Email';
  }

  if (!data.gender || data.gender === 'Select') {
    errors.gender = 'Please select Gender';
  }

  if (!data.zipCode.trim()) {
    errors.zipCode = 'Please enter zip code';
  } else if (!/^\d{1,5}$/.test(data.zipCode)) {
    errors.zipCode = 'Zip Code should be a number with a maximum length of 5';
  }

  if (!data.password.trim()) {
    errors.password = 'Please enter password';
  }
  if (!data.confirmPassword.trim()) {
    errors.confirmPassword = 'Please enter confirm password';
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = 'Passwords do not match';
  }
  return errors;
};

export default formValidation;
