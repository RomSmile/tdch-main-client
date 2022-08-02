const types ={
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  INCREMENT_ASYNC: 'INCREMENT_ASYNC',
}

const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});

export const incrementAsync = error => ({
  type: types.INCREMENT_ASYNC,
});

export default increment;