[![npm version](https://badge.fury.io/js/react-a11y-video.svg)](http://badge.fury.io/js/react-a11y-video)
![](https://img.shields.io/badge/maintainer%20needed-!-red.svg)

# React A11y HTML5 Video Player

Accessible HTML5 Video player React component.

## WIP

This is WIP, check [Todo](#todo). More features will come soon.

## Installation

This component requires `webpack`. Check [`webpack.config.js`](./webpack.config.js) for build configuration.

`npm install react-a11y-video`

## Usage

Check [`examples/main.jsx`](https://github.com/roman01la/react-a11y-video/blob/master/example/main.jsx).

`import A11yPlayer from 'react-a11y-video';`

Basically pass video **source urls** and player **dimensions** as props to `A11yPlayer` component.

## Development

`npm install && npm start`

Go to [localhost:3000/example/](http://localhost:3000/example/)

## Todo

- Better keyboard accessibility in fullscreen mode
- Playback rate controls
- Subtitles support
- Invert colors and grayscale modes for both UI and video content
- Show transcript option
- Responsiveness
