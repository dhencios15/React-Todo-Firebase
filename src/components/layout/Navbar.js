import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';

import { signOut } from '../../actions/authActions';

const Navbar = () => {
  useFirebaseConnect('tasks');
  const authId = useSelector((state) => state.firebase.auth.uid);
  const dispatch = useDispatch();

  const renderLink = () => {
    return (
      <>
        <li className='nav-item'>
          <Link className='nav-link' to='/signin'>
            Sign in
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/signup'>
            Sign up
          </Link>
        </li>
      </>
    );
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor01'
        aria-controls='navbarColor01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse container' id='navbarColor01'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home
            </Link>
          </li>
        </ul>
        <ul className='navbar-nav mr-auto'>
          {authId ? (
            <li className='nav-item active'>
              <Link
                className='nav-link'
                to='/signin'
                onClick={() => dispatch(signOut())}
              >
                Logout
              </Link>
            </li>
          ) : (
            renderLink()
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
