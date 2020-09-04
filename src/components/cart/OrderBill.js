import React from 'react';
import { List, Divider } from 'semantic-ui-react';
import PT from 'prop-types';

const propTypes = {
  orderValue: PT.number
}

const OrderBill = (props) => (
  <List className='order-bill'>
    <List.Item as='li'><span>ORDER VALUE:</span><span>${props.orderValue.toFixed(2)}</span></List.Item>
    <List.Item as='li'><span>DELIVERY</span><span>$10.00</span></List.Item>
    <List.Item as='li'><Divider/></List.Item>
    <List.Item as='li'><span>TOTAL</span><span>${(props.orderValue+10).toFixed(2)}</span></List.Item>
  </List>
)

OrderBill.propTypes = propTypes;

export default OrderBill;