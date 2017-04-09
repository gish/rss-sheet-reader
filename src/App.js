import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeedData } from './actions/feed-data';
import AppBar from 'material-ui/AppBar';
import { showMenu } from './actions/menu';
import ItemList from './components/ItemList/ItemList';
import Menu from './components/Menu/Menu';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getFeedData();
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <AppBar
          className="AppBar"
          title="RSS Sheet Reader"
          onLeftIconButtonTouchTap={this.props.showMenu}/>
        <ItemList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getFeedData: () => dispatch(getFeedData('1r-WPbF-cxZ3VHqHJGQNAC7O947ck5NGyl39ioErWqKc')),
  showMenu: () => dispatch(showMenu()),
});

export default connect(null, mapDispatchToProps)(App);
