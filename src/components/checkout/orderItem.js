import React from 'react';
import { Item, Dropdown } from 'semantic-ui-react';
import PT from 'prop-types';

const propTypes = {
  id: PT.number,
  name: PT.string,
  marketPrice: PT.number,
  salePrice: PT.number,
  srcImg: PT.string,
  color: PT.string,
  size: PT.string,
  quantity: PT.number
}

const OrderItem = (props) => {
  const {
    id,
    name,
    salePrice,
    srcImg,
    color,
    size,
    quantity,
    handleChangeItemQuantity
  } = props;

  let quantityOptions = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10].map(
    x => ({text : x.toString(), value: x})
  );
  quantityOptions[0].text = '0(Remove)'

  const myFunc = (e, data) => {
    handleChangeItemQuantity(id, color, size, data.value)
  }

  return(
    <Item className='order-item'>
      <Item.Image src={require('../../../public/data/productImages/' + srcImg)} />
      <Item.Content className='item-content'>
        <Item.Header as='h3'>{name}</Item.Header> 
        <br/>
        <Item.Header as='h4'>${salePrice}</Item.Header>
        <Item.Meta>
          <span>Quantity: <Dropdown placeholder={quantity} options={quantityOptions} onChange={myFunc} /> </span>  <br/>
          <span>Color: {color}</span> <br/>
          <span>Size: {size}</span> <br/>
          <span>Subtotal: ${quantity*salePrice}</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  )
}

OrderItem.propTypes = propTypes;

export default OrderItem;