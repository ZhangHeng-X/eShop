import React from 'react';
import { Image } from 'semantic-ui-react';

const ProductImgWrapper = (props) =>{ 
  return(
  props.img ? (
    <div class='product-image-wrapper'>
      <Image src={require('../../../public/data/productImages/' + props.img)} fluid  />
    </div>
  ) : (
    <div>
      <h2>Image not found.</h2>
    </div>
  )
  )
}

export default ProductImgWrapper;