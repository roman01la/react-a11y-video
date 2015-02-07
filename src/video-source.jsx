import React from 'react';

let VideoSource = React.createClass({

    render() {

        return <source src={this.props.source} />;
    }
});

export default VideoSource;
