import React from 'react';
import { Route } from 'react-router-dom';
import ToolBar from './toolBar'
import SearchBar from './searchBar'
import HeaderBrand from './headerBrand';
import HeaderNavigation from './headerNavigation.js';
import HeaderDivider from './headerDivider';
import './header.css'
import PT from 'prop-types'
import { Menu } from 'semantic-ui-react';

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
      <div id='header-tool-wrap'>
        <Menu secondary className='header-tool'>
          <ToolBar cart={cart} />
          <SearchBar />
        </Menu>
      </div>

      <HeaderBrand/>
      
      <Route component={HeaderNavigation}/>

      {pathname !== '/'?  <Route component={HeaderDivider}/> : '' }
    </header>
  )
}

Header.propTypes = propTypes;

export default Header;