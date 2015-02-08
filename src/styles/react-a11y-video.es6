let styles = {

    $colorCtrl: '#242424',
    $colorCtrlInteract: '#575757',
    $colorWhite: '#fafafa',

    controlPanel() {

        return {

            display: 'flex'
        };
    },

    playbackControls() {

        return {

            display: 'flex'
        };
    },

    btn() {

        return {
            margin: 2,
            padding: '4px 8px',
            borderRadius: 2,
            font: 'normal 12px sans-serif',
            lineHeight: '1rem',
            border: 'none',
            background: this.$colorCtrl,
            color: this.$colorWhite
        };
    },

    playbackTime() {

        return {

            margin: 2,
            padding: '4px 8px',
            borderRadius: 2,
            font: 'normal 12px sans-serif',
            lineHeight: '1rem',
            border: '1px solid ' + this.$colorCtrl,
            background: this.$colorWhite
        };
    }
};

export default styles;
