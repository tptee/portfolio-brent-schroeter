import React from 'react';

import Home from './content/Home.jsx';
import Hyperloop from './content/stories/Hyperloop.jsx';
import Tune from './content/stories/Tune.jsx';
import ScholarshipJunkies from './content/stories/ScholarshipJunkies.jsx';

const content = {
  home: <Home />,
  stories: {
    hyperloop: <Hyperloop />,
    scholarshipjunkies: <ScholarshipJunkies />,
    tune: <Tune />,
  },
};

export default content;
