import React from 'react';

import styles from './styles/react-a11y-video';

let Button = React.createClass({

    render() {

        return (

            <button className='btn'
                    onClick={this.props.onInteract}
                    style={styles.btn()}>

                {this.props.children}
            </button>
        );
    }
});

export default Button;
