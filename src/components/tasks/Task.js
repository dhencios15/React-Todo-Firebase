import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { removeTask, doneTodo } from '../../actions/taskActions';
import Check from './Check';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <>
      <tr className='table-active'>
        <th scope='row'>{task.task}</th>
        <td>{moment(task.date.toDate()).calendar()}</td>
        <td>
          <Check
            status={task.status}
            onClick={() => dispatch(doneTodo(task))}
          />
        </td>
        <td>
          <span
            className='material-icons text-danger'
            style={{ cursor: 'pointer' }}
            onClick={() => dispatch(removeTask(task))}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

export default Task;
