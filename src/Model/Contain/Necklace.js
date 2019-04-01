import React, { Component } from 'react';

//IMPORT DATA
import { handbagStyle } from '../../Data/defaultStyle';

class Necklace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handbagStyle //CSS của Handbag và Necklace giống nhau
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
            newStyle = {...newStyle, background}
        } else {
            newStyle = handbagStyle;
        }
        return (
            <div>
                <div className="handbag" style={newStyle}></div>
            </div>
        );
    }
}

export default Necklace;

