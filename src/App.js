import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeedData } from './actions/feed-data';
import './App.css';

const Button = ({ onClick }) => (
  <button onClick={onClick}>Fetch data</button>
);

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(getFeedData('1r-WPbF-cxZ3VHqHJGQNAC7O947ck5NGyl39ioErWqKc')),
  };
};

const WiredButton = connect(null, mapDispatchToProps)(Button);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <WiredButton />
        </div>
      </div>
    );
  }
}

export default App;
