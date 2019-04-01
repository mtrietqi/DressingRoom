import React, { Component } from 'react';

class Item extends Component {
    imgSrcTransferItem = () => {
        this.props.itemTransferImgSrc(this.props.item);
    }
    render() {
        return (
            <div className="col-md-3">
                <img src={this.props.item.imgSrc_jpg} alt={this.props.item.name} />
                <h2 className="text-info">{this.props.item.name}</h2>
                <button className="btn btn-info" onClick={this.imgSrcTransferItem.bind(this)} >Thử đồ</button>
            </div>
        );
    }
}

export default Item;