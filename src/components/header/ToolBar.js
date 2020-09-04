import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import PopupLogin from './popupLogin';
import PopupFavorite from './popupFavorite'
import PopupCart from './popupCart';

const ToolBtn = (content,icon) => (
  <Button className="tool-btn" animated='fade' floated='right'>
    <Button.Content as='span' hidden>{content}</Button.Content>
    <Button.Content as='span' visible>
      <Icon name={icon}  />
    </Button.Content>
  </Button>
)

const ToolBar = (props) => {

  return(
    <Menu.Menu as='ul'>
      <Menu.Item>
        <PopupLogin btn={ToolBtn('Sign In', 'user')} as='li' />
      </Menu.Item>

      <Menu.Item>
        <PopupFavorite btn={ToolBtn('Favorite', 'heart')} as='li' />
      </Menu.Item>

      <Menu.Item>
        <PopupCart btn={ToolBtn('Cart', 'cart')} cart={props.cart} handleChangeItemQuantity={props.handleChangeItemQuantity} as='li' />
      </Menu.Item>
    </Menu.Menu>
  )
}

export default ToolBar;