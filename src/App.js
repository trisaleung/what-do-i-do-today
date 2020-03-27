import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Slider from 'react-rangeslider'
import './App.css';

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption : "",
      volume: 0
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleClickStart = () => {
    this.refs.q1.scrollIntoView({behavior: "smooth"});
  };

  handleClickQ1 = () => {
    this.refs.q2.scrollIntoView({behavior: "smooth"});
  };

  handleClickQ2 = () => {
    this.refs.q3.scrollIntoView({behavior: "smooth"});
  };

  handleClickQ3 = () => {
    this.refs.q4.scrollIntoView({behavior: "smooth"});
  };

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }

  handleSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    alert("TESTING: submitted!");
  };

  render() {
    var { volume } = this.state

    return (
      <div className="wholePage">

      <style>
          @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
      </style>
      <div className="logo">
        <div className="logoTitle">nudge</div>
      </div>

        <h1 className="mainTitle"><ReactTypingEffect speed="100" text="what do i do today?" /></h1>

        <button className="next-button" type="button" onClick={this.handleClickStart}>
            start
        </button>

        <div className="break" ref="q1"></div>

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
            <Slider
              value={volume}
              orientation="vertical"
              onChange={this.handleOnChange}
            />

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
