import counter from './counter';
import carts from './carts';
import news from './news';
import { combineReducers } from 'redux';

export default combineReducers({
    carts:carts,
    counter:counter,
    news:news
})