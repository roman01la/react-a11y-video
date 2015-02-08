import React from 'react';

import PlayPause from './play-pause';
import Navigate from './navigate';

let PlaybackControls = React.createClass({

    getInitialState() {

        return {

            playing: false
        };
    },

    _onPlayPause() {

        this.setState({ playing: !this.state.playing }, () => {

            this.props[this.state.playing ? 'onPlay' : 'onPause']();
        });
    },

    _onRewind() {

        this.props.onNavigate(false);
    },

    _onFastForward() {

        this.props.onNavigate(true);
    },

    render() {

        return (

            <div className='playback-controls'>

                <Navigate onNavigate={this.props.onRepeat}>

                    Repeat
                </Navigate>

                <Navigate onNavigate={this._onRewind}>

                    Back
                </Navigate>

                <PlayPause playing={this.state.playing}
                           onPlayPause={this._onPlayPause} />

                <Navigate onNavigate={this._onFastForward}>

                    Forward
                </Navigate>

            </div>
        );
    }
});

export default PlaybackControls;
