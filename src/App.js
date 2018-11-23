import React, { Component } from 'react';
import './App.css';
import Qrscanner from './Qrscanner'
import Camera from './Camera'
class App extends Component {

  state = {
    displayScanner: false
  }

  showScanner(){
    let mark = true
    if(this.state.displayScanner) {
      mark = false
    }
    this.setState({
      displayScanner: mark
    })
  }

  render() {
    return (
      <div className="App">
        {
         this.state.displayScanner ?  
          <div style={{width: 100}}>
              {/* <Qrscanner/> */}
              <Camera/>
              <hr/>
          </div>
          :
          ""
        }
        <button onClick={() => this.showScanner()}>click me </button>
      </div>
    );
  }
}

export default App;
