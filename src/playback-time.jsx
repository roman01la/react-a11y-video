import React from 'react';

let PlaybackTime = React.createClass({

    getInitialState() {

        return {

            currTime: '00:00'
        };
    },

    componentWillReceiveProps (nextProps) {

        this.props.api !== nextProps.api &&

            nextProps.api
                .addEventListener('timeupdate', this._onTimeUpdate, false);
    },

    _onTimeUpdate() {

        let api = this.props.api;

        let mins = this._formatTime(parseInt((api.currentTime / 60) % 60)),
            secs = this._formatTime(parseInt(api.currentTime % 60));

        this.setState({ currTime: mins + ':' + secs});
    },

    _formatTime (time) {

        return ('0' + time).slice(-2);
    },

    render() {

        return (

            <div className='playback-time'>

                {this.state.currTime}
            </div>
        );
    }
});

export default PlaybackTime;
