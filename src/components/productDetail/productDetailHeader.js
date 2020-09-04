import React from 'react';
import { Header } from 'semantic-ui-react';

const ProductHeader = (props) => {
  const {
    name,
    price:{
      salePrice,
      marketPrice
    }
  } = props;

  return(
    <hgroup>
      <Header as='h2' content={name}/>
      <Header as='h2'>
        ${salePrice}  <span className='market-price'>${marketPrice}</span>
      </Header>
    </hgroup>
  )
};

export default ProductHeader;