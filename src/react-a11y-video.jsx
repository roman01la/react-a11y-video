import React from 'react';

import Viewport from './viewport';
import ControlPanel from './control-panel';

let A11yPlayer = React.createClass({

    getInitialState() {

        return {

            api: undefined
        };
    },

    componentDidMount() {

        this._initApi();
    },

    _initApi() {

        this.setState({ api: this.refs.viewport.refs.api.getDOMNode() });
    },

    render() {

        return (

            <div className='react-a11y-video'
                 style={{width: this.props.width, height: this.props.height}}>

                <Viewport ref='viewport'
                          sources={this.props.sources}
                          width={this.props.width}
                          height={this.props.height} />

                <ControlPanel api={this.state.api} />

            </div>
        );
    }
});

export default A11yPlayer;
