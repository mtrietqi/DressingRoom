import React, { Component } from 'react';

class Feet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feetStyle: {
                width: "500px",
                height: "1000px",
                background: 'url("./images/shoes/shoes1.png")',
                position: "absolute",
                bottom: "-37%",
                right: "-3.5%",
                transform: "scale(0.5)",
                zIndex: "1"
            }
        }
    }
    changeStyle = () => {
        this.setState({
            width: "500px",
            height: "1000px",
            position: "absolute",
            bottom: "-37%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "1"
        })
    }
    componentWillReceiveProps() {
        this.changeStyle();
    }

    render() {
        let imgSrc;
        let newStyle = this.state.feetStyle;
        if (typeof this.props.item !== "undefined") {
            imgSrc = this.props.item.imgSrc_png;
            let background = `url(${imgSrc})`
            newStyle = { ...newStyle, background }
        }
        return (
            <div>
                <div className="feet" style={newStyle}></div>
            </div>
        );
    }
}

export default Feet;