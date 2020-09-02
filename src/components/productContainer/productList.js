import React from 'react';
import {Card} from 'semantic-ui-react'
import ProductItem from './productItem';
import PT from 'prop-types';

const propTypes = {
  dataProducts: PT.arrayOf(PT.object)
}

const ProductList = (props) => {

  const itemsProduct = props.dataProducts.map(function(item){
    return(
      <ProductItem
        key={item.id}
        id={item.id}
        category={item.category}
        type={item.type}
        name={item.name}
        price={item.price}
        images={item.images}
      />
    )
  })

  return(
    <Card.Group id='product-list' centered>
      {itemsProduct}
    </Card.Group>
  )
}

ProductList.propTypes = propTypes;

export default ProductList;