import React from 'react';

import styles from '../../styles.js';

const Hyperloop = () => (
  <div>
    <h2 style={styles.h2}>Hyperloop</h2>
    <h3 style={styles.h3} title="too long; didn't read">tl;dr</h3>
    <p>
      University of Washington Hyperloop is competing to develop an ultra-fast electric{' '}
      train!
    </p>
    <p>
      My tasks, in brief:
      <ul>
        <li>developed fluid physics simulation software with NASA</li>
        <li>configured and tuned 3D turbulent airflow simulations</li>
        <li>prototyped chassis layouts using CAD and structural finite element analysis</li>
        <li>led AeroStructures team for a productive 8 months</li>
        <li>assisted in debugging internal UART communication network</li>
      </ul>
    </p>
  </div>
);

export default Hyperloop;
