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
        const { title, content, url } = item;
        const secondaryContent = htmlToText(content);
        return (
          <div key={title}>
            <ListItem
              primaryText={title}
              secondaryText={secondaryContent}
              onTouchTap={() => window.location = url}
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

const joinFeedItems = feeds =>
  feeds.map(feed => feed.items)
      .reduce((items, feedItems) => items.concat(feedItems), [])

const selectItemsByFilteredSource = (state) => {
  const feeds = state.feedData.feeds;
  const filteredSources = state.feedFilter.filteredSources;
  const filteredFeeds = feeds.filter(feed => filteredSources.includes(feed.title));

  if (filteredSources.length === 0) {
    return joinFeedItems(feeds);
  }

  return joinFeedItems(filteredFeeds);
};

const sortItemsByDate = (items) => {
  const getTime = item => (new Date(item.date)).getTime();
  const compareTimestamp = (a, b) => getTime(a) - getTime(b);
  return items.sort(compareTimestamp);
};

const mapStateToProps = state => ({
  isRequesting: state.feedData.isRequesting,
  items: sortItemsByDate(selectItemsByFilteredSource(state)),
});

export default connect(mapStateToProps)(ItemList);
