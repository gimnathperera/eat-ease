const productReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return state;

    case "SET_ALL_PRODUCTS":
      return action.products;

    default:
      return state;
  }
};

export default productReducer;
