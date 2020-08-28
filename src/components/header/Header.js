import React from 'react';
import { Route } from 'react-router-dom';
//import HeaderToolWrapper from './HeaderToolWrapper';
import HeaderBrand from './HeaderBrand';
import HeaderNavigation from '../nav/HeaderMenu.js';
import HeaderDivider from './HeaderDivider';
import PT from 'prop-types'

const propTypes = {
  cart: PT.arrayOf(PT.object)
}

const Header = (props) => {
  let {
    location: {
      pathname
    },
    cart
  } = props;
  return(
    <header>
      <HeaderBrand/>
      <Route component={HeaderNavigation}/>
      {pathname !== '/'?  <Route component={HeaderDivider}/> : '' }
    </header>
  )
}

Header.propTypes = propTypes;

export default Header;