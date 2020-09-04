import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

// Publick 公用组件
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

// Home 首页组件
import Home from '../components/home/home';

// Classification 分类页组件
import CategoryPage from '../components/categoryPage/categoryPage';

// Search 搜索页组件
import SearchPage from '../components/searchPage/searchPage';

// Detail 商品详情页组件
import ProductDetailPage from '../components/productDetail/productDetailPage';

// Cart 购物车组件
import CartSite from '../components/cart/CartSite.js';

// Register & Login 登录注册组件
import LoginSite from '../components/user/LoginSite';
import RegisterSite from '../components/user/RegisterSite';

class RouteApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      cart: []
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleChangeItemQuantity = this.handleChangeItemQuantity.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleAddToCart(product){
    let cart = this.state.cart;
    console.log(cart);
    console.log(product);
    const idx = cart.findIndex(x => x.id === product.id && x.color === product.color && x.size === product.size);
    if (idx > -1){
      cart[idx].quantity += 1;
    }else{
      cart.push(product)
    }
    this.setState({cart: cart})
    console.log(cart)
  }

  handleChangeItemQuantity(id, color, size, newQuantity){
    let cart = this.state.cart;
    console.log(cart)
    const idx = cart.findIndex(x => x.id === id && x.color === color && x.size === size);
    cart[idx].quantity = newQuantity;
    if (newQuantity === 0) cart.splice(idx, 1)
    this.setState({cart: cart});
  }

  handleLogin(email,password){
    let dataUser = new Array;

    const _this = this;

    axios
    .get('/data/userdata.json')
    .then(res=> {
      res.data.forEach(function(item,index){
        if(item.email !== email)return;
        if(item.password !== password)return;
        _this.setState({isLogin:true});
      })
    })
    .catch(err=>console.log(err))
  }

  render(){

    const {
      handleAddToCart,
      handleLogin,
      handleChangeItemQuantity
    } = this;

    const {
      cart,
      isLogin
    } = this.state;

    return(
      <Router>
        <div id='body'>
          <Route render={(props)=>(
            <Header {...props} cart={cart} handleChangeItemQuantity={handleChangeItemQuantity} />
          )} />
          <Switch>
            <Redirect from='/eShop' to='/' />
            <Route exact path='/' component={Home} />
            <Route path='/search' component={SearchPage} />
            <Route path='/cart' children={() => {
              return (<CartSite isLogin={isLogin} cart={cart} handleLogin={handleLogin} handleChangeItemQuantity={handleChangeItemQuantity} />)
            }} />
            <Route path='/login' children={() => {
              return ( <LoginSite isLogin={isLogin} handleLogin={handleLogin} />)
            }} />
            <Route path='/register' component={RegisterSite} />
            <Route path='/:category/:type/:id' children={() => <ProductDetailPage handleAddToCart={handleAddToCart} />} />
            <Route path='/:category' component={CategoryPage} />
            <Redirect from='*' to='/'  />
          </Switch>

          <Route component={Footer}/>
        </div>
      </Router>
    )
  }
}

export default RouteApp;