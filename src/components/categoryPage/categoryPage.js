import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import CategorySidebar from './categorySidebar';
import ProductContainer from '../productContainer/productContainer';

const CategoryBanner = (props) => {
    return(
  <Image src={require('../../../public/data/bannerImages'+ props.bannerPath +'Banner.jpeg')} fluid />
)}

class categoryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProducts: [],
      nameProList: ''
    }
    this.handleProList = this.handleProList.bind(this);
    this.handleGetData = this.handleGetData.bind(this);
  }

  componentDidMount() {
    const arrSitePath = this.props.location.pathname.match(/\/[a-z\-]*/g);
    if (arrSitePath[1]) {
      this.handleGetData(arrSitePath.join(''));
    }
  }

  handleGetData(path){
    let pathTemp = '/database.json'
    let dataAll = require('../../../public/data/productData' + pathTemp);
    let category = path.split('/')[1];
    let type = path.split('/')[2];
    let dataProducts = [] 
    dataAll.forEach(item => {
      if (item.category === category && item.type === type) dataProducts.push(item)
    });
    this.setState({dataProducts: dataProducts});
  }

  handleProList(path,nameProList){
    this.handleGetData(path);
    this.setState({nameProList:nameProList.toUpperCase()})
  }

  render() {

    const {
      handleProList
    } = this;

    const {
      dataProducts,
      nameProList
    } = this.state;

    const currentPath = this.props.match.url;

    return(
      <Grid id='main-wrap' textAlign='center'>
        <Grid.Column as='aside' width={3} textAlign='left'>
          <Route
            children={({ match, location }) => {
              return(
                <CategorySidebar match={match} location={location} handleProList={handleProList}/>
              )
            }}
          />
        </Grid.Column>
        <Grid.Column as='section' width={10}>
          <Switch>
            <Route
              exact
              path={currentPath + '/:id' }
              children={({ match, location }) => {
                return(
                  <ProductContainer
                    location={location}
                    dataProducts={dataProducts}
                    showcaseHeader={nameProList}
                  />
                )
              }}
            />
            <Route
              exact
              path={currentPath}
              children={() => {
                return(
                  <CategoryBanner bannerPath={currentPath}/>
                )
              }}/>
          </Switch>
        </Grid.Column>
      </Grid>
    )
  }
}

export default categoryPage;