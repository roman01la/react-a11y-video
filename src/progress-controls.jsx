import React from 'react';

let ProgressControls = React.createClass({

    getInitialState() {

        return {

            progress: 0
        };
    },

    componentWillReceiveProps (nextProps) {

        this.props.api !== nextProps.api &&

            nextProps.api
                .addEventListener('timeupdate', this._onTimeUpdate, false);
    },

    _onTimeUpdate() {

        let api = this.props.api,
            progress = (100 / api.duration) * api.currentTime;

        this.setState({ progress });
    },

    _seek (event) {

        let api = this.props.api,
            pos = (event.pageX - event.target.offsetLeft) / event.target.offsetWidth;

        api.currentTime = pos * api.duration;
    },

    render() {

        return (

            <div className='progress-controls'>

                <progress max='100'
                          value={this.state.progress}
                          onClick={this._seek} />

            </div>
        );
    }
});

export default ProgressControls;
