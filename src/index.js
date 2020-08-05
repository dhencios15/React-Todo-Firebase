import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import {
  getFirebase,
  ReactReduxFirebaseProvider,
  isLoaded,
} from 'react-redux-firebase';
import { createStore, applyMiddleware } from 'redux';
import { createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';

import 'bootstrap';
import 'bootswatch/dist/darkly/bootstrap.min.css';

import firebase from './config/firebaseConfig';
import rootReducer from './reducers';
import App from './App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
);

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthisLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) {
    return (
      <div className='text-center mt-5'>
        <div
          className='spinner-grow text-primary'
          role='status'
          style={{ width: '7rem', height: '7rem' }}
        >
          <span className='sr-only'>Loading....</span>
        </div>
      </div>
    );
  }
  return children;
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthisLoaded>
        <App />
      </AuthisLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
