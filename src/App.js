import React from 'react';
import { useReducer } from 'react';
const obj = { count: 1, fname: 'jp', toogle: true };
const reducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return { ...obj, count: state.count + 1 };
    case 'DECREMENT':
      return { ...obj, count: state.count - 1 };

    case 'CHANGE':
      return { ...obj, fname: state.fname + 'cv' };
    case 'TOGGLE':
      return { ...obj, toogle: !state.toogle };
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, obj);
  const incrementCount = () => dispatch('INCREMENT');
  const decrementCount = () => dispatch('DECREMENT');
  const changename = () => dispatch('CHANGE');
  const toggleValue = () => dispatch('TOGGLE');

  return (
    <>
      <p> Count : {state.count}</p>
      <p> named: {state.fname} </p>
      <p> toogle: {String(state.toogle)} </p>
      <button onClick={incrementCount}>Increment </button>
      <button onClick={decrementCount}>Decrement </button>
      <button onClick={changename}>changename </button>
      <button onClick={toggleValue}>toggle </button>
    </>
  );
}
