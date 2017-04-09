import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import htmlToText from 'html2plaintext';

const ItemList = ({ items }) => (
  <Paper zDepth={1}>
    <List style={{padding: 0}}>
      {items.map((item) => {
        const { Title, Content } = item;
        const secondaryContent = htmlToText(Content);
        return (
          <div key={Title}>
            <ListItem
              primaryText={Title}
              secondaryText={secondaryContent}
            />
            <Divider />
          </div>
        );
      })}
    </List>
  </Paper>
);

ItemList.defaultProps = {
  items: [],
};

const mapStateToProps = state => ({
  items: state.feedData || [],
});

export default connect(mapStateToProps)(ItemList);
