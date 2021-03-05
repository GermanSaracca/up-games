const themeReducer = (state = "light", action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};

export default themeReducer;
