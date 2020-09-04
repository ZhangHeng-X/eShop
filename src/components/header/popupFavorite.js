import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Button, Icon } from 'semantic-ui-react';
import PT from 'prop-types';

const PopupFavorite = (props) => (
  <Popup trigger={props.btn} position='bottom center' hoverable>
    <Popup.Content>
      <div>This page is under development.</div>
    </Popup.Content>    
  </Popup>
)

PopupFavorite.propTypes = {
  btn: PT.element
}

export default PopupFavorite;