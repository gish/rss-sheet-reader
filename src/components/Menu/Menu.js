import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { showMenu, hideMenu } from '../../actions/menu';

const toggleVisibility = (show, hide) => open => {
  open ? show() : hide();
};

const Menu = ({ visible = false, feedNames, show, hide }) => (
    <Drawer
      open={visible}
      docked={false}
      onRequestChange={toggleVisibility(show, hide)}
    >
      {feedNames.map((name) => (<MenuItem key={name} primaryText={name} />))}
    </Drawer>
);

const selectFeedNames = (state) => {
  const items = state.feedData.items || [];
  return items.reduce((feedNames, item) => {
    const { Feed } = item;
    return feedNames.indexOf(Feed) === -1 ? [...feedNames, Feed] : feedNames;
  }, [])
  .sort();
};

const mapStateToProps = state => ({
  feedNames: selectFeedNames(state),
  visible: state.menu.visible,
});

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hideMenu()),
  show: () => dispatch(showMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
