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

<div class="wrapper">
        <div class="logo">
            <img src="https://www.freepnglogos.com/uploads/farmer-png/farmer-man-vector-cartoon-characters-ultimate-packs-31.png" alt="Farmer"/>
        </div>
        <div class="text-center mt-4 name">
            Farmer-To-Do
        </div>
        <form onSubmit={handleFormSubmit}>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>

   
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>

                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
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
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
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



// <form onSubmit={handleFormSubmit}>
//   <div class="mb-3">
//   <label for="exampleInputEmail1" class="form-label">Email address</label>
//   <input type="email" placeholder="Your email" name="email" type="email" value={formState.email} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//   <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
// </div>
// <div class="mb-3">
//   <label for="exampleInputPassword1" class="form-label">Password</label>
//   <input type="password" placeholder="******" name="password" type="password" class="form-control" value={formState.password} onChange={handleChange} id="exampleInputPassword1">
// </div>
// <div class="mb-3 form-check">
//   <input type="checkbox" class="form-check-input" id="exampleCheck1">
//   <label class="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
// <button type="submit" class="btn btn-primary" style={{ cursor: 'pointer' }}>Submit</button>
// </form>