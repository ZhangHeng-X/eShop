import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Image} from 'semantic-ui-react';
import ProductImages from './productDetailImage';
import ProductHeader from './productDetailHeader';
import ProductDetailColor from './productDetailColor';
import ProductDetailSize from './productDetailSize';
import ProductDetailAddToCart from './productDetailAddToCart';
import axios from 'axios';

import './productDetail.css'

class ProductDetailPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedColor: '',
      selectedSize: '',
      dataProInfo: {id:"Loading",category:"",type:"",name:"Loading",price:{marketPrice:"",salePrice:"Loading"},detail:{color:['red','blue'],size:['','','','',''],des:""},quantity:"",images:{imgProduct:"",imgModel:"",imgDetail:""}},
    }
    this.handleSelectColor = this.handleSelectColor.bind(this);
    this.handleSelectSize = this.handleSelectSize.bind(this);
  }

  handleSelectColor(value){
    value = value.replace(/^[a-z]?/,function($0){
        return $0.toUpperCase();
      })
    this.setState({
      selectedColor: value
    })
  }

  handleSelectSize(value){
    this.setState({
      selectedSize: value.toUpperCase()
    })
  }

  componentDidMount(){
    const arrPath = this.props.location.pathname.substr(1).split('/');

    const pathCategory = '/data/productData/' + arrPath[0] + '/' + arrPath[1] + '.json';

    const idProduct = arrPath[2];

    axios
    .get(pathCategory)
    .then(res => {
      let dataTemp = {};
      res.data.forEach(function(item,index){
        if (item.id === idProduct) {
          dataTemp = JSON.parse(JSON.stringify(item));
        }
      })
      this.setState({
        dataProInfo: dataTemp
      })

    })
    .catch(err => console.log(err))
  }

  render(){

    const {
      handleSelectColor,
      handleSelectSize,
    } = this;

    const {
      selectedColor,
      selectedSize,
      dataProInfo,
    } = this.state;

    const proInfo = {
      id: dataProInfo.id*1,
      name: dataProInfo.name,
      salePrice: dataProInfo.price.salePrice,
      srcImg: dataProInfo.images.imgProduct,
      quantity: 1,
      color: selectedColor,
      size: selectedSize
    }

    return(
      <Grid textAlign='center'>
        <Grid.Column width={4}>
            <ProductImages img={proInfo.srcImg}/>
        </Grid.Column>
        <Grid.Column id="product-info" width={4} textAlign='left'>
            <ProductHeader
              name={dataProInfo.name}
              price={dataProInfo.price}
            />
            <ProductDetailColor
              dataColor={dataProInfo.detail.color}
              handleSelectColor={handleSelectColor}
            />
            <ProductDetailSize
              dataSize={dataProInfo.detail.size}
              handleSelectSize={handleSelectSize}
            />
            <ProductDetailAddToCart
              selectedSize={selectedSize}
              handleAddToCart={this.props.handleAddToCart}
              proInfo={proInfo}
            />
        </Grid.Column>
        </Grid>
    )
  }
}

export default withRouter(ProductDetailPage);