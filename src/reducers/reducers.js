const uuid = require('node-uuid');

export var customersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CUSTOMERS':
      return [
        ...action.customers
      ];
    case 'ADD_CUSTOMER':
      return [
        ...state,
        {
          ...action.customer,
          id: uuid()
        }
      ];
    case 'UPDATE_CUSTOMER':
      return state.map((customer) => {
        console.log(customer.id);
        console.log(action.customer);
        if (customer.id == action.customer.id) {
          let updatedCustomer = {
            ...action.customer
          };
          return updatedCustomer;
        } else {
          return customer;
        }
      });
    default:
      return state;
  }
}

export var productsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return [
        ...action.products
      ];
      case 'ADD_PRODUCT':
        return [
          ...state,
          {
            ...action.product,
            id: uuid()
          }
        ];
      case 'UPDATE_PRODUCT':
        return state.map((product) => {
          if (product.id === action.product.id) {
            let updatedProduct = {
              ...action.product
            };
            return updatedProduct;
          } else {
            return product;
          }
        });
    default:
      return state;
  }
}

export var currentCustomerReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CUSTOMER':
      return {
        ...action.customer
      };
    default:
      return state;
  }
}


// Base reducer
// (state = [], action) => {
//   switch (action.type) {
//
//   }
// }
