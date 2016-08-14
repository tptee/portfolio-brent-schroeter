import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import {
  createStoreWithRouter,
  provideRouter,
  initializeCurrentLocation,
  Fragment,
} from 'redux-little-router';

import Navigation from './Navigation.jsx';
import styles from './styles.js';
import content from './content.jsx';

const reducer = state => state;

const storyTitles = {
  hyperloop: 'Hyperloop',
  scholarshipjunkies: 'Scholarship Junkies',
  tune: 'TUNE',
};

const routes = {
  '/': {
    title: 'Portfolio \u2014 Brent Schroeter',
  },
  '/stories/:storyName': {
    title: '<%= result.storyTitles[params.storyName] %> \u2014 Brent Schroeter',
    storyTitles,
  },
};

const store = createStore(
  reducer,
  {},
  createStoreWithRouter({
    routes,
    pathname: location.pathname,
    basename: '',
  })
);

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

const App = props => {
  const { storyName } = props.router.params;
  return (
    <Provider store={store}>
      <div style={styles.app}>
        <Navigation />
        <div style={styles.contentBody}>
          <Fragment forRoute="/">
            {content.home}
          </Fragment>
          <Fragment forRoute="/stories/:storyName">
            {storyName && content.stories[storyName]}
          </Fragment>
        </div>
      </div>
    </Provider>
  );
};

App.propTypes = {
  router: PropTypes.object,
};

const ComposedApp = compose(
  provideRouter({ store }),
  connect(state => ({
    router: state.router,
  }))
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ComposedApp />
  </Provider>,
  document.getElementById('mountNode')
);
