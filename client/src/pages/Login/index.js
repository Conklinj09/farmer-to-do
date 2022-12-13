import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

import './Login.css';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
<div className="wrapper">
        <div className="logo">
            <img src="https://www.freepnglogos.com/uploads/farmer-png/farmer-man-vector-cartoon-characters-ultimate-packs-31.png" alt="Farmer"/>
        </div>
        <div className="text-center mt-4 name">
            Farmer-To-Do
        </div>
        <form onSubmit={handleFormSubmit}>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input
                  className="form-input"
                  placeholder="Password"
                  // id="pwd"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
            </div>
            <button className="btn mt-3">Login</button>
        </form>
        <div className="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="./SignUp">Sign up</a>
        </div>
                    {error && (
              <div className=" rounded border border-dark my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
    </div>
    </main>
    
  );
};


export default Login;
