import React from 'react';
import { Grid, Header, Item } from 'semantic-ui-react';

import OrderItem from './orderItem';
import OrderBill from './orderBill';

const OrderBar = (props) => {
  const {
    cart,
    handleChangeItemQuantity
  } = props;

  let valueTotal = 0;

  const itemsOrder = cart.map(function(item,index){
    valueTotal += item.quantity * item.salePrice;
    return(
      <OrderItem  {...item} handleChangeItemQuantity={handleChangeItemQuantity} />
    )
  });

  return(
    <Grid.Column id='order-bar' as='aside' width='6' textAlign='left'>
      <Header as='h2' className='order-header' content='YOUR ORDER' dividing/>
      <Item.Group divided>
        {itemsOrder}
      </Item.Group>
      <OrderBill orderValue={valueTotal}/>
    </Grid.Column>
  )
}

export default OrderBar;