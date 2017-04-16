import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import reducer from './reducers';
import './index.css';

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const initialState = {
  feedData: {
    isRequesting: false,
    feeds: [],
  },
  feedFilter: {
    filteredSources: [],
  },
  menu: { visible: false },
};

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
		<MuiThemeProvider>
			<App />
		</MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
