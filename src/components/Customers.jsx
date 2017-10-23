import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setCustomers } from 'actions';
import Customer from 'Customer';
import BackendAPI from 'BackendAPI';
import TemplateList from 'TemplateList';
import ListHeader from 'ListHeader';

class Customers extends React.Component {
  componentWillMount() {
    let { dispatch, customers } = this.props;
    
    // BackendAPI.getCustomers().then((customers) => {
    //   dispatch(setCustomers(customers));
    // });
  }
  render () {
    let { customers } = this.props;
    return (
      <div>
        <ListHeader title={'Customers'} path={'customers/create'}/>
        <TemplateList items={customers} componentType={Customer} />
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      customers: state.customers
    };
  }
)(Customers);
