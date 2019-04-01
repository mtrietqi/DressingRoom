
import React, { Component } from 'react';

import Button from './Button/Button'
import ButtonArray from '../Data/ButtonArray'
class Btngroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ButtonArray: ButtonArray
        }
    }

    render() {
        let elmButton = this.state.ButtonArray.map((buttonItem, index) => {
            return <Button buttonItem={buttonItem} key={index} />
        })
        
        return (
            <ul className="nav nav-pills nav-fill"  id="myTab" role="tablist">
                {elmButton}
            </ul>
        );
    }
}

export default Btngroup;