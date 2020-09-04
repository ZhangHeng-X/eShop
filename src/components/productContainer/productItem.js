import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import axios from 'axios';
import PT from 'prop-types'

let propTypes = {
  id: PT.string,
  category: PT.string,
  type: PT.string,
  name: PT.string,
  price: PT.objectOf(PT.number),
  images: PT.object
}

class ProductItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hovered: false
    }    
  }

  componentDidMount() {
    axios
      .get(
        this.props.images.imgProduct.substring(12),
        { responseType: 'arraybuffer' },
      )
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        this.setState({ imgUnhovered: "data:;base64," + base64 });
      });
    
    axios
      .get(
        '../../../src/data/productImages/men/jeans.jpg'.substring(12),
        { responseType: 'arraybuffer' },
      )
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        this.setState({ imgHovered: "data:;base64," + base64 });
      });
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
    },
    images
  } = this.props;

  return(
    <Card className='product-info'>
      
      <Link to={`/${category}/${type}/${id}`} >
        <Image 
            className='pro-images'
            src={this.state.hovered ? this.state.imgHovered : this.state.imgUnhovered} 
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