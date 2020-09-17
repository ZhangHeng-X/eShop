import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import LoginForm from '../user/loginForm';
import NewCustomer from '../user/newCustomer';
import OrderBar from './orderBar';

const SigninStep = (props) => (
  <Grid.Row id='checkout'>
    <Grid.Column className='controller-header' width='4' textAlign='left'>
      <Header as='h2' content='RETURNING CUSTOMER' dividing />
      <LoginForm isLogin={props.isLogin} handleLogin={props.handleLogin}/>
    </Grid.Column>
    <Grid.Column className='controller-header' width='2' textAlign='left'>
      <Header as='h2' content='NEW CUSTOMER' dividing />
      <NewCustomer/>
    </Grid.Column>
  </Grid.Row>
);

export default SigninStep;