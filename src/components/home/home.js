import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import axios from 'axios';

import HotSaleHeader from './hotSaleHeader.js';
import ProductList from '../productContainer/productList'
import './home.css'
import '../productContainer/productContainer.css'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataHotSaleProduct: [],
      isReadMore: false
    }
    this.handleReadMoreProduct = this.handleReadMoreProduct.bind(this);
  }

  componentDidMount() {
    axios
    .get(process.env.PUBLIC_URL + '/data/productData/hotSale.json')
    .then(res => {
      this.setState({dataHotSaleProduct: res.data})
    })
    .catch(err => console.log(err))
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

    const btnReadMore = (
      <Button
        className='load-more-btn'
        fluid
        onClick={this.handleReadMoreProduct}
      >
        READ MORE
      </Button>
    )


    return (
      <Grid id='hot-products' textAlign='center'>
        <Grid.Column width='13'>
          <HotSaleHeader /> 

          <ProductList dataProducts={dataHotSaleProduct} />
          {isReadMore ? <ProductList dataProducts={dataHotSaleProduct} /> : ''}

          {!isReadMore ? btnReadMore : ''}
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home;