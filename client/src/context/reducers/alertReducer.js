const alertReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_SUCCESS":
      return action.alert;

    case "SET_WARNING":
      return action.alert;

    case "SET_DANGER":
      return action.alert;

    case "SET_INFO":
      return action.alert;

    case "SET_ALERT_NULL":
      return action.alert;

    default:
      return state;
  }
};

export default alertReducer;
