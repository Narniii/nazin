import counterReducer from './counterReducer';
import basketReducer from './basketReducer';
import priceReducer from './priceReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer, // we'll use this name inside the useSelector() method like state.counter
    basket: basketReducer,
    price: priceReducer
});

export default rootReducer;
