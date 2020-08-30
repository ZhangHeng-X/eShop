import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Header, Icon } from 'semantic-ui-react';

const HeaderDivider = (props) => {

  const secondary = props.location.pathname.match(/\/[a-z]+/)[0].substr(1);

  return(
    <Divider horizontal>
      <Header as='h4'>
        <Link to='/'>eShop.com</Link>
        {" / "}
        <span>{secondary}</span>
      </Header>
    </Divider>
  )
}

export default HeaderDivider;