import React from 'react';
import { Image } from 'semantic-ui-react';

// 左侧大图
const ProductImages = (props) => (
    props.img ? (
  <div class="product-image-container">
    <Image src={require('../../../public'+props.img.substring(12))} fluid />
  </div>) : (
      <div>
          <h2>Image not found.</h2>
      </div>
  )
);

export default ProductImages;