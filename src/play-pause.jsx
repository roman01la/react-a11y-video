import React from 'react';

import Button from './button';

let PlayPause = React.createClass({

    render() {

        return (

            <div className='play-pause'>

                <Button onInteract={this.props.onPlayPause}>

                    {this.props.playing ? 'Pause' : 'Play'}
                </Button>

            </div>
        );
    }
});

export default PlayPause;
