import React, { PropTypes } from 'react';
import { Link } from 'redux-little-router';

import styles from './styles.js';

const links = [
  {
    text: 'Hi, World',
    href: '/',
  },
  {
    text: 'Hyperloop',
    href: '/stories/hyperloop',
  },
  {
    text: 'TUNE',
    href: '/stories/tune',
  },
  {
    text: 'SJ',
    href: '/stories/scholarshipjunkies',
  },
];

const Navigation = (props, context) => {
  const { store } = context.router;
  const { router } = store.getState();
  return (
    <div style={styles.navigation.container}>
      <div style={styles.navigation.edge} />
      {links.map(item => ([
        <div style={styles.navigation.spacer} />,
        <Link
          href={item.href}
          style={
            router.pathname === item.href ?
              styles.navigation.item.active :
              styles.navigation.item.normal
          }
        >
          {item.text}
        </Link>,
        <div style={styles.navigation.spacer} />,
      ]))}
      <div style={styles.navigation.edge} />
    </div>
  );
};

Navigation.contextTypes = {
  router: PropTypes.object,
};

export default Navigation;
