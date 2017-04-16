import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFeeds } from './actions/feed-data';
import AppBar from 'material-ui/AppBar';
import { showMenu } from './actions/menu';
import ItemList from './components/ItemList/ItemList';
import Menu from './components/Menu/Menu';
import './App.css';

const feeds = [
  '1FLU5BSSzWRVEHJG8JQVnkrJ0Urway4_XviG8TcxU-ew', // T-nation
  '1PMae3cRFUQeIVTaxgqwjEBLudRSDxMbysMTwjG3rp1o', // Techcrunch
];

class App extends Component {
  componentDidMount() {
    this.props.getFeeds(feeds);
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <AppBar
          className="AppBar"
          title="RSS Sheet Reader"
          onLeftIconButtonTouchTap={this.props.showMenu}
        />
        <ItemList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getFeeds: (keys) => dispatch(getFeeds(keys)),
  showMenu: () => dispatch(showMenu()),
});

export default connect(null, mapDispatchToProps)(App);
