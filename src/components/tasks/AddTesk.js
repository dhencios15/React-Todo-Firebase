import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import { addTask } from '../../actions/taskActions';

const schema = yup.object().shape({
  task: yup.string().required('Task is required'),
});

const AddTask = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data, e) => {
    const newTask = {
      task: data.task,
      status: false,
    };
    dispatch(addTask(newTask));
    e.target.reset();
  };

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col col-md-6 mx-auto'>
          <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
            <legend>
              <h3>Add Task</h3>
            </legend>
            <div className='form-group'>
              <label htmlFor='task'>Enter a Task</label>
              <input
                name='task'
                type='tastextk'
                className={`form-control ${errors.task ? 'is-invalid' : ''}`}
                id='task'
                ref={register}
              />
              {errors.task && (
                <div className='invalid-feedback'>{errors.task.message}</div>
              )}
            </div>
            <button type='submit' className='btn btn-primary'>
              Add a task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
