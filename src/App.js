import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './App.css';

class Decrement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.startNumber
    }
    this.updateNumber = this.updateNumber.bind(this);
  }

  updateNumber(){
    if(this.state.number !== 0){
      console.log("updating number to ", this.state.number-1);
      this.setState((state, props) => {
      return {number: state.number-1}
      });
    } else {
      console.log("not updated");
      alert("Cannot be less than zero");
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.updateNumber}>Decrement</button>
      </div>)
  }
}

Decrement.propTypes = {
  startNumber: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      <Decrement startNumber={10}/>
    </div>
  );
}

export default App;
