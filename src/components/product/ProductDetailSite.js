import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import ProductInfo from './ProductInfo';
import axios from 'axios';
import PT from 'prop-types';

const propTypes = {
  handleAddToCart: PT.func
}

class ProductDetailSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAvisory: [],
      dataComments: []
    }
  }
  componentDidMount() {
  }
  render(){
    return(
      <Grid as='section' textAlign='center'>
        <Route children={( { location } )=>{
          return(
            <ProductInfo
              location={location}
              handleAddToCart={this.props.handleAddToCart}
            />
          )
        }}/>
      </Grid>
    )
  }
}

ProductDetailSite.propTypes = propTypes;

export default ProductDetailSite;