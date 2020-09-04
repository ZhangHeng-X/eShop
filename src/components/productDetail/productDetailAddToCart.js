import React from 'react';
import { Button, Icon, Popup } from 'semantic-ui-react';
import PT from 'prop-types';

const ProductDetailAddToCart = (props) => {

  let {
    proInfo,
    selectedSize,
    handleAddToCart,
  } = props;

  const btnAddToCart = (
    <Button as='button'  className='add-to-cart' icon onClick={()=>{
      if (selectedSize !== '') handleAddToCart(proInfo);
    }}>
      <Icon name='cart' />
      ADD TO CART
    </Button>
  )

  return(
    <div className="product-detail">
      <Popup
        trigger={btnAddToCart}
        content={selectedSize !== '' ? 'Successfully added to the shopping cart!':'Chooose size first.'}
        on='click'
        
        inverted
      />
    </div>
  )
}

ProductDetailAddToCart.propTypes =  {
  proInfo: PT.object,
  selectedSize: PT.bool,
  handleAddToCart: PT.func
}

export default ProductDetailAddToCart;