import React from 'react';

import Button from './button';

let FullscreenControls = React.createClass({

    _fullscreen() {

        this.props.api.webkitRequestFullscreen();
    },

    render() {

        return (

            <div className='fullscreen-controls'>

                <Button onInteract={this._fullscreen}>

                    Go fullscreen
                </Button>

            </div>
        );
    }
});

export default FullscreenControls;
