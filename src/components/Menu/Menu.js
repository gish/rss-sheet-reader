import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { addFilteredSource, removeFilteredSource } from '../../actions/feed-filter';
import { showMenu, hideMenu } from '../../actions/menu';

const toggleVisibility = (show, hide) => open => {
  open ? show() : hide();
};

const toggleFiltered = (name, visible, add, remove) => () => {
  visible ? remove(name) : add(name);
};

const Menu = ({
    visible = false,
    feeds,
    show,
    hide,
    addToFilter,
    removeFromFilter
  }) => (
    <Drawer
      open={visible}
      docked={false}
      onRequestChange={toggleVisibility(show, hide)}
    >
      {feeds.map((feed) => (
        <MenuItem
          key={feed.name}
          primaryText={feed.name}
          checked={feed.visible}
          onTouchTap={toggleFiltered(feed.name, feed.visible, addToFilter, removeFromFilter)}
          insetChildren={!feed.visible}
        />
      ))}
    </Drawer>
);

const selectFeeds = (state) => {
  const feeds = state.feedData.feeds || [];
  const feedNames = feeds.map(feed => feed.title).sort();
  const filteredSources = state.feedFilter.filteredSources || [];

  return feedNames.map((name) => ({
    name,
    visible: filteredSources.indexOf(name) !== -1,
  }));
};

const mapStateToProps = state => ({
  feeds: selectFeeds(state),
  visible: state.menu.visible,
});

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hideMenu()),
  show: () => dispatch(showMenu()),
  addToFilter: (name) => dispatch(addFilteredSource(name)),
  removeFromFilter: (name) => dispatch(removeFilteredSource(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
