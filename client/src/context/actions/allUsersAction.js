export const setAllUserDetails = (data) => {
  return {
    type: "SET_ALL_USER",
    allUsers: data,
  };
};

export const getAllUserDetails = (data) => {
  return {
    type: "GET_ALL_USER",
  };
};
