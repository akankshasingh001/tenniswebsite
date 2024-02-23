import React, { useState } from 'react';
import formValidation from './formValidation';
import emailCheck from '../JSONFiles/registeredUser.json';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000'
});

const SignUp = ({ setIsLoggedIn }) => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    zipCode: '',
    password: '',
    confirmPassword: '',
    submitted: false
  };
  //initial data for form
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
      const validationErrors = formValidation({ ...formData, [name]: value });
      setErrors(validationErrors);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    formData.submitted = true;
    const validationErrors = formValidation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      try {
        //checking if email already exist
        const emailExists = emailCheck.some(
          user => user.email === formData.email
        );
        if (emailExists) {
          setErrors({ email: 'Email already exists.' });
        } else {
          //send form data to server
          await axiosInstance.post('/registerUser', formData);
          setFormData(initialFormData);
          setIsLoggedIn(true);
          navigate('/dashboard', { state: { firstName: formData.firstName } });
        }
      } catch (error) {
        setErrors('Not registered');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <div class="container">
        {isLoading && <div className="overlay"></div>}
        {isLoading && (
          <Spinner animation="border" role="status" className="spinner" />
        )}
        <h2>Sign Up</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label for="firstName">First Name:</label>
                <input
                  type="text"
                  className="form-control customInput"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                  required
                  autoFocus
                  style={{
                    border:
                      errors && errors.firstName ? '2px solid red' : 'none'
                  }}
                />
                {errors.firstName && (
                  <small className="text-danger">{errors.firstName}</small>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label for="lastName">Last Name:</label>
                <input
                  type="text"
                  className="form-control customInput"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  style={{
                    border: errors && errors.lastName ? '2px solid red' : 'none'
                  }}
                />
                {errors.lastName && (
                  <small className="text-danger">{errors.lastName}</small>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label for="email">Email:</label>
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
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label for="gender">Gender:</label>
                <select
                  className="form-control customInput"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  style={{
                    border: errors && errors.gender ? '2px solid red' : 'none'
                  }}
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {errors.gender && (
                  <small className="text-danger">{errors.gender}</small>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label for="zipCode">Zip Code:</label>
                <input
                  type="number"
                  className="form-control customInput"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="Enter Zip Code"
                  style={{
                    border: errors && errors.zipCode ? '2px solid red' : 'none'
                  }}
                />
                {errors.zipCode && (
                  <small className="text-danger">{errors.zipCode}</small>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label for="password">Password:</label>
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  className="form-control customInput"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  style={{
                    border:
                      errors && errors.confirmPassword
                        ? '2px solid red'
                        : 'none'
                  }}
                />
                {errors.confirmPassword && (
                  <small className="text-danger">
                    {errors.confirmPassword}
                  </small>
                )}
              </div>
            </div>
          </div>
          <input
            className="btn btn-lg btn-block button-class"
            type="button"
            value={'Sign me Up!'}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};

export default SignUp;
