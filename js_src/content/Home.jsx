import React from 'react';

import Typewriter from '../Typewriter.jsx';
import styles from '../styles.js';

const TAGLINE = 'I strive for a healthier future through automation, data analytics, and ' +
  'engineering.';

const Home = () => (
  <div>
    <h1 style={styles.h1}>
      <Typewriter startText="Hi, I'm Brent Schroeter " goalText="Hi, I'm Brent Schroeter " />
    </h1>
    {TAGLINE}
  </div>
);

export default Home;
