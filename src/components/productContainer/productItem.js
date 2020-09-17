import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import PT from 'prop-types'

let propTypes = {
  id: PT.string,
  category: PT.string,
  type: PT.string,
  name: PT.string,
  price: PT.objectOf(PT.number),
  imgProd: PT.string,
  imgModel: PT.string
}

class ProductItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    }    
  }



  render(){
    
  let {
    id,
    category,
    type,
    name,
    price:{
      marketPrice,
      salePrice
    }
  } = this.props;

  const imgProd = require('../../../public' + this.props.imgProd);
  const imgModel = require('../../../public' + this.props.imgModel);

  return(
    <Card className='product-info'>
      
      <Link to={`/${category}/${type}/${id}`} >
        <Image 
            className='pro-images'
            src={this.state.hovered ? imgModel : imgProd} 
            onMouseOut={() => this.setState({hovered: false})}
            onMouseOver={() => this.setState({hovered: true})}
            fluid />
      </Link>
      
      <Card.Content className='pro-info'>
        <Card.Header as='h4'>
          <Link to={`/${category}/${type}/${id}`}>
            {name}
          </Link>
        </Card.Header>
        <Card.Meta>
          <span className='market-price'>
            ${marketPrice}
          </span>
          <span className='sale-price'>
            ${salePrice}
          </span>
        </Card.Meta>
      </Card.Content>
      
      <Card.Content extra className='pro-tool'>
        <a className='add-wishlist'>
          <Icon name='heart' />
          Add Wishlist
        </a>
        <Link to={`/${category}/${type}/${id}`} className='add-cart'>
          <Icon name='shop' />
          Add Cart
        </Link>
      </Card.Content>
      
    </Card>
  )
}
}

ProductItem.propTypes = propTypes;

export default ProductItem;