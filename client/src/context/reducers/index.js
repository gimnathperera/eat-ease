import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import allUserReducer from "./allUserReducer";
import cartReducer from "./cartReducer";
import displayCartReducer from "./displayCartReducer";
import ordersReducer from "./ordersReducer";

const myReducers = combineReducers({
  user: userReducer,
  alert: alertReducer,
  products: productReducer,
  allUsers: allUserReducer,
  cart: cartReducer,
  isCart: displayCartReducer,
  orders: ordersReducer,
});

export default myReducers;
