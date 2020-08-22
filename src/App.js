import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const studentsName = ['Roky Das', 'Riya Das', 'Mintu Das', 'Zinu Das'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Students name='Roky Das'></Students> */}
        {
          studentsName.map(student => <Students name={student}></Students>)
        }
        <MovieCounter></MovieCounter>
      </header>
    </div>
  );
}

function Students(props){
  return (
    <div>
      <h3>I am a student.</h3>
      <h5>My name is: {props.name}</h5>
    </div>
  )
}

function MovieCounter(props){
  // useState returns an array which contains a variable and a function. 
  const [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const del = () => setCount(count - 1);
  return (
    <div>
      <button onClick={add}>Add Movie</button>
      <button onClick={del}>Delete Movie</button>
      <h3>Number of movies: {count}</h3>
    </div>
  )
}

export default App;
