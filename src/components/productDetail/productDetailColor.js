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

  componentDidMount(){
    const colorInitial = this.props.dataColor[0];
    this.setState({
      colorActive: colorInitial
    });
    this.props.handleSelectColor(colorInitial);
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
        <Button
          disabled={false}
          key={index}
          className={colorActive === item ?'selected':''}
          color={item}
          onClick={() => handleActiveColor(item)}
        ></Button>
      )
    })

    return(
      <div class="product-detail-color">
        {colorActive} <br/>
        <Button.Group size='small' >
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