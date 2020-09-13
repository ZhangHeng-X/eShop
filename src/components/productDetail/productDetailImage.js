import React from 'react';
import { Image } from 'semantic-ui-react';

const ProductImgWrapper = (props) => (
  props.img ? (
    <div class='product-image-wrapper'>
      <Image src={props.img==='Loading/.jpeg' ? require('../../data/logo.jpg') : require('../../../public/data/productImages/' + props.img)} fluid  />
    </div>
  ) : (
    <div>
      <h2>Image not found.</h2>
    </div>
  )
)

export default ProductImgWrapper;