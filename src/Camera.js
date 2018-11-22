import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import axios from 'axios'
var base64Img = require('base64-img');
var Base64 = require('js-base64').Base64;
class App extends Component {

    state = {
        dataUri: ''
    }

    onTakePhoto (dataUri) {
        // Do stuff with the dataUri photo...
        // base64Img.img(dataUri, '', 'foto1', function(err, filepath) {});
        // Base64.decode(dataUri)
        this.setState({
            dataUri: dataUri
        })
        console.log(dataUri)
        const url = "http://localhost:5000/camera"

        const body = {
            dataUri: dataUri
        }
        axios
        .post(url, body)
        .then((response) => {
            console.log("Response signup: ", response)
            alert('berhasil')
        })
        .catch((err) => {
            console.log(err)
        })
    }
 
    render () {
        return (
        <div className="App">
            {/* <img src={this.state.dataUri} /> */}
            <Camera
            onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
            />
        </div>
        );
    }
}
 
export default App;