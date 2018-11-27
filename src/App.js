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
    .get("https://sipss-api.online/")
    // .get("https://0.0.0.0:5001/camera")
    .then((value) => {
        alert('uyee berhasil hit ke API...')
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
