import React from 'react';

import A11yPlayer from '../src/react-a11y-video';

require('../src/styles/react-a11y-video');

let sources = [
    'http://www.html5rocks.com/en/tutorials/video/basics/devstories.webm'
];

let props = {

    sources,
    width: 400
};

React.render(<A11yPlayer {...props} />, document.body);
