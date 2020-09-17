import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Item } from 'semantic-ui-react';
import OrderItem from '../checkout/orderItem';
import OrderBill from '../checkout/orderBill';
import PT from 'prop-types';

const PopupCart = (props) => {
    let {cart, 
        btn,
        handleChangeItemQuantity
    } = props;

    let valueTotal = 0;
    
    const itemsOrder = cart.map(item => {
        valueTotal += item.salePrice * item.quantity;
        return(
            <OrderItem key={item.id} {...item} handleChangeItemQuantity={handleChangeItemQuantity}/>
        )
    })

    const cartWith = (
        <div className='popup-cart'>
            <Item.Group divided>
                {itemsOrder}
            </Item.Group>

            <OrderBill orderValue={valueTotal} />

            <Link className='checkout-btn' to='/checkout'>CHECKOUT</Link>
        </div>
    )

    const cartWithout = (
        <div className='popup-cart-without-product'>
            <h3>Your cart is empty! </h3> 
        </div>
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