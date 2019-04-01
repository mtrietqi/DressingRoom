import React, { Component } from 'react';

import TabPane from './TabPane/TabPane';
import ButtonArray from '../../Data/ButtonArray';

class TabContent extends Component {
    constructor(props) {
        super(props);
        this.state={
            ButtonArray: ButtonArray
        }
    }
    
    render() {
        let elmTabPane= this.state.ButtonArray.map((buttonItem,index)=>{
            return <TabPane 
            buttonItem={buttonItem} 
            key={index}
            imgSrcTransferTabContent={this.props.imgSrcTransferStore}
            />
        })
        return (
            <div className="tab-content">
               {elmTabPane}
            </div>
        );
    }
}

export default TabContent;