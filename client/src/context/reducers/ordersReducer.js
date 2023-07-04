const ordersReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return action.orders;

    case "GET_ORDERS":
      return state;

    default:
      return state;
  }
};

export default ordersReducer;
