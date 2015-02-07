import React from 'react';

import VideoSource from './video-source';

let Viewport = React.createClass({

    render() {

        let sources = this.props.sources
                .map((src, index) => <VideoSource key={index} source={src} />);

        return (

            <video ref='api'
                   width={this.props.width}
                   height={this.props.height}
                   className='viewport'>

                {sources}
            </video>
        );
    }
});

export default Viewport;
