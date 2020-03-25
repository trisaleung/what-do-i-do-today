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

  handleClickQ1 = onClick => {
    this.refs.q2.scrollIntoView({behavior: "smooth"});
  };

  handleClickQ2 = onClick => {
    this.refs.q3.scrollIntoView({behavior: "smooth"});
  };

  handleClickQ3 = onClick => {
    this.refs.q4.scrollIntoView({behavior: "smooth"});
  };

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    alert("TESTING: submitted!");
  };

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
              <input type="radio" name="question-one-a" value="indoors" className="inputRadio"
                 checked={this.state.selectedOption === "indoors"}
                 onChange={this.handleOptionChange}
              />
              indoors
            </label>
            <br /><br />
            <label className="q1Input">
              <input type="radio" name="question-one-b" value="outdoors" className="inputRadio"
                checked={this.state.selectedOption === "outdoors"}
                onChange={this.handleOptionChange}
              />
              outdoors
            </label>
            <br /><br />
            <button className="next-button" type="button" onClick={this.handleClickQ1}>
               next
            </button>

          <div className="break" ref="q2"></div>

          <p className="question">how tired are you?</p>
            <button className="next-button" type="button" onClick={this.handleClickQ2}>
               next
            </button>

          <div className="break" ref="q3"></div>

          <p className="question">what time is it?</p>
            <button className="next-button" type="button" onClick={this.handleClickQ3}>
               next
            </button>


          <div className="break" ref="q4"></div>

          <p className="question">some hobbies are:</p>
        </form>
        <p className="result">result!!</p>
      </div>
    );
  }
}

export default App;
