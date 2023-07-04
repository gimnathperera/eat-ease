const displayCartReducer = (state = false, action) => {
  switch (action.type) {
    case "GET_CART_DISPLAY_STATE":
      return state;

    case "SET_CART_ON":
      return true;

    case "SET_CART_OFF":
      return false;

    default:
      return state;
  }
};

export default displayCartReducer;
