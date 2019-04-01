import React, { Component } from 'react';

import TabContent from './TabContent/TabContent'
class Store extends Component {
    render() {
        return (
            <div className="store">
                <TabContent imgSrcTransferStore={this.props.imgSrcTransferApp}/>
            </div>
        );
    }
}

export default Store;