import React, { Component } from 'react';


class Handbag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handbagStyle: {
                width: "500px",
                height: "1000px",
                position: "absolute",
                bottom: "-40.5%",
                right: "-3.5%",
                transform: "scale(0.5)",
                zIndex: "4"
            }
        }
    }

    changeStyle = () => {
        this.setState({
            handbagStyle: {
                width: "500px",
                height: "1000px",
                position: "absolute",
                bottom: "-40%",
                right: "-3.5%",
                transform: "scale(0.5)",
                zIndex: "4"
            }
        })
    }

    componentWillReceiveProps() {
        this.changeStyle();
    }

    render() {
        let imgSrc;
        let newStyle = this.state.handbagStyle;
        if (typeof this.props.item !== "undefined") {
            imgSrc = this.props.item.imgSrc_png;
            let background = `url(${imgSrc})`;
            newStyle = { ...newStyle, background }
        }
        return (
            <div>
                <div className="handbag" style={newStyle}></div>
            </div>
        );
    }
}

export default Handbag;

