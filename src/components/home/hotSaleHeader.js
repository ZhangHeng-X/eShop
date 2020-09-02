import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const HotSaleHeader = (props) => {

  return(
    <Header as='h1' className='hot-sale-header' textAlign='center' >
      <div>
        <Icon name='gift' />
        You might like
      </div>
    </Header>
  )
}

export default HotSaleHeader;