import React from 'react';

let PlaybackTime = React.createClass({

    getInitialState() {

        return {

            currTime: '00:00',
            duration: 0
        };
    },

    componentWillReceiveProps (nextProps) {

        if (this.props.api !== nextProps.api) {

            nextProps.api
                .addEventListener('timeupdate', this._onTimeUpdate, false);

            let check = setInterval(() => {

                if (nextProps.api.duration > 0) {

                    this.setState({ duration: nextProps.api.duration });
                    clearInterval(check);
                }

            }, 1000);
        }
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

            <div className='playback-time'
                 tabIndex='0'
                 aria-label={'Video duration is ' + Math.round(this.state.duration) + ' seconds.'}>

                {this.state.currTime}
            </div>
        );
    }
});

export default PlaybackTime;
