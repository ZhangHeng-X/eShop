import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import PT from 'prop-types';

const dataWomenMenu = ['dresses','shoes','shorts','skirts'];

const dataMenMenu = ['jeans','shirts','shoes','shorts','t-shirts'];

const dataKidsMenu = ['boys','girls'];

const propTypes = {
  handleProList: PT.func
}

class CategorySidebar extends Component {

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    const pathname = this.props.location.pathname;

    let arrPathname = pathname.match(/\/[a-z\-]+/g);

    if (arrPathname.length === 2) {
      this.handleItemClick(arrPathname[1].substr(1))
      this.props.handleProList(pathname,arrPathname[1].substr(1))
    }
  }
  handleItemClick(item){
    //this.setState({activeItem: item});
  }


  render(){
    const { handleItemClick } = this;
    const { handleProList } = this.props;

    // Secondary Path of Current Page 当前页面二级路径
    const matchUrl = this.props.match.url;

    // Data of Sidebar Menu 侧边栏菜单数据
    let dataSidebarMenu = null;

    switch(matchUrl){
      case '/women':
        dataSidebarMenu = dataWomenMenu;
        break;
      case '/men':
        dataSidebarMenu = dataMenMenu;
        break;
      case '/kids':
        dataSidebarMenu = dataKidsMenu;
        break;
    }

    // 遍历侧边栏数据生成边栏菜单
    const itemsSidebarMenu = dataSidebarMenu.map(function(item,index){

      let itemMenu = item.replace(/\-/g,' ').replace(/^[a-z]?/,function($0){
        return $0.toUpperCase();
      });

      const link = (
        <Link
          to={ matchUrl + '/' +item }
        >{itemMenu}</Link>
      );

      return (
        <Menu.Item
          as={Link}
          key={index}
          onClick={() => {
            handleItemClick(item)
            handleProList(matchUrl + '/' +item,item)
          }}
          to={matchUrl + '/' + item}
          content={itemMenu}
        />
      )
    })

    return(
      <Menu as='ul' className='sb-menu' text vertical>
        <Menu.Item as='li' className='sb-menu-item' header >SHOP BY PRODUCT</Menu.Item>
          {itemsSidebarMenu}
      </Menu>
    )
  }
}

CategorySidebar.propTypes = propTypes;

export default CategorySidebar;