import React from 'react';
import { useSelector } from 'react-redux';

import AddTask from '../tasks/AddTesk';
import Tasks from '../tasks/Tasks';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
  const authId = useSelector((state) => state.firebase.auth.uid);
  if (!authId) return <Redirect to='/signin' />;
  return (
    <div className='container'>
      <AddTask />
      <Tasks />
    </div>
  );
};

export default Dashboard;
