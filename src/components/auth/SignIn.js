import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { signIn } from '../../actions/authActions';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid Email Address'),
  password: yup.string().required('Password is required').min(6),
});

const SignIn = () => {
  const authId = useSelector((state) => state.firebase.auth.uid);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });
  const onSubmit = (data, e) => {
    const creds = {
      email: data.email,
      password: data.password,
    };

    dispatch(signIn(creds));
    e.target.reset();
  };

  return (
    <>
      {authId ? (
        <Redirect to='/' />
      ) : (
        <div className='container'>
          <div className='row mt-3'>
            <div className='col col-md-6 mx-auto'>
              <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <legend>
                  <h3>Sign In</h3>
                </legend>
                <div className='form-group'>
                  <label htmlFor='email'>Enter Email</label>
                  <input
                    name='email'
                    type='email'
                    className={`form-control ${
                      errors.email ? 'is-invalid' : ''
                    }`}
                    id='email'
                    ref={register}
                  />
                  {errors.email && (
                    <div className='invalid-feedback'>
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Enter Password</label>
                  <input
                    name='password'
                    type='password'
                    className={`form-control ${
                      errors.password ? 'is-invalid' : ''
                    }`}
                    id='password'
                    ref={register}
                  />
                  {errors.password && (
                    <div className='invalid-feedback'>
                      {errors.password.message}
                    </div>
                  )}
                </div>
                <button type='submit' className='btn btn-primary'>
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;
