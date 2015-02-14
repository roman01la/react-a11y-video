import React from 'react';

let VolumeControls = React.createClass({

    getInitialState() {

        return {

            level: 5
        }
    },

    componentWillReceiveProps (nextProps) {

        this.props.api !== nextProps.api &&

            this._setVolume(this.state.level);
    },

    _onChange ({ target: { value }}) {

        this._setVolume(value);
    },

    _setVolume (level) {

        this.setState({ level }, () => {

            this.props.api.volume = level / 10;
        });
    },

    render() {

        return (

            <div className='volume-controls'>

                <input type='range'
                       min='0'
                       max='10'
                       aria-label='Volume level'
                       value={this.state.level}
                       onChange={this._onChange} />

            </div>
        );
    }
});

export default VolumeControls;
