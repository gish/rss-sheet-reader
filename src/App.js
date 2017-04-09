import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeedData } from './actions/feed-data';
import ItemList from './components/ItemList';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFeedData();
  }

  render() {
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getFeedData: () => dispatch(getFeedData('1r-WPbF-cxZ3VHqHJGQNAC7O947ck5NGyl39ioErWqKc')),
});

export default connect(null, mapDispatchToProps)(App);
