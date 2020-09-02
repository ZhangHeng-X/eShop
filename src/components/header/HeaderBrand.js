import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Image } from 'semantic-ui-react';
import logo from '../../data/logo.jpg'

const HeaderBrand = () => (
  <Header as='hgroup' id="header-brand" icon textAlign='center'>
      <Header.Content as='h1' className='brand-logo'>
        <Link to='/'>
          <img src={logo} alt='eShop' />
        </Link>
      </Header.Content>
  </Header>
)

export default HeaderBrand;