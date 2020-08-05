import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

import Task from './Task';

const Tasks = ({ tasks }) => {
  // Show message while tasks are loading
  if (!isLoaded(tasks)) {
    return <div>Loading...</div>;
  }

  // Show message if there are no tasks
  if (isEmpty(tasks)) {
    return <div>Tasks List Is Empty</div>;
  }

  return (
    <div className='mt-4'>
      <h2>Tasks List</h2>
      <table className='table table-hover table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Tasks</th>
            <th scope='col'>Added On</th>
            <th scope='col'>Status</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  const tasks = state.firestore.ordered.tasks;
  return {
    tasks,
    uid: state.firebase.auth.uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: 'tasks',
      where: ['authorId', '==', ownProps.uid],
      orderBy: ['date', 'desc'],
    },
  ])
)(Tasks);
