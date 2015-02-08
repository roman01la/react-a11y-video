import React from 'react';

let Button = React.createClass({

    render() {

        return (

            <button className='btn'
                    onClick={this.props.onInteract}>

                {this.props.children}
            </button>
        );
    }
});

export default Button;
