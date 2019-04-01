import React, { Component } from 'react';

//IMPORT DATA
import { hairStyle } from '../../Data/defaultStyle';

class Hairstyle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hairStyle
        }
    }

    changeStyle = () => {
        this.setState({
            hairStyle: {
                width: "1000px",
                height: "1000px",
                position: "absolute",
                top: "-75%",
                right: "-57%",
                transform: "scale(0.15)",
                zIndex: "4"
            }
        })
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    render() {
        let imgSrc;
        let newStyle = this.state.hairStyle;
        if (typeof this.props.item !== "undefined") {
            imgSrc = this.props.item.imgSrc_png;
            let background = `url(${imgSrc})`;
            newStyle = { ...newStyle, background }
        } else {
            newStyle = hairStyle;
        }
        return (
            <div>
                <div className="hairstyle" style={newStyle}></div>
            </div>
        );
    }
}

export default Hairstyle;

