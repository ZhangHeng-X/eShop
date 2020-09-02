import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Button, Icon } from 'semantic-ui-react';
import PT from 'prop-types';

const PopupLogin = (props) => (
  <Popup trigger={props.btn} position='bottom center' hoverable>
    <Popup.Content>
      <Button className='click-to-sign-in'>
        <Icon name='child' />
        <Link to='/login'>Click Here to Sign in</Link>
      </Button>
    </Popup.Content>    
  </Popup>
)

PopupLogin.propTypes = {
  btn: PT.element
}

export default PopupLogin;