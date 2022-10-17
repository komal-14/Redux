import './App.css';
import { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {

    dispatch({ type: 'increment' });

  };

  const decrementHandler = () => {

    dispatch({ type: 'increment' });


  };

  const toggleCounterHandler = () => { };

  return (
    <main>
      <div className="App">

        <h1>Redux Counter</h1>

        <div>{counter} </div>

        <button onClick={incrementHandler}> Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        {/* <button onClick={() => { dispatch({ type: "plusFive", payload: 5 }); }} style={{margin:10}}>plusFive</button>
      <button onClick={() => { dispatch({ type: "minusFive", payload: 5 }); }} style={{margin:10}}>minusFive</button>
  */}
        <div>
          <button onClick={toggleCounterHandler}>Toggle Counter </button>
        </div>
      </div>
    </main>
  );

};


export default App;
