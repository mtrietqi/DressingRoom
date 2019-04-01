import React, { Component } from 'react';

import Item from './Item/Item'
import dressingRoom from '../../../Data/getData'
class TabPane extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: dressingRoom.ListOfItems,
        }
    }

    getTypeArr = (tabType) => {
        let tempArr = [];
        for (let item of this.state.room) {
            if (item.type === tabType) {
                tempArr = [...tempArr, item]
            }
        }
        return tempArr;
    }

    getElmItem = (tempArr) => {
        let elmItem = tempArr.map((item, index) => {
            return <Item key={index}
                item={item}
                // Callback function
                itemTransferImgSrc={this.props.imgSrcTransferTabContent}
            />;
        })
        return elmItem;
    }

    render() {
        let elmItem = null;
        let tempArr = null;
        // Kiểm tra điều kiện của Tab
        switch (this.props.buttonItem.tabName) {
            case 'tabTopClothes':
                tempArr = this.getTypeArr("topclothes");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabBotClothes':
                tempArr = this.getTypeArr("botclothes");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabShoes':
                tempArr = this.getTypeArr("shoes");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabHandBags':
                tempArr = this.getTypeArr("handbags");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabNecklaces':
                tempArr = this.getTypeArr("necklaces");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabHairStyle':
                tempArr = this.getTypeArr("hairstyle");
                elmItem = this.getElmItem(tempArr);
                break;
            case 'tabBackground':
                tempArr = this.getTypeArr("background");
                elmItem = this.getElmItem(tempArr);
                break;
            default:
                elmItem = <h1>Đây là thứ khác</h1>;
                break;
        }
        return (
            <div className="tab-pane" id={this.props.buttonItem.tabName}>
                <div className="row">
                    {elmItem}
                </div>

            </div>
        );
    }
}

export default TabPane;