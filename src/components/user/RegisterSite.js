import React, { Component } from 'react';
import { Grid, Header, Form, Button, Checkbox, Popup } from 'semantic-ui-react';


class RegisterSite extends Component {

  render(){
    return(
      <Grid id='join-container' textAlign='center'>
        <Grid.Column width={4} textAlign='left'>
          <Header as='h3'>
            JOIN US
            <Header.Subheader>
              Enter following details here.
            </Header.Subheader>
          </Header>
          <Form>
            <Form.Field
              label='Email'
              control='input'
              placeholder='Email'
            />
            <Form.Field
              label='Password'
              control='input'
              type='password'
              placeholder='Password'
            />
            <Form.Field
              label='Repeat Password'
              control='input'
              type='password'
              placeholder='Repeat Password'
            />
            <Form.Field
              control={Checkbox}
              label={{ children: 'Yes, I agree to H&M Membership Terms and conditions.' }}
            />
            <Popup
            trigger={
              <Button type='submit' color='black'>BECOME A MEMBER</Button>
            }
            content='Under development...'
          >
          </Popup>
            
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default RegisterSite;