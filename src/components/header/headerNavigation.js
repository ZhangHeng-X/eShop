import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const dataHeaderMenu = ['men', 'ladies', 'kids'];

class HeaderNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }



  render() {

    const  activeItem  = this.props.location.pathname.substr(1);

    let listMenu = dataHeaderMenu.map(function(item,index){
      return(
        <Menu.Item
          key={index}
          name = {item}
          color='red'
          className="nav-item"
          active={activeItem === item} >
          <Link
            to={'/' + item}
            activeClassName="active"
            >
            {item.toUpperCase()}
          </Link>
        </Menu.Item>
      )
    })

    return (
      <Menu  secondary id="header-nav">
        {listMenu}
      </Menu>
    )
  }
}

export default HeaderNavigation;