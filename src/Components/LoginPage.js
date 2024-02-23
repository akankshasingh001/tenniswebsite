import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/loginStyles.css';
import { Spinner } from 'react-bootstrap';
import formValidationSignIn from './formValidation-signIn';

const LoginPage = ({ setIsLoggedIn }) => {
  const initialFormData = {
    email: '',
    password: '',
    submitted: false
  };
  const [formData, setFormData] = useState(initialFormData);
  //for errors
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));

    if (formData.submitted) {
      const validationErrors = formValidationSignIn({ ...formData, [name]: value });
      setErrors(validationErrors);
    }
  };



  const onButtonClick = async e => {
    e.preventDefault();
    formData.submitted = true;
    const validationErrors = formValidationSignIn(formData);
    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8000/signIn?email=${formData.email}&password=${formData.password}`
      );

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true);
        navigate('/dashboard', { state: { firstName: data.user.firstName } });
      } else {
        errors.serverError = 'Invalid userid or password';
        setErrors(errors);
      }
    } catch (error) {
      console.error('Error:', error);
      errors.serverError = 'An error occurred, please try again later';
      setErrors(errors);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <div className="overlay"></div>}
      {isLoading && (
        <Spinner animation="border" role="status" className="spinner" />
      )}
      <form className="form-signin" onSubmit={onButtonClick}>
        <h1 className="h3 mb-3 font-weight-normal">
          <i className="bi bi-person"></i>
          &nbsp; Log in
        </h1>
        <hr />
        <label htmlFor="inputEmail">Email Id</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
           type="email"
           className="form-control customInput"
           id="email"
           name="email"
           placeholder="Enter Email"
           value={formData.email}
           onChange={handleInputChange}
           required
           style={{
             border: errors && errors.email ? '2px solid red' : 'none'
           }}
        />
        {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
        <br />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        &nbsp; &nbsp;
        <input
          type="password"
          className="form-control customInput"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter Password"
          style={{
            border: errors && errors.password ? '2px solid red' : 'none'
          }}
        />
         {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <input
          className="btn btn-lg btn-block"
          type="button"
          onClick={onButtonClick}
          value={'Log In'}
        />
        {errors.serverError && <div className="alert alert-danger">{errors.serverError}</div>}
      </form>
    </>
  );
};

export default LoginPage;
