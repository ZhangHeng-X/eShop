import React, { Component } from 'react';
import { Grid, Button, Card } from 'semantic-ui-react';
import ShowcaseHeader from '../header/ShowcaseHeader.js';
import ProductItem from '../main/ProductItem.js';
import axios from 'axios';
import hotSaleData from '../../data/productData/hotSale.json'
import '../product/product.css'

class HomeProductSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataHotSaleProduct: hotSaleData,
      isReadMore: false
    }
    this.handleReadMoreProduct = this.handleReadMoreProduct.bind(this);
  }

  componentDidMount() {
      this.setState({dataHotSaleProduct: hotSaleData});
  }

  handleReadMoreProduct(){
    this.setState({
      isReadMore: true
    })
  }

  render() {

    const {
      isReadMore,
      dataHotSaleProduct
    } = this.state;

    let itemsProductCard = dataHotSaleProduct.map(function(item){
      return(
        <ProductItem
          key={item.id}
          {...item}
        />
      )
    })

    const btnReadMore = (
      <Button
        className='load-more-btn'
        fluid
        onClick={this.handleReadMoreProduct}
      >
        READ MORE
      </Button>
    )

    let controllerReadMore = null ,itemsReadMoreProduct = null;

    return (
      <Grid id='hot-products' textAlign='center'>
        <Grid.Column width={13}>
          <ShowcaseHeader
            headerMain='FEATURE PRODUCTS'
            headerSub='Best Collection fo You'
            iconHeader='gift'
          /> 
          <Card.Group id="product-list" itemsPerRow='6'>
            {itemsProductCard}
            {isReadMore?itemsProductCard:''}
          </Card.Group>
          {!isReadMore?btnReadMore:''}
        </Grid.Column>
      </Grid>
    )
  }
}

export default HomeProductSection;