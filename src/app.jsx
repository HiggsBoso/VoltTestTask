import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Customers from 'Customers';
import CreateCustomerModal from 'CreateCustomerModal';
import CreateProductModal from 'CreateProductModal';
import EditCustomerModal from 'EditCustomerModal';
import EditProductModal from 'EditProductModal'
import Main from 'Main';
import Navigation from 'Navigation';
import Products from 'Products';

import 'react-select/dist/react-select.css';

let store = require('configureStore').configure();

store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);
});

render(
  <Provider store={store}>
    <BrowserRouter>
      <Main>
        <Route exact path="/" component={Customers}></Route>
        <Route path="/customers" component={Customers}></Route>

        <Route path="/customers/create" component={CreateCustomerModal}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/products/create" component={CreateProductModal}></Route>

        <Route path="/customers/edit/:customerId" component={EditCustomerModal}></Route>
        <Route path="/products/edit/:productId" component={EditProductModal}></Route>
      </Main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-root'));
