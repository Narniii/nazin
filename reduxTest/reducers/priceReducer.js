import { ADD_PRICE, MIN_PRICE } from "../actions/marketActions";

const priceReducer = (state = { totalPrice: 0 }, action) => {
    switch (action.type) {
        case ADD_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload,
            };
            case MIN_PRICE:
                return {
                    ...state,
                    totalPrice: state.totalPrice - action.payload,
                };
            default:
            return state;
    }
}
export default priceReducer;
