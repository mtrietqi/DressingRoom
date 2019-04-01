import React, { Component } from 'react';

import Body from './Contain/Body'
import Feet from './Contain/Feet'
import Bikinibottom from './Contain/Bikinibottom'
import Bikinitop from './Contain/Bikinitop'
import Model from './Contain/Model';
import Handbag from './Contain/Handbag'
import Necklace from './Contain/Necklace'
import Hairstyle from './Contain/Hairstyle'
import Background from './Contain/Background'
class Contain extends Component {
  render() {
    const styles = {
      containClass: {
        width: "460px",
        height: "590px",
        margin: "0 auto",
        position: "relative"
      }
    }
    
    let elmBikinitop = <Bikinitop />
    let elmBikinibottom = <Bikinibottom />
    let elmFeet = <Feet />
    let elmHandbag = <Handbag />
    let elmNecklace = <Necklace />
    let elmhairstyle = <Hairstyle />
    let elmBackground = <Background />

    for (let item of this.props.chosenItems) {
      if (item.type === "topclothes") {
        elmBikinitop = <Bikinitop item={item} />
      }
      if (item.type === "botclothes") {
        elmBikinibottom = <Bikinibottom item={item} />
      }
      if (item.type === "shoes") {
        elmFeet = <Feet item={item} />
      }
      if(item.type === "handbags"){
        elmHandbag = <Handbag item={item} />
      }
      if(item.type === "necklaces"){
        elmNecklace = <Necklace item={item} />
      }
      if(item.type === "hairstyle"){
        elmhairstyle = <Hairstyle item={item} />
      }
      if(item.type === "background"){
        elmBackground = <Background item={item} />
      }
    }
    return (
      <div className="contain" style={styles.containClass}>
        <Body />
        <Model />
        {elmBikinitop}
        {elmBikinibottom}
        {elmFeet}
        {elmHandbag}
        {elmNecklace}
        {elmhairstyle}
        {elmBackground}
      </div>
    );
  }
}

export default Contain;