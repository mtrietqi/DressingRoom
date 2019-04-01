import React, { Component } from 'react';
import { botStyle } from '../../Data/defaultStyle';
class Bikinibottom extends Component {
    constructor(props) {
        super(props);
        this.state={
            bikiniBottomStyle: botStyle
        }
    }
    
    changeStyle=()=>{
        this.setState({
            bikiniBottomStyle:{
                width: "500px",
                height: "1000px",
                position: "absolute",
                top: "-30%",
                left: "-5%",
                zIndex: "2",
                transform: "scale(0.5)"
            }
        })
    }
    componentWillReceiveProps(){
        this.changeStyle();
    }
    render() {
        let imgSrc;
        let newStyle=this.state.bikiniBottomStyle;
        if(typeof this.props.item!=="undefined"){
            imgSrc=this.props.item.imgSrc_png;
            let background=`url(${imgSrc})`
            newStyle={...newStyle, background}
        }else{
            newStyle=botStyle
        }
        return (
            <div className="Bikinibottom" style={newStyle}>
                
            </div>
        );
    }
}

export default Bikinibottom;