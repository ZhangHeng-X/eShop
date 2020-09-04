import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Button } from 'semantic-ui-react';

const NewCustomer = () => (
  <div className='new-customer'>
    <Header as='h4'>
      <Header.Subheader>
        Become a member — don’t miss out on deals, offers, discounts and bonus vouchers.
      </Header.Subheader>
    </Header>
    <Button as={Link} className='join-us-btn' to='/register' fluid>
      CREATE ACCOUNT
    </Button>
  </div>
)

export default NewCustomer;