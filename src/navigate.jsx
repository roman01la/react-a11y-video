import React from 'react';

import Button from './button';

let Navigate = React.createClass({

    render() {

        return (

            <div className='navigate'>

                <Button onInteract={this.props.onNavigate}>

                    {this.props.children}
                </Button>

            </div>
        );
    }
});

export default Navigate;
