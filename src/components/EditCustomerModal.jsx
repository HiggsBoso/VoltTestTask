import React from 'react';
import { Button, Grid, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect  } from 'react-redux';

import { updateCustomer, setCurrentCustomer } from 'actions';

import TemplateModal from 'TemplateModal';
import CustomerModal from 'CustomerModal';

class EditCustomerModal extends React.Component {
  updateCustomer = (customer) => {
    let { dispatch } = this.props;
    dispatch(updateCustomer(customer));
  }
  render () {
    let { customers } = this.props;
    let currentCustomer = customers.find((customer) => {
      if (customer.id == this.props.match.params.customerId) {
        return true;
      } else {
        return false
      }
    });
    return (
      <TemplateModal title={'Edit Customer'} >
        <CustomerModal pathBack={'/customers'} onSubmit={this.updateCustomer} customer={currentCustomer}/>
      </TemplateModal>
    );
  }
}

export default connect(
  (state) => {
    return {
      customers: state.customers,
      currentCustomer: state.currentCustomer
    }
  }
)(EditCustomerModal);
