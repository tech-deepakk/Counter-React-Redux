import { act } from "react-dom/test-utils";
import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
};

const counterReducer = (state = INITIAL_VALUE, action) => {
  let newState = state;
  if (action.type == "INCREMENT") {
    newState = { counter: state.counter + 1 };
  } else if (action.type == "DECREMENT") {
    newState = { counter: state.counter - 1 };
  }
  return newState;
};

const counterStore = createStore(counterReducer);
export default counterStore;
