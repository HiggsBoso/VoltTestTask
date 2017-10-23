import React from 'react';
import { Button, Grid, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addProduct } from 'actions';
import { connect  } from 'react-redux';

import TemplateModal from 'TemplateModal';
import ProductModal from 'ProductModal';

class CustomerCreateModal extends React.Component {
  createProduct = (product) => {
    let { dispatch } = this.props;
    dispatch(addProduct(product));
  }
  render () {
      return (
        <TemplateModal title={'Create Product'}>
          <ProductModal pathBack={'/products'} onSubmit={this.createProduct}/>
        </TemplateModal>
      );
  }
}

export default connect()(CustomerCreateModal);
