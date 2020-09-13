import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import PT from 'prop-types';

class ProductDetailColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorActive: ''
    }
    this.handleActiveColor = this.handleActiveColor.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.dataColor.length !== this.props.dataColor.length)
      this.setState({colorActive: nextProps.dataColor[0]})
  }

  handleActiveColor(color){
    this.setState({
      colorActive: color
    })
    this.props.handleSelectColor(color);
  }

  render(){
    const {
      handleActiveColor
    } = this;

    const {
      colorActive
    } = this.state;

    const {
      dataColor,
    } = this.props;

    const itemsColorBtn = dataColor.map(function(item,index){
      return(
        <div className={colorActive === item ?'selected':'unselected'}>
        <Button
          key={index}
          color={item}
          onClick={() => handleActiveColor(item)}
        ></Button>
        </div>
      )
    })

    return(
      <div class="product-detail-color">
        {colorActive} <br/>
        <Button.Group>
          {itemsColorBtn}
        </Button.Group>
      </div>
    )
  }
}

ProductDetailColor.propTypes = {
  dataColor: PT.array,
  handleSelectColor: PT.func
}
export default ProductDetailColor;