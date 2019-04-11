import { createStore,applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//1创建一个仓库
const store = createStore(reducers,applyMiddleware(thunk,logger));


export default store;