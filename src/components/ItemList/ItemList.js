import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import htmlToText from 'html2plaintext';
import './ItemList.css'

const ItemList = ({ items, isRequesting }) => (
  <Paper zDepth={1} className="ItemListWrapper">
    {isRequesting ? 
      <div className="RefreshWrapper">
        <RefreshIndicator
          left={0}
          top={0}
          size={40}
          status="loading"
          style={{
            display: 'inline-block',
            position: 'relative',
          }}
        />
      </div>
      : null
    }
    <List style={{padding: 0}}>
      {items.reverse().map((item) => {
        const { Title, Content, Url } = item;
        const secondaryContent = htmlToText(Content);
        return (
          <div key={Title}>
            <ListItem
              primaryText={Title}
              secondaryText={secondaryContent}
              onTouchTap={() => window.location = Url}
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
  isRequesting: false,
};

const filterItemsBySource = (state) => {
  const items = state.feedData.items || [];
  const filteredSources = state.feedFilter.filteredSources || [];
  if (filteredSources.length === 0) {
    return [...items];
  }
  return items.filter((item) => filteredSources.indexOf(item.Feed) !== -1);
};

const mapStateToProps = state => ({
  isRequesting: state.feedData.isRequesting,
  items: filterItemsBySource(state),
});

export default connect(mapStateToProps)(ItemList);
