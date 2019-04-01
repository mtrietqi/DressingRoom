import React, { Component } from 'react';
import './App.css';

import Contain from './Model/Contain'
import Btngroup from './Store/Btngroup'
import Store from './Store/Store'
import chosenItems from './Data/chosenItem'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      chosenItems: chosenItems.ListOfItems
    }
  }
  
  imgSrcTransferApp=(item)=>{
    this.setState({
      chosenItems: [...this.state.chosenItems, item]
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <h1 className="text-center text-info">Dressing Room</h1>
          <div className="row">
            <div className="col-md-8 col-lg-8">
              <Btngroup />
              <Store
                imgSrcTransferApp={this.imgSrcTransferApp.bind(this)}
              />
            </div>
            <div className="col-md-4 col-lg-4">
              <Contain
                chosenItems={this.state.chosenItems}
              />
            
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
