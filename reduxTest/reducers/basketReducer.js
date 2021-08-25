import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/marketActions";

const basketReducer = (state = { basket: [] }, action) => {
  const index = state.basket.indexOf(action.payload);
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case DELETE_PRODUCT:
      if (state.basket.includes(action.payload)) {
        state.basket.splice(index, 1);
      }
      return {
        ...state,
        basket: [...state.basket],
      };
    default:
      return { ...state };
  }
};

export default basketReducer;
