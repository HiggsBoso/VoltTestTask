import React from 'react';
import { Button, Grid, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect  } from 'react-redux';

import { updateProduct } from 'actions';
import TemplateModal from 'TemplateModal';
import ProductModal from 'ProductModal';

class EditProductModal extends React.Component {
  updateProduct = (product) => {
    let { dispatch } = this.props;
    dispatch(updateProduct(product));
  }
  render () {
    let { products } = this.props;
    let currentProduct = products.find((product) => {
      if (product.id == this.props.match.params.productId) {
        return true;
      } else {
        return false
      }
    });
    return (
        <TemplateModal title={'Edit Product'}>
          <ProductModal pathBack={'/products'} onSubmit={this.updateProduct} product={currentProduct}/>
        </TemplateModal>
      );
  }
}

export default connect(
  (state) => {
    return {
      products: state.products
    }
  }
)(EditProductModal);
