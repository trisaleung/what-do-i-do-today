import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wholePage">

    <style>
        @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
    </style>
    <div className="logo">
      <div className="logoTitle">nudge</div>
    </div>

      <h1 className="mainTitle">what do i do today?</h1>

      <p>button goes here to scroll down</p>

      <p className="question">do you want to stay indoors or outdoors?</p>
        {/* <form>
          <input type="radio">indoors</input>
          <input type="radio">outdoors</input>
        </form> */}
      <p className="question">how tired are you?</p>
      <p className="question">what time is it?</p>
      <p className="question">some hobbies are:</p>

      <p className="result">result!!</p>
    </div>
  );
}

export default App;
