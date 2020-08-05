import { toast } from 'react-toastify';

const authReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'SIGN_IN':
    case 'SIGN_UP':
      toast.success('SIGN IN SUCCESS', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return state;
    case 'SIGN_IN_ERR':
      toast.error('SIGN IN FAILED', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return state;
    case 'SIGN_OUT':
    case 'SIGN_UP_ERR':
      toast.warn('SIGN OUT ...', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return state;
    default:
      return state;
  }
};

export default authReducer;
