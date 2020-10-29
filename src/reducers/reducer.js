const initialState = {
  todo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TODO":
      return { ...state, todo: action.payload };
    default:
      return state;
  }
};

export default reducer;
