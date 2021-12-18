export const loginUser = (props) => {
  return {
    type: "LOGIN",
    payload: props,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
