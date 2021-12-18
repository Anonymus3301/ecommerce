const initialState = {
  log: false,
  userName: "",
};

const updateState = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      state.log = true;
      state.userName = action.payload.userName;
      return state;
    }
    case "LOGOUT": {
      state.log = false;
      state.userName = "";
      return state;
    }
    default:
      return state;
  }
};

export default updateState;
