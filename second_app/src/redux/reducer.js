const initialState = { value: 24 };

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "INCREMENT": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case "RANDOM": {
      return {
        ...state,
        value: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;