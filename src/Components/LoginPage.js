import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/loginStyles.css';
import { Spinner } from 'react-bootstrap';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onButtonClick = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8000/signIn?email=${email}&password=${password}`
      );

      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(true);
        navigate('/dashboard', { state: { firstName: data.user.firstName } });
      } else {
        setError('Invalid userid or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred, please try again later');
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
          value={email}
          id="inputEmail"
          className="form-control"
          placeholder="Email"
          onChange={ev => setEmail(ev.target.value)}
          required
          autoFocus
        />
        <br />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        &nbsp; &nbsp;
        <input
          type="password"
          value={password}
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          onChange={ev => setPassword(ev.target.value)}
          required
        />
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
        {error && <div className="alert alert-danger">{error}</div>}
      </form>
    </>
  );
};

export default LoginPage;
