import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import LoginImage from '../assets/login/login.webp';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

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
    <main id='login-page' >
      <div className='section is-large'>
        <div className="columns is-mobile is-vcentered">

          <div className="column is-half">
            <div className="">
              <img src={LoginImage} alt="cleaning the kitchen" />
            </div>
          </div>

          <div id='login-form' className='column is-half'>
            <div className='title is-1'>Welcome Back!</div><br />

            <form onSubmit={handleFormSubmit}>
              <div className='field mt-4'>
                <div className='control'>
                  <input
                    className="input is-link is-rounded"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='field'>
                <p className='control'>
                  <input
                    className="input is-link is-rounded"
                    placeholder="******"
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className='field'>
                <p className='control'>
                  <button className="button is-danger is-rounded" type="submit">
                    Login
                  </button>
                </p>
                <a href="/signup" className="has-text-link is-underlined">No account? Sign up today!</a>
              </div>
            </form>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
