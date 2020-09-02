import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Item } from 'semantic-ui-react';
import OrderItem from '../cart/OrderItem';
import OrderBill from '../cart/OrderBill';
import PT from 'prop-types';

const PopupCart = (props) => {
    let {cart, 
        btn
    } = props;

    let valueTotal = 0;
    
    const itemsOrder = cart.map(item => {
        valueTotal += item.salePrice * item.quantity;
        return(
            <OrderItem key={item.id} {...item} />
        )
    })

    const cartWith = (
        <div className='popup-cart-with-product'>
            <Item.Group divided>
                {itemsOrder}
            </Item.Group>

            <OrderBill orderValue={valueTotal} />

            <Link className='checkout-btn' to='/cart'>CHECKOUT</Link>
        </div>
    )

    const cartWithout = (
        <div className='popup-cart-without-product'>Your cart is empty!</div>
    )

    return(
        <Popup trigger={btn} position='bottom center' hoverable>
            <Popup.Content>
                {cart.length ? cartWith : cartWithout}
            </Popup.Content>
        </Popup>
    )

}

PopupCart.propTypes = {
    cart: PT.array,
    btn: PT.element
}

export default PopupCart;