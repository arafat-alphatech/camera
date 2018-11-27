import React, {Component} from 'react';
import { Camera } from 'react-cam';

class ContainerComponent extends Component{

  capture = (imgSrc) => {
    alert('oke')
    console.log(imgSrc)
  }

  render(){
    return (
      //Recommended resolution for web cams and phone cameras 1920 x 1440
      <Camera
        showFocus={false} //show/hide focus box, basically useless...
        front={false} // true: front camera, false: rear camera
        capture={this.capture}
        width={460} 
        height={640}
        btnColor="#000"
        />
    )
  }
}

export default ContainerComponent;
