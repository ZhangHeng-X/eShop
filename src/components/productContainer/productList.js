import React from 'react';
import {Card} from 'semantic-ui-react'
import ProductItem from './productItem';
import axios from 'axios';
import PT from 'prop-types';

const propTypes = {
  dataProducts: PT.arrayOf(PT.object)
}

const ProductList = (props) => {

  const itemsProduct = props.dataProducts.map(function(item){
    return(
      <ProductItem
        id={item.id}
        category={item.category}
        type={item.type}
        name={item.name}
        price={item.price}
        imgProd={'/data/productImages/' + item.id + '/' + item.detail.color[0] + '.jpeg'}
        imgModel = {'/data/productImages/' + item.id + '/model.jpeg'}
      />
    )
  })

  return(
    <Card.Group id='product-list' centered itemsPerRow='4'>
      {itemsProduct}
    </Card.Group>
  )
}

ProductList.propTypes = propTypes;

export default ProductList;