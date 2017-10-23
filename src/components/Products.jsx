import React from 'react';
import { connect } from 'react-redux';

import BackendAPI from 'BackendAPI';
import TemplateList from 'TemplateList';
import Product from 'Product';
import { setProducts } from 'actions';
import ListHeader from 'ListHeader';

class Products extends React.Component {
  componentWillMount() {
    // let { dispatch } = this.props;
    // BackendAPI.getProducts().then((products) => {
    //   dispatch(setProducts(products));
    // });
  }
  render () {
    return (
      <div>
        <ListHeader title={'Products'} path={'products/create'} />
        <TemplateList items={this.props.products} componentType={Product}/>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      products: state.products
    }
  }
)(Products);
