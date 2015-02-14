import React from 'react';

import PlaybackControls from './playback-controls';
import VolumeControls from './volume-controls';
import PlaybackTime from './playback-time';
import FullscreenControls from './fullscreen-controls';
import ProgressControls from './progress-controls';

let ControlPanel = React.createClass({

    getDefaultProps() {

        return {

            api: undefined,
            navStep: 10
        };
    },

    _play() {

        this.props.api.play();
    },

    _pause() {

        this.props.api.pause();
    },

    _navigate (dir) {

        let currTime = this.props.api.currentTime,
            navStep = this.props.navStep;

        this.props.api.currentTime = currTime + (dir ? navStep : (-navStep));
    },

    _repeat() {

        this.props.api.currentTime = 0;
    },

    render() {

        return (

            <div className='control-panel'>

                <div className='row top'>
                    <PlaybackControls onPlay={this._play}
                                      onPause={this._pause}
                                      onNavigate={this._navigate}
                                      onRepeat={this._repeat} />

                    <VolumeControls api={this.props.api} />
                    <PlaybackTime api={this.props.api} />
                </div>

                <div className='row bottom'>
                    <ProgressControls api={this.props.api} />
                    <FullscreenControls api={this.props.api} />
                </div>

            </div>
        );
    }
});

export default ControlPanel;
