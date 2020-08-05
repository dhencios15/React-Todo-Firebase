import { toast } from 'react-toastify';
const taskReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case 'ADD_TASK':
      toast.success('Task Added', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return state;
    case 'ADD_TASK_ERR':
      toast.error('Added Failed', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return state;
    case 'REMOVE_TASK':
      toast.warn('TASKS REMOVED', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return state;
    case 'REMOVE_TASK_ERR':
      toast.error('SOMETHING HAPPENED ON REMOVING A TASK', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return state;
    case 'DONE_TODO':
      toast.info('STATUS CHANGED', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return state;
    case 'DONE_TODO_ERR':
      toast.error('SOMETHING HAPPENED ON DONE A TASK', {
        position: 'bottom-center',
        autoClose: 2000,
      });
      return state;
    default:
      return state;
  }
};

export default taskReducer;
