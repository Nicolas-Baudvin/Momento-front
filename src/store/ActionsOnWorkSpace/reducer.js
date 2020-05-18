import { NEW_ACTION, TAB_ACTIONS } from "./actions";

const initialState = {
  actions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_ACTION: {
      return {
        ...state,
        actions: action.data
      };
    }
    case TAB_ACTIONS: {
      return {
        ...state,
        actions: action.data
      };
    }
    default: {
      return state;
    }
  }
};
