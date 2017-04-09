import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import { showMenu, hideMenu } from '../../actions/menu';

const toggleVisibility = (show, hide) => open => {
  open ? show() : hide();
};

const Menu = ({ visible = false, show, hide }) => {
  return (
  <Drawer
    open={visible}
    docked={false}
    onRequestChange={toggleVisibility(show, hide)}
  />
)};

const mapStateToProps = state => ({
  visible: state.menu.visible,
});

const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hideMenu()),
  show: () => dispatch(showMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
