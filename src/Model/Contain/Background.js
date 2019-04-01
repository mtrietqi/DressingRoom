import React, { Component } from 'react';

import { backgroundStyle } from '../../Data/defaultStyle';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundStyle
        }
    }

    render() {
        let imgSrc;
        let newStyle = this.state.backgroundStyle;
        if (typeof this.props.item !== "undefined") {
            imgSrc = this.props.item.imgSrc_png;
            let backgroundImage = `url(${imgSrc})`;
            newStyle = {...newStyle, backgroundImage}
        } else {
            newStyle = backgroundStyle;
        }
        return (
            <div>
                <div id="background" className="background" style={newStyle}></div>
            </div>
        );
    }
}

export default Background;

