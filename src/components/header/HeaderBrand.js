import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import logo from '../../data/img/logo.jpg'


const HeaderBrand = () => (
  <Header as='hgroup' id="header-brand" icon textAlign='center'>
      <Header.Content as='h1' className='brand-logo'>
        <Link to='/'>
          <img src={logo} alt='eShop' width='25%'/>
        </Link>
      </Header.Content>
      <Header.Content as='h4' className='brand-des'>
        eShop, Just buy it.
      </Header.Content>
  </Header>
)

export default HeaderBrand;