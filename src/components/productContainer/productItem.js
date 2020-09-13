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

  componentWillReceiveProps(nextProps) {
    if (nextProps.imgProd === this.props.imgProd) return;
    axios
    .get(
      nextProps.imgProd,
      { responseType: 'arraybuffer' },
    )
    .then(response => {
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      this.setState({ imgProd: "data:;base64," + base64 });
    });

    axios
    .get(
      nextProps.imgModel,
      { responseType: 'arraybuffer' },
    )
    .then(response => {
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      this.setState({ imgModel: "data:;base64," + base64 });
    });
  }

  componentDidUpdate() {
    axios
    .get(
      this.props.imgProd,
      { responseType: 'arraybuffer' },
    )
    .then(response => {
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      this.setState({ imgProd: "data:;base64," + base64 });
    });

    axios
    .get(
      this.props.imgModel,
      { responseType: 'arraybuffer' },
    )
    .then(response => {
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      this.setState({ imgModel: "data:;base64," + base64 });
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
    }
  } = this.props;


  return(
    <Card className='product-info'>
      
      <Link to={`/${category}/${type}/${id}`} >
        <Image 
            className='pro-images'
            src={this.state.hovered ? this.state.imgModel : this.state.imgProd} 
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