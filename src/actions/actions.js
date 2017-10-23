// customers action generators
export var setCustomers = (customers) => {
  return {
    type: 'SET_CUSTOMERS',
    customers
  };
}

export var addCustomer = (customer) => {
  return {
    type: 'ADD_CUSTOMER',
    customer
  }
}

export var updateCustomer = (customer) => {
  return {
    type: 'UPDATE_CUSTOMER',
    customer
  }
}

// products action generators
export var setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    products
  };
}

export var addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}

export var updateProduct = (product) => {
  return {
    type: 'UPDATE_PRODUCT',
    product
  };
}


export var setCurrentCustomer = (customer) => {
  return {
    type: 'SET_CURRENT_CUSTOMER',
    customer
  }
}


//
// // base action
// () => {
//   return {
//     type: 'SET_CUSTOMERS',
//
//   };
// }
