import './App.css';
import {useState} from 'react';

const Person = (props) =>  {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age} </h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <button>-</button>
      <h1>0</h1>
      <button>+</button>
    </div>
  );
}
export default App;