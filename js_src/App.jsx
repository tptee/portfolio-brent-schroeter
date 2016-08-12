import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {
  createStoreWithRouter,
  provideRouter,
  initializeCurrentLocation,
  Fragment,
} from 'redux-little-router';
import ejs from 'ejs';

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
  createStoreWithRouter({ routes, pathname: location.pathname, basename: '' })
);

const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

const updateTitle = () => {
  const { router } = store.getState();
  const { title } = router.result;
  document.title = ejs.render(title, {
    params: router.params,
    result: router.result,
  }, { escape: false });
};

class App extends React.Component {
  constructor(...args) {
    super(...args);
    updateTitle();
    store.subscribe(() => {
      updateTitle();
      this.forceUpdate();
    });
  }

  render() {
    const { storyName } = store.getState().router.params;
    return (
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
    );
  }
}

const AppWithRouter = provideRouter({ store })(App);

ReactDOM.render(<AppWithRouter />, document.getElementById('mountNode'));
