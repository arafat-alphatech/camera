import React, { Component } from 'react';
import './App.css';
import Qrscanner from './Qrscanner'
import Camera from './Camera'
import RearCamera from './RearCamera'
import axios from 'axios'

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

  uye = () => {
    // alert("hhh")
    axios
    .get("https://172.11.112.113:5001/camera")
    // .get("https://0.0.0.0:5001/camera")
    .then((value) => {
        alert(value.data.score)
    })
    .catch((err) => {
        alert(err)
    })
  }

  render() {
    return (
      <div className="App">
        {
         this.state.displayScanner ?  
          <div style={{width: 200, textAlign: 'center'}}>
              {/* <Qrscanner/> */}
              <Camera/>
              {/* <RearCamera/> */}
              <hr/> 
          </div>
          :
          ""
        }
        <button onClick={() => this.showScanner()}>click me </button>
        <button onClick={() => this.uye()}>uyee</button>

      </div>
    );
  }
}

export default App;
