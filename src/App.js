import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption : ""
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    alert("TESTING: submitted!");
  }

  render() {
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

        <form onSubmit={this.handleSubmit} className="form">
          <p className="question">do you want to stay indoors or outdoors?</p>
            <label className="q1Input">
              <input type="radio" name="question-one" value="indoors" className="inputRadio"
                 checked={this.state.selectedOption === "indoors"}
                 onChange={this.handleOptionChange}
              />
              indoors
            </label>
            <br /><br />
            <label className="q1Input">
              <input type="radio" name="question-one" value="outdoors" className="inputRadio"
                checked={this.state.selectedOption === "outdoors"}
                onChange={this.handleOptionChange}
              />
              outdoors
            </label>
            <br /><br />
            <button className="btn btn-primary mt-2" type="submit">
               Save
            </button>
          </form>
          <p className="question">how tired are you?</p>
          <p className="question">what time is it?</p>
          <p className="question">some hobbies are:</p>

        <p className="result">result!!</p>
      </div>
    );
  }
}

export default App;
