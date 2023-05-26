const INITIAL_SPAN_STATE = {
    expand: false,
  };
  
  export const spanReducer = (
    state = INITIAL_SPAN_STATE,
    action
  ) => {
    switch (action.type) {
      case "SET_EXPAND":
        return {
            expand: action.payload,
        };
      default:
        return state;
    }
  };
  