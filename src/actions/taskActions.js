export const addTask = (task) => (dispatch, getState, { getFirebase }) => {
  const firestore = getFirebase().firestore();
  const authorId = getState().firebase.auth.uid;

  firestore
    .collection('tasks')
    .add({
      ...task,
      authorId,
      date: new Date(),
    })
    .then(() => dispatch({ type: 'ADD_TASK', payload: task }))
    .catch((err) => dispatch({ type: 'ADD_TASK_ERR', err }));
};

export const removeTask = (task) => (dispatch, getState, { getFirebase }) => {
  const firestore = getFirebase().firestore();

  firestore
    .collection('tasks')
    .doc(task.id)
    .delete()
    .then(() => {
      dispatch({ type: 'REMOVE_TASK' });
    })
    .catch((err) => {
      dispatch({ type: 'REMOVE_TASK_ERR', err });
    });
};

export const doneTodo = (task) => (dispatch, getState, { getFirebase }) => {
  const firestore = getFirebase().firestore();

  firestore
    .collection('tasks')
    .doc(task.id)
    .set(
      {
        ...task,
        status: !task.status,
      },
      { merge: true }
    )
    .then(() => {
      dispatch({ type: 'DONE_TODO', task });
    })
    .catch((err) => dispatch({ type: 'DONE_TODO_ERR', err }));
};
