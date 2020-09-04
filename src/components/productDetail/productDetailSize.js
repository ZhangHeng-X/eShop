import React from 'react';
import { Header, Button, Dropdown } from 'semantic-ui-react';
import PT from 'prop-types';

class ProductDetailSize extends React.Component {
  constructor(props) {
    super(props);
    this.handleSizeActive = this.handleSizeActive.bind(this);
  }

  handleSizeActive(e, data){
    this.props.handleSelectSize(data.value)
  }

  render(){
    const sizeOptions = [
      { key: 'XS', value: 'XS', text: 'XS' },
      { key: 'S', value: 'S', text: 'S' },
      { key: 'M', value: 'M', text: 'M' },
      { key: 'L', value: 'L', text: 'L' },
      { key: 'XL', value: 'XL', text: 'XL' },
      { key: 'XXL', value: 'XXL', text: 'XXL'}
    ]

    return(
      <Dropdown
        placeholder='Select size'
        fluid
        selection
        options={sizeOptions}
        onChange={this.handleSizeActive}
      />
    )
  }

}

ProductDetailSize.propTypes = {
  dataSize: PT.array,
  handleSelectSize: PT.func
}

export default ProductDetailSize;