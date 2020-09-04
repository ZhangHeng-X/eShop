import React from 'react';
import { Image } from 'semantic-ui-react';

// 左侧大图
class ProductImgWrapper extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    }
  }

  render(){
    return(
      this.props.img ? (
        <div class='product-image-wrapper'>
          <Image 
            src={this.state.hovered ? require('../../data/logo.jpg') : require('../../../public'+this.props.img.substring(12))} 
            onMouseOut={() => this.setState({hovered: false})}
            onMouseOver={() => this.setState({hovered: true})}
            fluid />
        </div>
      ) : (
        <div>
          <h2>Image not found.</h2>
        </div>
      )
    )
  }
}

export default ProductImgWrapper;