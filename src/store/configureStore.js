var redux = require('redux');
import { customersReducer, productsReducer, currentCustomerReducer } from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    customers: customersReducer,
    products: productsReducer,
    currentCustomer: currentCustomerReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
