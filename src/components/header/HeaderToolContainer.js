import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import ToolBar from './ToolBar';
import SearchBar from './SearchBar';

class HeaderToolContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    }
  }

  render() {
    return (
      <div
        id='header-tool-wrap'
        ref='headerTool'
      >
        <Menu
          secondary
          className='header-tool'
        >
          <ToolBar cart={this.props.cart} />
          <SearchBar />
        </Menu>
      </div>
    )
  }
}

export default HeaderToolContainer;