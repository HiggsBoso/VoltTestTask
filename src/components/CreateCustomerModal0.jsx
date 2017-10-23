import React from 'react';
import { Button, Grid, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect  } from 'react-redux';

import { addCustomer } from 'actions';

import TemplateModal from 'TemplateModal';
import CustomerModal from 'CustomerModal';

class CustomerCreateModal extends React.Component {
  createCustomer = (customer) => {
    let { dispatch } = this.props;
    dispatch(addCustomer(customer));
  }
  render () {
    return (
      <TemplateModal title={'Create Product'} >
        <CustomerModal pathBack={'/customers'} onSubmit={this.createCustomer}/>
      </TemplateModal>
    );
  }
}

export default connect()(CustomerCreateModal);
