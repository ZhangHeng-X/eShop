import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// Footer Submenu Text Data 底部子菜单显示文本的数据
const dataFooterMenu = [
{
    menuHeader: 'SHOP',
    menuItems: [
    {
        link: 'Women',
        path: '/women'
    },
    {
        link: 'Men',
        path: '/men'
    },
    {
        link: 'Kids',
        path: '/kids'
    },
    {
        link: 'Home',
        path: '/'
    }
    ]
},
{
    menuHeader: 'COMPANY INFO',
    menuItems: [
        {
            link: 'About eShop',
            path: '/'
        },
    {
        link: 'Careers',
        path: '/'
    },
    {
        link: 'News',
        path: '/'
    },
    {
        link: 'Sustainability',
        path: '/'
    },
    {
        link: 'Investor',
        path: '/'
    }
    ]
},
{
    menuHeader: 'HELP',
    menuItems: [
    {
        link: 'Customer Service',
        path: '/'
    },
    {
        link: 'My account',
        path: '/'
    },
    {
        link: 'Find a Store',
        path: '/'
    },
    {
        link: 'Legal & Privacy',
        path: '/'
    },
    {
        link: 'Contact Us',
        path: '/'
    }
    ]
}
]



const FootMenu = (props) => {
let itemsSubMenu = dataFooterMenu.map(function(subMenu, index){
    return(
    <Grid.Column key={index}>
        <div>
            <h4 className='ft-submenu-header'>{subMenu.menuHeader}</h4>
            <ul className="ft-submenu-list">
            {
                subMenu.menuItems.map(function(item, i){
                    return(
                        <li className='ft-submenu-item' key={i}>
                            <Link className='ft-submenu-link' to={item.path}>{item.link}</Link>
                        </li>
                    )
            })}
            </ul>
        </div>
    </Grid.Column>
    )
})

let SubscribeMenu = () => (
    <Grid.Column >
    <h4 className='ft-submenu-header'>Become a member</h4>
    <p className='ft-subscribe-text'>Join now and get 15% off your next purchase.</p>
    <Link
        to='/register'
        className='ft-subscribe-btn'
    >
        SIGN UP
    </Link>
    </Grid.Column>
)

return(
    <div className="footer-menu">
        <Grid columns='four' divided>
        <Grid.Row>
            {itemsSubMenu}
            <SubscribeMenu/>
        </Grid.Row>
        </Grid>
    </div>
)
}

export default FootMenu;